// src/App.js

import "./styles.css";
import { Home } from './pages/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHourglassStart,
  faUserGraduate,
  faCrosshairs
} from '@fortawesome/free-solid-svg-icons';

// This is the crucial line you need to add!
// It registers the icons with Font Awesome's global library.
library.add(faHourglassStart, faUserGraduate, faCrosshairs);

function App() {
  return (
    <div className="App">
      <Home /> {/* Self-closing tag is good practice */}
    </div>
  );
}

export default App;