import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctolibLogo from "@assets/Doctolib_1755679024101.webp";

export default function Contact() {
  const openingHours = [
    { day: "Lundi-Jeudi", morning: "09h-12h", afternoon: "13h-17h", status: "Ouvert", isSpecial: false },
    { day: "Vendredi-Dimanche", morning: "", afternoon: "", status: "Fermé", isSpecial: true, color: "text-red-600" },
  ];

  return (
    <section id="contact" className="bg-blue-50 pt-8 pb-8 lg:pt-12 lg:pb-12">
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
                    <div key={index} className="grid grid-cols-4 gap-4 items-center" data-testid={`schedule-${index}`}>
                      <span className="text-gray-600 font-medium">{schedule.day}</span>
                      <span className="text-gray-600 text-center">{schedule.morning}</span>
                      <span className="text-gray-600 text-center">{schedule.afternoon}</span>
                      <span className={schedule.isSpecial ? `${schedule.color} font-medium text-center` : "text-gray-600 text-center"}>
                        {schedule.status}
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
            <div className="mt-4 flex justify-center" data-testid="doctolib-integration">
              <Button 
                className="bg-primary-blue text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
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
