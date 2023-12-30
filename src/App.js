
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import ParticleAnimation from './components/ParticalAnimation/ParticleAnimation';
import Project from './components/Project/Project';
import Resume from './components/Resume/Resume';
import Team from './components/Team/Team';



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
