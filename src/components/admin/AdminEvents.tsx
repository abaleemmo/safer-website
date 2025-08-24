import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarIcon, PlusCircle, Edit, Trash2, Users } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useData, Event, Registration } from "@/context/DataContext"; // Import useData hook and interfaces

const AdminEvents: React.FC = () => {
  const { events, addEvent, updateEvent, deleteEvent } = useData(); // Use data from context
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [description, setDescription] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate(undefined);
    setDescription("");
    setEditingEvent(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !description) return;

    if (editingEvent) {
      updateEvent({ ...editingEvent, title, date, description });
    } else {
      addEvent({ title, date, description });
    }
    resetForm();
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setTitle(event.title);
    setDate(event.date);
    setDescription(event.description);
  };

  const handleDelete = (id: string) => {
    deleteEvent(id);
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
              <CardContent className="flex flex-col justify-between items-start">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>
                <div className="flex space-x-2 self-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="mr-2">
                        <Users className="mr-2 h-4 w-4" /> View Registrations ({event.registrations.length})
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Registrations for "{event.title}"</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 space-y-2">
                        {event.registrations.length === 0 ? (
                          <p>No registrations yet.</p>
                        ) : (
                          event.registrations.map((reg, index) => (
                            <p key={index} className="text-sm">
                              <strong>{reg.name}</strong> - {reg.email}
                            </p>
                          ))
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
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