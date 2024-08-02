import React, { useRef, useEffect } from 'react';

interface index {
  isOpen: boolean;
  onClose: () => void;
}

const index: React.FC<index> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center p-4">
     <div 
        ref={modalRef} 
        className="bg-[#330033] p-8 rounded-lg shadow-2xl max-w-md w-full border-2 border-[#6b3f6b]"
      >
        <h2 className="md:text-3xl text-2xl font-bold mb-4 ">Welcome to My Portfolio</h2>
        <p className="mb-6 text-gray-300 leading-relaxed">
          Thanks for stopping by! I'm currently putting the finishing touches on my portfolio site. 
          While you're welcome to explore, please note that some sections may still be under development. 
          Check back soon for the full experience!
        </p>
        <button
          onClick={onClose}
          className="bg-[#6b3f6b] hover:bg-[#FF4191] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#6b3f6b] focus:ring-opacity-50"
        >
          Explore Anyway
        </button>
      </div>
    </div>
  );
};

export default index;