import React from 'react'
import box1 from "../../assets/2024/05/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png";
import box3 from "../../assets/2024/05/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png";
import box2 from "../../assets/2024/05/Intelligence-artificielle_Plan-de-travail-1-150x150.png";

export const Domainesect = () => {
    const DomaineData = [
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
            description: "Plongez dans l'univers de l'intelligence artificielle et apprenez à créer des systèmes capables d'apprendre et de s'adapter. Chez HEI, vous serez formé aux dernières avancées en matière d'IA."
        },
        {
            id: 3, 
            image: box3, 
            title: "Ingénierie logicielle", 
            alt: "Ingénierie logicielle Icon", 
            description: "Devenez un expert en ingénierie logicielle et maîtrisez les méthodes de développement agiles. Chez HEI, vous apprendrez à concevoir des logiciels de qualité."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-garamond">
                        Domaines
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-poppins">
                        Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {DomaineData.map((domaine) => (
                        <div 
                            key={domaine.id}
                            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 
                                       hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
                                       flex flex-col items-center text-center"
                        >
                            <div className="mb-8 w-28 h-28 flex items-center justify-center">
                                <img
                                    src={domaine.image}
                                    alt={domaine.alt}
                                    className="object-contain w-full h-full transition duration-300" 
                                />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{domaine.title}</h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                {domaine.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Domainesect;