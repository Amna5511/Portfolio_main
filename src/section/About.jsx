import { div } from "framer-motion/client"

const highlights =[
  {
    title:"Front-End",
    description: "Building accessible, poetic interfaces with React & Tailwind.",
  },
   {
    title:"Back-End",
    description: "Structuring data with care for a seamless user experience.",
  },
 {
    title:"Creativity",
    description: " Blending illustration and code to create authentic projects.",
  },


]

const About = () => {
  return (
   <section id="about" className="py-2 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/**Left Column */}
        <div className="space-y-8">
          <div className="animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            About me
            </span>
          
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
          Helping create a better world,
          <span className="font-serif italic font-normal text-white">
            {" "}
            each day a new milestone.
          </span>
        </h2>
        <div  className="space-y-4 text-muted-foreground anilmate-fade-in animation-delay-200">
          <p>
            My path to code wasn’t linear. I explored languages, arts, and sciences before finding my place in development. Now training as a Full‑Stack JavaScript developer at Interface3, I bring patience, rigor, and creativity to everything I build.
          </p>
          <p>
           I work with React, Node.js, and Tailwind to build thoughtful interfaces and clean logic. I enjoy creating APIs, organizing data, and blending code with drawing. What drives me is the joy of learning and building tools that serve people with care.




          </p>
        </div>
        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
          <p className="text-lg font-medium italic text-foreground">
            I create digital tools with integrity and purpose. I'm drawn to projects where technology meets empathy — inclusive interfaces, protective platforms, human‑centered experiences. For me, the best code makes a difference, quietly and reliably.
          </p>
        </div>
        </div>
        {/**Right column with highlights */}
        <div className="grid sm:grid-cols-2 gap-6">
          { highlights.map((item,idx) => (
            <div key={idx}className="glass p-6 rounded-2xl animate-fade-in animation-delay-400">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}

        </div>
      </div>
      </div>
   </section>
  )
}

export default About