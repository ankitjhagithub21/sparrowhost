import { useEffect, useRef, useState, useMemo } from "react";
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import { useSelector } from "react-redux";
import ImageSlide from "../components/ImageSlide";
import QuizSlide from "../components/QuizSlide";
import VideoSlide from "../components/VideoSlide";
import NoSlide from "../components/NoSlide";

const Slider = () => {
  const { slides } = useSelector(state => state.app);
  const deckDivRef = useRef(null);
  const deckRef = useRef(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState({});

  const totalQuizzes = useMemo(() =>
    slides.filter(slide => slide.type === 'quiz').length,
  [slides]);

  const totalScore = useMemo(() =>
    slides
      .filter(slide => slide.type === 'quiz')
      .reduce((score, slide) => {
        const result = quizResults[slide.id];
        return result?.isCorrect ? score + 1 : score;
      }, 0),
  [slides, quizResults]);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide",
      hash: true,
      controls: true,
      progress: true,
      center: true,
      loop: false,
      autoAnimate: true,
      transitionSpeed: 'default',
      backgroundTransition: 'fade',
      width: 960,
      height: 700,
      margin: 0.04,
      minScale: 0.2,
      maxScale: 2.0,
      keyboard: true,
      overview: true
    });

    deckRef.current.initialize().then(() => {
      console.log("Reveal.js initialized successfully");
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  useEffect(() => {
    if (deckRef.current?.isReady?.()) {
      setTimeout(() => {
        try {
          deckRef.current.sync();
        } catch (error) {
          console.warn("Failed to sync Reveal.js:", error);
        }
      }, 100);
    }
  }, [slides]);

  const handleQuizSubmit = (slideId, selectedAnswer, correctAnswer) => {
    const isCorrect = selectedAnswer === correctAnswer;
    
    setQuizResults(prev => ({
      ...prev,
      [slideId]: { selectedAnswer, correctAnswer, isCorrect }
    }));
  };

  const handleQuizAnswer = (slideId, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [slideId]: answerIndex
    }));
  };

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'video':
        return <VideoSlide key={slide.id} slide={slide} />;
      case 'quiz':
        return (
          <QuizSlide
            key={slide.id}
            slide={slide}
            onAnswer={handleQuizAnswer}
            onSubmit={handleQuizSubmit}
            quizResults={quizResults}
            quizAnswers={quizAnswers}
          />
        );
      case 'image':
        return <ImageSlide key={slide.id} slide={slide} />;
      default:
        return (
          <section key={slide.id} data-background="#1a1a1a">
            <div className="slide-content">
              <h2 className="text-2xl font-bold text-white">Unknown Slide Type</h2>
              <p className="text-gray-300">Slide type "{slide.type}" not supported</p>
            </div>
          </section>
        );
    }
  };

  return (
    <main className="slide-container relative">
      {totalQuizzes > 0 && (
        <div className="fixed top-1 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50">
          Score: {totalScore} / {totalQuizzes}
        </div>
      )}

      <div className="reveal" ref={deckDivRef}>
        <div className="slides">
          {slides.length > 0 ? (
            slides.map(slide => renderSlide(slide))
          ) : (
            <NoSlide />
          )}
        </div>
      </div>
    </main>
  );
};

export default Slider;
