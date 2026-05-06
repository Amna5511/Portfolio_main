import Button  from '@/components/Button';
import { ArrowRight, Download,GitBranchIcon, Linkedin ,ChevronDownCircle } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';
const skills = [
  "React",
  "Express",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "Github",
  "Insomnia",
];


const Hero = () => {
  return (
   <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* BG */}
    <div className="absolute inset-0">
      <img src="moritz-ludtke-pic.jpg" alt="background with white lines and red lines " className="w-full h-full object-cover opacity-40" />
   
    <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
    </div>

    {/* Red Dots*/}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_,i )=> (
        <div
         className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
        style={{
          backgroundColor: "#880808",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
        /> 
      ))}
    </div>
    {/* Content */}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* left column text content */}
        <div className="space-y-8">
          <div className="animate-fade-in" >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
              Full-Stack JS/React Developer
              </span>
          </div>
           {/* headline*/}
           <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold  leading-tight animate-fade-in animation-delay-100">
              Create <span className="text-white ">new</span>
              <br /> experience with 
              <br />
              <span className="font-serif italic font-normal text-primary glow-text ">
               passion and love.
              </span>
            </h1> 
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Welcome fellow visitor , I'm Amna , a full-stack Javascript Developer.
              I work with React,Vanilla Js,Node  and I'm eager to learn new languages . 
              I mainly focus on creating websites  that corresponds to the users accessibility and vision .
            </p>
           </div>
           {/* Call to action section */}
           <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <a href="#contact">
            <Button size="lg">
              Contact Me
               <ArrowRight className="w-5 h-5"/>
            </Button>
            </a>
            <a href="/cv.pdf" Download>
            <AnimatedBorderButton>
             <span>
              <Download className="w-5 h-5"/>
              Download CV</span> 
            </AnimatedBorderButton>
            </a>
           </div>
           {/*Socials links*/}
          
           <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
           <span className="text-sm text-muted-foreground ">Follow Me:</span>
           {[
            { icon: GitBranchIcon, href: "https://github.com/Amna5511" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/amna-amri-2a4722311" },
           ].map((social,idx)=>(
            <a key={idx}  href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
              {<social.icon className="w-5 h-5"/>}
              </a>
           ))}
           </div>
        </div>
        {/* right column profile picture*/}
        <div className="relative animate-fade-in animation-delay-300">
           {/* profile picture*/}
        <div className="relative max-w-md mx-auto">
           <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
          <div className="relative glass rounded-3xl p-2 glow-border">
           <img src="/avatar1.png" alt="avatar Amna Amri" className="w-full aspect-[4/5] object-cover rounded-2xl" />
  
             {/* floating badge*/}
             <div className="absolute -bottom-4 -right-4 bg-black rounded-xl px-4 py-3 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
               <span className="text-sm font-medium">Ready to connect</span>
              </div>
             </div>
          </div>   
        </div>
       </div>
      </div>
      {/*Skills section  */}
      <div className="mt-20 animate-fade-in animation-delay-600">
      <p className="text-sm text-muted-foreground mb-6 text-center">
        Languages and Technologies I use
     </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {[...skills,...skills].map((skill,idx) => (
            <div key={idx} className="flex-shrink-0 px-8 py-4">
              <span className="text-xl font-semibold text-highlight/80 hover:text-muted-foreground transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
     <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll to see more</span>
          <ChevronDownCircle className="w-6 h-6 animate-bounce" />
        </a>
      </div>
   </section>
  )
}

export default Hero