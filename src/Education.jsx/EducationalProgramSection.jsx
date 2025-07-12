import React from 'react';
import '../styles.css';
import  rigth from '../assets/2024/11/IMG-03-e1720537524581-1024x950-1.webp'
import galery1 from '../assets/2025/05/Mask-group-1.webp';
import galery2 from '../assets/2025/05/Mask-group-2.webp';
import galery3 from '../assets/2025/05/Mask-group-3.webp';

const EducationalProgramSection = () => {
    const boxStyle = "bg-yellow-100 p-8 rounded-2xl shadow-lg border border-gray-100 transition transform hover:scale-105 duration-300";
    const pourcetStyle = "text-6xl font-extrabold text-[var(--color-primary-yellow)] mb-6";
    const textStyle = "text-xl font-poppins text-gray-800 leading-snug";
    const galery="rounded-xl overflow-hidden shadow-xl transition transform hover:scale-105 duration-300";
    const img = "w-full h-full object-cover";
    return (
        <section className="font-sans text-gray-800 bg-white pt-16 pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24 mb-8">
                    <div className="relative w-full lg:w-1/2 flex justify-center items-center overflow-hidden rounded-lg">
                        <div className="relative w-full h-[100%] lg:h-[500px] overflow-hidden rounded-lg">
                            <img 
                                loading="lazy" 
                                decoding="async" 
                                src={rigth} 
                                alt="Le programme pédagogique illustration" 
                                className="absolute w-full max-w-sm sm:max-w-md h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full h-auto flex flex-col justify-center space-y-10 lg:pl-12">
                        <h1 className="w-full text-5xl md:text-6xl font-garamond font-bold text-[var(--color-primary-blue)] leading-tight">
                            Le programme pédagogique
                        </h1>
                        <div className="text-xl text-gray-700 leading-relaxed">
                            <p className="mb-6">
                                Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché.
                            </p>
                            <p>
                                La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
                            </p>
                        </div>
                        <div className="pt-1">
                            <a 
                                href="https://drive.google.com/file/d/1FdooEeAKPO5ucNKXMnyEBZ3RTTE80q7e/view?usp=sharing" 
                                target="_blank" 
                                rel="nofollow noopener noreferrer"
                                className="inline-block px-5 py-2 bg-white text-blue-950 border-[2px] border-blue-950 font-semibold hover:bg-blue-950 hover:text-white transition duration-200 text-lg uppercase tracking-wide"
                            >
                                Notre Programme
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    
                    <div className={boxStyle}>
                        <h3 className={pourcetStyle}>25%</h3>
                        <p className={textStyle}>
                            Apprentissage théoriques en présentiel
                        </p>
                    </div>

                    <div className={boxStyle}>
                        <h3 className={pourcetStyle}>25%</h3>
                        <p className={textStyle}>
                            Apprentissage sur supports numériques
                        </p>
                    </div>

                    <div className={boxStyle}>
                        <h3 className={pourcetStyle}>25%</h3>
                        <p className={textStyle}>
                            Travaux individuels de l'étudiant
                        </p>
                    </div>

                    <div className={boxStyle}>
                        <h3 className={pourcetStyle}>25%</h3>
                        <p className={textStyle}>
                            Apprentissage en entreprise
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className={galery}>
                        <img src={galery1} className={img} />
                    </div>
                    <div className={galery}>
                        <img src={galery2} className={img} />
                    </div>
                    <div className={galery}>
                        <img src={galery3} className={img} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EducationalProgramSection;