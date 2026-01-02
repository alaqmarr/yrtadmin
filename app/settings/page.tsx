import { getAppConfig, updateAppConfig } from "@/app/actions/settings.server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";

export default async function SettingsPage() {
    const config = await getAppConfig();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">
                    Manage your application configuration.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={async (formData) => {
                        "use server"
                        await updateAppConfig(formData)
                    }} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="siteName">Site Name</Label>
                            <Input
                                id="siteName"
                                name="siteName"
                                defaultValue={config.siteName}
                                placeholder="Enter site name"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="contactEmail">Contact Email</Label>
                                <Input
                                    id="contactEmail"
                                    name="contactEmail"
                                    type="email"
                                    defaultValue={config.contactEmail}
                                    placeholder="admin@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contactPhone">Contact Phone</Label>
                                <Input
                                    id="contactPhone"
                                    name="contactPhone"
                                    defaultValue={config.contactPhone}
                                    placeholder="+1 234 567 890"
                                />
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <Button type="submit" className="gap-2">
                                <Save className="w-4 h-4" />
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
