import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import Works from './sections/Works';
import Lenis from 'lenis';
import ReactLenis from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Agency from './sections/Agency';

function App() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Adjust for smoothness
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      gsap.ticker.add(() => lenis.raf(performance.now()));
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      gsap.ticker.remove(() => lenis.raf(performance.now()));
    };
  }, []);

  return (
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/works" element={<Works />} />
          <Route path='/agency' element={<Agency/>}/>
        </Routes>
      </div>
  );
}

export default App;
