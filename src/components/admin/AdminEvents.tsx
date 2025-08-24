import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarIcon, PlusCircle, Edit, Trash2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface Event {
  id: string;
  title: string;
  date: Date;
  description: string;
  link: string;
}

const AdminEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate(undefined);
    setDescription("");
    setLink("");
    setEditingEvent(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !description || !link) return;

    if (editingEvent) {
      setEvents(events.map((event) =>
        event.id === editingEvent.id
          ? { ...event, title, date, description, link }
          : event
      ));
    } else {
      setEvents([...events, { id: String(Date.now()), title, date, description, link }]);
    }
    resetForm();
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setTitle(event.title);
    setDate(event.date);
    setDescription(event.description);
    setLink(event.link);
  };

  const handleDelete = (id: string) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{editingEvent ? "Edit Event" : "Add New Event"}</CardTitle>
          <CardDescription>Manage upcoming events for the SAFER website.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="event-title">Event Title</Label>
              <Input
                id="event-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Community Safety Walk"
                required
              />
            </div>
            <div>
              <Label htmlFor="event-date">Event Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="event-description">Description</Label>
              <Textarea
                id="event-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of the event"
                required
              />
            </div>
            <div>
              <Label htmlFor="event-link">Registration/Info Link</Label>
              <Input
                id="event-link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://example.com/register"
                required
              />
            </div>
            <div className="flex space-x-2">
              <Button type="submit" className="flex-grow">
                <PlusCircle className="mr-2 h-4 w-4" /> {editingEvent ? "Update Event" : "Add Event"}
              </Button>
              {editingEvent && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold mt-8">Current Upcoming Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.length === 0 ? (
          <p className="text-gray-500 col-span-full">No upcoming events added yet.</p>
        ) : (
          events.map((event) => (
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

export default AdminEvents;