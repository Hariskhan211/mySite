"use client"
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import haris from "@/public/removedBg.png"
import { SkillsSections } from '@/components/Section';
import WorkExperience from '@/components/Section/experience';
import ConstructionModal from "@/components/Modal"

export default function Home() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  useEffect(() => {
    setIsModalOpen(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            console.log('Element entered viewport:', entry.target);
          } else {
            entry.target.classList.remove('animate');
            console.log('Element left viewport:', entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
      console.log('Observing text element');
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
      console.log('Observing image element');
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (

    <>
    <ConstructionModal isOpen={isModalOpen} onClose={closeModal} />
    <div className='md:px-16 px-4 '>
    <main className=" mt-16 overflow-hidden min-h-[70vh]">
      <div className="flex md:flex-row flex-col md:justify-between  items-center">
        <div className="" ref={textRef}>
          <h1 className="font-bold text-3xl will-animate-left block md:mb-0 mb-8">
            I'm Haris Khan <br /> 
            <span className="will-animate-left block">
              Front-end developer
            </span>
          </h1>
        </div>
        <div className="" ref={imageRef}>
          <div className="w-[20rem] h-[24rem] rounded-tl-[8rem] rounded-tr-[8rem] shadow-[#FF4191] shadow-2xl backgroundImage bg-[#FF4191] will-animate-right">
          </div>
        </div>
      </div>
    </main>
    <section className='mt-20 '>
        <SkillsSections />
      
      </section>
      <section className='mt-20'>
        <WorkExperience />
      </section>
    </div>
    </>
   
    
  );
}