import { SiLinkedin } from "react-icons/si";
import { Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Footer() {
  const [location] = useLocation();
  
  const prestations = [
    "Thérapie individuelle"
  ];

  const navigation = [
    { href: "#sebastien-stuhec", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#prestations", label: "Prestations" },
    { href: "#temoignages", label: "Témoignages" },
    { href: "#informations-contact", label: "Contact" },
    { href: "/partenaires", label: "Partenaires", isRoute: true }
  ];

  const handleNavClick = (href: string) => {
    // Si on n'est pas sur la page d'accueil, rediriger vers la page d'accueil avec l'ancre
    if (location !== "/") {
      window.location.href = "/" + href;
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
  };

  return (
    <footer className="bg-dark-gray text-white pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div data-testid="footer-about">
            <h3 className="font-semibold mb-4 pt-2">Sébastien Stuhec</h3>
            <p className="text-gray-300 text-sm">Psychologue clinicien</p>
            <div className="mt-3">
              <a 
                href="https://www.linkedin.com/in/sebastien-stuhec/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                aria-label="Profil LinkedIn de Sébastien Stuhec"
              >
                <SiLinkedin className="h-5 w-5" data-testid="footer-linkedin" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div data-testid="footer-prestations">
            <h3 className="font-semibold mb-4">Prestations</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {prestations.map((prestation, index) => (
                <li key={index} data-testid={`footer-prestation-${index}`}>
                  <button 
                    onClick={() => handleNavClick("#prestations")}
                    className="hover:text-white transition-colors text-left"
                  >
                    {prestation}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-testid="footer-navigation">
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {navigation.map((item, index) => (
                <li key={index}>
                  {item.isRoute ? (
                    <Link href={item.href}>
                      <button 
                        className="hover:text-white transition-colors"
                        data-testid={`footer-nav-${item.label.toLowerCase().replace('à ', '').replace(' ', '-')}`}
                      >
                        {item.label}
                      </button>
                    </Link>
                  ) : (
                    <button 
                      onClick={() => handleNavClick(item.href)}
                      className="hover:text-white transition-colors"
                      data-testid={`footer-nav-${item.label.toLowerCase().replace('à ', '').replace(' ', '-')}`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div data-testid="footer-contact">
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <a 
                href="https://www.google.fr/maps/place/ALPSY+-+Psychologue+S%C3%A9bastien+Stuhec/@45.5554231,5.9695494,17z/data=!3m1!4b1!4m6!3m5!1s0x478baf42f68cef37:0xd0511d5c9d83cd9a!8m2!3d45.5554194!4d5.9721243!16s%2Fg%2F11xn_wfmzs?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors block"
              >
                <div className="flex items-start">
                  <MapPin className="text-white h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>ALPSY</p>
                    <p>2ème étage- Bâtiment terre de soins</p>
                    <p>400, avenue de la Breisse</p>
                    <p>73 190 Challes-les-eaux</p>
                  </div>
                </div>
              </a>
              <div className="flex items-center">
                <Phone className="text-white h-4 w-4 mr-2 flex-shrink-0" />
                <a href="tel:+33610919047" className="hover:text-blue-300 transition-colors">06.10.91.90.47</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-4 pt-4 text-center text-gray-300 text-sm" data-testid="footer-copyright">
          <p>En cas d'urgence de santé mentale, appeler le 15 (SAMU) ou le 3114 (numéro national de prévention du suicide).</p>
        </div>
      </div>
    </footer>
  );
}
