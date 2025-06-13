

const NoSlide = () => {
    return (
        <section>
            <div className="slide-content">
                <h2 className="text-4xl font-bold text-white mb-6">Welcome!</h2>
                <p className="text-xl text-gray-300">No slides added yet. Start creating your presentation!</p>
                <div className="mt-8">
                    <div className="inline-block bg-blue-600/20 backdrop-blur-md rounded-xl p-6">
                        <p className="text-blue-300 text-lg">
                            Add video slides, quiz slides, or image comparison slides to get started.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoSlide