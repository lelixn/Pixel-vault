import React, { useEffect, useRef } from 'react';
import { Play, Zap, Star } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Title animation
    if (titleRef.current) {
      const chars = titleRef.current.textContent?.split('') || [];
      titleRef.current.innerHTML = chars.map(char => 
        char === ' ' ? ' ' : `<span class="inline-block">${char}</span>`
      ).join('');
      
      tl.fromTo(titleRef.current.children,
        { y: 100, opacity: 0, rotation: 45 },
        { 
          y: 0, 
          opacity: 1, 
          rotation: 0,
          duration: 0.8, 
          stagger: 0.05,
          ease: 'back.out(1.7)'
        }
      );
    }

    // Floating elements animation
    floatingElementsRef.current.forEach((element, index) => {
      if (element) {
        gsap.to(element, {
          y: -20,
          rotation: 360,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.5
        });
      }
    });

    // Background elements parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          const speed = (index + 1) * 0.02;
          const x = (clientX - centerX) * speed;
          const y = (clientY - centerY) * speed;
          
          gsap.to(element, {
            x: x,
            y: y,
            duration: 1,
            ease: 'power2.out'
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-purple via-neo-black to-dark-purple">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          ref={el => el && (floatingElementsRef.current[0] = el)}
          className="absolute top-20 left-10 w-16 h-16 bg-electric border-4 border-black opacity-20"
        />
        <div 
          ref={el => el && (floatingElementsRef.current[1] = el)}
          className="absolute top-40 right-20 w-20 h-20 bg-hot-pink border-4 border-black opacity-20"
        />
        <div 
          ref={el => el && (floatingElementsRef.current[2] = el)}
          className="absolute bottom-40 left-20 w-12 h-12 bg-neon-green border-4 border-black opacity-20"
        />
        <div 
          ref={el => el && (floatingElementsRef.current[3] = el)}
          className="absolute bottom-20 right-10 w-24 h-24 bg-cyber-yellow border-4 border-black opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-electric text-black px-6 py-2 border-4 border-black shadow-brutal mb-8 font-bold">
            <Zap className="w-5 h-5" />
            <span>LEVEL UP YOUR GAMING</span>
          </div>

          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none"
          >
            PIXEL VAULT
          </h1>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-up">
              THE ULTIMATE GAMING DESTINATION
            </p>
            <p className="text-lg text-gray-400 animate-slide-up">
              Discover thousands of games, from indie gems to AAA blockbusters. 
              Get ready to experience gaming like never before.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <button className="group bg-neon-green text-black px-8 py-4 border-4 border-black shadow-brutal-lg font-bold text-lg hover:shadow-brutal-xl hover:bg-cyber-yellow transition-all duration-300 hover:-translate-y-2 flex items-center space-x-3">
              <Play className="w-6 h-6 group-hover:animate-pulse" />
              <span>EXPLORE GAMES</span>
            </button>
            
            <button className="group bg-transparent text-white px-8 py-4 border-4 border-electric shadow-brutal-color shadow-electric font-bold text-lg hover:bg-electric hover:text-black transition-all duration-300 hover:-translate-y-2 flex items-center space-x-3">
              <Star className="w-6 h-6 group-hover:animate-spin" />
              <span>TOP RATED</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-slide-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-electric mb-2">10K+</div>
              <div className="text-sm text-gray-400 font-medium">GAMES</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-hot-pink mb-2">1M+</div>
              <div className="text-sm text-gray-400 font-medium">PLAYERS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-green mb-2">24/7</div>
              <div className="text-sm text-gray-400 font-medium">SUPPORT</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-4 border-electric rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;