import React, { useState } from 'react'; // <--- This was the missing import!
import teamMember1 from '../../assets/01/inconue.jpg';
import teamMember2 from '../../assets/01/inconue2.jpg';
import teamMember3 from '../../assets/01/Jean-Aime-Maxa.jpg';
import teamMember4 from '../../assets/01/Parison-e.png';
import teamMember5 from '../../assets/01/Tahina-OK.png';

function Peda() {
  const teamMembers = [
    {
      id: 1,
      image: teamMember1,
      name: 'Nom du membre 1',
      expertise: 'Expert en développement web',
    },
    {
      id: 2,
      image: teamMember2,
      name: 'Nom du membre 2',
      expertise: 'Spécialiste en cybersécurité',
    },
    {
      id: 3,
      image: teamMember3,
      name: 'Nom du membre 3',
      expertise: 'Ingénieur en intelligence artificielle',
    },
    {
      id: 4,
      image: teamMember4,
      name: 'Nom du membre 4',
      expertise: 'Chef de projet IT',
    },
    {
      id: 5,
      image: teamMember5,
      name: 'Nom du membre 5',
      expertise: 'Spécialiste en IA',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const getDisplayedMembers = () => {
    const displayed = [];
    for (let i = 0; i < 3; i++) {
      displayed.push(teamMembers[(startIndex + i) % teamMembers.length]);
    }
    return displayed;
  };

  const goToNextMember = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const goToPrevMember = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <div className="mb-12">
          <h2 className="text-[var(--color-primary-blue)] font-garamond font-bold text-4xl md:text-5xl mb-4">
            L'équipe pédagogique
          </h2>
          <p className="text-[var(--color-primary-blue)] font-poppins text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center space-x-6 md:space-x-8 lg:space-x-12 py-4 px-4 overflow-hidden">
            {getDisplayedMembers().map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 w-64 p-6 bg-[var(--color-primary-blue)] rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={`Membre de l'équipe ${member.name}`}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[var(--color-primary-yellow)]"
                />
                <h3 className="font-garamond text-xl font-semibold mb-1 text-white">
                  {member.name}
                </h3>

                <p className="font-poppins text-sm text-[var(--color-primary-blue)] bg-white px-2 py-1 rounded-sm">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>


          {teamMembers.length > 3 && (
            <>
              <button
                onClick={goToPrevMember}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-primary-yellow)] text-white p-3 rounded-full shadow-md hover:bg-yellow-600 transition hidden md:block"
              >
                &#10094;
              </button>
              <button
                onClick={goToNextMember}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[var(--color-primary-yellow)] text-white p-3 rounded-full shadow-md hover:bg-yellow-600 transition hidden md:block"
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