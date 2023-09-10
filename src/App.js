import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar';
import Intro from './Intro';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Navbar />

      <Intro />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
