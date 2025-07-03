import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PPTData} from '@/lib/features/modules/moduleSlice';
import { useFileUploadModal } from "@/contexts/FileUploadModalContext";

interface AddPptSlideProps {
  initialData: PPTData;
  onChange: (data: PPTData) => void;
  onRemove: () => void;
  index: number;

}

const AddPptSlide = ({ initialData, onChange, onRemove, index}: AddPptSlideProps) => {
  const [data, setData] = useState<PPTData>(initialData);
  const { openModal } = useFileUploadModal();


  const handlePptSelect = () => {
    openModal((file) => {
      const updatedData = { ...data, pptUrl: file.url };
      setData(updatedData);
      onChange(updatedData);
    }, 'ppt'); 
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Page {index + 1} - PowerPoint</h3>
        <Button
          onClick={onRemove}
          variant="destructive"
          size="sm"
          type="button"
        >
          Remove
        </Button>
      </div>

      {/* Upload and Preview */}
      <div className="space-y-4">
       
        <Button
          type="button"
          variant="outline"
          onClick={handlePptSelect}
        >
          {data.pptUrl ? "Change PPT File" : "Upload / Select PPT File"}
        </Button>

        {data.pptUrl && (
          <div className="text-sm text-gray-600 mt-1">
            Selected:&nbsp;
            <a href={data.pptUrl} target="_blank" rel="noopener noreferrer" className="underline">
              {data.pptUrl}
            </a>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default AddPptSlide;
