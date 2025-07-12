// src/App.js

import "./styles.css";
import { Home } from './pages/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHourglassStart,
  faUserGraduate,
  faCrosshairs
} from '@fortawesome/free-solid-svg-icons';

library.add(faHourglassStart, faUserGraduate, faCrosshairs);

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;