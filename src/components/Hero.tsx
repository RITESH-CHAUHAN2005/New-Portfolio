
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-600/10 animate-pulse" />
      
      <div className="container mx-auto px-4 text-center relative z-10 flex-1 flex flex-col justify-center">
        <div className="animate-fade-in">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent leading-tight cursor-pointer hover:scale-105 transition-transform duration-300 font-montserrat"
            onClick={scrollToTop}
          >
            Hi, I'm Ritesh Chauhan
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed font-montserrat">
            A creative <span className="text-primary font-semibold">Frontend UI Developer</span> who transforms ideas into 
            stunning digital experiences with interactive animations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground px-8 py-3 text-lg font-montserrat button-hover"
            >
              Explore My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="px-8 py-3 text-lg font-montserrat button-hover"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
        
      <div 
        className="pb-8 flex justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={scrollToAbout}
      >
        <ArrowDown className="h-8 w-8 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
