import { NavBar } from "../components/NavBar/Nav";
import { Banierre } from "../components/bannière/Banierre";
import "../styles.css";
import { About } from "../components/about/About";
import Peda from "../components/pedagogique/Peda";
import { Debouche } from "../components/debouché/Debouche";
import Concours from "../components/Concours/Concours";
import { Domainesect } from "../components/domaine/Domainesect";
import Langage from "../components/langage/Langage";
import Partenaire from "../components/Partenaire/Partenaire";
import Footer from "../components/Footer/Footer";


export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar></NavBar>
      <main>
        <div className="">
          <Banierre></Banierre>
          <About></About>
          <Peda></Peda>
          <Debouche></Debouche>
          <Domainesect></Domainesect>
          <Concours></Concours>
          <Langage></Langage>
          <Partenaire></Partenaire>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};
