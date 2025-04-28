
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 px-4 bg-background/90">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-primary/20 to-background p-8 md:p-12 lg:p-16 rounded-3xl text-center shadow-xl backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para desbloquear o futuro do futebol?
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-xl mx-auto">
            Torça. Participe. Colecione. Revenda.
            <br />
            <span className="font-semibold text-foreground">Tudo num clique.</span>
          </p>
          
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 relative overflow-hidden btn-hover-effect"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Launch DApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
