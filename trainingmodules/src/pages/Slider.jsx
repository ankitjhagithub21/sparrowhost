import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import { useSelector } from "react-redux";
import QuizSlide from "../components/slides/QuizSlide";
import VideoSlide from "../components/slides/VideoSlide";
import { useParams } from "react-router-dom";
import ImageSlide from "../components/slides/ImageSlide";

const NoSlide = () => (
  <section>
    <div className="slide-content">
      <h2 className="text-2xl font-bold ">No Slides</h2>
      <p className="text-gray-300">This module doesn't contain any slides.</p>
    </div>
  </section>
);

const Slider = () => {
  const { modules } = useSelector((state) => state.app);
  const { id } = useParams();
  const module = modules?.find((mod) => mod.moduleId == id);
  
  const deckDivRef = useRef(null);
  const deckRef = useRef(null);

  useEffect(() => {
    if (!deckRef.current && deckDivRef.current) {
      deckRef.current = new Reveal(deckDivRef.current, {
        transition: "slide",
        hash: true,
        controls: true,
        progress: true,
        center: true,
        loop: false,
        autoAnimate: true,
        transitionSpeed: "default",
        backgroundTransition: "fade",
        width: 960,
        height: 700,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 2.0,
        keyboard: true,
        overview: true,
      });

      deckRef.current.initialize().then(() => {
        console.log("Reveal.js initialized successfully");
        deckRef.current.sync(); // Safe to sync after init
      });
    }

    return () => {
      if (deckRef.current) {
        try {
          deckRef.current.destroy();
        } catch (e) {
          console.warn("Reveal.js destroy call failed:", e);
        }
        deckRef.current = null;
      }
    };
  }, []);

  if (!module) {
    return <p className="">Module not found.</p>;
  }

  const renderSlide = (slide) => {
    switch (slide.type) {
      case "video":
        return (
          
            <VideoSlide slide={slide} />
          
        );
      case "question":
        return (
         
            <QuizSlide slide={slide} />
         
        );
        case "image":
        return (
          
            <ImageSlide slide={slide} />
         
        );
      default:
        return (
          <section key={slide.id}>
            <div className="slide-content">
              <h2 className="text-2xl font-bold ">Unknown Slide Type</h2>
              <p className="text-gray-300">Slide type "{slide.type}" not supported</p>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="slide-container">
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">
          {module.slides?.length > 0
            ? module.slides.map((slide) => renderSlide(slide))
            : <NoSlide />}
        </div>
      </div>
    </div>
  );
};

export default Slider;
