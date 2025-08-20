import { Users, Moon, Heart, Target, Star, MessageCircle, Brain, Sparkles } from "lucide-react";

export default function About() {
  const approaches = [
    {
      bgColor: "bg-blue-50",
      circleColor: "bg-blue-500",
      icon: Users,
      title: "Thérapies cognitives et comportementales",
      description: "Elles permettent d'agir les pensées, les émotions et les comportements vécus comme problématiques"
    },
    {
      bgColor: "bg-orange-50",
      circleColor: "bg-orange-500",
      icon: Moon,
      title: "Hypnose",
      description: "Elle facilité l'accès aux ressources inconscientes et favorise le changement psychologique ou comportemental"
    },
    {
      bgColor: "bg-green-50",
      circleColor: "bg-green-500",
      icon: Star,
      title: "HTSMA",
      description: "C'est une technique qui permet d'aider à lever les traumatismes et les blocages émotionnels"
    }
  ];

  const formations = [
    "HTSMA - Institut Mimethys",
    "D.I.U. Hypnose - Université de Bordeaux", 
    "D.U. Thérapies cognitives et comportementales - Université de Bordeaux",
    "Master en neuropsychologie - Université Libre de Bruxelles"
  ];

  return (
    <section id="apropos" className="pt-2 pb-2 lg:pt-3 lg:pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-3" data-testid="title-about">
          À propos
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <p id="text-apropos" className="text-gray-600 mb-6 leading-relaxed" data-testid="text-about-description-1">
              Durant mes 12 années de pratique en hôpitaux et en institution, j'ai accompagné des personnes confrontées à des problématiques variées: dépression, anxiété, séparation, harcèlement scolaire, phobies, troubles des conduites alimentaires, addictions, questionnement sur l'identité de genre, handicap, psychotraumatisme, violences sexuelles, idées suicidaires…
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed" data-testid="text-about-description-2">
              Je peux donc vous accompagner dans des difficultés d'épanouissement personnel, un passage de vie compliqué ou des souffrances profondes qu'elles soient récentes ou venues du passé.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-3" data-testid="title-approches">
              Approches Thérapeutiques
            </h3>
            
            <div className="space-y-4">
              {approaches.map((approach, index) => {
                const Icon = approach.icon;
                return (
                  <div key={index} className={`${approach.bgColor} p-4 rounded-lg border-l-4 border-l-gray-200`} data-testid={`approach-${index}`}>
                    <div className="flex items-center">
                      <div className={`w-8 h-8 ${approach.circleColor} rounded-full mr-4 flex-shrink-0 flex items-center justify-center`}>
                        <Icon className={`h-4 w-4 ${approach.title === 'HTSMA' ? 'text-yellow-400' : 'text-white'}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-gray mb-1">{approach.title}</h4>
                        <p className="text-gray-600 text-sm">{approach.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-dark-gray mb-2" data-testid="title-formations">
            Formations
          </h3>
          
          <div className="grid md:grid-cols-2 gap-0">
            {formations.map((formation, index) => (
              <div 
                key={index} 
                className="p-2" 
                data-testid={`formation-${index}`}
              >
                <div className="flex items-center">
                  {formation.includes("HTSMA") && (
                    <Target className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  {formation.includes("D.I.U. Hypnose") && (
                    <Sparkles className="h-5 w-5 text-purple-500 mr-2" />
                  )}
                  {formation.includes("D.U. Thérapies cognitives") && (
                    <MessageCircle className="h-6 w-6 text-green-500 mr-2" />
                  )}
                  {formation.includes("Master en neuropsychologie") && (
                    <Brain className="h-6 w-6 text-blue-500 mr-2" />
                  )}
                  <p className="font-medium text-dark-gray">{formation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 text-center bg-blue-50 px-8 py-4 rounded-lg" data-testid="quote-section">
          <blockquote className="text-lg italic text-gray-700 mb-0">
            "Le changement est un processus naturel. La thérapie vient lever les obstacles au changement en mobilisant les ressources naturelles du patient."
          </blockquote>
          <cite className="text-primary-blue font-medium">— Eric Bardot</cite>
        </div>
      </div>
    </section>
  );
}
