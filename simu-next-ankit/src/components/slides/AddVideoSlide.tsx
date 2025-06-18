import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { VideoData } from '@/lib/features/modules/moduleSlice';


interface AddVideoSlideProps {
  initialData: VideoData;
  onChange: (data: VideoData) => void;
  onRemove: () => void;
  index: number;
}

const AddVideoSlide = ({ initialData, onChange, onRemove, index }: AddVideoSlideProps) => {
  const [data, setData] = useState<VideoData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...data, [name]: value };
    setData(updatedData);
    onChange(updatedData);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">
          Slide {index} - Video
        </CardTitle>
        <Button
          onClick={onRemove}
          variant="destructive"
          size="sm"
        >
          Remove
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Enter video title"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            name="description"
            value={data.description}
            onChange={handleChange}
            placeholder="Enter video description"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="videoUrl">Video URL</Label>
          <Input
            id="videoUrl"
            type="url"
            name="videoUrl"
            value={data.videoUrl}
            onChange={handleChange}
            placeholder="Enter video URL"
            required
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AddVideoSlide;