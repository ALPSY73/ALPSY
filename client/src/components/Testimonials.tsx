import { Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctolibLogo from "@assets/Doctolib_1755679024101.webp";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alain",
      avatar: "A",
      bgColor: "bg-primary-blue",
      text: "Avec le recul, je voulais vraiment vous remercier d'avoir complètement changé et bouleversé ma vie. Je parle de vous assez souvent comme mon sauveur car c'est vraiment la sensation que j'ai avec le recul des années passées. Depuis tout ce temps, j'ai continué une reconstruction en suivant vos conseils, j'ai recentré ma vie sur les choses essentielles et j'ai appris à penser à moi."
    },
    {
      name: "Lucie",
      avatar: "L",
      bgColor: "bg-orange-500",
      text: "Après des méditations de ce type et à Sébastien ce ne me faisait pas des troubles, énormément de défis. Dans façons deux, ma mère a travaillé de son thérapie utélète. Il a y a finalement le mal mais c'était mais je pousse sur."
    },
    {
      name: "Manon",
      avatar: "M",
      bgColor: "bg-green-500",
      text: "Voir ma mère mourir à 12 ans a arrêté ma vie, les galères s'en sont suivies. Je ne vivais plus que dans la colère. J'ai vu un tas de thérapeutes avant vous qui n'arrivaient pas à me sortir de cette détresse. Grâce à vous, tout ne va pas mieux mais je vis enfin, j'arrive à penser à maman avec le sourire."
    }
  ];

  return (
    <section id="temoignages" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-12" data-testid="title-testimonials">
          Ce que disent mes patients
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-medium text-dark-gray" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic" data-testid={`testimonial-text-${index}`}>
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-primary-blue text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            data-testid="button-testimonials-prendre-rdv"
          >
            <img src={doctolibLogo} alt="Doctolib" className="mr-2 h-5 w-auto" />
            Prendre RDV
          </Button>
        </div>
      </div>
    </section>
  );
}
