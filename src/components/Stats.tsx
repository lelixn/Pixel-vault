import React, { useEffect, useRef } from 'react';
import { Users, Download, Star, Trophy } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Stats: React.FC = () => {
  const statsRef = useRef<HTMLDivElement[]>([]);
  const numbersRef = useRef<HTMLSpanElement[]>([]);

  const stats = [
    {
      icon: Users,
      number: 2500000,
      suffix: "+",
      label: "ACTIVE PLAYERS",
      color: "electric"
    },
    {
      icon: Download,
      number: 15000000,
      suffix: "+",
      label: "TOTAL DOWNLOADS",
      color: "neon-green"
    },
    {
      icon: Star,
      number: 98,
      suffix: "%",
      label: "SATISFACTION RATE",
      color: "cyber-yellow"
    },
    {
      icon: Trophy,
      number: 150,
      suffix: "+",
      label: "AWARDS WON",
      color: "hot-pink"
    }
  ];

  useEffect(() => {
    // Animate numbers on scroll
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        ScrollTrigger.create({
          trigger: stat,
          start: 'top 80%',
          onEnter: () => {
            const numberElement = numbersRef.current[index];
            if (numberElement) {
              gsap.fromTo(numberElement, 
                { innerHTML: 0 },
                {
                  innerHTML: stats[index].number,
                  duration: 2,
                  ease: 'power2.out',
                  snap: { innerHTML: 1 },
                  onUpdate: function() {
                    numberElement.innerHTML = Math.ceil(this.targets()[0].innerHTML).toLocaleString();
                  }
                }
              );
            }

            // Icon animation
            gsap.fromTo(stat.querySelector('.stat-icon'),
              { scale: 0, rotation: -180 },
              { scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.7)' }
            );
          }
        });

        // Hover effects
        const handleMouseEnter = () => {
          gsap.to(stat, {
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out'
          });
          
          gsap.to(stat.querySelector('.stat-icon'), {
            rotation: 360,
            duration: 0.6,
            ease: 'power2.out'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(stat, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        };

        stat.addEventListener('mouseenter', handleMouseEnter);
        stat.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          stat.removeEventListener('mouseenter', handleMouseEnter);
          stat.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      'electric': 'bg-electric border-electric',
      'neon-green': 'bg-neon-green border-neon-green',
      'cyber-yellow': 'bg-cyber-yellow border-cyber-yellow',
      'hot-pink': 'bg-hot-pink border-hot-pink'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.electric;
  };

  return (
    <section className="py-20 bg-neo-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            BY THE <span className="text-electric">NUMBERS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our community continues to grow every day. Join millions of gamers worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                ref={el => el && (statsRef.current[index] = el)}
                className="text-center bg-white border-4 border-black shadow-brutal-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-brutal-xl animate-on-scroll"
              >
                <div className={`stat-icon inline-flex items-center justify-center w-16 h-16 ${getColorClasses(stat.color)} text-black border-4 border-black shadow-brutal mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <div className="mb-4">
                  <span 
                    ref={el => el && (numbersRef.current[index] = el)}
                    className="text-4xl md:text-5xl font-bold text-black"
                  >
                    0
                  </span>
                  <span className="text-4xl md:text-5xl font-bold text-black">
                    {stat.suffix}
                  </span>
                </div>
                
                <p className="text-black font-bold text-sm tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="inline-block bg-hot-pink text-white px-8 py-4 border-4 border-black shadow-brutal-lg font-bold text-lg">
            JOIN THE PIXEL VAULT COMMUNITY TODAY!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;