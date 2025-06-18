import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ImageData } from '@/lib/features/modules/moduleSlice';



interface AddImageSlideProps {
  initialData: ImageData;
  onChange: (data: ImageData) => void;
  onRemove: () => void;
  index: number;
}

const AddImageSlide = ({ initialData, onChange, onRemove, index }: AddImageSlideProps) => {
  const [data, setData] = useState<ImageData>(initialData);

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
          Slide {index} - Image
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
            placeholder="Enter title"
            required
          />
        </div>


        <div className="space-y-2">
          <Label htmlFor="realImageUrl">Real Image URL</Label>
          <Input
            id="realImageUrl"
            type="url"
            name="realImageUrl"
            value={data.realImageUrl}
            onChange={handleChange}
            placeholder="Enter real image URL"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fakeImageUrl">Fake Image URL</Label>
          <Input
            id="fakeImageUrl"
            type="url"
            name="fakeImageUrl"
            value={data.fakeImageUrl}
            onChange={handleChange}
            placeholder="Enter fake image URL"
            required
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AddImageSlide;