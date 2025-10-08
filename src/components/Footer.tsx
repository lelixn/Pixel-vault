import React from 'react';
import { Gamepad2, Twitter, Youtube, Disc as Discord, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Games: ['New Releases', 'Top Rated', 'Free Games', 'Coming Soon', 'Pre-Orders'],
    Categories: ['Action', 'Adventure', 'RPG', 'Shooter', 'Racing', 'Indie'],
    Support: ['Help Center', 'Contact Us', 'Bug Reports', 'Community', 'Refunds'],
    Company: ['About Us', 'Careers', 'Press Kit', 'Blog', 'Investors']
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', color: 'electric' },
    { icon: Youtube, label: 'YouTube', color: 'hot-pink' },
    { icon: Discord, label: 'Discord', color: 'neon-green' },
    { icon: Instagram, label: 'Instagram', color: 'cyber-yellow' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'electric': 'bg-electric hover:bg-electric/80',
      'hot-pink': 'bg-hot-pink hover:bg-hot-pink/80',
      'neon-green': 'bg-neon-green hover:bg-neon-green/80',
      'cyber-yellow': 'bg-cyber-yellow hover:bg-cyber-yellow/80'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.electric;
  };

  return (
    <footer className="bg-neo-black border-t-4 border-electric">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-electric p-3 border-4 border-black shadow-brutal">
                  <Gamepad2 className="w-8 h-8 text-black" />
                </div>
                <span className="text-3xl font-bold text-electric">PIXEL VAULT</span>
              </div>
              
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                The ultimate destination for gamers. Discover, play, and connect with the best games from around the world.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-electric" />
                  <span>support@pixelvault.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-neon-green" />
                  <span>1-800-PIXEL-VAULT</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-hot-pink" />
                  <span>Gaming District, Cyber City</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={index}
                      className={`p-3 ${getColorClasses(social.color)} text-black border-4 border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-300 hover:-translate-y-1`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-white font-bold text-lg mb-6 border-b-2 border-electric pb-2">
                    {category.toUpperCase()}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200 font-medium"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t-2 border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">STAY IN THE GAME</h4>
              <p className="text-gray-400">Get the latest updates and exclusive offers</p>
            </div>
            <button className="bg-hot-pink text-white px-8 py-3 border-4 border-black shadow-brutal font-bold hover:shadow-brutal-lg hover:bg-neon-green hover:text-black transition-all duration-300 hover:-translate-y-1">
              JOIN NEWSLETTER
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-medium">
              © 2025 PIXEL VAULT. ALL RIGHTS RESERVED. LEVEL UP YOUR GAMING EXPERIENCE.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-electric transition-colors font-medium">
                PRIVACY POLICY
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors font-medium">
                TERMS OF SERVICE
              </a>
              <a href="#" className="text-gray-400 hover:text-hot-pink transition-colors font-medium">
                COOKIES
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;