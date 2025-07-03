
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent font-montserrat">
            Ritesh Chauhan
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-montserrat">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors font-medium">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors font-medium">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors font-medium">
              Projects
            </button>
            <button onClick={() => scrollToSection('certifications')} className="hover:text-primary transition-colors font-medium">
              Certifications
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors font-medium">
              Contact
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="ml-4"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
