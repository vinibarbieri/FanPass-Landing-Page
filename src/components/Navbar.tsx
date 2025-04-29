
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-card/90 backdrop-blur-lg shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/e3c0396d-29d9-48e8-bd56-52bf7383900d.png" 
            alt="FanPass Logo" 
            className="h-10 w-auto filter brightness-0 invert" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-foreground/80 hover:text-primary transition-colors font-medium">Benefícios</a>
          <a href="#showcase" className="text-foreground/80 hover:text-primary transition-colors font-medium">NFTs</a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors font-medium">Como Funciona</a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button 
            size="sm" 
            className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
          >
            <Rocket className="mr-2 h-4 w-4" />
            Launch DApp
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                <a href="#benefits" className="text-foreground hover:text-primary transition-colors text-lg font-medium">Benefícios</a>
                <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors text-lg font-medium">Como Funciona</a>
                <a href="#showcase" className="text-foreground hover:text-primary transition-colors text-lg font-medium">NFTs</a>
                
                <Button 
                  className="mt-4 rounded-full shadow-lg shadow-primary/20"
                >
                  <Rocket className="mr-2 h-4 w-4" />
                  Launch DApp
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
