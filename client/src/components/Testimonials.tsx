import { Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alain",
      avatar: "A",
      bgColor: "bg-primary-blue",
      text: "Sébastien m'a aidé à traverser une période très difficile de ma vie. Son approche bienveillante et professionnelle m'a redonné confiance."
    },
    {
      name: "Lucie",
      avatar: "L",
      bgColor: "bg-green-500",
      text: "Après des méditations, j'ai repris confiance en moi et j'ai appris à gérer mes angoisses. Je recommande vivement."
    },
    {
      name: "Marine",
      avatar: "M",
      bgColor: "bg-purple-500",
      text: "Très professionnel et à l'écoute. Les séances m'ont permis de surmonter mes difficultés et de retrouver un équilibre."
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
            <Calendar className="mr-2 h-4 w-4" />
            Prendre RDV
          </Button>
        </div>
      </div>
    </section>
  );
}
