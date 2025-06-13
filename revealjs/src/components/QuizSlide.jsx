
const QuizSlide = ({ slide, onAnswer, onSubmit, quizResults, quizAnswers }) => {
  const result = quizResults[slide.id];
  const selectedAnswer = quizAnswers[slide.id];

  return (
    <section key={slide.id}>
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Quiz Time!</h2>
        <div className="bg-opacity-10 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">
            {slide.content.question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {slide.content.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswer(slide.id, index)}
                disabled={result !== undefined}
                className={`
                  p-4 rounded-lg text-left text-gray-800 transition-all duration-300 transform 
                  ${selectedAnswer === index
                    ? 'bg-blue-600'
                    : 'bg-white bg-opacity-20  hover:bg-white hover:bg-opacity-30'}
                  ${result && index === slide.content.correctAnswer
                    ? 'bg-green-600 border-green-400'
                    : ''}
                  ${result && selectedAnswer === index && index !== slide.content.correctAnswer
                    ? 'bg-red-600 border-red-400'
                    : ''}
                  disabled:cursor-not-allowed
                `}
              >
                <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            ))}
          </div>

          {selectedAnswer !== undefined && !result && (
            <button
              onClick={() => onSubmit(slide.id, selectedAnswer, slide.content.correctAnswer)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Submit Answer
            </button>
          )}

          {result && (
            <div className={`mt-6 p-4 rounded-lg ${result.isCorrect ? 'bg-green-600 bg-opacity-30 border border-green-400' : 'bg-red-600 bg-opacity-30 border border-red-400'}`}>
              <p className="text-white text-lg font-semibold">
                {result.isCorrect ? '🎉 Correct!' : '❌ Incorrect!'}
              </p>
              {!result.isCorrect && (
                <p className="text-white mt-2">
                  The correct answer was: <strong>{String.fromCharCode(65 + slide.content.correctAnswer)}. {slide.content.options[slide.content.correctAnswer]}</strong>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSlide;
