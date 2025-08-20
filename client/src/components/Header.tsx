import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import alpsyLogo from "@assets/ALPSY_1755678334816.webp";
import doctolibLogo from "@assets/Doctolib_1755679024101.webp";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#prestations", label: "Prestations" },
    { href: "#temoignages", label: "Témoignages" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={alpsyLogo} 
              alt="ALPSY Logo" 
              className="h-8 w-auto"
              data-testid="logo-alpsy"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-primary-blue hover:text-blue-600 font-medium transition-colors"
                data-testid={`nav-${item.label.toLowerCase().replace('à ', '').replace(' ', '-')}`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              data-testid="button-prendre-rdv-desktop"
            >
              <img src={doctolibLogo} alt="Doctolib" className="mr-2 h-4 w-auto" />
              Prendre RDV
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-primary-blue"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-primary-blue font-medium"
                  data-testid={`nav-mobile-${item.label.toLowerCase().replace('à ', '').replace(' ', '-')}`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="w-full text-left bg-primary-blue text-white px-3 py-2 rounded-lg font-medium mt-2"
                data-testid="button-prendre-rdv-mobile"
              >
                <img src={doctolibLogo} alt="Doctolib" className="mr-2 h-4 w-auto" />
                Prendre RDV
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
