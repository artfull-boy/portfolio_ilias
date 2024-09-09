import React, { useEffect, useRef } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './HeroSection.css';
import bg from '../../images/background.png';
import v1 from '../../images/Vector-1.png';
import v2 from '../../images/Vector.png';
import gsap from 'gsap';

function HeroSection() {
  const [blinking, setBlinking] = React.useState(true)
  const [text] = useTypewriter({
    words: ["Software Engineer", "Frontend Developer", "UX/UI Designer"],
    loop: true, // Assuming you want the typewriter effect to loop
    typeSpeed: 120,
    deleteSpeed: 100,
    onDelete: ()=> {
      setBlinking(false)
    },
    onType: () => {
      setBlinking(true)
    }

  });

  const magnetoRef = useRef(null);
  const magnetoTextRef = useRef(null);

  useEffect(() => {
    const magneto = magnetoRef.current;
    const magnetoText = magnetoTextRef.current;

    const activateMagneto = (event) => {
      let boundBox = magneto.getBoundingClientRect();
      const magnetoStrength = 40;
      const magnetoTextStrength = 40;
    //boundBox takes the position of the end points of the element top left right bottom selon X
      const newX = (((event.clientX - boundBox.left) / magneto.offsetWidth) - 0.5);
      const newY = ((event.clientY - boundBox.top) / magneto.offsetHeight) - 0.5;

      gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: "Power4.easeOut",
      });

      gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: "Power4.easeOut",
      });
    };

    const resetMagneto = () => {
      gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: "Elastic.easeOut",
      });
      gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: "Elastic.easeOut",
      });
    };

    if (magneto) {
      magneto.addEventListener("mousemove", activateMagneto);
      magneto.addEventListener("mouseleave", resetMagneto);
    }

    // Cleanup function to remove event listeners
    return () => {
      if (magneto) {
        magneto.removeEventListener("mousemove", activateMagneto);
        magneto.removeEventListener("mouseleave", resetMagneto);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section id="hero">
        <img className='bgImg' src={bg} alt="Background" />
        <img className='bgvec' src={v1} alt="Vector 1" />
        <img className='bgvec1' src={v2} alt="Vector 2" />
        <h1>Hi I'm Ilias Rais, a <br/>
            <span id="typewrite">{text}</span>
            <Cursor cursorStyle="|" cursorBlinking={blinking} />
        </h1>
        <p className='description'>
        Who picks a book by its cover... <br/>
        Because if the cover doesn't grab you, what else will?
        </p>
        <div className='button'>
            <a href={`${import.meta.env.VITE_PUBLIC_URL}/CV.pdf`} download='Ilias Rais.pdf'>
            <button className='primary' ref={magnetoRef}>
                <span className='text font-medium' ref={magnetoTextRef}>
                My Resume
                </span>
            </button>
            </a>

        </div>
    </section>
  );
}

export default HeroSection;
