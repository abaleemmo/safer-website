import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { useData, Announcement } from "@/context/DataContext"; // Import useData hook and Announcement interface

const AdminAnnouncements: React.FC = () => {
  const { announcements, addAnnouncement, updateAnnouncement, deleteAnnouncement } = useData(); // Use data from context
  const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [link, setLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const resetForm = () => {
    setTitle("");
    setSummary("");
    setLink("");
    setImageUrl("");
    setEditingAnnouncement(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const announcementData = {
      ...(title && { title }),
      ...(summary && { summary }),
      ...(link && { link }),
      ...(imageUrl && { imageUrl }),
    };

    if (editingAnnouncement) {
      updateAnnouncement({ ...editingAnnouncement, ...announcementData });
    } else {
      addAnnouncement(announcementData);
    }
    resetForm();
  };

  const handleEdit = (announcement: Announcement) => {
    setEditingAnnouncement(announcement);
    setTitle(announcement.title || "");
    setSummary(announcement.summary || "");
    setLink(announcement.link || "");
    setImageUrl(announcement.imageUrl || "");
  };

  const handleDelete = (id: string) => {
    deleteAnnouncement(id);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{editingAnnouncement ? "Edit Announcement" : "Add New Announcement"}</CardTitle>
          <CardDescription>Manage blog posts and announcements for the SAFER website. All fields are optional.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="announcement-title">Title (Optional)</Label>
              <Input
                id="announcement-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., City Council Approves Vision Zero"
              />
            </div>
            <div>
              <Label htmlFor="announcement-summary">Summary (Optional)</Label>
              <Textarea
                id="announcement-summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Brief summary of the announcement or blog post"
              />
            </div>
            <div>
              <Label htmlFor="announcement-link">Link (for full article/details) (Optional)</Label>
              <Input
                id="announcement-link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://example.com/full-article"
              />
            </div>
            <div>
              <Label htmlFor="announcement-image-url">Image URL (Optional)</Label>
              <Input
                id="announcement-image-url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
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
                {ann.imageUrl && (
                  <img src={ann.imageUrl} alt={ann.title || "Announcement image"} className="w-full h-32 object-cover rounded-md mb-4" />
                )}
                <CardTitle>{ann.title || "Untitled Announcement"}</CardTitle>
                <CardDescription>{format(ann.date, "PPP")}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between items-start">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{ann.summary || "No summary provided."}</p>
                {ann.link && (
                  <a href={ann.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mb-4">
                    Read More &rarr;
                  </a>
                )}
                <div className="flex space-x-2 self-end">
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