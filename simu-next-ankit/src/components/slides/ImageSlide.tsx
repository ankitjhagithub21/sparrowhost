import type { Slide } from "@/lib/features/modules/moduleSlice";

interface ImageSlideProps {
  slide: Extract<Slide, { type: "image" }>; 
}

const ImageSlide: React.FC<ImageSlideProps> = ({slide}) => {
  return (
     <section>
      <div className="p-8 text-center">
        <div className="flex justify-center  mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
            <div className=" bg-opacity-10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Real Image</h3>
              <img 
                src={slide.data.realImageUrl} 
                alt="Real" 
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
               
              />
            </div>
            <div className=" bg-opacity-10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Fake Image</h3>
              <img 
                src={slide.data.fakeImageUrl} 
                alt="Fake" 
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default ImageSlide