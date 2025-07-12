import React from 'react';
import box1 from "../../assets/2024/05/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png";
import box3 from "../../assets/2024/05/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png";
import box2 from "../../assets/2024/05/Intelligence-artificielle_Plan-de-travail-1-150x150.png";

const domainesData = [
  {
    id: 1,
    image: box1,
    title: "Cloud et cybersécurité",
    alt: "Cloud et cybersécurité Icon",
    description: "Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité."
  },
  {
    id: 2,
    image: box2,
    title: "Intelligence artificielle",
    alt: "Intelligence artificielle Icon",
    description: "Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI."
  },
  {
    id: 3,
    image: box3,
    title: "Ingénierie logicielle",
    alt: "Ingénierie logicielle Icon",
    description: "Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques."
  }
];

const Domaine = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-24">
        <div className="h-8 md:h-16"></div>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Domaines</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {domainesData.map((domaine) => (
            <div 
              key={domaine.id} 
              className="bg-white px-2 py-24 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <img 
                    loading="lazy" 
                    decoding="async" 
                    src={domaine.image} 
                    className="w-24 h-24 object-contain" 
                    alt={domaine.alt} 
                  />
                </div>
                <h3 className="text-2xl font-semibold text-yellow-600 mb-4">{domaine.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed px-4 text-center">
                  {domaine.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-16 md:h-24"></div>
      </div>
    </>
  );
}

export default Domaine;