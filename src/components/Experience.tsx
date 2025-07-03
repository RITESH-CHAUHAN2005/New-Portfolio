
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'SOUL AI',
      role: 'Frontend Developer Intern',
      duration: '2024',
      description: 'Developed 2-3 interactive UI projects using React.js, focusing on creating responsive and user-friendly interfaces. Collaborated with the team to implement modern design patterns and optimize component performance for better user experience.',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'UI/UX']
    },
    {
      company: 'MDM Consulting Agency',
      role: 'Web Developer',
      duration: '2025',
      description: 'Specialized in WordPress development, creating custom themes and plugins to meet client requirements. Built responsive websites, optimized performance, and integrated various third-party services to enhance functionality.',
      technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'Custom Themes']
    },
    {
      company: 'Gaura Nitai Company',
      role: 'React.js Developer',
      duration: '2025',
      description: 'Focused on building scalable UI components and implementing TypeScript-based integrated solutions. Developed complex user interfaces with emphasis on code quality, type safety, and maintainable architecture.',
      technologies: ['React.js', 'TypeScript', 'Component Architecture', 'State Management']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-montserrat">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors font-montserrat">
                      {exp.role}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary mt-1 font-montserrat">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <span className="text-muted-foreground font-medium mt-2 md:mt-0 font-montserrat">
                    {exp.duration}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed font-montserrat">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors font-montserrat"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
