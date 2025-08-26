import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import alpsyLogo from "@assets/ALPSY_1755678334816.webp";
import doctolibLogo from "@assets/Doctolib_1755679024101.webp";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "#sebastien-stuhec", label: "Accueil" },
    { href: "#text-apropos", label: "À propos" },
    { href: "#prestations", label: "Prestations" },
    { href: "#temoignages", label: "Témoignages" },
    { href: "#informations-contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    // Si on n'est pas sur la page d'accueil, rediriger vers la page d'accueil avec l'ancre
    if (location !== "/") {
      window.location.href = "/" + href;
      setIsMobileMenuOpen(false);
      return;
    }

    // Sinon, comportement normal de scroll
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const offset = href === "#informations-contact" ? 160 : 120;
      const offsetTop = element.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
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
              alt="ALPSY - Psychologue Sébastien Stuhec Challes-les-Eaux" 
              className="h-8 w-auto"
              data-testid="logo-alpsy"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-black hover:text-gray-600 font-medium transition-colors px-3 py-2 inline-flex items-center justify-center"
                data-testid={`nav-${item.label.toLowerCase().replace('à ', '').replace(' ', '-')}`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://www.doctolib.fr/psychologue/challes-les-eaux/sebastien-stuhec?pid=practice-701704"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button 
                className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium inline-flex items-center justify-center ml-2"
                data-testid="button-prendre-rdv-desktop"
              >
                <img src={doctolibLogo} alt="Prendre rendez-vous Doctolib avec psychologue Challes-les-Eaux" className="mr-2 h-3 w-auto" />
                Prendre RDV
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-black hover:text-gray-600 p-2 inline-flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-3 text-black font-medium hover:bg-gray-50 transition-colors"
                  data-testid={`nav-mobile-${item.label.toLowerCase().replace('à ', '').replace(' ', '-')}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-3 mt-2">
                <a 
                  href="https://www.doctolib.fr/psychologue/challes-les-eaux/sebastien-stuhec?pid=practice-701704"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button 
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-medium inline-flex items-center justify-center w-full"
                    data-testid="button-prendre-rdv-mobile"
                  >
                    <img src={doctolibLogo} alt="Prendre rendez-vous Doctolib avec psychologue Challes-les-Eaux" className="mr-2 h-3 w-auto" />
                    Prendre RDV
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
