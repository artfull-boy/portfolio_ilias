import './App.css';
import HeroSection from './Components/HeroSection/HeroSection.jsx';
import LoadingPage from './Components/LoadingPage/LoadingPage.jsx';
import React, {useState, useEffect} from "react"
import AnimatedCursor from "react-animated-cursor"
import Competence from './Components/competence/Competence.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Work from './Components/work/Work.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function App() {
  const [loading, setLoading] = useState(true);
  
  const lenis = new Lenis()
  
  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })
  
  gsap.ticker.lagSmoothing(0)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
   // Check if the device width is greater than a certain value (e.g., 600px for mobile)
   const isMobile = window.innerWidth <= 600;

  return (
     <div className='flex flex-col gap-20'>
             
      {/*loading ? (
        <LoadingPage />
      ) : (*/
        <>

        <HeroSection />
        <Competence/>
        <Projects />
        <Work />
        <Testimonials />
        <Footer />


        </>
      /*)*/}
      {!isMobile && (
        <AnimatedCursor
          innerSize={10}
          outerSize={20}
          color='0, 0, 255'
          outerAlpha={0.4}
          innerScale={0.5}
          outerScale={5}
        />
      )}
    </div>
  );
}

export default App;
