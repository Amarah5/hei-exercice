import React, { useState, useEffect, useCallback } from "react";
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
      text: "Des entreprises partenaire et une équipe pédagogiques qui travaillent sans relâche pour la montée en compétence de nos étudiants.",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToPreviousSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);
  

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNextSlide]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlideIndex].image})` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-40"></div> 

      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"> 
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-garamond font-extrabold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-[var(--color-primary-white)] leading-tight"> 
          Haute École d'Informatique
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-8 sm:mb-10 md:mb-12 max-w-3xl text-[var(--color-primary-white)] leading-relaxed"> 
          {slides[currentSlideIndex].text}
        </p>

        <div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8 mb-16 sm:mb-20 md:mb-24 justify-center flex-wrap">
          <button className="bg-white text-[var(--color-primary-blue)] hover:bg-[var(--color-primary-yellow)] px-6 sm:px-8 py-3 rounded-md shadow-lg transition duration-300 ease-in-out font-semibold text-sm sm:text-base hover:text-white transform hover:scale-105"> 
            Inscrivez-vous ici
          </button>
          <button className="bg-[var(--color-primary-yellow)] text-[var(--color-primary-white)] hover:bg-yellow-500 px-6 sm:px-8 py-3 rounded-md shadow-lg transition duration-300 ease-in-out font-semibold text-sm sm:text-base transform hover:scale-105"> 
            Emploi du temps
          </button>
          <button className="bg-[var(--color-primary-blue)] hover:bg-blue-900 text-[var(--color-primary-white)] px-6 sm:px-8 py-3 rounded-md shadow-lg transition duration-300 ease-in-out font-semibold text-sm sm:text-base transform hover:scale-105"> 
            Programme pédagogique
          </button>
        </div>

        <div className="absolute bottom-4 left-0 right-0 w-full px-4 sm:px-6"> 
          <p className="text-gray-200 font-medium text-xs sm:text-sm">
            Habilitation MESUPRES, suivant l'arrêté n°31309/2023
          </p>
        </div>
      </div>

      <div className="hidden md:flex absolute left-0 right-0 top-1/2 transform -translate-y-1/2 justify-between px-4 sm:px-6 z-20">
        <button
          onClick={goToPreviousSlide}
          className="text-white text-3xl sm:text-4xl p-2 rounded-full hover:bg-white hover:bg-opacity-30 transition duration-300"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          onClick={goToNextSlide}
          className="text-white text-3xl sm:text-4xl p-2 rounded-full hover:bg-white hover:bg-opacity-30 transition duration-300"
          aria-label="Next slide"
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
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </section>
  );
};