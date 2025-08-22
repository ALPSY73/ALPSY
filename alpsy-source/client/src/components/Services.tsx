import { Brain, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "Thérapie individuelle",
      description: "Séances individuelles axées sur vos objectifs personnels, la gestion de l'anxiété, la dépression, les traumatismes ou les transitions de vie.",
      price: "65€/séance",
      duration: "Séances de 45 minutes"
    },
  ];

  return (
    <section id="prestations" className="pt-2 pb-2 lg:pt-3 lg:pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-3" data-testid="title-services">
          Prestations
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200"
              data-testid={`service-card-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="text-primary-blue text-xl h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-dark-gray" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
              </div>
              <p id="text-prestations" className="text-gray-600 mb-4" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
              <div className="text-gray-500 text-sm flex items-center" data-testid={`service-duration-${index}`}>
                <Clock className="h-4 w-4 mr-1 text-primary-blue" />
                {service.duration}
              </div>
              <div className="text-primary-blue font-bold" data-testid={`service-price-${index}`}>
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
