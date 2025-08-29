import { useState, useEffect } from 'react'
import { Brain, Clock } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import therapyImage from "@assets/1_1756476836745.webp";

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  
  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => setIsLoaded(true), 150)
      return () => clearTimeout(timer)
    }
  }, [isIntersecting])
  
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
    <section id="prestations" className="pt-2 pb-2 lg:pt-3 lg:pb-3" ref={targetRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="titre-prestations" className="text-3xl lg:text-4xl font-bold text-dark-gray mb-3" data-testid="title-services">
          Prestations
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center lg:justify-between max-w-6xl mx-auto">
          {!isLoaded ? (
            <>
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 flex-1 lg:max-w-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg mr-4 bg-gray-200 animate-pulse" />
                  <div className="h-6 w-32 bg-gray-200 animate-pulse rounded" />
                </div>
                <div className="h-4 w-full mb-2 bg-gray-200 animate-pulse rounded" />
                <div className="h-4 w-full mb-2 bg-gray-200 animate-pulse rounded" />
                <div className="h-4 w-3/4 mb-4 bg-gray-200 animate-pulse rounded" />
                <div className="h-4 w-24 mb-2 bg-gray-200 animate-pulse rounded" />
                <div className="h-6 w-20 bg-gray-200 animate-pulse rounded" />
              </div>
              <div className="w-full lg:w-auto h-80 lg:h-96 bg-gray-200 animate-pulse rounded-xl flex-1 lg:max-w-md" />
            </>
          ) : (
            <>
              {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200 flex-1 lg:max-w-md"
                data-testid={`service-card-${index}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="text-blue-700 text-xl h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-gray" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                </div>
                <p id="text-prestations" className="text-gray-600 mb-4" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
                <div className="text-gray-500 text-sm flex items-center" data-testid={`service-duration-${index}`}>
                  <Clock className="h-4 w-4 mr-1 text-blue-700" />
                  {service.duration}
                </div>
                <div className="text-blue-700 font-bold text-lg" data-testid={`service-price-${index}`}>
                  {service.price}
                </div>
              </div>
              ))}
              <div className="flex justify-center px-4 sm:px-0 flex-1 lg:max-w-md">
                <img 
                  src={therapyImage} 
                  alt="Salon de thérapie individuelle avec canapé vert et fauteuils"
                  className="w-full max-w-sm sm:max-w-md h-80 sm:h-96 object-contain lg:object-cover object-center rounded-lg"
                  data-testid="img-therapy-room"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
