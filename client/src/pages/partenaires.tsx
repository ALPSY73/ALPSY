import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Partenaires() {
  return (
    <div className="font-inter bg-white">
      <Header />
      
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Partenaires</h1>
            <div className="mt-6">
              <Link href="/">
                <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">
                  ← Retour à l'accueil
                </button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Psys NosAvis */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Psys NosAvis</h3>
              <p className="text-gray-600 mb-6">
                Plateforme de référence pour trouver les meilleurs psychologues avec les avis clients authentiques.
              </p>
              <a 
                href="https://psys.nosavis.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Visiter le site
              </a>
            </div>

            {/* AlpCréaWeb */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <img 
                  src="https://www.alpcreaweb.fr/images/logo-alpcreaweb.jpg" 
                  alt="AlpCréaWeb" 
                  className="mx-auto h-12 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">AlpCréaWeb</h3>
              <p className="text-gray-600 mb-6">
                Annuaire commerce local à Challes-les-Eaux pour améliorer la visibilité des entreprises locales.
              </p>
              <a 
                href="https://www.alpcreaweb.fr/france/rhone-alpes/savoie/challes-les-eaux/commerce.html" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Annuaire Commerce à CHALLES-LES-EAUX"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Voir l'annuaire
              </a>
            </div>

            {/* Empreintes du Web */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <img 
                  src="https://www.empreintesduweb.com/kit_pub/bouton_1.png" 
                  alt="Empreintes du Web" 
                  className="mx-auto h-12 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Empreintes du Web</h3>
              <p className="text-gray-600 mb-6">
                Annuaire professionnel pour améliorer votre référencement et votre visibilité sur le web.
              </p>
              <a 
                href="https://www.empreintesduweb.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Notre annuaire pour améliorer votre référencement et votre visibilité"
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Découvrir l'annuaire
              </a>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}