export default function About() {
  const approaches = [
    {
      color: "bg-primary-blue",
      title: "Thérapies cognitives et comportementales",
      description: "Pour permettre d'agir en les pensées, les émotions et les comportements des personnes comportements."
    },
    {
      color: "bg-orange-500",
      title: "Hypnose",
      description: "Une méthode douce plus expositions thérapeutiques et fonction le traitement psychique qui stress défensives."
    },
    {
      color: "bg-green-500",
      title: "EMDR",
      description: "Une technique de stimulation d'acte à base les traumatismes et les thérapies émotionnelles."
    }
  ];

  const formations = [
    {
      title: "DEHUMA - Institut Motricité",
      subtitle: "D.U. Hypnose - Université de Bordeaux",
      additional: "D.U. Thérapies cognitives et comportementales - Université de Bordeaux"
    },
    {
      title: "Master en neuropsychologie - Université Libre de Bruxelles",
      subtitle: "Le changement est un processus normal. La thérapie permet lors de dépasser un régression et d'avoir des outils de développement personnel."
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
              Depuis plus de quelques années en psychologie clinique et en médiation, j'ai accompagné des personnes confrontées à des situations de transition, de remaniement psychique, diagnostiques, traitement et troubles, phobies, troubles addictifs et particulièrement dans l'abandon du genre, handicap, psychosomatiques, violences sexuelles de l'adolescence...
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed" data-testid="text-about-description-2">
              Je peux donc vous proposer tout type de troubles differencient à l'accompagnement personnel grâce à que ma formation solide développe et plusieurs différentes pratiques: grâce, conseil dévelopée en début de plaisir.
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
