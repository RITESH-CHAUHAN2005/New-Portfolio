
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';

const Certifications = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [enlargedCard, setEnlargedCard] = useState<number | null>(null);

  const certifications = [
    {
      title: 'JavaScript (Intermediate)',
      issuer: 'HackerRank',
      credentialId: '57FA6B321B2B',
      image: '/lovable-uploads/35c6c217-6742-485f-a48f-899f953350ec.png'
    },
    {
      title: 'Java Training',
      issuer: 'Spoken Tutorial',
      credentialId: '3933745AMZ',
      image: '/lovable-uploads/09a20bc3-b1f6-480e-9fd5-bb470bc1dd0e.png'
    },
    {
      title: 'Advanced CPP',
      issuer: 'Spoken Tutorial',
      credentialId: '3933745AMZ',
      image: '/lovable-uploads/557d3624-8589-46fa-8775-c60727462d8a.png'
    },
    {
      title: 'UXVerse 2025',
      issuer: 'IEEE BPIT',
      credentialId: 'wie/2025/019',
      issued: 'Apr 2025',
      image: '/lovable-uploads/9e227d38-48ab-4685-af59-5864a722900d.png'
    },
    {
      title: 'PHP and MySQL',
      issuer: 'Spoken Tutorial',
      credentialId: '393374527A',
      issued: 'Apr 2025',
      image: '/lovable-uploads/c196e7ce-f81f-4cbe-9d40-309b983c2dea.png'
    },
    {
      title: 'Web Development',
      issuer: 'Jamia Millia Islamia',
      issued: 'May 2025',
      image: '/lovable-uploads/ebf36561-4bd7-496b-94dd-238398615b76.png'
    },
    {
      title: 'CSS (Basic)',
      issuer: 'HackerRank',
      credentialId: '8836A06A373A',
      image: '/lovable-uploads/6815c751-bb53-47a5-b405-f034ebc7ed0d.png'
    }
  ];

  const handleCardClick = (index: number) => {
    setEnlargedCard(index);
  };

  const closeEnlarged = () => {
    setEnlargedCard(null);
  };

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-montserrat">Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="perspective-1000 group h-80"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div 
                className={`relative w-full h-full cursor-pointer transition-all duration-700 transform-style-preserve-3d ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}
                onClick={() => handleCardClick(index)}
              >
                {/* Front of card */}
                <Card className="absolute inset-0 backface-hidden w-full h-full hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-blue-600/10 h-full border-2 border-primary/20">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white font-montserrat">
                        {cert.title.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-montserrat">{cert.title}</h3>
                    <p className="text-muted-foreground mb-2 text-base font-medium font-montserrat">{cert.issuer}</p>
                    {cert.credentialId && (
                      <p className="text-sm text-muted-foreground mb-2 font-montserrat">
                        ID: {cert.credentialId}
                      </p>
                    )}
                    {cert.issued && (
                      <p className="text-sm text-muted-foreground mb-3 font-montserrat">
                        Issued: {cert.issued}
                      </p>
                    )}
                    <div className="mt-auto text-xs text-muted-foreground font-montserrat">
                      Hover to view • Click to enlarge
                    </div>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full">
                  <CardContent className="p-2 flex items-center justify-center h-full bg-white overflow-hidden">
                    <img 
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Enlarged Certificate Modal */}
        {enlargedCard !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeEnlarged}>
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={closeEnlarged}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              <img 
                src={certifications[enlargedCard].image}
                alt={`${certifications[enlargedCard].title} Certificate`}
                className="w-full h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
