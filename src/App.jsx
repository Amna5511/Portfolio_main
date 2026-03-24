
import Navbar from "./layout/Navbar";
 import Hero from "./section/Hero"; 
 import About from "./section/About"; 
 import Projects from "./section/Projects"; 
 import Experience from "./section/Experience";
 import Contact from "./section/Contact";
 import Footer from "./layout/Footer";

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
    <Footer /> 
    </main> 
    </div>)
     }            