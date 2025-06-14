import { useState } from "react";

const PptSlide = ({ initialContent, onChange, onRemove, pageNumber, type }) => {
    const [content, setContent] = useState(initialContent);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedContent = { ...content, [name]: value };
        setContent(updatedContent);
        onChange(updatedContent);
    };

    return (
        <div className='border border-gray-300 rounded-lg p-3'>
            <div className='flex items-center justify-between mb-2'>
                <span className='text-xs text-white bg-indigo-700 rounded-lg px-3 py-1'>
                    Page {pageNumber} {type}
                </span>
                <button
                    onClick={onRemove}
                    className='bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm px-3 py-1'
                >
                    Remove
                </button>
            </div>
            <div className='flex flex-col gap-3'>



                <input type="url" placeholder='Enter ppt url' id='pptUrl' name='pptUrl' value={content.pptUrl} className='p-3 rounded-lg border-2 border-gray-300' onChange={handleChange} required />


            </div>
        </div>
    );
};


export default PptSlide