export const Footer = () =>{
    return(
        <>
              <footer className="bg-blue-900 text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold mb-4">HEI</h2>
          <p className="text-sm">
            Formation habilitée par l'Etat suivant le système LMD
          </p>
          <p className="mt-4 text-sm">
            Habilitation MESupRes n°31309/2023
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Adresse</h3>
          <p className="text-sm">II J 161 R Ambodivoanjo</p>
          <p className="text-sm">Ivandry Antananarivo</p>
          <p className="text-sm">101, Madagascar</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Navigation</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline text-yellow-400">Accueil</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Actualités</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Bourse d'études</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Médias sociaux</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  ;
 </>
    )
}