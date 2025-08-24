import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Mail, Phone, User } from "lucide-react";
import { useData, Contact } from "@/context/DataContext";
import { format } from "date-fns";

const AdminContacts: React.FC = () => {
  const { contacts, deleteContact } = useData();

  const handleDelete = (id: string) => {
    deleteContact(id);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Contacts List</CardTitle>
          <CardDescription>Manage all contacts from event registrations and newsletter subscriptions.</CardDescription>
        </CardHeader>
        <CardContent>
          {contacts.length === 0 ? (
            <p className="text-gray-500">No contacts added yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contacts.map((contact: Contact) => (
                <Card key={contact.id} className="relative p-4">
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-6 w-6"
                    onClick={() => handleDelete(contact.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                  <div className="flex items-center mb-2">
                    <User className="h-5 w-5 mr-2 text-blue-600" />
                    <h4 className="font-semibold text-lg">{contact.name}</h4>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{contact.email}</span>
                  </div>
                  {contact.phone && (
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{contact.phone}</span>
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    Source: {contact.source} | Added: {format(contact.createdAt, "PPP")}
                  </p>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminContacts;