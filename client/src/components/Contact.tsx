import { Info } from "lucide-react";
import doctolibLogo from "@assets/Doctolib_1755679024101.webp";

export default function Contact() {
  const openingHours = [
    { day: "Lundi-Jeudi", hours: "9h-19h" },
    { day: "Vendredi-Dimanche", hours: "Fermé", isSpecial: true, color: "text-red-600" },
  ];

  return (
    <section id="contact" className="bg-light-gray py-16 lg:py-24">
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
                  23bis Avenue Sébastien Henri de Iasini<br />
                  Centre-ville de Boulogne<br />
                  92 100 Île Défense Sés-cloud
                </p>
              </div>
              
              <div data-testid="contact-phone">
                <h3 className="font-semibold text-dark-gray mb-4">Téléphone</h3>
                <p className="text-gray-600">06.XX.XX.XX</p>
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
                      Pour les urgences, appelez le 3114 (numéro national de prévention du suicide).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mt-8 flex items-center justify-center" data-testid="doctolib-integration">
              <img 
                src={doctolibLogo} 
                alt="Prendre rendez-vous sur Doctolib" 
                className="h-12 w-auto"
                data-testid="logo-doctolib"
              />
              <span className="ml-4 text-gray-600">Prenez rendez-vous en ligne</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
