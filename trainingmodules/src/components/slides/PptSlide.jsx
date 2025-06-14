import { Document } from 'react-doc-viewer';

const PptSlide = ({slide}) => {
  
    return (
        <Document fileUrl={slide.content.pptUrl} fileType="pptx" />
    );
}

export default PptSlide