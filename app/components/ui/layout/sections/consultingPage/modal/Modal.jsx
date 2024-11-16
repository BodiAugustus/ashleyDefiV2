import { useEffect, useRef } from "react";
import Image from "next/image";
import { lato } from "../../../../fonts/font.js";

function Modal({ closeModal, content }) {
  // Create a reference for the modal content
  const modalRef = useRef();

  // Event listener to close the modal if clicked outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    // Add when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 mx-auto h-auto z-10
      xs:overflow-y-scroll 
      md:overflow-y-hidden "
    >
      <div
        ref={modalRef} // Set the ref to the modal content
        className={`relative bg-[#292941] p-4 rounded-2xl shadow-lg transform transition-transform scale-0 animate-scaleUp max-w-[800px] w-[100%] ${lato.className} border-4 border-indigo-400 shadow-xl shadow-indigo-700 z-100 `}
      >
        <Image
          src="/Ashley-capital-logo.png"
          alt="Logo"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-2xl opacity-20 xs:hidden md:visible"
        />
        <Image
          src="/Ashley-capital-logo.png"
          alt="Logo"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-2xl opacity-20 "
        />
        <div className="relative z-30 xs:overflow-y-scroll md:overflow-y-hidden">
          <button
            onClick={closeModal} // Use closeModal for the button as well
            className="absolute top-2 right-2 cursor-pointer text-red-600 font-bold z-20 text-2xl hover:scale-125 transition-all duration-300 active:scale-100"
          >
            X
          </button>
          {content}
        </div>
      </div>
    </div>
  );
}

export default Modal;
