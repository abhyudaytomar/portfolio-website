import './App.css';
import Navbar from './Components/navbar/Navbar';
import ThrowableText from './Components/Throwtext';
import ThrowableSentence from './Components/Throwablesentence';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/MainPage/Main';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';
function App() {
  return (
    <div className='app-container'  >
      <Navbar />
      <LandingPage />
      <Projects  />
      <Skills />
      <Contact />
      <Footer/>
     
    </div>)
}

export default App;
