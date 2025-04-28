import { Rocket } from "lucide-react";
import { Hero } from "@/components/ui/hero";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Hero
      title={
        <span className="text-gradient-primary">
          O Ingresso da Temporada, Agora em NFT
        </span>
      }
      subtitle="Compre, alugue, colecione momentos históricos. Tudo direto da blockchain, com a simplicidade de um app."
      actions={[
        {
          label: (
            <>
              <Rocket strokeWidth={1.5} fill="none" /> Launch DApp
            </>
          ),
          href: "#",
          variant: "destructive"
        }
      ]}
      actionsClassName="mt-8"
      className="relative min-h-screen"
    >
      <motion.div 
        className="flex items-center justify-center gap-6 flex-wrap absolute bottom-20 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="bg-card/30 backdrop-blur-md px-4 py-2 rounded-full">
          <img src="https://cryptologos.cc/logos/chiliz-chz-logo.png" alt="Chiliz" className="h-8" />
        </div>
        <div className="bg-card/30 backdrop-blur-md px-4 py-2 rounded-full">
          <span className="text-sm font-medium">Web3 Football Hackathon</span>
        </div>
      </motion.div>
    </Hero>
  );
};

export default HeroSection;

