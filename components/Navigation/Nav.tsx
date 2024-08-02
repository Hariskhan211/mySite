"use client"
import { useState, useEffect, useRef } from 'react';
import navList from "@/constants/navList";
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavProps {
    dancingScriptClass: string;
  }

export default function Nav({ dancingScriptClass }: NavProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) { // 768px is typically the 'md' breakpoint
                setIsMenuOpen(false);
            }
        };

        // Add event listeners
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);

        // Call handleResize initially to set the correct state on component mount
        handleResize();

        // Cleanup function
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="px-2 md:px-16 mt-2 flex justify-between shadow-md shadow-[#ea8db3] items-center">
            <h1 className={`header-title ${dancingScriptClass}`}>
                Haris Khan
            </h1>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl" aria-label="Toggle menu">
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <nav 
                ref={navRef} 
                className={`
                    fixed md:relative md:top-0 top-20 right-10 
                    h-2rem md:h-auto w-52 md:w-auto
                    bg-[#471047] md:bg-transparent 
                    shadow-lg md:shadow-none
                    transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
                    transition-transform duration-300 ease-in-out
                    flex items-center md:items-start z-10
                    ${isMenuOpen ? 'block' : 'hidden md:block'}
                `}
            >
                <ol className="flex flex-col md:flex-row p-4 md:p-0 w-full">
                    {navList.map(nav => (
                        <li key={nav.id} className="py-2 md:py-0 md:px-2">
                            <a href={`${nav.link}`} className="hover:text-[#ea8db3] transition-colors duration-200">
                                {nav.name}
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>
        </header>
    );
}