
import { motion } from "framer-motion";
import { UserPlus, Search, ShoppingCart, Ticket, QrCode, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Cadastre-se gratuitamente",
      description: "Crie sua conta em poucos segundos.",
    },
    {
      icon: Search,
      title: "Explore o marketplace",
      description: "Encontre ingressos disponíveis para compra ou aluguel.",
    },
    {
      icon: ShoppingCart,
      title: "Escolha seu ingresso",
      description: "Pague com Fan Tokens, Pix ou Cartão de Crédito.",
    },
    {
      icon: Ticket,
      title: "Receba seu ingresso digital",
      description: "O ingresso NFT ficará disponível no seu painel.",
    },
    {
      icon: QrCode,
      title: "Use o QR Code para acessar o estádio",
      description: "Mostre o QR Code gerado e aproveite o jogo.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Como Funciona o <span className="text-gradient-primary">FanPass</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Do cadastro ao estádio em 5 passos simples
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-4 w-8 h-0.5 bg-primary/30 z-0" />
              )}
              
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <step.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="mt-4 text-xl font-bold text-primary">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg font-semibold mb-6">
            FanPass: Seu ingresso, sua memória, seu jogo. Comece agora!
          </p>
          <Button size="lg" className="rounded-full">
            Começar agora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
