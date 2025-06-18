
const QuizSlide = ({ slide}) => {
 

  return (
    <section key={slide.id}>
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Quiz Time!</h2>
        <div className="bg-opacity-10 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-4xl font-semibold mb-6">
            {slide.content.question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {slide.content.options.map((option, index) => (
              <button
                key={index}
              >
                <span className="font-bold  mr-3">{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            ))}
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default QuizSlide;