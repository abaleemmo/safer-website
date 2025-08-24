import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";

interface Announcement {
  id: string;
  title: string;
  date: Date;
  summary: string;
  link: string; // For full blog post or external link
}

const AdminAnnouncements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [link, setLink] = useState("");

  const resetForm = () => {
    setTitle("");
    setSummary("");
    setLink("");
    setEditingAnnouncement(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !summary || !link) return;

    if (editingAnnouncement) {
      setAnnouncements(announcements.map((ann) =>
        ann.id === editingAnnouncement.id
          ? { ...ann, title, summary, link, date: new Date() }
          : ann
      ));
    } else {
      setAnnouncements([...announcements, { id: String(Date.now()), title, date: new Date(), summary, link }]);
    }
    resetForm();
  };

  const handleEdit = (announcement: Announcement) => {
    setEditingAnnouncement(announcement);
    setTitle(announcement.title);
    setSummary(announcement.summary);
    setLink(announcement.link);
  };

  const handleDelete = (id: string) => {
    setAnnouncements(announcements.filter((ann) => ann.id !== id));
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{editingAnnouncement ? "Edit Announcement" : "Add New Announcement"}</CardTitle>
          <CardDescription>Manage blog posts and announcements for the SAFER website.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="announcement-title">Title</Label>
              <Input
                id="announcement-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., City Council Approves Vision Zero"
                required
              />
            </div>
            <div>
              <Label htmlFor="announcement-summary">Summary</Label>
              <Textarea
                id="announcement-summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Brief summary of the announcement or blog post"
                required
              />
            </div>
            <div>
              <Label htmlFor="announcement-link">Link (for full article/details)</Label>
              <Input
                id="announcement-link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://example.com/full-article"
                required
              />
            </div>
            <div className="flex space-x-2">
              <Button type="submit" className="flex-grow">
                <PlusCircle className="mr-2 h-4 w-4" /> {editingAnnouncement ? "Update Announcement" : "Add Announcement"}
              </Button>
              {editingAnnouncement && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold mt-8">Current Announcements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {announcements.length === 0 ? (
          <p className="text-gray-500 col-span-full">No announcements added yet.</p>
        ) : (
          announcements.map((ann) => (
            <Card key={ann.id}>
              <CardHeader>
                <CardTitle>{ann.title}</CardTitle>
                <CardDescription>{format(ann.date, "PPP")}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{ann.summary}</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" onClick={() => handleEdit(ann)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => handleDelete(ann.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminAnnouncements;