import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { SlideType, VideoData } from '@/lib/features/modules/moduleSlice';
import { useFileUploadModal } from "@/contexts/FileUploadModalContext";

interface AddVideoSlideProps {
  initialData: VideoData;
  onChange: (data: VideoData) => void;
  onRemove: () => void;
  index: number;
  
}

const AddVideoSlide = ({
  initialData,
  onChange,
  onRemove,
  index,
}: AddVideoSlideProps) => {
  const [data, setData] = useState<VideoData>(initialData);
  const { openModal } = useFileUploadModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...data, [name]: value };
    setData(updatedData);
    onChange(updatedData);
  };

  const handleVideoSelect = () => {
    openModal((file) => {
      const updatedData = { ...data, videoUrl: file.url };
      setData(updatedData);
      onChange(updatedData);
    }, 'video'); 
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Page {index + 1} - Video</h2>
        <Button
          onClick={onRemove}
          variant="destructive"
          size="sm"
          type="button"
        >
          Remove
        </Button>
      </div>

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
        <Button
          type="button"
          variant="outline"
          onClick={handleVideoSelect}
        >
          {data.videoUrl ? "Change Video File" : "Upload / Select Video File"}
        </Button>

        {data.videoUrl && (
          <div className="text-sm text-gray-600 mt-1">
            Selected:&nbsp;
            <a href={data.videoUrl} target="_blank" rel="noopener noreferrer" className="underline">
              {data.videoUrl}
            </a>
          </div>
        )}
      </div>

    </div>
  );
};

export default AddVideoSlide;
