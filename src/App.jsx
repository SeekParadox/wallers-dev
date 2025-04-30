import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar></Navbar>
        <Home></Home>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
    </>
  );
}

export default App;
