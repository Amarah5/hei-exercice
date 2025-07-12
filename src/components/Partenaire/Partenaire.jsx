import React from "react";
import nexta from '../../assets/LOGO-NEXTA.webp'
import passerellesNumerique from "../../assets/PN_Logo_baseline_color_ENG.png";
import bp from "../../assets/bp-logo-full-1024x331.webp";
import etech from "../../assets/logo-etech.png";
import kante from "../../assets/logo-kante-company-1.png";
import yif from "../../assets/YIF_LOGO_512x512_BL_on_WH-1.webp";
import Yooz from "../../assets/Yooz-2023-Logo-2.webp";
import Nummer from "../../assets/Logo-Numer-vf.png";
import emit from "../../assets/logo_emit.png";


const Partenaire = () => {
    const content = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16"
    const content2 = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8"

  return (
    <div className="bg-white">
      <section className="mx-auto py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 dark:text-blue-950 font-garamond">
              Nos partenaires
            </h2>

            <p className="text-lg text-gray-700 mx-auto dark:text-gray-800 font-poppins">
              L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires
            </p>
          </div>
          <div className="content">
            <div className={content}>
              <img src={nexta} alt="nexta logo" width={150} height={150} />
              <img src={passerellesNumerique} alt="passerelle numériques logo" width={150} height={150} />
              <img
                src={Yooz}
                alt="youz logo"
                width={150}
                height={150}
              />
              <img src={etech} alt="etech logo" width={150} height={150} />
              <img
                src={emit}
                alt="emit logo"
                width={150}
                height={150}
              />
            </div>
            <div className={content2}>
              <img
                src={Nummer}
                alt="Nummer Logo"
                className="w-full max-h-24 object-contain"
              />
              <img
                src={bp}
                alt="bp Logo"
                className="w-full max-h-24 object-contain"
              />
              <img
                src={yif}
                alt="Yif Logo"
                className="w-full max-h-24 object-contain"
              />
              <img
                src={kante}
                alt="kante Logo"
                className="w-full max-h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partenaire;
