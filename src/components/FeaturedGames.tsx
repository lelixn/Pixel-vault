import React, { useEffect, useRef } from 'react';
import { Star, Download, Heart, Gamepad } from 'lucide-react';
import { gsap } from 'gsap';

const FeaturedGames: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  
  const games = [
    {
      title: "CYBER LEGENDS",
      genre: "Action RPG",
      price: "$49.99",
      rating: 4.9,
      downloads: "2.3M",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=500",
      color: "electric"
    },
    {
      title: "NEON RACERS",
      genre: "Racing",
      price: "$29.99",
      rating: 4.7,
      downloads: "1.8M",
      image: "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=500",
      color: "hot-pink"
    },
    {
      title: "SPACE WARRIORS",
      genre: "Shooter",
      price: "$39.99",
      rating: 4.8,
      downloads: "3.1M",
      image: "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=500",
      color: "neon-green"
    },
    {
      title: "PIXEL QUEST",
      genre: "Adventure",
      price: "$19.99",
      rating: 4.6,
      downloads: "950K",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=500",
      color: "cyber-yellow"
    }
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Hover animations
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            rotation: 2,
            duration: 0.3,
            ease: 'power2.out'
          });
          
          gsap.to(card.querySelector('.game-image'), {
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
          
          gsap.to(card.querySelector('.game-image'), {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      'electric': 'bg-electric border-electric shadow-electric',
      'hot-pink': 'bg-hot-pink border-hot-pink shadow-hot-pink',
      'neon-green': 'bg-neon-green border-neon-green shadow-neon-green',
      'cyber-yellow': 'bg-cyber-yellow border-cyber-yellow shadow-cyber-yellow'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.electric;
  };

  return (
    <section id="games" className="py-20 bg-neo-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-hot-pink text-white px-6 py-2 border-4 border-black shadow-brutal mb-6 font-bold">
            <Gamepad className="w-5 h-5" />
            <span>FEATURED GAMES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            TOP <span className="text-electric">PICKS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Handpicked games that define the future of gaming. Each one a masterpiece waiting to be discovered.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              ref={el => el && (cardsRef.current[index] = el)}
              className="bg-white border-4 border-black shadow-brutal-lg hover:shadow-brutal-xl transition-all duration-300 cursor-pointer animate-on-scroll group"
            >
              {/* Game Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="game-image w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="p-2 bg-white border-2 border-black shadow-brutal text-black hover:bg-hot-pink hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white border-2 border-black shadow-brutal text-black hover:bg-neon-green transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                {/* Genre Badge */}
                <div className={`absolute bottom-4 left-4 px-3 py-1 text-black font-bold text-sm border-2 border-black ${getColorClasses(game.color)}`}>
                  {game.genre}
                </div>
              </div>

              {/* Game Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-hot-pink transition-colors">
                  {game.title}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-cyber-yellow fill-current" />
                    <span className="text-sm font-bold text-black">{game.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {game.downloads} downloads
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-black">{game.price}</span>
                  <button className={`px-4 py-2 text-black font-bold border-2 border-black shadow-brutal hover:shadow-brutal-color transition-all hover:translate-x-1 hover:translate-y-1 ${getColorClasses(game.color)}`}>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-on-scroll">
          <button className="bg-electric text-black px-8 py-4 border-4 border-black shadow-brutal-lg font-bold text-lg hover:shadow-brutal-xl hover:bg-neon-green transition-all duration-300 hover:-translate-y-2">
            VIEW ALL GAMES
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;