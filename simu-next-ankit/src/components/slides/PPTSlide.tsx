import type { Slide } from "@/lib/features/modules/moduleSlice";

interface PptSlideProps {
  slide: Extract<Slide, { type: "ppt" }>; 
}

const PptSlide: React.FC<PptSlideProps> = ({ slide }) => {
  

  return (
    <div
      className="relative w-full flex justify-center items-center overflow-auto">
      <iframe
        src={slide.data.pptUrl}
        
        width="960"
        height="569"
        allowFullScreen
        className="max-w-full max-h-full"
        title="PPT Slide"
      />
    </div>
  );
};

export default PptSlide;
