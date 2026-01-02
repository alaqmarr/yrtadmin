"use client";

import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import toast from "react-hot-toast";

interface DeleteButtonProps {
    id: string;
    onDelete: (id: string, force?: boolean) => Promise<{ success: boolean; error?: string; dependencies?: string[] }>;
    itemType?: string; // e.g. "package", "blog", "destination"
    className?: string; // for custom styling
    iconOnly?: boolean;
}

export function DeleteButton({ id, onDelete, itemType = "item", className, iconOnly = true }: DeleteButtonProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [dependencies, setDependencies] = useState<string[]>([]);
    const [showDependencyAlert, setShowDependencyAlert] = useState(false);

    const handleDelete = async (force: boolean = false) => {
        setIsDeleting(true);
        try {
            const result = await onDelete(id, force);
            if (result.success) {
                toast.success(`${itemType} deleted successfully`);
                setShowDependencyAlert(false);
            } else if (result.error === "DependencyError" && result.dependencies) {
                setDependencies(result.dependencies);
                setShowDependencyAlert(true);
            } else {
                toast.error(result.error || "Failed to delete item");
            }
        } catch (error) {
            console.error(error);
            toast.error("An unexpected error occurred");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            <AlertDialog open={showDependencyAlert} onOpenChange={setShowDependencyAlert}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Cannot Delete {itemType}</AlertDialogTitle>
                        <AlertDialogDescription>
                            The following items depend on this {itemType}. You must delete them first to proceed.
                        </AlertDialogDescription>
                        <div className="bg-muted/50 p-4 rounded-md my-4 max-h-[200px] overflow-y-auto">
                            <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
                                {dependencies.map((dep, i) => (
                                    <li key={i}>{dep}</li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-sm text-red-500 font-medium">
                            Do you want to force delete this {itemType} and all listed dependencies?
                        </p>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => handleDelete(true)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            {isDeleting ? "Deleting All..." : "Delete All & Proceed"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors ${className}`}
                        disabled={isDeleting}
                    >
                        {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                        {!iconOnly && <span className="ml-2">Delete</span>}
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete this {itemType.toLowerCase()}.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(false)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                            {isDeleting ? "Deleting..." : "Delete"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
