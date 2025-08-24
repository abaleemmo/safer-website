import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { useData, MeetingMinute } from "@/context/DataContext"; // Import useData hook and MeetingMinute interface

const AdminMeetingMinutes: React.FC = () => {
  const { meetingMinutes, addMeetingMinute, updateMeetingMinute, deleteMeetingMinute } = useData(); // Use data from context
  const [editingMinute, setEditingMinute] = useState<MeetingMinute | null>(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [link, setLink] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate(undefined);
    setLink("");
    setEditingMinute(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !link) return;

    if (editingMinute) {
      updateMeetingMinute({ ...editingMinute, title, date, link });
    } else {
      addMeetingMinute({ title, date, link });
    }
    resetForm();
  };

  const handleEdit = (minute: MeetingMinute) => {
    setEditingMinute(minute);
    setTitle(minute.title);
    setDate(minute.date);
    setLink(minute.link);
  };

  const handleDelete = (id: string) => {
    deleteMeetingMinute(id);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{editingMinute ? "Edit Meeting Minute" : "Add New Meeting Minute"}</CardTitle>
          <CardDescription>Upload and manage official meeting documents.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="minute-title">Document Title</Label>
              <Input
                id="minute-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Task Force Meeting Minutes - September 2024"
                required
              />
            </div>
            <div>
              <Label htmlFor="minute-date">Date</Label>
              <Input
                id="minute-date"
                type="date"
                value={date ? format(date, "yyyy-MM-dd") : ""}
                onChange={(e) => setDate(new Date(e.target.value))}
                required
              />
            </div>
            <div>
              <Label htmlFor="minute-link">Document Link (e.g., PDF URL)</Label>
              <Input
                id="minute-link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://example.com/minutes.pdf"
                required
              />
            </div>
            <div className="flex space-x-2">
              <Button type="submit" className="flex-grow">
                <PlusCircle className="mr-2 h-4 w-4" /> {editingMinute ? "Update Minute" : "Add Minute"}
              </Button>
              {editingMinute && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold mt-8">Current Meeting Minutes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meetingMinutes.length === 0 ? (
          <p className="text-gray-500 col-span-full">No meeting minutes added yet.</p>
        ) : (
          meetingMinutes.map((minute) => (
            <Card key={minute.id}>
              <CardHeader>
                <CardTitle>{minute.title}</CardTitle>
                <CardDescription>{format(minute.date, "PPP")}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <a href={minute.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                  View Document
                </a>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" onClick={() => handleEdit(minute)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => handleDelete(minute.id)}>
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

export default AdminMeetingMinutes;