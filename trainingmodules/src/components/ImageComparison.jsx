import { useState } from "react";

const ImageComparison = ({ initialContent, onChange, onRemove, pageNumber, type }) => {
  const [content, setContent] = useState(initialContent);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedContent = { ...content, [name]: value }
    setContent(updatedContent);
    onChange(updatedContent);
  };


  return (
    <div className='border border-gray-200 p-3 my-3 rounded-lg'>
      <div className='flex items-center justify-between mb-2'>
        <span className='text-xs text-white bg-purple-700 rounded-lg px-3 py-1'>
          Page {pageNumber} {type}
        </span>
        <button
          onClick={onRemove}
          className='bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm px-3 py-1'
        >
          Remove
        </button>
      </div>
      <div className="flex flex-col gap-3 ">

        <input
          type="text"
          id="title"
          className='p-3 rounded-lg border-2 border-gray-300 outline-none hover:ring-2 ring-purple-500 ring-offset-0 '
          name="title"
          value={content.title}
          onChange={handleChange}
          placeholder="Enter title"
          required
        />


        <input
          type="text"
          placeholder="Enter description"
          className='p-3 rounded-lg border-2 border-gray-300 outline-none hover:ring-2 ring-purple-500 ring-offset-0 '
          value={content.description}
          name="description"
          onChange={handleChange}
          required

        />

          <input
          type="url"
          placeholder="Enter real image url"
          className='p-3 rounded-lg border-2 border-gray-300 outline-none hover:ring-2 ring-purple-500 ring-offset-0 '
          id="realImageUrl"
          value={content.realImageUrl}
          name="realImageUrl"
          onChange={handleChange}
          required
        />

        <input
          type="url"
          placeholder="Enter fake image url"
          className='p-3 rounded-lg border-2 border-gray-300 outline-none hover:ring-2 ring-purple-500 ring-offset-0 '
          id="fakeImageUrl"

          value={content.fakeImageUrl}
          name="fakeImageUrl"
          onChange={handleChange}
          required
        />



      </div>
    </div>
  );
};

export default ImageComparison