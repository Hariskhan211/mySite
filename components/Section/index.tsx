import reactLogo from '@/public/react-logo.webp'
import jsLogo from '@/public/JavaScript.png'
import htmlLogo from '@/public/HTML5.png'
import cssLogo from '@/public/CSS3.png'
import nextjsLogo from '@/public/next-logo.png'
import tailwindLogo from '@/public/tailwind.png'
import muiLogo from "@/public/mui.png"
import reduxToolit from "@/public/redux.png"
import Image from 'next/image'
import Nodelogo from "@/public/Node.js.png"
import express from "@/public/Express.png"
import typescriptLogo from "@/public/typescript.png"

const skills = [
  { name: 'React', logo: reactLogo },
  { name: 'Nextjs', logo: nextjsLogo },
  { name: 'Nodejs', logo: Nodelogo },
  { name: 'Expressjs', logo: express },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'Typescript', logo: typescriptLogo },
  { name: 'Redux Toolit', logo: reduxToolit },
  {name:"Mui",logo:muiLogo},
  { name: 'Tailwind CSS', logo: tailwindLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },

];

export const SkillsSections = () =>{
    return (
<section className='mt-20'>
        <h2 className="text-3xl font-bold mb-10 text-center ">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center skill-card">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center p-4 mb-4 hover:scale-110 transition-transform duration-300">
                <Image src={skill.logo} alt={skill.name} width={64} height={64} />
              </div>
              <p className="text-center font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    )

}