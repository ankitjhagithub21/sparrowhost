const VideoSlide = ({ slide }) => {
  return (
    <section>
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">{slide.content.title}</h2>
        <div className="flex justify-center items-center mb-6">
          <video
            controls
            className="rounded-lg shadow-lg max-w-4xl h-auto w-full "
          >
            <source src={slide.content.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-lg  max-w-4xl mx-auto leading-relaxed">
          {slide.content.description}
        </p>
      </div>
    </section>
  )
}

export default VideoSlide