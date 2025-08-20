import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  const prestations = [
    "Thérapie individuelle"
  ];

  const navigation = [
    { href: "#sebastien-stuhec", label: "Accueil" },
    { href: "#text-apropos", label: "À propos" },
    { href: "#text-prestations", label: "Prestations" },
    { href: "#informations-contact", label: "Contact" }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark-gray text-white pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div data-testid="footer-about">
            <h3 className="font-semibold mb-4">Sébastien Stuhec</h3>
            <p className="text-gray-300 text-sm">Psychologue clinicien</p>
            <div className="mt-3">
              <a 
                href="https://www.linkedin.com/in/sebastien-stuhec/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <SiLinkedin className="text-gray-300 hover:text-white transition-colors cursor-pointer h-5 w-5" data-testid="footer-linkedin" />
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
                  <button 
                    onClick={() => handleNavClick(item.href)}
                    className="hover:text-white transition-colors"
                    data-testid={`footer-nav-${item.label.toLowerCase().replace('à ', '').replace(' ', '-')}`}
                  >
                    {item.label}
                  </button>
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
                <p>73 190 Challes-les-eaux</p>
                <p>400, avenue de la Breisse</p>
              </a>
              <p>06.10.91.90.47</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300 text-sm" data-testid="footer-copyright">
          <p>En cas d'urgence de santé mentale, appeler le 15 (SAMU) ou le 3114 (numéro national de prévention du suicide).</p>
        </div>
      </div>
    </footer>
  );
}
