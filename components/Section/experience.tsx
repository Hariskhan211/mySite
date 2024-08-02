import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import workIcon from "@/public/worksvg.svg"
import dm from "@/public/DM.png"
import ats from "@/public/ATS.png"
const WorkExperience = () => {
  const [experiences] = useState([
    {
      company: "Geekgenix LLC Rawalpindi.",
      position: "React Developer",
      period: "June 2023 - Present",
      responsibilities: [
        "Integerating apis with redux saga and redux toolkit query",
        "Implemented state management using Redux",
        "Adding new features to the existing projects",
        "Fixing bugs in the projects",
        "Worked with third party libraries like pdf-lib,exceljs and recharts"
      ],
      projects: [
        {
          name: "ATS",
          image: ats,
          link: "https://atslite.staffgenix.com/"
        },
        {
          name: "Division Manager",
          image: dm,
          link: "https://stagingbrandadmin.web.app/"
        }
      ]
    },
    // ... other experiences
  ]);

  return (
    <div className="work-experience min-h-[100vh]">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Image src={workIcon} alt='work icon' className='w-12 h-12'/>
        <span className='mt-2 text-white'>
        Work Experience
        </span>
        </h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-12 last:mb-0">
          <h3 className="text-xl font-semibold">{exp.position}</h3>
          <p className="text-lg text-gray-200">{exp.company}</p>
          <p className="text-sm text-gray-300 mb-2">{exp.period}</p>
          <ul className="list-none pl-5 mb-4">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-gray-300 custom-list-item relative  mb-1">
                {resp}
              </li>
            ))}
          </ul>
          {exp.projects && exp.projects.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Projects</h4>
              <div className="flex flex-wrap gap-4 ">
                {exp.projects.map((project, idx) => (
                  <div className='p-3 bg-[#330033] border-2 border-[#6b3f6b] rounded-2xl' key={project.name}>
<Link href={project.link} key={idx} target="_blank" rel="noopener noreferrer"
                        className="block w-60 h-52 relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill" 
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-150 "
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-center font-semibold">{project.name}</span>
                    </div>
                  </Link>
                  </div>
                  
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;