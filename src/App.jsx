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

      <div className="flex flex-col">
        <Home></Home>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;
