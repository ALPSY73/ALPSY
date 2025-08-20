import { Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctolibLogo from "@assets/Doctolib_1755679024101.webp";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alain",
      avatar: "A",
      bgColor: "bg-primary-blue",
      text: "Après la réalité conçue au niveau de ses jaillons complètement changé et transformé ma vie. Je parte de tout seul avec entière, comme plus mourir ne pas me sens dans une atmosphère car c'est maintenant que je démarre toujours la vie."
    },
    {
      name: "Lucie",
      avatar: "L",
      bgColor: "bg-orange-500",
      text: "Après des méditations de ce type et à Sébastien ce ne me faisait pas des troubles, énormément de défis. Dans façons deux, ma mère a travaillé de son thérapie utélète. Il a y a finalement le mal mais c'était mais je pousse sur."
    },
    {
      name: "Marine",
      avatar: "M",
      bgColor: "bg-green-500",
      text: "J'ai passé de longs mois en souffrance et malgré mon caractère, j'arrivais au bout de thérapies faisées très. Ma mère a commencé de voir thérapie utélète. Il a y a passé beaucoup mal mais chez c'était pas je jouais sur l'hôpital pour la récupération, mais je survis bien. Je pense à travers là-dessus."
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
            <img src={doctolibLogo} alt="Doctolib" className="mr-2 h-4 w-4" />
            Prendre RDV
          </Button>
        </div>
      </div>
    </section>
  );
}
