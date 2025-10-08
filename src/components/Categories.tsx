import React, { useRef, useEffect } from 'react';
import { Sword, Car, Zap, Puzzle, Crown, Gamepad2 } from 'lucide-react';
import { gsap } from 'gsap';

const Categories: React.FC = () => {
  const categoriesRef = useRef<HTMLDivElement[]>([]);
  
  const categories = [
    {
      icon: Sword,
      title: "ACTION",
      count: "2,435",
      color: "hot-pink",
      description: "Intense battles and epic adventures"
    },
    {
      icon: Car,
      title: "RACING",
      count: "1,234",
      color: "electric",
      description: "High-speed thrills and competition"
    },
    {
      icon: Zap,
      title: "SHOOTER",
      count: "1,876",
      color: "neon-green",
      description: "Precision aiming and tactical gameplay"
    },
    {
      icon: Puzzle,
      title: "PUZZLE",
      count: "987",
      color: "cyber-yellow",
      description: "Mind-bending challenges await"
    },
    {
      icon: Crown,
      title: "STRATEGY",
      count: "1,543",
      color: "hot-pink",
      description: "Command armies and build empires"
    },
    {
      icon: Gamepad2,
      title: "INDIE",
      count: "3,210",
      color: "electric",
      description: "Creative and unique experiences"
    }
  ];

  useEffect(() => {
    categoriesRef.current.forEach((category, index) => {
      if (category) {
        const handleMouseEnter = () => {
          gsap.to(category, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: 'back.out(1.7)'
          });
          
          gsap.to(category.querySelector('.category-icon'), {
            rotation: 360,
            duration: 0.5,
            ease: 'power2.out'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(category, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        };

        category.addEventListener('mouseenter', handleMouseEnter);
        category.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          category.removeEventListener('mouseenter', handleMouseEnter);
          category.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      'electric': 'bg-electric hover:bg-electric/90',
      'hot-pink': 'bg-hot-pink hover:bg-hot-pink/90',
      'neon-green': 'bg-neon-green hover:bg-neon-green/90',
      'cyber-yellow': 'bg-cyber-yellow hover:bg-cyber-yellow/90'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.electric;
  };

  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-neo-black to-dark-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-neon-green text-black px-6 py-2 border-4 border-black shadow-brutal mb-6 font-bold">
            <Gamepad2 className="w-5 h-5" />
            <span>GAME CATEGORIES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            FIND YOUR <span className="text-neon-green">GENRE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From heart-pounding action to mind-bending puzzles, discover games that match your style.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                ref={el => el && (categoriesRef.current[index] = el)}
                className={`${getColorClasses(category.color)} text-black p-8 border-4 border-black shadow-brutal-lg cursor-pointer transition-all duration-300 hover:shadow-brutal-xl group animate-on-scroll`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`category-icon p-4 bg-black text-white border-4 border-black shadow-brutal`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{category.count}</div>
                    <div className="text-sm font-medium opacity-80">GAMES</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform">
                  {category.title}
                </h3>
                
                <p className="text-black/80 font-medium">
                  {category.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 h-2 bg-black/20 border-2 border-black">
                  <div 
                    className="h-full bg-black transition-all duration-1000 group-hover:w-full"
                    style={{ width: `${Math.random() * 60 + 40}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Browse All Button */}
        <div className="text-center mt-12 animate-on-scroll">
          <button className="bg-transparent text-electric px-8 py-4 border-4 border-electric shadow-brutal-color shadow-electric font-bold text-lg hover:bg-electric hover:text-black transition-all duration-300 hover:-translate-y-2">
            BROWSE ALL CATEGORIES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;