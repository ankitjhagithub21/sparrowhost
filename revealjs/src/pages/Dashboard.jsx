import { useState } from "react";
import CreateQuizSlide from "../components/CreateQuizSlide";
import CreateVideoSlide from "../components/CreateVideoSlide";
import CreateImageComparisonSlide from "../components/CreateImageComparisonSlide";

const Dashboard = () => {
  const slideTypes = ["quiz", "video", "image"];
  const [type, setType] = useState(slideTypes[0]);

  return (
    <div>
      <div className="mt-20">
        <h2 className="text-3xl text-center">Create Slide</h2>
        <div className="flex items-center justify-center gap-5 p-5">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-4 py-2 rounded-lg outline-none text-gray-800 border-2 border-gray-300 cursor-pointer"
          >
            <option value="quiz">Quiz Slide</option>
            <option value="video">Video Slide</option>
            <option value="image">Image Comparison Slide</option>
          </select>
        </div>
      </div>

      <section>
        {type === "quiz" && <CreateQuizSlide />}
        {type === "video" && <CreateVideoSlide />}
        {type === "image" && <CreateImageComparisonSlide />}
      </section>
    </div>
  );
};

export default Dashboard;
