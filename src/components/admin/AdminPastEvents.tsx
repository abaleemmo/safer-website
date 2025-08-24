import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";

interface PastEvent {
  id: string;
  title: string;
  date: Date;
  description: string;
}

const AdminPastEvents: React.FC = () => {
  const [pastEvents, setPastEvents] = useState<PastEvent[]>([]);
  const [editingPastEvent, setEditingPastEvent] = useState<PastEvent | null>(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [description, setDescription] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate(undefined);
    setDescription("");
    setEditingPastEvent(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !description) return;

    if (editingPastEvent) {
      setPastEvents(pastEvents.map((event) =>
        event.id === editingPastEvent.id
          ? { ...event, title, date, description }
          : event
      ));
    } else {
      setPastEvents([...pastEvents, { id: String(Date.now()), title, date, description }]);
    }
    resetForm();
  };

  const handleEdit = (event: PastEvent) => {
    setEditingPastEvent(event);
    setTitle(event.title);
    setDate(event.date);
    setDescription(event.description);
  };

  const handleDelete = (id: string) => {
    setPastEvents(pastEvents.filter((event) => event.id !== id));
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{editingPastEvent ? "Edit Past Event/Story" : "Add New Past Event/Story"}</CardTitle>
          <CardDescription>Showcase past events and success stories.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="past-event-title">Title</Label>
              <Input
                id="past-event-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Road Safety Workshop (Spring 2024)"
                required
              />
            </div>
            <div>
              <Label htmlFor="past-event-date">Date</Label>
              <Input
                id="past-event-date"
                type="date"
                value={date ? format(date, "yyyy-MM-dd") : ""}
                onChange={(e) => setDate(new Date(e.target.value))}
                required
              />
            </div>
            <div>
              <Label htmlFor="past-event-description">Description</Label>
              <Textarea
                id="past-event-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of the event or success story"
                required
              />
            </div>
            <div className="flex space-x-2">
              <Button type="submit" className="flex-grow">
                <PlusCircle className="mr-2 h-4 w-4" /> {editingPastEvent ? "Update Entry" : "Add Entry"}
              </Button>
              {editingPastEvent && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold mt-8">Current Past Events & Stories</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pastEvents.length === 0 ? (
          <p className="text-gray-500 col-span-full">No past events or stories added yet.</p>
        ) : (
          pastEvents.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{format(event.date, "PPP")}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{event.description}</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" onClick={() => handleEdit(event)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => handleDelete(event.id)}>
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

export default AdminPastEvents;