
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Dukaan',
      description: 'A sustainable e-commerce concept designed to empower local sellers and promote eco-friendly shopping. The project focuses on minimal digital infrastructure, low-carbon design, and supporting small businesses through technology.',
      link: 'https://dukaan-fib7wwz2h-ritesh-chauhans-projects.vercel.app/',
      technologies: ['React.js', 'Sustainability', 'E-commerce', 'Local Business'],
      image: '/lovable-uploads/16d212eb-339f-4429-8767-de97f07fa958.png'
    },
    {
      title: 'VIDFLYY',
      description: 'A full-fledged marketing platform website built to boost YouTube channel growth through smart video promotion strategies. The site includes multiple sections like features, success stories, pricing plans, and a strong call-to-action flow — all wrapped in a clean, conversion-focused UI.',
      link: 'https://vidflyy-main.vercel.app/',
      technologies: ['React.js', 'Marketing Platform', 'YouTube Growth', 'Conversion UI'],
      image: '/lovable-uploads/f9a109d1-1ec0-48a8-ba6e-fc252b1c61bc.png'
    },
    {
      title: 'OxygenOasis',
      description: 'A professional healthcare e-commerce website focused on promoting premium oxygen solutions and respiratory support products. Built with a clean, accessible UI and soft visual aesthetics, the site ensures trust, clarity, and user-friendliness for patients and caregivers.',
      link: 'https://oxygen-oasis.vercel.app/',
      technologies: ['Healthcare', 'E-commerce', 'Accessibility', 'Medical UI'],
      image: '/lovable-uploads/549e76c5-58ae-42fe-a743-5be62c71a6d5.png'
    },
    {
      title: 'HyGear',
      description: 'A modern footwear brand website built to showcase trendy collections with bold visuals, smooth navigation, and responsive e-commerce features like wishlist, cart, and login.',
      link: 'https://hygearfashion.com/',
      technologies: ['E-commerce', 'Fashion', 'Responsive Design', 'Modern UI'],
      image: '/lovable-uploads/6c61b655-49ab-48fe-bca4-85b11a23c66e.png'
    },
    {
      title: 'Chaotic Jack',
      description: 'A dynamic digital agency website crafted to showcase bold branding, animated sections, and multi-page smooth navigation. Designed for impact, it blends modern layouts with interactive UI to attract creative clients and businesses.',
      link: 'https://chaoticjack.in/',
      technologies: ['Digital Agency', 'Animations', 'Interactive UI', 'Bold Design'],
      image: '/lovable-uploads/aeb251e5-a8db-42cc-a8ce-2fc53f03886d.png'
    },
    {
      title: 'Oxygen4India',
      description: 'Reliable oxygen concentrators, CPAP & BPAP devices, wheelchairs, and essential accessories to support your well-being every day.',
      link: 'https://oxygen4india.com/',
      technologies: ['Healthcare', 'Medical Equipment', 'E-commerce', 'Accessibility'],
      image: '/lovable-uploads/0ab8ccdc-f5d5-431a-ab3d-aa3b87090022.png'
    }
  ];

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-montserrat">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="h-48 rounded-t-lg relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg font-montserrat">
                  {project.title}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors font-montserrat">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-sm mb-4 leading-relaxed font-montserrat">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-xs rounded-md font-montserrat"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  onClick={() => handleProjectClick(project.link)}
                  className="w-full font-montserrat"
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
