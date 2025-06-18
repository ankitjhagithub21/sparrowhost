'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";


const AddTrainingModule = () => {
  const [formData, setFormData] = useState({
    moduleName: "",
    passingScore: "",
    category: "",
    image: "",
    duration: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can send this data to a backend or store it in state
    console.log("New Module Data:", formData);
    alert("Training module submitted!");
  };

  return (
    <div>
      <DialogHeader>
        <DialogTitle>Add a New Training Module</DialogTitle>
        <DialogDescription>
          Fill out the form below to create a new training module.
        </DialogDescription>
      </DialogHeader>

      <Separator className="my-4" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="moduleName">Module Name</Label>
          <Input
            id="moduleName"
            name="moduleName"
            value={formData.moduleName}
            onChange={handleChange}
            placeholder="Enter module name"
            required
          />
        </div>

        <div>
          <Label htmlFor="passingScore">Passing Score</Label>
          <Input
            type="number"
            id="passingScore"
            name="passingScore"
            value={formData.passingScore}
            onChange={handleChange}
            placeholder="e.g., 80"
            required
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g., International, Middle East"
            required
          />
        </div>

        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <Label htmlFor="duration">Duration (seconds)</Label>
          <Input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g., 1200"
          />
        </div>

        <Button type="submit" className="w-full">
          Submit Module
        </Button>
      </form>
    </div>
  );
};

export default AddTrainingModule;
