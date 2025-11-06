'use client'
import React from 'react'
import { toast } from 'react-hot-toast';

const DeleteButton = ({ id }: { id: string }) => {
    const [loading, setLoading] = React.useState(false);

    const onDelete = async () => {
        if (!confirm("Delete this package? This action cannot be undone.")) return;
        setLoading(true);
        try {
            const res = await fetch(`/api/packages/${id}`, { method: "DELETE" });
            if (!res.ok) {
                const json = await res.json().catch(() => ({}));
                toast.error(json?.error || "Failed to delete");
                throw new Error(json?.error || "Failed to delete");

            }
            // simple UX: reload listing to reflect deletion
            toast.success("Package deleted");
            window.location.reload();
        } catch (err: any) {
            console.error(err);
            toast.error(err.message || "Failed to delete");
            setLoading(false);
        }
    };

    return (
        <button
            onClick={onDelete}
            disabled={loading}
            className="px-3 py-1 rounded bg-red-600 text-white text-sm disabled:opacity-50"
        >
            {loading ? "Deleting..." : "Delete"}
        </button>
    );
}

export default DeleteButton
