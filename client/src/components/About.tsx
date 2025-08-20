export default function About() {
  const approaches = [
    {
      color: "bg-primary-blue",
      title: "Thérapies cognitives et comportementales",
      description: "Elles permettent d'agir sur les pensées, les émotions et les comportements, vécus comme problématiques"
    },
    {
      color: "bg-orange-500",
      title: "Hypnose",
      description: "Elle facilite l'accès aux ressources inconscientes et favorise le changement psychologique ou comportemental."
    },
    {
      color: "bg-green-500",
      title: "HTSMA",
      description: "C'est une technique qui permet d'aider à lever les traumatismes et les blocages émotionnels"
    }
  ];

  const formations = [
    {
      title: "PSYAUM - Institut Motricité",
      subtitle: "D.U. Hypnose - Université de Bordeaux",
      additional: "D.U. Thérapies cognitives et comportementales - Université de Bordeaux"
    },
    {
      title: "Master en neuropsychologie - Université Libre de Bruxelles",
      subtitle: "Le changement est un processus naturel. La thérapie permet donc de dépasser les régressions et mobiliser les ressources présentes.",
      quote: "- Eric Binet"
    }
  ];

  return (
    <section id="apropos" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-12" data-testid="title-about">
          À propos
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed" data-testid="text-about-description-1">
              Durant mes 12 années de pratique en hôpitaux et en institution, j'ai accompagné des personnes confrontées à des problématiques variées: dépression, anxiété, séparation, harcèlement scolaire, phobies, troubles des conduites alimentaires, addictions, questionnement sur l'identité de genre, handicap, psychotraumatisme, violences sexuelles, idées suicidaires…
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed" data-testid="text-about-description-2">
              Je peux donc vous accompagner dans des difficultés d'épanouissement personnel, un passage de vie compliqué ou des souffrances profondes qu'elles soient récentes ou venues du passé.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-6" data-testid="title-approches">
              Approches Thérapeutiques
            </h3>
            
            <div className="space-y-4">
              {approaches.map((approach, index) => (
                <div key={index} className="flex items-start" data-testid={`approach-${index}`}>
                  <div className={`w-3 h-3 ${approach.color} rounded-full mt-2 mr-4 flex-shrink-0`}></div>
                  <div>
                    <h4 className="font-medium text-dark-gray">{approach.title}</h4>
                    <p className="text-gray-600 text-sm">{approach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-dark-gray mb-8" data-testid="title-formations">
            Formations
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {formations.map((formation, index) => (
              <div 
                key={index} 
                className="bg-light-blue p-6 rounded-lg" 
                data-testid={`formation-${index}`}
              >
                <h4 className="font-semibold text-dark-gray mb-2">{formation.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{formation.subtitle}</p>
                {formation.additional && (
                  <p className="text-gray-600 text-sm">{formation.additional}</p>
                )}
                {formation.quote && (
                  <p className="text-gray-500 text-sm italic mt-2">{formation.quote}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
