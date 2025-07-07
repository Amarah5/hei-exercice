
import "../../styles.css";
import aproposLeft from "../../assets/2024/11/A-propos-left-1.webp";
import React from "react";

export const About = () => {
  const contentApropos = [
    {
      ico: "fas-",
      title: "+3ans",
      text: "Depuis 3 ans, nous formons ceux qui décident le futur aux métier de l'informatique. Nous sommes un groupe d'expert, de professionnel et des passionnés de l'informatique de Madagascar et du grand famille HEI",
    },
    {
      ico: "fas-",
      title: "+250 étudiants",
      text: "Plus de 250 étudiants et plus d'une dizaine d'entreprises ont déjà fait confiance à notre habilitée par l'Etat malagasy. Avec eux, nous sommes fiers de pouvoir parler de la grande famille HEI",
    },
    {
      ico: "fas-",
      title: "Notre mission",
      text:"Notre mission est d'amener des jeunes malagasy sur des domaines porteur comme l'inteligence artificielle, la cybersecurité ou la programmationafin de favoriser leur employabilité et le développement de Madagascar."
    },
  ];
  return (
    <>
      <section className="relative h-screen px-[25rem] flex justify-between text-center text-white overflow-hidden  sm:space-x-20 items-start my-[5rem]">
        <div className="image-content my-[10rem]">
          <div>
            <img src={aproposLeft} alt="image des élèves souriant"/>
          </div>
        </div>
        <div className="text-content">
          <div className="text-left">
            <h2 className="text-blue-950 font-bold text-[50px] mb-12">A propos de nous</h2>
            <div className="cont1 text-black">
              {contentApropos.map((icon)=>(
                <><h3 className="text-blue-950 font-semibold text-[25px] mb-4"><span><i key={icon.ico}></i></span>{icon.title}</h3><p className="mb-8 pr-10">{icon.text}</p></>
              ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
