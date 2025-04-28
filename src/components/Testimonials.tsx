
import { useState } from "react";

const testimonials = [
  {
    name: "Rafael Santos",
    role: "Flamenguista",
    avatar: "https://i.pravatar.cc/150?img=1",
    quote: "Usei no jogo do Flamengo e ganhei um NFT do gol do título! Agora tenho um pedaço da história do meu time."
  },
  {
    name: "Amanda Lima",
    role: "Corinthiana",
    avatar: "https://i.pravatar.cc/150?img=5",
    quote: "Super fácil de usar! Comprei com PIX e recebi meu ingresso na hora. A experiência no estádio foi incrível."
  },
  {
    name: "Roberto Alves",
    role: "Palmeirense",
    avatar: "https://i.pravatar.cc/150?img=3",
    quote: "Consegui revender meu ingresso quando não pude ir, e o processo foi super tranquilo e seguro."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
          O que dizem nossos <span className="text-gradient-primary">usuários</span>
        </h2>
        
        <div className="relative bg-card rounded-2xl shadow-lg p-8">
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/50 flex items-center justify-center hover:bg-background/80 transition-colors"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          
          <div className="flex flex-col items-center text-center px-4 md:px-12 py-8">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
              <img 
                src={testimonials[activeIndex].avatar} 
                alt={testimonials[activeIndex].name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <blockquote className="text-lg md:text-xl mb-6 italic">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            
            <div>
              <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
              <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
            </div>
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/50 flex items-center justify-center hover:bg-background/80 transition-colors"
            aria-label="Next testimonial"
          >
            →
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-primary/30'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
