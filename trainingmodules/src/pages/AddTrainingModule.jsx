import { useState } from 'react';
import QuestionSlide from '../components/QuestionSlide';
import VideoSlide from '../components/VideoSlide';
import { useDispatch } from 'react-redux';
import { addTraingingModule } from '../app/appSlice';
import ImageComparison from '../components/ImageComparison';

const AddTrainingModule = () => {
  const dispatch = useDispatch();

  const [moduleData, setModuleData] = useState({
    moduleName: '',
    passingScore: '',
    coverImage: '',
    moduleId: Date.now(),
    slides: [],
  });

  const handleModuleChange = (e) => {
    const { name, value } = e.target;
    setModuleData({ ...moduleData, [name]: value });
  };

  const addSlide = (type) => {
    const newSlide = {
      id: Date.now(),
      type,
      content:
        type === 'question'
          ? {
            question: '',
            options: ['', '', '', ''],
            correctAnswer: 0,
            answerDescription: '',
          } :
          type === 'video' ? {
            videoUrl: '',
            description: '',
            title: '',
          } : {
            realImageUrl: '',
            fakeImageUrl: '',
            title: '',
            description: ''
          },
    };

    setModuleData((prev) => ({
      ...prev,
      slides: [...prev.slides, newSlide],
    }));
  };

  const updateSlide = (index, content) => {
    const updatedSlides = [...moduleData.slides];
    updatedSlides[index].content = content;

    setModuleData({ ...moduleData, slides: updatedSlides });
  };

  const removeSlide = (index) => {
    const updatedSlides = [...moduleData.slides];
    updatedSlides.splice(index, 1);
    setModuleData({ ...moduleData, slides: updatedSlides });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!moduleData.moduleName || !moduleData.coverImage || !moduleData.passingScore) {
      return alert("Please fill the details for module data.")
    }
    if (moduleData.slides.length < 1) {
      return alert("Please add atleast one training.")
    }
    dispatch(addTraingingModule(moduleData));
    // Submit to API here
    alert('Training module created successfully!');
  };

  return (
    <div className='max-w-7xl mx-auto bg-bl'>
      <h2 className="mb-5 text-3xl font-medium">Add Training Module</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="moduleName" className="text-sm text-gray-800">Module Name</label>
          <input
            type="text"
            name="moduleName"
            value={moduleData.moduleName}
            onChange={handleModuleChange}
            placeholder="Enter a unique name"
            className="border-2 outline-none hover:ring-2 ring-purple-500 rounded-lg p-3 border-gray-300"
          />
        </div>
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="passingScore" className="text-sm text-gray-800">Passing Score</label>
          <input
            type="number"
            name="passingScore"
            value={moduleData.passingScore}
            onChange={handleModuleChange}
            min={1}
            max={100}
            placeholder="Enter score between 1-100"
            className="border-2 outline-none hover:ring-2 ring-purple-500 rounded-lg p-3 border-gray-300"
          />
        </div>
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="coverImage" className="text-sm text-gray-800">Cover Image</label>
          <input
            type="url"
            name="coverImage"
            value={moduleData.coverImage}
            onChange={handleModuleChange}
            placeholder="Enter cover image URL"
            className="border-2 outline-none hover:ring-2 ring-purple-500 rounded-lg p-3 border-gray-300"
          />
        </div>
      </form>

      <div className="flex gap-2 my-3">
        <button
          type="button"
          onClick={() => addSlide('question')}
          className="bg-purple-800 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-purple-900"
        >
          Add Question
        </button>
        <button
          type="button"
          onClick={() => addSlide('video')}
          className="bg-indigo-700 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-indigo-800"
        >
          Add Video
        </button>
        <button
          type="button"
          onClick={() => addSlide('image')}
          className="bg-gray-800 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-gray-900"
        >
          Add Image Comparison
        </button>
      </div>

      {/* Render Slides */}
      {moduleData.slides.map((slide, index) =>
        slide.type === 'question' ? (
          <QuestionSlide
            key={slide.id}
            type="question"
            pageNumber={index + 1}
            initialContent={slide.content}
            onChange={(content) => updateSlide(index, content)}
            onRemove={() => removeSlide(index)}
          />
        ) : slide.type === 'video' ?
          <VideoSlide
            key={slide.id}
            type="video"
            pageNumber={index + 1}
            initialContent={slide.content}
            onChange={(content) => updateSlide(index, content)}
            onRemove={() => removeSlide(index)}
          /> : <ImageComparison
            key={slide.id}
            type="image"
            onChange={(content) => updateSlide(index, content)}
            initialContent={slide.content}
            onRemove={() => removeSlide(index)}
            pageNumber={index + 1}
          />

      )}

      <div className="flex items-center justify-end mt-3">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTrainingModule;
