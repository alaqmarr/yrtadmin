"use client";

import "@/components/css/editor.css";

import { useCallback, useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Heading from "@tiptap/extension-heading";
import { common, createLowlight } from "lowlight";
import toast from "react-hot-toast";
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Code,
    Quote,
    Image as ImageIcon,
    List,
    ListOrdered,
    Undo2,
    Redo2,
    Link as LinkIcon,
    Minus,
    Table as TableIcon,
} from "lucide-react";

const lowlight = createLowlight(common);

interface RichTextEditorProps {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
    className?: string;
}

export default function RichTextEditor({
    value,
    onChange,
    className = "",
}: RichTextEditorProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const uploadToCloudinary = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append(
            "upload_preset",
            process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!
        );

        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD}/image/upload`,
            {
                method: "POST",
                body: formData,
            }
        );

        const json = await res.json();
        return json.secure_url;
    };

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                codeBlock: false,
            }),
            Underline,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: { class: "text-sky-600 underline" },
            }),
            Image.configure({
                inline: false,
                allowBase64: false,
            }),
            Blockquote,
            CodeBlockLowlight.configure({ lowlight }),
            HorizontalRule,
            BulletList,
            OrderedList,
            Heading.configure({ levels: [1, 2, 3] }),
            Table.configure({ resizable: true }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        content: value || "<p></p>",
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    // Sync external value changes if needed (optional, can cause loops if not careful)
    // useEffect(() => {
    //   if (editor && value !== editor.getHTML()) {
    //     editor.commands.setContent(value);
    //   }
    // }, [value, editor]);

    const addImage = useCallback(() => {
        if (!editor) return;
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = async () => {
            const file = input.files?.[0];
            if (!file) return;
            try {
                toast.loading("Uploading image...");
                const url = await uploadToCloudinary(file);
                editor.chain().focus().setImage({ src: url }).run();
                toast.dismiss();
                toast.success("Image inserted");
            } catch {
                toast.dismiss();
                toast.error("Upload failed");
            }
        };
        input.click();
    }, [editor]);

    if (!mounted || !editor)
        return (
            <div className="border border-border p-3 rounded-xl bg-muted/50 text-muted-foreground text-sm">
                Loading editor...
            </div>
        );

    const buttonClass = (isActive: boolean) =>
        `px-2 py-1 border border-border rounded-md text-sm transition-all ${isActive
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-background hover:bg-muted text-foreground"
        }`;

    return (
        <div className={`space-y-3 ${className}`}>
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 border border-border p-2 rounded-xl bg-muted/30">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={buttonClass(editor.isActive("bold"))}
                >
                    <Bold className="w-4 h-4" />
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={buttonClass(editor.isActive("italic"))}
                >
                    <Italic className="w-4 h-4" />
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={buttonClass(editor.isActive("underline"))}
                >
                    <UnderlineIcon className="w-4 h-4" />
                </button>

                {/* Headings */}
                <div className="flex items-center gap-1">
                    {([1, 2, 3] as const).map((level) => (
                        <button
                            key={level}
                            type="button"
                            onClick={() =>
                                editor.chain().focus().toggleHeading({ level }).run()
                            }
                            className={`px-2 py-1 border rounded text-sm ${editor.isActive("heading", { level })
                                ? "bg-sky-600 text-white border-sky-600"
                                : "bg-white hover:bg-gray-100"
                                }`}
                        >
                            H{level}
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={buttonClass(editor.isActive("bulletList"))}
                >
                    <List className="w-4 h-4" />
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={buttonClass(editor.isActive("orderedList"))}
                >
                    <ListOrdered className="w-4 h-4" />
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={buttonClass(editor.isActive("blockquote"))}
                >
                    <Quote className="w-4 h-4" />
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={buttonClass(editor.isActive("codeBlock"))}
                >
                    <Code className="w-4 h-4" />
                </button>

                <button type="button" onClick={addImage} className={buttonClass(false)}>
                    <ImageIcon className="w-4 h-4" />
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    className={buttonClass(false)}
                >
                    <Minus className="w-4 h-4" />
                </button>

                <button
                    type="button"
                    onClick={() => {
                        const url = prompt("Enter link URL:");
                        if (url) editor.chain().focus().setLink({ href: url }).run();
                    }}
                    className={buttonClass(editor.isActive("link"))}
                >
                    <LinkIcon className="w-4 h-4" />
                </button>

                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().insertTable({ rows: 3, cols: 3 }).run()
                    }
                    className={buttonClass(false)}
                >
                    <TableIcon className="w-4 h-4" />
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().undo().run()}
                    className={buttonClass(false)}
                >
                    <Undo2 className="w-4 h-4" />
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().redo().run()}
                    className={buttonClass(false)}
                >
                    <Redo2 className="w-4 h-4" />
                </button>
            </div>

            {/* Editor */}
            <div className="border border-border rounded-xl p-4 bg-background min-h-[200px] max-h-[600px] overflow-y-auto shadow-sm">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}
