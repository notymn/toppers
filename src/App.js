import React, { useState, useRef } from 'react';
import { Clock, Menu, X, ChevronDown } from 'lucide-react';
import mainVideo from './main-vid.mp4';  // Adjust the path as necessary

const GroomingForMen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutUsRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    { name: 'Haircut', image: 'https://images.unsplash.com/photo-1657105052497-f996284ffff8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Beard Trim', image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Braids', image: 'https://cdn.discordapp.com/attachments/1243667706620936242/1286046174566023291/Snapinsta.app_456704700_814321890544868_5499188419235366688_n_1080.jpg?ex=66ec7b55&is=66eb29d5&hm=f6ef240d093959012cf3f591d179739b70bcfb083d10a099bf3ab7256cff7823&' },
    { name: 'Color Treatment', image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="h-screen flex flex-col relative overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute z-0 w-full h-full object-cover"
        >
          <source src={mainVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <header className="container mx-auto px-4 py-8 flex justify-between items-center relative z-10">
          <div className="text-xl font-bold">TOPPERS BARBER</div>
          <button className="hidden md:block bg-[#c9a77c] text-black px-4 py-2 rounded hover:bg-[#b08e6d] transition-colors">
            SCHEDULE AN APPOINTMENT
          </button>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
        
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block container mx-auto px-4 mb-8 md:mb-0 relative z-10`}>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => scrollToSection(servicesRef)} className="hover:text-[#c9a77c] transition-colors">SERVICES</button></li>
            <li><button onClick={() => scrollToSection(galleryRef)} className="hover:text-[#c9a77c] transition-colors">GALLERY</button></li>
            <li><button onClick={() => scrollToSection(aboutUsRef)} className="hover:text-[#c9a77c] transition-colors">ABOUT US</button></li>
          </ul>
        </nav>
        
        <div className="flex-grow flex flex-col justify-center items-center text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">TOPPERS BARBER</h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8">GROOMING for MEN</h2>
          <a onClick={() => scrollToSection(servicesRef)}><ChevronDown size={40} className="animate-bounce" /></a>
        </div>
      </div>

      <section ref={servicesRef} className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">1000$</p>
                  <button className="bg-[#c9a77c] text-white font-semibold px-6 py-2 rounded-full w-full hover:bg-[#b08e6d] transition-all duration-300 transform hover:scale-105 shadow-md">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={galleryRef} className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
 
              <div  className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img src={`https://cdn.discordapp.com/attachments/1243667706620936242/1286047314208751636/Snapinsta.app_449206892_982668219988735_4635329686769705017_n_1080.jpg?ex=66ec7c65&is=66eb2ae5&hm=f71d5eb84cf9875711e50fbffe3388ac7c14aa9d7d1e9959f827030507eb8a45&`} alt={`Gallery image`} className="w-full h-full object-cover" />
              </div>
              <div  className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img src={`https://cdn.discordapp.com/attachments/1243667706620936242/1286047334790070282/Snapinsta.app_449277142_777697090880362_4690285644908171370_n_1080.jpg?ex=66ec7c6a&is=66eb2aea&hm=bf60431a7f26aeecc3e4869d8df181f364a9df949104bc155b1686baafc14761&`} alt={`Gallery image`} className="w-full h-full object-cover" />
              </div>
          </div>
        </div>
      </section>

      <section ref={aboutUsRef} className="bg-[#c9a77c] text-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-center max-w-2xl mx-auto">
            At Toppers Barber, we're passionate about providing top-notch grooming services for men. 
            Our experienced team of barbers and stylists are dedicated to helping you look and feel your best. 
            With a focus on quality, style, and client satisfaction, we've been serving our community for over a decade.
          </p>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-[#c9a77c] rounded-full p-2">
        <Clock size={24} color="black" />
      </div>
    </div>
  );
};

export default GroomingForMen;