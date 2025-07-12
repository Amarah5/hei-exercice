import React, { useState, useEffect, useCallback } from 'react';
import teamMember1 from '../../assets/01/inconue.jpg';
import teamMember2 from '../../assets/01/inconue2.jpg';
import teamMember3 from '../../assets/01/Jean-Aime-Maxa.jpg';
import teamMember4 from '../../assets/01/Parison-e.png';
import teamMember5 from '../../assets/01/Tahina-OK.png';

function Peda() {

  const teamMembers = [
    {
      id: 1,
      image: teamMember3,
      name: 'Jean Aimé Max',
      expertise: 'Ingénieur en intelligence artificielle',
    },
    {
      id: 2,
      image: teamMember4,
      name: 'Parison Ravalomanda',
      expertise: 'Chef de projet IT',
    },
    {
      id: 3,
      image: teamMember1,
      name: 'Yannick Raharijaona',
      expertise: 'Expert en développement web',
    },
    {
      id: 4,
      image: teamMember2,
      name: 'Nom du membre 2',
      expertise: 'Spécialiste en cybersécurité',
    },
    {
      id: 5,
      image: teamMember5,
      name: 'Nom du membre 5',
      expertise: 'Spécialiste en IA',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const totalMembers = teamMembers.length;
  const membersPerPage = 3;


  const getDisplayedMembers = () => {
    const displayed = [];
    for (let i = 0; i < membersPerPage; i++) {
      displayed.push(teamMembers[(startIndex + i) % totalMembers]);
    }
    return displayed;
  };


  const goToPrevMember = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalMembers) % totalMembers);
  }, [totalMembers]);


  const goToNextMember = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalMembers);
  }, [totalMembers]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextMember();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNextMember]);

  return (
    <section className="bg-blue-400 py-16 md:py-12 xl:w-full">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <div className="mb-12">
          <h2 className="text-[var(--color-primary-white)] font-garamond font-bold text-4xl md:text-5xl mb-4">
            L'équipe pédagogique
          </h2>
          <p className="text-[var(--color-primary-white)] font-poppins text-lg md:text-xl leading-relaxed w-full mx-auto">
            Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
          </p>
        </div>

        <div className="relative w-full">
          <div className="flex justify-center items-center space-x-6 md:space-x-8 lg:space-x-12 py-4 px-4 overflow-hidden w-full">
            {getDisplayedMembers().map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 w-64 p-10 bg-[var(--color-primary-white)] rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={`Membre de l'équipe ${member.name}`}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[var(--color-primary-yellow)]"
                />
                <h3 className="font-garamond text-xl font-semibold mb-1 text-[var(--color-primary-blue)]">
                  {member.name}
                </h3>
                <p className="font-poppins text-sm text-[var(--color-primary-blue)] bg-none px-2 py-1 rounded-sm">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>

          {totalMembers > membersPerPage && (
            <>
              <button
                onClick={goToPrevMember}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-0 rounded-full transition hidden md:block"
              >
                &#10094;
              </button>

              <button
                onClick={goToNextMember}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-0 rounded-full transition hidden md:block"
              >
                &#10095;
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Peda;