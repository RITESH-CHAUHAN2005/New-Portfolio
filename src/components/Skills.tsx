
import React from 'react';
import { Code2, Paintbrush, Zap, Globe, Database, Monitor } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Frontend Development",
      skills: ["React.js", "TypeScript", "Next.js", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "UI/UX Design",
      skills: ["Tailwind CSS", "CSS3", "Responsive Design", "UI/UX"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Animation & Motion",
      skills: ["GSAP", "Framer Motion", "CSS Animations", "Interactive UI"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Technologies",
      skills: ["HTML5", "WordPress", "Git/GitHub", "Vite"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Basics",
      skills: ["PHP", "MySQL", "REST APIs", "Node.js"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Development Tools",
      skills: ["VS Code", "Chrome DevTools", "Figma", "NPM/Yarn"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-montserrat">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="group relative bg-card rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 will-change-transform"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 font-montserrat">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-muted text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-200 font-montserrat"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
