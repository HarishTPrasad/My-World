
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import ParticleAnimation from './components/ParticleAnimation';
import Project from './components/Project';
import Resume from './components/Resume';
import Team from './components/Team';



function App() {
  return (
    <>
    <Nav></Nav>
    <ParticleAnimation></ParticleAnimation>
    <Home></Home>
    <About></About>
    <Team></Team>
    <Resume></Resume>
    <Project></Project>
    <Contact></Contact>
   
    </>
    
  );
}

export default App;
