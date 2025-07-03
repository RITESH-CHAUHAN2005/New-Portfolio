
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-96 h-[500px] mx-auto">
              <img 
                src="/lovable-uploads/be90a690-99eb-403b-bba0-6b87b0427d0b.png"
                alt="Ritesh Chauhan"
                className="w-full h-full object-cover rounded-2xl border-4 border-background shadow-2xl relative z-10 hover:scale-105 transition-all duration-500 hover:rotate-1 hover:shadow-3xl animate-float"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6 font-montserrat">About Me</h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground font-montserrat">
              <p className="mb-4 font-montserrat">
                I'm a creative frontend developer passionate about delivering smooth, animated, and engaging digital experiences. I don't just build interfaces—I design stories that users interact with, turning ideas into seamless visual journeys.
              </p>
              
              <p className="mb-4 font-montserrat">
                Currently scaling my problem-solving skills with DSA and exploring full-stack development. I've built multi-page animated landing pages, performance-driven user flows, and scalable design systems that have powered client websites and boosted user engagement.
              </p>
              
              <p className="font-montserrat">
                I believe in building things that not only look good but feel right. Whether it's improving page transitions or bringing life to button hovers, I obsess over details that create delight. Always in builder mode, working towards high-quality freelance projects and collaborating with top-tier companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
