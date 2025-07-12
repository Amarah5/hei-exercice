import React from 'react';
import deboucheRigth from "../../assets/2024/11/IMG-02-e1720543344824-987x1024-1.webp";
import "../../styles.css";

export const Debouche = () => {


  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-center md:justify-between md:space-x-12">

        <div className="md:w-1/2 w-full text-center md:text-left"> 
          <h2 className="text-[var(--color-primary-blue)] font-garamond font-bold text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">
            Quelques débouchés
          </h2>
            <p className="text-6xl sm:text-base leading-relaxed font-poppins px-0">
                Formez-vous à une panoplie de métier du numérique avec nous et venz acquérir les fondements de la programmation(qui vous servira pour les différents métiers)! Ce sont des métiers porteur, des métiers du présent, des métiers du futur...
            </p><br></br>
            <p className="text-6xl sm:text-base leading-relaxed font-poppins px-0">
                Développeur back-end, développeur front-end, developpeurs mobile, chef de projet, exploitant cloud, analystes cybersécurité, pentesters, auditeur techniques SSI, auditeur organisatioonel SSI, administrateur système et réseau, développeur de sécurité...
            </p>
        </div>
        <div className="md:w-1/2 w-full mb-8 md:mb-0 hidden md:flex justify-center"> 
          <img
            src={deboucheRigth}
            alt="Groupe d'élèves souriants"
            className="w-full max-w-sm sm:max-w-md h-auto rounded-lg object-cover"
          />
        </div>
    </div>
    </section>
  );
};