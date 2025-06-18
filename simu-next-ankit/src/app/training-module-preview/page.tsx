'use client';

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import QuizSlide from "@/components/slides/QuizSlide";
import VideoSlide from "@/components/slides/VideoSlide";
import ImageSlide from "@/components/slides/ImageSlide";
import PPTSlide from "@/components/slides/PPTSlide";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { RootState } from "@/lib/store";

const NoSlide = () => (
  <section>
    <div className="slide-content">
      <h2 className="text-2xl font-bold">No Slides</h2>
      <p className="text-gray-300">This module doesn't contain any slides.</p>
    </div>
  </section>
);

const Page = () => {
  const searchParams = useSearchParams();
  const moduleId = searchParams.get("id");

  const module = useSelector((state: RootState) =>
    state.module.modules.find((mod) => mod.id === moduleId)
  );

  const deckDivRef = useRef(null);
  const deckRef = useRef<Reveal.Api | null>(null);

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
        deckRef.current?.sync();
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

  const renderSlide = (slide: any) => {
    switch (slide.type) {
      case "quiz":
        return (
          <section key={slide.id}>
            <QuizSlide slide={slide} />
          </section>
        );
      case "video":
        return (
          <section key={slide.id}>
            <VideoSlide slide={slide} />
          </section>
        );
      case "image":
        return (
          <section key={slide.id}>
            <ImageSlide slide={slide} />
          </section>
        );
      case "ppt":
        return (
          <section key={slide.id}>
            <PPTSlide slide={slide} />
          </section>
        );
      default:
        return (
          <section key={slide.id}>
            <div className="slide-content">
              <h2 className="text-2xl font-bold">Unknown Slide Type</h2>
              <p className="text-gray-300">Slide type "{slide.type}" not supported.</p>
            </div>
          </section>
        );
    }
  };

  if (!module) {
    return <p className="p-4 text-red-500">Module not found.</p>;
  }

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

export default Page;
