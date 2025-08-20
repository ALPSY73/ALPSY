import { Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroPhoto from "@assets/Photo héro_1755678118702.webp";
import doctolibLogo from "@assets/Doctolib_1755678348912.webp";

export default function Hero() {
  return (
    <section id="accueil" className="bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6" data-testid="title-hero">
              Sébastien Stuhec
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-description">
              Je suis un psychologue à l'écoute, empathique et m'adapte à vos vulnérabilités et je peux s'arrêter, renseigner, promouvoir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary-blue text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                data-testid="button-hero-prendre-rdv"
              >
                <img src={doctolibLogo} alt="Doctolib" className="mr-2 h-4 w-4" />
                Prendre RDV
              </Button>
              <Button 
                variant="outline"
                className="border border-primary-blue text-primary-blue px-8 py-3 rounded-lg hover:bg-light-blue transition-colors font-medium"
                data-testid="button-hero-en-savoir-plus"
              >
                <Info className="mr-2 h-4 w-4" />
                En savoir plus
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-8">
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-primary-blue">12+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center" data-testid="stat-patients">
                <div className="text-3xl font-bold text-primary-blue">500+</div>
                <div className="text-sm text-gray-600">Patients accompagnés</div>
              </div>
              <div className="flex items-center" data-testid="feature-reconversion">
                <Star className="text-green-500 mr-1 h-4 w-4" />
                <span className="text-sm text-gray-600">Analyse de reconversion professionnelle</span>
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
