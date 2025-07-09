import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aproposLeft from "../../assets/2024/11/A-propos-left-1.webp";
import "../../styles.css";

export const About = () => {
  const contentApropos = [
    {
      icon: ["fas", "hourglass-start"],
      title: "+3ans",
      text: "Depuis 3 ans, nous formons ceux qui décident le futur aux métiers de l'informatique. Nous sommes un groupe d'experts, de professionnels et des passionnés de l'informatique de Madagascar et du grand famille HEI.",
    },
    {
      icon: ["fas", "user-graduate"],
      title: "+250 étudiants",
      text: "Plus de 250 étudiants et plus d'une dizaine d'entreprises ont déjà fait confiance à notre habilitation par l'État malgache. Avec eux, nous sommes fiers de pouvoir parler de la grande famille HEI.",
    },
    {
      icon: ["fas", "crosshairs"],
      title: "Notre mission",
      text: "Notre mission est d'amener des jeunes malgaches sur des domaines porteurs comme l'intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-center md:justify-between md:space-x-12">


        <div className="md:w-1/2 w-full mb-8 md:mb-0 hidden md:flex justify-center"> 
          <img
            src={aproposLeft}
            alt="Groupe d'élèves souriants"
            className="w-full max-w-sm sm:max-w-md h-auto rounded-lg object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full text-center md:text-left"> 
          <h2 className="text-[var(--color-primary-blue)] font-garamond font-bold text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">
            À propos de nous
          </h2>
          <div className="text-gray-700 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
            {contentApropos.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md md:shadow-none hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <h3 className="text-[var(--color-primary-blue)] font-garamond font-semibold text-xl md:text-2xl mb-2 flex items-center justify-center md:justify-start">
                  {item.icon && (
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="mr-4 text-xl sm:text-2xl text-[var(--color-primary-yellow)]"
                    />
                  )}
                  <span>{item.title}</span>
                </h3>
                <p className="text-sm sm:text-base leading-relaxed font-poppins px-0">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};