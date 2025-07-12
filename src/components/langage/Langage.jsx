import React from "react";
import java from "../../assets/langage/Java-150x150.png";
import python from "../../assets/langage/python-150x150.png";
import javascript from "../../assets/langage/JS-150x150.png";
import c from "../../assets/langage/C-150x150.png";
import TypeScript from "../../assets/langage/TS-150x150.png";
import docker from "../../assets/langage/docker-300x77.png";
import next from "../../assets/langage/next.png";
import aws from "../../assets/langage/aws.png";
import serverles from "../../assets/langage/serverless.png";
import react from "../../assets/langage/react.png";
import openApi from "../../assets/langage/openapi.png";

const Langage = () => {
    const content = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16"
    const content2 = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8"

  return (
    <div className="bg-gray-100">
      <section className="mx-auto py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="h-4"></div>

            <h2 className="text-5xl font-bold text-gray-900 mb-6 dark:text-blue-950 font-garamond">
              Les technos et langages utilisées
            </h2>

            <p className="text-lg text-gray-700 mx-auto dark:text-gray-800 font-poppins">
              Nos étudiants sont formés à l’utilisation et à la maîtrise des
              langages de programmation Java et JavaScript. Ces deux langages
              occupent une place de choix dans le domaine du développement
              logiciel et du web, offrant une polyvalence et une robustesse
              appréciées par les développeurs à travers le monde.
            </p>
          </div>
          <div className="content">
            <div className={content}>
              <img src={java} alt="Java Logo" width={150} height={150} />
              <img src={python} alt="Python Logo" width={150} height={150} />
              <img
                src={javascript}
                alt="JavaScript Logo"
                width={150}
                height={150}
              />
              <img src={c} alt="C Logo" width={150} height={150} />
              <img
                src={TypeScript}
                alt="TypeScript Logo"
                width={150}
                height={150}
              />
            </div>
            <div className={content2}>
              <img
                src={docker}
                alt="Docker Logo"
                className="w-full max-h-24 object-contain"
              />
              <img
                src={next}
                alt="Next.js Logo"
                className="w-full max-h-24 object-contain"
              />
              <img
                src={aws}
                alt="AWS Logo"
                className="w-full max-h-24 object-contain"
              />
              <img
                src={serverles}
                alt="Serverless Logo"
                className="w-full max-h-24 object-contain"
              />
              <img
                src={react}
                alt="React Logo"
                className="w-full max-h-24 object-contain"
              />
              <img
                src={openApi}
                alt="OpenAPI Logo"
                className="w-full max-h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Langage;
