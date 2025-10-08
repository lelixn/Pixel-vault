import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, Gift } from 'lucide-react';
import { gsap } from 'gsap';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      
      // Animate form out and success message in
      if (formRef.current && successRef.current) {
        gsap.to(formRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            gsap.fromTo(successRef.current!,
              { opacity: 0, y: 50, scale: 0.8 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
            );
          }
        });
      }
    }
  };

  useEffect(() => {
    // Floating animation for gift icon
    const giftElement = document.querySelector('.gift-float');
    if (giftElement) {
      gsap.to(giftElement, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-dark-purple via-neo-black to-dark-purple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-electric/20 border-4 border-electric/30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-hot-pink/20 border-4 border-hot-pink/30 animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-neon-green/20 border-4 border-neon-green/30 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-on-scroll">
          {/* Gift Icon */}
          <div className="gift-float inline-flex items-center justify-center w-16 h-16 bg-cyber-yellow text-black border-4 border-black shadow-brutal-lg mb-8">
            <Gift className="w-8 h-8" />
          </div>

          {/* Header */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            GET <span className="text-electric">EXCLUSIVE</span> DEALS
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our newsletter and get early access to new games, exclusive discounts, and insider gaming news!
          </p>

          {!isSubmitted ? (
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@game.com"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white border-4 border-black shadow-brutal text-black font-medium focus:outline-none focus:shadow-brutal-color focus:shadow-electric transition-all placeholder-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-neon-green text-black px-8 py-4 border-4 border-black shadow-brutal font-bold hover:shadow-brutal-lg hover:bg-electric transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>SUBSCRIBE</span>
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                🎮 Get 20% off your first purchase • 🔥 Weekly game drops • 📧 No spam, unsubscribe anytime
              </p>
            </form>
          ) : (
            <div 
              ref={successRef}
              className="opacity-0"
            >
              <div className="bg-neon-green text-black p-8 border-4 border-black shadow-brutal-xl max-w-md mx-auto">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-4">WELCOME TO THE VAULT!</h3>
                <p className="font-medium mb-4">
                  Check your email for your exclusive 20% discount code!
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmail('');
                  }}
                  className="bg-black text-neon-green px-6 py-2 border-2 border-black shadow-brutal font-bold hover:bg-hot-pink hover:text-white transition-colors"
                >
                  SUBSCRIBE ANOTHER
                </button>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-electric text-black border-4 border-black shadow-brutal mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                20%
              </div>
              <h4 className="font-bold text-white mb-2">INSTANT DISCOUNT</h4>
              <p className="text-gray-400 text-sm">Get 20% off your first purchase immediately</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-hot-pink text-white border-4 border-black shadow-brutal mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                ⚡
              </div>
              <h4 className="font-bold text-white mb-2">EARLY ACCESS</h4>
              <p className="text-gray-400 text-sm">Be first to play new releases</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyber-yellow text-black border-4 border-black shadow-brutal mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                📰
              </div>
              <h4 className="font-bold text-white mb-2">GAMING NEWS</h4>
              <p className="text-gray-400 text-sm">Weekly insider gaming updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;