import {useEffect,useRef} from "react"
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import {useSelector} from "react-redux"

const Slider = () => {
  const {slides} = useSelector(state=>state.app)
  const deckDivRef = useRef(null) // reference to deck container div
  const deckRef = useRef(null) // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide"
      // other config options
    })

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    })

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy()
          deckRef.current = null
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.")
      }
    }
  }, [])

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
   <main className="slide-container">
     <div className="reveal" ref={deckDivRef}>
      <div className="slides">
       <section>Slide 1</section>
       <section>Slide 2</section>
      </div>
    </div>
   </main>
  )
}

export default Slider
