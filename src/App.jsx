
import Navbar from "./layout/Navbar";
 import Hero from "./section/Hero"; 
 import About from "./section/About"; 
 import Projects from "./section/Projects"; 
 import Experience from "./section/Experience";
 import Skills from "./section/Skills"; 
 import Contact from "./section/Contact";
  import Footer from "./section/Footer";
 export default function App() {
   return(
   <div className="min-h-screen overflow-x-hidden "> 
   <Navbar /> 
   <main> 
    <Hero /> 
    <About /> 
    <Projects /> 
    <Experience /> 
    <Contact /> 
    </main> 
    </div>)
     }            