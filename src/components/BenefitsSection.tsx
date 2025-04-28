
import { Check, Ticket, ShieldCheck, Trophy } from "lucide-react";

const BenefitsCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="card-highlight p-8 rounded-2xl flex flex-col items-center text-center">
      <div className="mb-4 bg-primary/10 p-4 rounded-full">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Check,
      title: "Experiência Web2 com tecnologia Web3",
      description: "Pague com Pix, cartão ou Fan Token."
    },
    {
      icon: Ticket,
      title: "Ingressos oficiais com royalties para o clube",
      description: "Toda venda ou aluguel gera receita pro seu time."
    },
    {
      icon: ShieldCheck,
      title: "Segurança e autenticidade garantidas",
      description: "Cada ingresso é um NFT único na blockchain."
    },
    {
      icon: Trophy,
      title: "Colecione momentos históricos",
      description: "Gols, viradas e títulos viram NFTs exclusivos só pra quem estava lá."
    }
  ];

  return (
    <section className="py-24 px-4 bg-background/90">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Benefícios <span className="text-gradient-primary">exclusivos</span> para torcedores
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="animate-slide-up group" 
                 style={{ transitionDelay: `${index * 100}ms` }}>
              <BenefitsCard {...benefit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
