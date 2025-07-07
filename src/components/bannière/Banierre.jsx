import React, { useState, useEffect } from "react";
import slide1 from "../../assets/cloudHei/hei-banner-1.webp"; 
import slide2 from "../../assets/cloudHei/hei-banner-2.webp"; 
import slide3 from "../../assets/cloudHei/hei-banner-3.webp"; 
import "../../styles.css";

export const Banierre = () => {
  const slides = [
    {
      image: slide1,
      text: "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudiants.",
    },
    {
      image: slide2,
      text: "\"L'éducation est l'arme la plus puissante pour changer le monde\", selon Nelson Mandela. \"L'éducation dans l'informatique est une arme puissante pour lutter contre la pauvreté à Madagascar\" selon HEI. C'est notre mission",
    },
    {
      image: slide3,
      text: "Des entreprises partenaire et une équipe pédagogiques  qui travailles sans relâche pour la montée en compétence de nos étudiants.",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlideIndex].image})` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-24 whitespace-nowrap text-[72px] text-[var(--color-primary-white)]">
          Haute École d'Informatique
        </h1>

        <p className="text-lg md:text-xl font-semibold mb-24 max-w-2xl text-[var(--color-primary-white)]">
          {slides[currentSlideIndex].text}
        </p>

        <div className="w-full flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-20 mb-24">
          <button className="bg-white text-[var(--color-primary-blue)] hover:bg-gray-100 px-8 py-3 shadow-lg transition duration-300 ease-in-out font-semibold text-base ">
            Inscrivez-vous ici
          </button>
          <button className="bg-[var(--color-primary-yellow)] text-[var(--color-primary-white)] hover:bg-gray-100 px-8 py-3  shadow-lg transition duration-300 ease-in-out font-semibold text-base ">
            Emploi du temps
          </button>
          <button className="bg-[var(--color-primary-blue)] hover:bg-yellow-600 text-[var(--color-primary-white)] px-4 py-5  shadow-lg transition duration-300 ease-in-out font-semibold text-base ">
            Programme pédagogique
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full mb-4">
          <p className="text-gray-200 font-medium text-xs sm:text-sm">
            Habilitation MESUPRES, suivant l'arrêté n°31309/2023
          </p>
        </div>
      </div>

      <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 sm:px-6 z-20">
        <button
          onClick={goToPreviousSlide}
          className="text-white text-4xl p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300"
        >
          &#10094;
        </button>
        <button
          onClick={goToNextSlide}
          className="text-white text-4xl p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300"
        >
          &#10095;
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${
              index === currentSlideIndex
                ? "bg-white"
                : "bg-gray-400 opacity-70"
            } cursor-pointer transition-colors duration-300`}
            onClick={() => setCurrentSlideIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};
