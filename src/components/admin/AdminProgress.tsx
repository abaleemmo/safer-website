import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Save, Edit } from "lucide-react";

interface ProgressItem {
  id: string;
  title: string;
  description: string;
  value: number; // Percentage 0-100
}

const AdminProgress: React.FC = () => {
  const [progressItems, setProgressItems] = useState<ProgressItem[]>([
    { id: "1", title: "Community Engagement", description: "Reached target neighborhoods for outreach.", value: 75 },
    { id: "2", title: "Infrastructure Assessments", description: "Completed high-risk intersection assessments.", value: 50 },
    { id: "3", title: "Educational Workshops", description: "Conducted planned safety workshops.", value: 60 },
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [currentDescription, setCurrentDescription] = useState<string>("");

  const handleEdit = (item: ProgressItem) => {
    setEditingId(item.id);
    setCurrentValue(item.value);
    setCurrentDescription(item.description);
  };

  const handleSave = (id: string) => {
    setProgressItems(progressItems.map(item =>
      item.id === id ? { ...item, value: currentValue, description: currentDescription } : item
    ));
    setEditingId(null);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Manage Progress Dashboard</CardTitle>
          <CardDescription>Update the progress percentages and descriptions for key initiatives.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {progressItems.map((item) => (
              <Card key={item.id} className="p-4">
                <CardTitle className="mb-2 text-xl">{item.title}</CardTitle>
                {editingId === item.id ? (
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor={`description-${item.id}`}>Description</Label>
                      <Input
                        id={`description-${item.id}`}
                        value={currentDescription}
                        onChange={(e) => setCurrentDescription(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`value-${item.id}`}>Progress Value (%)</Label>
                      <Input
                        id={`value-${item.id}`}
                        type="number"
                        min="0"
                        max="100"
                        value={currentValue}
                        onChange={(e) => setCurrentValue(Number(e.target.value))}
                        className="mt-1"
                      />
                    </div>
                    <Button onClick={() => handleSave(item.id)}>
                      <Save className="mr-2 h-4 w-4" /> Save
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">{item.description}</p>
                      <Progress value={item.value} className="w-full" />
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.value}% Complete</p>
                    </div>
                    <Button variant="outline" size="icon" onClick={() => handleEdit(item)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminProgress;