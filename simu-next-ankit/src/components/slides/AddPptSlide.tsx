import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PPTData } from '@/lib/features/modules/moduleSlice';



interface AddPptSlideProps {
  initialData: PPTData;
  onChange: (data: PPTData) => void;
  onRemove: () => void;
  index: number;
}

const AddPptSlide = ({ initialData, onChange, onRemove, index }: AddPptSlideProps) => {
  const [data, setData] = useState<PPTData>(initialData);

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
          Slide {index} - PowerPoint
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
          <Label htmlFor="pptUrl">PPT URL</Label>
          <Input
            id="pptUrl"
            type="url"
            name="pptUrl"
            value={data.pptUrl}
            onChange={handleChange}
            placeholder="Enter PPT URL"
            required
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AddPptSlide;