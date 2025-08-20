import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctolibLogo from "@assets/Doctolib_1755679024101.webp";

export default function Contact() {
  const openingHours = [
    { day: "Lundi-Jeudi", hours: "9h-19h" },
    { day: "Vendredi-Dimanche", hours: "Fermé", isSpecial: true, color: "text-red-600" },
  ];

  return (
    <section id="contact" className="bg-light-gray pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-12" data-testid="title-contact">
          Informations de contact
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div data-testid="contact-address">
                <h3 className="font-semibold text-dark-gray mb-4">Adresse du cabinet</h3>
                <p className="text-gray-600">
                  ALPSY<br />
                  2ème étage- Bâtiment terre de soins<br />
                  400, avenue de la Breisse<br />
                  73 190 Challes-les-eaux
                </p>
              </div>
              
              <div data-testid="contact-phone">
                <h3 className="font-semibold text-dark-gray mb-4">Téléphone</h3>
                <p className="text-gray-600">06.10.91.90.47</p>
              </div>
              
              <div data-testid="contact-hours">
                <h3 className="font-semibold text-dark-gray mb-4">Heures d'ouverture</h3>
                <div className="space-y-2">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between" data-testid={`schedule-${index}`}>
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className={schedule.isSpecial ? `${schedule.color} font-medium` : "text-gray-600"}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg" data-testid="contact-emergency">
                <div className="flex items-start">
                  <Info className="text-primary-blue mt-1 mr-3 h-5 w-5" />
                  <div>
                    <h4 className="font-medium text-dark-gray mb-1">Assistance d'urgence</h4>
                    <p className="text-gray-600 text-sm">
                      Pour les urgences de santé mentale, appelez le 15 (SAMU) ou le 3114 (numéro national de prévention du suicide).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mt-8 flex justify-center" data-testid="doctolib-integration">
              <Button 
                variant="outline"
                className="border border-primary-blue text-primary-blue px-8 py-3 rounded-lg hover:bg-light-blue transition-colors font-medium"
                data-testid="button-contact-prendre-rdv"
              >
                <img 
                  src={doctolibLogo} 
                  alt="Doctolib" 
                  className="mr-2 h-4 w-auto"
                  data-testid="logo-doctolib"
                />
                Prendre RDV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
