import React from "react";

const Concours = () => {
  const buttonBgColor = "bg-blue-900"; 
  const buttonTextColor = "text-white"; 
  const darkTextColor = "text-gray-900";

  const admissionSteps = [
    {
        id: 1,
        title: "Dépôt de dossiers :",
        description: "pour les bacheliers de toutes séries sans limite d’âge",
        bgColor: "bg-yellow-100",
        roundClasses: "rounded-none md:rounded-l-lg",
        showArrow: true,
    },
    {
        id: 2,
        title: "Test de niveau :",
        description: "composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D",
        bgColor: "bg-yellow-200",
        roundClasses: "rounded-none",
        showArrow: true,
    },
    {
        id: 3,
        title: "Inscription définitive",
        description: "(si test réussi)",
        bgColor: "bg-yellow-300",
        roundClasses: "rounded-none md:rounded-r-lg",
        showArrow: false,
    }
  ];

  const RightArrow = () => (
    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block text-white">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
        </svg>
    </div>
  );

  const AdmissionStep = ({ step, darkTextColor, RightArrow }) => (
    <div className={`flex flex-col items-start text-left p-6 ${step.bgColor} ${step.roundClasses} relative`}>
        <h3 className="text-6xl font-extrabold text-white mb-4">{`0${step.id}`}</h3>
        <div className={darkTextColor}>
            <p className="text-lg font-bold mb-2">{step.title}</p>
            <p className="text-base">{step.description}</p>
        </div>
        {step.showArrow && <RightArrow />}
    </div>
  );

  return (
    <>
      <section className={`py-0 md:py-0 bg-blue-300`}>
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center py-12 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white  mb-4">
              Admission
            </h2>
            <div className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
              <p>
                Ouverte aux bacheliers de toutes les séries, l’admission chez
                HEI se fait par test de niveau :
              </p>
              <p>
                une épreuve de français niveau B2 et d’une épreuve de
                mathématiques niveau Terminale D.&nbsp;
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 items-stretch justify-center">
            {admissionSteps.map((step) => (
                <AdmissionStep 
                    key={step.id} 
                    step={step} 
                    darkTextColor={darkTextColor} 
                    RightArrow={RightArrow} 
                />
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center mt-16 md:mt-24 space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="https://hei.school/inscription"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block border-solid border-white hover:bg-blue-800 ${buttonTextColor} font-semibold py-3 px-8 transition duration-200 text-center`}
            >
              Inscrivez-vous ici
            </a>
            <a
              href="https://drive.google.com/drive/folders/1saqFZ9ZWkQ-QHZheOvY8nAzIBRy0MkA0?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block ${buttonBgColor} hover:bg-blue-800 ${buttonTextColor} font-semibold py-3 px-8 transition duration-200 text-center`}
            >
              Résultat concours
            </a>
          </div>
          <div className="h-4 md:h-8"></div>
        </div>
      </section>
    </>
  );
};

export default Concours;