
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919818303762";
    const message = "Hi Ritesh! I'm interested in working with you on my project.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ritesh-chauhan-739775324/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/RITESH-CHAUHAN2005', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:riteshchauhan43792@gmail.com';
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-montserrat">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* LinkedIn */}
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <Linkedin className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 font-montserrat">LinkedIn</h3>
                <p className="text-muted-foreground mb-4 font-montserrat">Connect with me professionally</p>
                <Button 
                  variant="outline" 
                  className="w-full font-montserrat button-hover"
                  onClick={handleLinkedInClick}
                >
                  Connect
                </Button>
              </CardContent>
            </Card>

            {/* GitHub */}
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <Github className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-montserrat">GitHub</h3>
                <p className="text-muted-foreground mb-4 font-montserrat">View my repositories</p>
                <Button 
                  variant="outline" 
                  className="w-full font-montserrat button-hover"
                  onClick={handleGitHubClick}
                >
                  Follow
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 mx-auto text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 font-montserrat">WhatsApp</h3>
                <p className="text-muted-foreground mb-4 font-montserrat">Message me directly</p>
                <Button 
                  variant="outline" 
                  className="w-full font-montserrat button-hover"
                  onClick={handleWhatsAppClick}
                >
                  Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Direct Contact Info */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 font-montserrat">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6 font-montserrat">
                Ready to bring your ideas to life? Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 font-montserrat button-hover"
                  onClick={handleEmailClick}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  riteshchauhan43792@gmail.com
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
