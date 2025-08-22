import { Heart } from "lucide-react";
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
              Je suis un psychologue à l'écoute, empathique, je m'adapte à vos vulnérabilités et je parle, j'oriente, je conseille.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a 
                href="https://www.doctolib.fr/psychologue/challes-les-eaux/sebastien-stuhec?pid=practice-701704"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button 
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium inline-flex items-center justify-center"
                  data-testid="button-hero-prendre-rdv"
                >
                  <img src={doctolibLogo} alt="Prendre rendez-vous en ligne psychologue Challes-les-Eaux" className="mr-2 h-3 w-auto" />
                  Prendre RDV
                </button>
              </a>
              <button 
                className="border-2 border-blue-700 text-blue-700 bg-white px-4 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm sm:text-base inline-flex items-center justify-center"
                data-testid="button-hero-en-savoir-plus"
                onClick={() => {
                  const element = document.querySelector("#text-apropos") as HTMLElement;
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
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-8">
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-blue-700">12+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center" data-testid="stat-patients">
                <div className="text-3xl font-bold text-blue-700">500+</div>
                <div className="text-sm text-gray-600">Patients aidés</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border w-full sm:w-auto" data-testid="feature-nouveaux-patients">
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
            </div>
            <div className="-mt-2">
              <a 
                href="https://hoodspot.fr/autres-professionnels-de-sante/alpsy-psychologue-sebastien-stuhec-79779492200022/"
                target="_blank"
                rel="noopener noreferrer"
                className="sr-only"
                aria-hidden="true"
                tabIndex={-1}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
              >
                ALPSY sur HoodSpot
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={heroPhoto} 
              alt="Sébastien Stuhec - Psychologue clinicien à Challes-les-Eaux, cabinet ALPSY" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              width={380}
              height={172}
              style={{aspectRatio: '380/172', maxWidth: '380px', height: 'auto'}}
              loading="eager"
              data-testid="img-hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
