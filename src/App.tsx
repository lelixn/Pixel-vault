import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedGames from './components/FeaturedGames';
import Categories from './components/Categories';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Main timeline for page load
    const tl = gsap.timeline();
    
    tl.from('.animate-slide-up', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
    });

    // Scroll-triggered animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
      gsap.fromTo(element, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={appRef} className="bg-neo-black text-white font-space overflow-x-hidden">
      <Header />
      <Hero />
      <FeaturedGames />
      <Categories />
      <Stats />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;