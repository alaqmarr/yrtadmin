"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createDestinationAction, getDestinationsAction } from "@/app/actions/destination.server";
import toast from "react-hot-toast";

interface DestinationSelectProps {
    value: string;
    onChange: (value: string) => void;
}

export function DestinationSelect({ value, onChange }: DestinationSelectProps) {
    const [open, setOpen] = React.useState(false);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [destinations, setDestinations] = React.useState<{ id: string; name: string }[]>([]);

    // Form State for "Quick Create"
    const [data, setData] = React.useState({
        name: "",
        country: "",
        title: "",
        description: ""
    });

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        // Fetch destinations on mount
        getDestinationsAction().then(setDestinations);
    }, []);

    const handleCreate = async () => {
        if (!data.name.trim()) return;
        setLoading(true);
        try {
            // Updated to pass object matching CreateDestinationInput
            const response = await createDestinationAction({
                name: data.name,
                country: data.country,
                title: data.title,
                description: data.description
            });

            if (response?.id) {
                const newDest = { id: response.id, name: data.name };
                setDestinations((prev) => [newDest, ...prev]);
                onChange(newDest.id);
                setDialogOpen(false);
                setData({ name: "", country: "", title: "", description: "" });
                toast.success("Destination created!");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to create destination");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                    >
                        {value
                            ? destinations.find((dest) => dest.id === value)?.name || "Select destination..."
                            : "Select destination..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                    <Command>
                        <CommandInput placeholder="Search destination..." />
                        <CommandList>
                            <CommandEmpty>
                                <div className="p-2 text-sm text-center">
                                    No destination found.
                                    <Button variant="link" size="sm" onClick={() => setDialogOpen(true)}>
                                        Create New
                                    </Button>
                                </div>
                            </CommandEmpty>
                            <CommandGroup>
                                {destinations.map((dest) => (
                                    <CommandItem
                                        key={dest.id}
                                        value={dest.name}
                                        onSelect={() => {
                                            onChange(dest.id);
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === dest.id ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {dest.name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <div className="p-1 border-t">
                                <Button variant="ghost" size="sm" className="w-full justify-start font-normal text-muted-foreground" onClick={() => setDialogOpen(true)}>
                                    <Plus className="mr-2 h-3 w-3" /> Create New
                                </Button>
                            </div>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Create New Destination</DialogTitle>
                        <DialogDescription>
                            Create a new destination record immediately.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                    placeholder="e.g. Paris"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="country">Country</Label>
                                <Input
                                    id="country"
                                    value={data.country}
                                    onChange={(e) => setData({ ...data, country: e.target.value })}
                                    placeholder="e.g. France"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="title">Title / Tagline</Label>
                            <Input
                                id="title"
                                value={data.title}
                                onChange={(e) => setData({ ...data, title: e.target.value })}
                                placeholder="e.g. The City of Lights"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="desc">Description</Label>
                            <Textarea
                                id="desc"
                                value={data.description}
                                onChange={(e) => setData({ ...data, description: e.target.value })}
                                placeholder="Short description..."
                                rows={3}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                        <Button onClick={handleCreate} disabled={loading || !data.name.trim()}>
                            {loading ? "Creating..." : "Create Destination"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
