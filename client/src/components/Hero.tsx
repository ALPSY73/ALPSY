import { Calendar, Info, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhoto from "@assets/Photo héro_1755678370552.webp";
import doctolibLogo from "@assets/Doctolib_1755679024101.webp";

export default function Hero() {
  return (
    <section id="accueil" className="bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4 lg:pt-3 lg:pb-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 id="sebastien-stuhec" className="text-4xl lg:text-5xl font-bold text-primary-blue mb-6" data-testid="title-hero">
              Sébastien Stuhec
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-description">
              Je suis un psychologue à l'écoute, empathique, je m'adapte à vos vulnérabilité et je parle, j'oriente, je conseille.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.doctolib.fr/psychologue/challes-les-eaux/sebastien-stuhec?pid=practice-701704"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-primary-blue text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                  data-testid="button-hero-prendre-rdv"
                >
                  <img src={doctolibLogo} alt="Doctolib" className="mr-2 h-3 w-auto" />
                  Prendre RDV
                </Button>
              </a>
              <Button 
                variant="outline"
                className="border border-primary-blue text-primary-blue px-8 py-3 rounded-lg hover:bg-light-blue transition-colors font-medium"
                data-testid="button-hero-en-savoir-plus"
                onClick={() => {
                  const element = document.querySelector("#text-apropos");
                  if (element) {
                    const offsetTop = element.offsetTop - 120;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                En savoir plus
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-8">
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-primary-blue">12+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center" data-testid="stat-patients">
                <div className="text-3xl font-bold text-primary-blue">500+</div>
                <div className="text-sm text-gray-600">Patients aidés</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white p-3 rounded-lg shadow-sm border" data-testid="feature-nouveaux-patients">
                  <div className="flex items-center">
                    <div className="bg-green-500 rounded-full w-8 h-8 mr-3 flex items-center justify-center flex-shrink-0">
                      <Heart className="text-white h-4 w-4 fill-current" />
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="font-medium">Accepte de nouveaux patients</div>
                      <div>Rendez-vous disponibles</div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.google.com/search?sa=X&sca_esv=1c2c48b035966a68&tbm=lcl&sxsrf=AE3TifPHCQ8PNRyRlJNPHOi9w4Ze2xi2mw:1755687286087&q=ALPSY+-+Psychologue+S%C3%A9bastien+Stuhec+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDUwNLAwNDQ2NDMztDQxNjQ2MtrAyPiKUcvRJyA4UkFXIaC4MjkjPyc_vTRVIfjwyqTE4pLM1DyF4JLSjNRkBceyzOJFrCQoBgBVVFkndQAAAA&rldimm=15010811316619431322&hl=fr-FR&ved=2ahUKEwiTnZjonJmPAxWcNvsDHa00DboQ9fQKegQIUhAF&cshid=1755687313494893&biw=1366&bih=599&dpr=1#lkt=LocalPoiReviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <span className="text-lg font-bold text-black mr-1">5.0 (7)</span>
                  <Star className="text-yellow-500 h-4 w-4 fill-current" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={heroPhoto} 
              alt="Sébastien Stuhec - Psychologue" 
              className="rounded-xl shadow-lg w-full max-w-md h-auto object-cover"
              data-testid="img-hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
