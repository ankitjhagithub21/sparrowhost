import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ImageData, SlideType } from '@/lib/features/modules/moduleSlice';
import { useFileUploadModal } from "@/contexts/FileUploadModalContext";


interface AddImageSlideProps {
  initialData: ImageData;
  onChange: (data: ImageData) => void;
  onRemove: () => void;
  index: number;
}

const AddImageSlide = ({ initialData, onChange, onRemove, index}: AddImageSlideProps) => {
  const [data, setData] = useState<ImageData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...data, [name]: value };
    setData(updatedData);
    onChange(updatedData);
  };
  const { openModal } = useFileUploadModal();

  return (
    <div className=" space-y-6 ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Page {index + 1} - Image</h3>
        <Button
          onClick={onRemove}
          variant="destructive"
          size="sm"
          type="button"
        >
          Remove
        </Button>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Enter title"
            
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Real Image</Label>
          <Button
            variant="outline"
            type="button"
            onClick={() =>
              openModal((file) => {
                const updatedData = { ...data, realImageUrl: file.url };
                setData(updatedData);
                onChange(updatedData);
              },
              'image'
            )}
          >
            {data.realImageUrl ? "Change Real Image" : "Upload / Select Real Image"}
          </Button>
          {data.realImageUrl && (
            <div className="text-sm text-gray-600 mt-1">
              Selected: <a href={data.realImageUrl} target="_blank" className="underline">{data.realImageUrl}</a>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label>Fake Image</Label>
          <Button
            variant="outline"
            type="button"
            onClick={() =>
              openModal((file) => {
                const updatedData = { ...data, fakeImageUrl: file.url };
                setData(updatedData);
                onChange(updatedData);
              },
                'image'
              )
            }
          >
            {data.fakeImageUrl ? "Change Fake Image" : "Upload / Select Fake Image"}
          </Button>
          {data.fakeImageUrl && (
            <div className="text-sm text-gray-600 mt-1">
              Selected: <a href={data.fakeImageUrl} target="_blank" className="underline">{data.fakeImageUrl}</a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AddImageSlide;
