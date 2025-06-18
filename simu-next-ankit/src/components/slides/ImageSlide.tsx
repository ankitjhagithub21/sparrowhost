

const ImageSlide = ({slide}) => {
  return (
     <section>
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">{slide.content.title}</h2>
        <div className="flex justify-center  mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
            <div className=" bg-opacity-10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Real Image</h3>
              <img 
                src={slide.content.realImageUrl} 
                alt="Real" 
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
               
              />
            </div>
            <div className=" bg-opacity-10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Fake Image</h3>
              <img 
                src={slide.content.fakeImageUrl} 
                alt="Fake" 
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              
              />
            </div>
          </div>
        </div>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          {slide.content.description}
        </p>
      </div>
    </section>
  )
}

export default ImageSlide