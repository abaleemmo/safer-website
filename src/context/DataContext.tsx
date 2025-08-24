import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Define Interfaces for all data types
export interface Registration {
  name: string;
  email: string;
  phone?: string; // Optional phone number
}

export interface Event {
  id: string;
  title: string;
  date: Date;
  description: string;
  registrations: Registration[];
}

export interface Announcement {
  id: string;
  title?: string;
  date: Date;
  summary?: string;
  link?: string;
  imageUrl?: string;
}

export interface PastEvent {
  id: string;
  title: string;
  date: Date;
  description: string;
}

export interface ProgressItem {
  id: string;
  title: string;
  description: string;
  value: number; // Percentage 0-100
}

export interface MeetingMinute {
  id: string;
  title: string;
  date: Date;
  link: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  source: "event" | "newsletter"; // To track where the contact came from
  createdAt: Date;
}

// 2. Define the shape of the context value
interface DataContextType {
  events: Event[];
  addEvent: (event: Omit<Event, "id" | "registrations">) => void;
  updateEvent: (updatedEvent: Event) => void;
  deleteEvent: (id: string) => void;
  registerForEvent: (eventId: string, registration: Registration) => void;

  announcements: Announcement[];
  addAnnouncement: (announcement: Omit<Announcement, "id" | "date">) => void;
  updateAnnouncement: (updatedAnnouncement: Announcement) => void;
  deleteAnnouncement: (id: string) => void;

  pastEvents: PastEvent[];
  addPastEvent: (pastEvent: Omit<PastEvent, "id">) => void;
  updatePastEvent: (updatedPastEvent: PastEvent) => void;
  deletePastEvent: (id: string) => void;

  progressItems: ProgressItem[];
  updateProgressItem: (updatedItem: ProgressItem) => void;

  meetingMinutes: MeetingMinute[];
  addMeetingMinute: (minute: Omit<MeetingMinute, "id">) => void;
  updateMeetingMinute: (updatedMinute: MeetingMinute) => void;
  deleteMeetingMinute: (id: string) => void;

  contacts: Contact[];
  addContact: (contact: Omit<Contact, "id" | "createdAt">) => void;
  deleteContact: (id: string) => void;
}

// Initial dummy data for public pages
const initialEvents: Event[] = [
  {
    id: "1",
    title: "Community Safety Walk",
    date: new Date(2024, 9, 26), // October 26, 2024
    description: "Join us for a walk through the Lloyd intersection area to identify safety concerns and raise awareness for Vision Zero.",
    registrations: [],
  },
  {
    id: "2",
    title: "Vision Zero Town Hall",
    date: new Date(2024, 10, 15), // November 15, 2024
    description: "An open forum to discuss traffic safety issues and solutions with local leaders and the community.",
    registrations: [],
  },
  {
    id: "3",
    title: "Annual Fundraiser Gala",
    date: new Date(2024, 11, 7), // December 7, 2024
    description: "Our biggest event of the year! Support SAFER's mission with an evening of community and giving to help us reach our fundraising goals.",
    registrations: [],
  },
];

const initialAnnouncements: Announcement[] = [
  {
    id: "b1",
    title: "Evansville City Council Unanimously Approves Vision Zero Resolution!",
    date: new Date(2024, 9, 1), // October 1, 2024
    summary: "A landmark decision for safer streets in Evansville. Read about the details and what it means for our community.",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x200/007bff/ffffff?text=City+Council",
  },
  {
    id: "b2",
    title: "SAFER Hosts Community Safety Workshop",
    date: new Date(2024, 8, 15), // September 15, 2024
    summary: "Recap of our recent workshop focused on pedestrian and cyclist safety. Learn key takeaways and future plans.",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x200/28a745/ffffff?text=Workshop",
  },
];

const initialPastEvents: PastEvent[] = [
  {
    id: "p1",
    title: "Road Safety Workshop (Spring 2024)",
    date: new Date(2024, 4, 10), // May 10, 2024
    description: "We hosted a successful workshop attended by over 100 community members, focusing on pedestrian and cyclist safety.",
  },
  {
    id: "p2",
    title: "\"Light Up the Night\" Campaign (Winter 2024)",
    date: new Date(2024, 1, 20), // February 20, 2024
    description: "Over 500 reflective vests and lights were distributed, significantly improving visibility during evening hours.",
  },
];

const initialProgressItems: ProgressItem[] = [
  { id: "1", title: "Community Engagement", description: "Reached target neighborhoods for outreach.", value: 75 },
  { id: "2", title: "Infrastructure Assessments", description: "Completed high-risk intersection assessments.", value: 50 },
  { id: "3", "title": "Educational Workshops", description: "Conducted planned safety workshops.", value: 60 },
];

const initialMeetingMinutes: MeetingMinute[] = [
  {
    id: "m1",
    title: "Task Force Meeting Minutes - September 2024",
    date: new Date(2024, 8, 25), // September 25, 2024
    link: "#",
  },
  {
    id: "m2",
    title: "City Council Presentation Summary - August 2024",
    date: new Date(2024, 7, 10), // August 10, 2024
    link: "#",
  },
];

const initialContacts: Contact[] = [
  { id: "c1", name: "John Doe", email: "john.doe@example.com", phone: "555-123-4567", source: "newsletter", createdAt: new Date() },
  { id: "c2", name: "Jane Smith", email: "jane.smith@example.com", source: "event", createdAt: new Date() },
];


// 3. Create the Context
const DataContext = createContext<DataContextType | undefined>(undefined);

// 4. Create a Provider Component
export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
  const [pastEvents, setPastEvents] = useState<PastEvent[]>(initialPastEvents);
  const [progressItems, setProgressItems] = useState<ProgressItem[]>(initialProgressItems);
  const [meetingMinutes, setMeetingMinutes] = useState<MeetingMinute[]>(initialMeetingMinutes);
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);

  // Helper to add a contact if not already present (based on email)
  const addContact = (newContact: Omit<Contact, "id" | "createdAt">) => {
    setContacts((prev) => {
      if (!prev.some(contact => contact.email === newContact.email)) {
        return [...prev, { ...newContact, id: String(Date.now()), createdAt: new Date() }];
      }
      return prev;
    });
  };

  const deleteContact = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  // Event functions
  const addEvent = (event: Omit<Event, "id" | "registrations">) => {
    setEvents((prev) => [...prev, { ...event, id: String(Date.now()), registrations: [] }]);
  };
  const updateEvent = (updatedEvent: Event) => {
    setEvents((prev) => prev.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)));
  };
  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };
  const registerForEvent = (eventId: string, registration: Registration) => {
    setEvents((prev) =>
      prev.map((e) => {
        if (e.id === eventId) {
          addContact({ name: registration.name, email: registration.email, phone: registration.phone, source: "event" });
          return { ...e, registrations: [...e.registrations, registration] };
        }
        return e;
      })
    );
  };

  // Announcement functions
  const addAnnouncement = (announcement: Omit<Announcement, "id" | "date">) => {
    setAnnouncements((prev) => [...prev, { ...announcement, id: String(Date.now()), date: new Date() }]);
  };
  const updateAnnouncement = (updatedAnnouncement: Announcement) => {
    setAnnouncements((prev) => prev.map((a) => (a.id === updatedAnnouncement.id ? updatedAnnouncement : a)));
  };
  const deleteAnnouncement = (id: string) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
  };

  // Past Event functions
  const addPastEvent = (pastEvent: Omit<PastEvent, "id">) => {
    setPastEvents((prev) => [...prev, { ...pastEvent, id: String(Date.now()) }]);
  };
  const updatePastEvent = (updatedPastEvent: PastEvent) => {
    setPastEvents((prev) => prev.map((pe) => (pe.id === updatedPastEvent.id ? updatedPastEvent : pe)));
  };
  const deletePastEvent = (id: string) => {
    setPastEvents((prev) => prev.filter((pe) => pe.id !== id));
  };

  // Progress Item functions
  const updateProgressItem = (updatedItem: ProgressItem) => {
    setProgressItems((prev) => prev.map((pi) => (pi.id === updatedItem.id ? updatedItem : pi)));
  };

  // Meeting Minute functions
  const addMeetingMinute = (minute: Omit<MeetingMinute, "id">) => {
    setMeetingMinutes((prev) => [...prev, { ...minute, id: String(Date.now()) }]);
  };
  const updateMeetingMinute = (updatedMinute: MeetingMinute) => {
    setMeetingMinutes((prev) => prev.map((mm) => (mm.id === updatedMinute.id ? updatedMinute : mm)));
  };
  const deleteMeetingMinute = (id: string) => {
    setMeetingMinutes((prev) => prev.filter((mm) => mm.id !== id));
  };

  const contextValue: DataContextType = {
    events,
    addEvent,
    updateEvent,
    deleteEvent,
    registerForEvent,
    announcements,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    pastEvents,
    addPastEvent,
    updatePastEvent,
    deletePastEvent,
    progressItems,
    updateProgressItem,
    meetingMinutes,
    addMeetingMinute,
    updateMeetingMinute,
    deleteMeetingMinute,
    contacts,
    addContact,
    deleteContact,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

// 5. Create a custom hook to use the DataContext
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};