const PptSlide = ({ slide }) => {
  const pptUrl = slide?.content?.pptUrl;

  return (
    <div
      className="relative z-10 w-full flex justify-center items-center overflow-auto"
    >
      <iframe
        src={pptUrl}
        frameBorder="0"
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
