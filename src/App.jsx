import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar></Navbar>
        <Home></Home>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
    </>
  );
}

export default App;
