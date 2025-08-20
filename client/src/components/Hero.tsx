import { Calendar, Info, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhoto from "@assets/Photo héro_1755678370552.webp";
import doctolibLogo from "@assets/Doctolib_1755679024101.webp";

export default function Hero() {
  return (
    <section id="accueil" className="bg-blue-50 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pt-8 lg:pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-blue mb-6" data-testid="title-hero">
              Sébastien Stuhec
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-description">
              Je suis un psychologue à l'écoute, empathique, je m'adapte à vos vulnérabilité et je parle, j'oriente, je conseille.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary-blue text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                data-testid="button-hero-prendre-rdv"
              >
                <img src={doctolibLogo} alt="Doctolib" className="mr-2 h-3 w-auto" />
                Prendre RDV
              </Button>
              <Button 
                variant="outline"
                className="border border-primary-blue text-primary-blue px-8 py-3 rounded-lg hover:bg-light-blue transition-colors font-medium"
                data-testid="button-hero-en-savoir-plus"
              >
                En savoir plus
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-8">
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-primary-blue">12+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center flex flex-col items-center" data-testid="stat-patients">
                <div className="text-3xl font-bold text-primary-blue">500+</div>
                <div className="text-sm text-gray-600">Patients aidés</div>
                <div className="flex items-center mt-1">
                  <Star className="text-yellow-500 h-4 w-4 fill-current mr-1" />
                  <span className="text-sm font-medium text-primary-blue">5.0</span>
                  <span className="text-sm text-gray-600 ml-1">(7)</span>
                </div>
              </div>
              <div className="flex items-center" data-testid="feature-nouveaux-patients">
                <div className="bg-green-500 rounded-full w-6 h-6 mr-3 flex items-center justify-center flex-shrink-0">
                  <Heart className="text-white h-3 w-3 fill-current" />
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-medium">Accepte de nouveaux patients</div>
                  <div>Rendez-vous disponibles</div>
                </div>
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
