
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { motion } from "framer-motion";

const ClubPartners = () => {
  const clubLogos = [
    { 
      name: "Flamengo", 
      id: 1, 
      img: () => (
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Flamengo-RJ_%28BRA%29.png" 
          alt="Flamengo" 
          className="h-full w-full object-contain"
        />
      ) 
    },
    { 
      name: "Corinthians", 
      id: 2, 
      img: () => (
        <img 
          src="https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png" 
          alt="Corinthians" 
          className="h-full w-full object-contain"
        />
      ) 
    },
    { 
      name: "Palmeiras", 
      id: 3, 
      img: () => (
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg" 
          alt="Palmeiras" 
          className="h-full w-full object-contain"
        />
      ) 
    },
    { 
      name: "São Paulo", 
      id: 4, 
      img: () => (
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg" 
          alt="São Paulo" 
          className="h-full w-full object-contain"
        />
      ) 
    },
    { 
      name: "Fluminense", 
      id: 5, 
      img: () => (
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FFC_crest.svg/250px-FFC_crest.svg.png" 
          alt="Fluminense" 
          className="h-full w-full object-contain"
        />
      ) 
    },
    { 
      name: "Vasco", 
      id: 6, 
      img: () => (
        <img 
          src="https://upload.wikimedia.org/wikipedia/pt/a/ac/CRVascodaGama.png" 
          alt="Vasco" 
          className="h-full w-full object-contain"
        />
      ) 
    },
    { 
      name: "Internacional", 
      id: 7, 
      img: () => (
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Escudo_do_Sport_Club_Internacional.svg" 
          alt="Internacional" 
          className="h-full w-full object-contain"
        />
      ) 
    },
    { 
      name: "Bahia", 
      id: 8, 
      img: () => (
        <img 
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/ECBahia.png/250px-ECBahia.png" 
          alt="Bahia" 
          className="h-full w-full object-contain"
        />
      ) 
    },
  ];

  return (
    <section className="py-16 px-4 bg-background/90">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gradient-primary">Clubes Parceiros</span>
          </motion.h2>
          <p className="text-center text-muted-foreground mt-4 max-w-md mx-auto">
            Parceria com os maiores clubes do Brasil para oferecer experiências únicas aos torcedores
          </p>
        </div>

        <div className="flex justify-center">
          <LogoCarousel columnCount={3} logos={clubLogos} />
        </div>
      </div>
    </section>
  );
};

export default ClubPartners;
