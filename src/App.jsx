import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="flex flex-col">
    <Navbar></Navbar>
    <Home></Home>
    <Skills></Skills>
    <Experience></Experience>
    <Projects></Projects>
    </div>
  );
}

export default App;
