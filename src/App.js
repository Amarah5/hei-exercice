import { NavBar } from './components/NavBar/Nav';
import { style } from "./css/App.css";

function App() {
  const slides = [
    {
      url: 'import banner1 from "../public/cloudHei/hei-banner-1.webp"',
    },
    {
      url: 'import banner1 from "../public/cloudHei/hei-banner-2.webp"',
    },
    {
      url: 'import banner1 from "../public/cloudHei/hei-banner-2.webp"',
    },
  ];
  return (
    <div className="App">
      <NavBar></NavBar>
      <main className="max-w-[1400px] w-full m-auto py-16 px-4 relative">
        <div className="banner">
          <div
            style={{ backgroundImage: `url(${slides[0].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>

          <div>
          </div>
          <div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
