import { NavBar } from "../components/NavBar/Nav";
import { Banierre } from "../components/bannière/Banierre";
import "../styles.css";
import { About } from "../components/about/About";


export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar></NavBar>
      <main>
        <div className="">
          <Banierre></Banierre>
          <About></About>
        </div>
      </main>
    </div>
  );
};
