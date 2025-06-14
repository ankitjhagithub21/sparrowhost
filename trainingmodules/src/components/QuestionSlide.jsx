import { useState } from "react";
const QuestionSlide = ({ initialContent, onChange, onRemove, pageNumber, type }) => {
  const [content, setContent] = useState(initialContent);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedContent = { ...content };

    if (name.startsWith('option')) {
      const index = parseInt(name.replace('option', '')) - 1;
      updatedContent.options[index] = value;
    } else if (name === 'correctAnswer') {
      updatedContent[name] = parseInt(value);
    } else {
      updatedContent[name] = value;
    }

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
          id="question"
          className='p-3 rounded-lg border-2 border-gray-300 outline-none hover:ring-2 ring-purple-500 ring-offset-0 '
          name="question"
          value={content.question}
          onChange={handleChange} // Added missing onChange
          placeholder="Enter question"
          required
        />

        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            id="option1"
            placeholder="Enter option 1"
            className='p-3 rounded-lg border-2 border-gray-300 outline-none hover:ring-2 ring-purple-500 ring-offset-0 '
            value={content.options[0]}
            name="option1"
            onChange={handleChange} // Added missing onChange
            required
          />
          <input
            type="text"
            id="option2"
            placeholder="Enter option 2"
            className='p-3 rounded-lg border-2 border-gray-300 outline-none hover:ring-2 ring-purple-500 ring-offset-0 '
            value={content.options[1]} // Added missing value
            name="option2"
            onChange={handleChange} // Added missing onChange
            required
          />
          <input
            type="text"
            id="option3"
            placeholder="Enter option 3"
            className='p-3 rounded-lg border-2 border-gray-300 outline-none hover:ring-2 ring-purple-500 ring-offset-0 '
            value={content.options[2]} // Added missing value
            name="option3"
            onChange={handleChange} // Added missing onChange
            required
          />
          <input
            type="text"
            id="option4"
            placeholder="Enter option 4" // Fixed: was "Enter option 1"
            className='p-3 rounded-lg border-2 border-gray-300 outline-none hover:ring-2 ring-purple-500 ring-offset-0 '
            value={content.options[3]} // Added missing value
            name="option4"
            onChange={handleChange} // Added missing onChange
            required
          />
        </div>

        <input
          type="number"
          placeholder="Enter correct answer (0-3)" // More descriptive placeholder
          className='p-3 rounded-lg border-2 border-gray-300 outline-none hover:ring-2 ring-purple-500 ring-offset-0 '
          id="correctAnswer"
          min={0}
          max={3}
          value={content.correctAnswer} // Added missing value
          name="correctAnswer"
          onChange={handleChange} // Added missing onChange
          required
        />

        <input
          type="text"
          id="answerDescription"
          placeholder="Enter answer description"
          className='p-3 rounded-lg border-2 border-gray-300 outline-none hover:ring-2 ring-purple-500 ring-offset-0 '
          value={content.answerDescription} // Added missing value
          name="answerDescription"
          onChange={handleChange} // Added missing onChange
          required
        />


      </div>
    </div>
  );
};

export default QuestionSlide