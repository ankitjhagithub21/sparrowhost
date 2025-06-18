
import type { Slide } from "@/lib/features/modules/moduleSlice";

interface QuizSlideProps {
  slide: Extract<Slide, { type: "quiz" }>; 
}

const QuizSlide: React.FC<QuizSlideProps> = ({ slide }) => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">Quiz Time!</h2>
      <div className="bg-opacity-10 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto">
        <h3 className="text-4xl font-semibold mb-6">
          {slide.data.question}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {slide.data.options.map((option, index) => (
            <button
              key={index}
              className="bg-white text-black p-4 rounded-lg hover:bg-gray-200 transition"
            >
              <span className="font-bold mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizSlide;
