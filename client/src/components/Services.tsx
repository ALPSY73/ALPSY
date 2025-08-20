import { Heart, Users, Brain } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Thérapie individuelle",
      description: "Séances individuelles axées sur vos objectifs personnels, la gestion de l'anxiété, la dépression, les traumatismes ou les transitions de vie.",
      price: "65€/séance",
      duration: "Séances de 45 minutes"
    },
  ];

  return (
    <section id="prestations" className="bg-light-gray py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-12" data-testid="title-services">
          Prestations
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              data-testid={`service-card-${index}`}
            >
              <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-primary-blue text-xl h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-dark-gray mb-4" data-testid={`service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
              <div className="text-primary-blue font-medium" data-testid={`service-price-${index}`}>
                {service.price}
              </div>
              <div className="text-gray-500 text-sm" data-testid={`service-duration-${index}`}>
                {service.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
