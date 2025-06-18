'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addModule } from '@/lib/features/modules/moduleSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import AddQuizSlide from './slides/AddQuizSlide';
import AddImageSlide from './slides/AddImageSlide';
import AddVideoSlide from './slides/AddVideoSlide';
import AddPptSlide from './slides/AddPptSlide';

import { Slide, Module } from '@/lib/features/modules/moduleSlice';

const AddTrainingModule: React.FC = () => {
  const dispatch = useDispatch();

  const [moduleData, setModuleData] = useState<Omit<Module, 'id'>>({
    moduleName: '',
    passingScore: 0,
    category: '',
    image: '',
    duration: 0,
    slides: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue =
      name === 'passingScore' || name === 'duration' ? parseInt(value, 10) || 0 : value;
    setModuleData({ ...moduleData, [name]: newValue });
  };

  const addSlide = (type: Slide['type']) => {
    const newSlide: Slide = {
      id: Date.now().toString(),
      type,
      data:
        type === 'quiz'
          ? {
              question: '',
              options: ['', '', '', ''],
              correctAnswer: '',
              answerDescription: '',
            }
          : type === 'video'
          ? {
              videoUrl: '',
              title: '',
              description: '',
            }
          : type === 'image'
          ? {
              title: '',
              description: '',
              realImageUrl: '',
              fakeImageUrl: '',
            }
          : {
              pptUrl: '',
            },
    };

    setModuleData((prev) => ({
      ...prev,
      slides: [...prev.slides, newSlide],
    }));
  };

  const updateSlide = (index: number, data: Slide['data']) => {
    const updated = [...moduleData.slides];
    updated[index] = {
      ...updated[index],
      data,
    };
    setModuleData({ ...moduleData, slides: updated });
  };

  const removeSlide = (index: number) => {
    const updated = [...moduleData.slides];
    updated.splice(index, 1);
    setModuleData({ ...moduleData, slides: updated });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { moduleName, passingScore, image, slides } = moduleData;

    if (!moduleName || !image || !passingScore) {
      return alert('Please fill all required fields.');
    }
    if (slides.length === 0) {
      return alert('Please add at least one slide.');
    }

    const finalModule: Module = {
      ...moduleData,
      id: Date.now().toString(),
    };

    dispatch(addModule(finalModule));
    alert('Module submitted!');
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Add Training Module</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="moduleName">Module Name</Label>
              <Input
                id="moduleName"
                name="moduleName"
                value={moduleData.moduleName}
                onChange={handleChange}
                placeholder="Module Name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                name="category"
                value={moduleData.category}
                onChange={handleChange}
                placeholder="Category"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="passingScore">Passing Score</Label>
              <Input
                id="passingScore"
                type="number"
                name="passingScore"
                value={moduleData.passingScore}
                onChange={handleChange}
                placeholder="Passing Score"
                min={0}
                max={100}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (seconds)</Label>
              <Input
                id="duration"
                type="number"
                name="duration"
                value={moduleData.duration}
                onChange={handleChange}
                placeholder="Duration"
                min={0}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                type="url"
                name="image"
                value={moduleData.image}
                onChange={handleChange}
                placeholder="Image URL"
                required
              />
            </div>
          </form>

          <Separator className="my-6" />

          <div className="flex gap-2 mb-4 flex-wrap">
            <Button type="button" onClick={() => addSlide('quiz')} variant="secondary">
              Add Quiz Slide
            </Button>
            <Button type="button" onClick={() => addSlide('video')} variant="secondary">
              Add Video Slide
            </Button>
            <Button type="button" onClick={() => addSlide('image')} variant="secondary">
              Add Image Slide
            </Button>
            <Button type="button" onClick={() => addSlide('ppt')} variant="secondary">
              Add PPT Slide
            </Button>
          </div>

          <div className="space-y-4">
            {moduleData.slides.map((slide, index) => {
              const commonProps = {
                key: slide.id,
                initialData: slide.data,
                onChange: (data: Slide['data']) => updateSlide(index, data),
                onRemove: () => removeSlide(index),
                index: index + 1,
              };

              switch (slide.type) {
                case 'quiz':
                  return <AddQuizSlide {...commonProps} />;
                case 'video':
                  return <AddVideoSlide {...commonProps} />;
                case 'image':
                  return <AddImageSlide {...commonProps} />;
                case 'ppt':
                  return <AddPptSlide {...commonProps} />;
                default:
                  return null;
              }
            })}
          </div>

          <div className="mt-6 text-right">
            <Button onClick={handleSubmit} className="w-full md:w-auto">
              Submit Module
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddTrainingModule;