import { ArrowUp, Mail, Moon, PhoneCall, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import toujoursPlusHaut from '../assets/toujoursPlusHaut.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import mail from '../assets/gmail.png';
import whatsapp from '../assets/whatsapp1.png';
import localisation from '../assets/localisation.png';
import ChatBotAssistant from './ChatBotAssistant';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white relative dark:bg-gray-800 text-gray-900 dark:text-gray-300 p-8 transition-colors duration-700 ease-in-out">
      <div className="max-w-7xl m-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Présentation */}
        <div className="text-left flex items-center gap-3 sm:text-center">
          {/* <p className="mt-4 text-sm">
            L’Université Privée d’Ambohidratrimo (UPA) est reconnue pour son excellence académique et sa recherche innovante. 
            Nous proposons des formations d’excellence dispensée par des professeurs expérimentées, des experts et des professionnels.
            </p> */}
          <div className='flex flex-col text-center'>
            <div>
              <img src={localisation} alt="location" className="w-14 mx-auto" />
              {/* <img src={logo} alt="Logo Université Privée d'Ambohidratrimo" className="w-10 mx-auto" /> */}
            </div>

            <p>
              Lot 77 Ambohitsiroa, RN4 à 15 min de la station Shell AMBOHIDRATRIMO - 105 - ANTANANARIVO; MADAGASCAR
            </p>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3">Suivez-nous</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/p/Universit%C3%A9-priv%C3%A9e-dAmbohidratrimo-100075729058011" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <img src={facebook} className='w-10' alt="" />
            </a>
            <a href="https://www.instagram.com/universitepriveeambohidratrimo/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <img src={instagram} className='w-10' alt="" />

            </a>
          </div>
          <div className="p-0 md:p-5">
            <img src={toujoursPlusHaut} alt="Toujours plus haut" className='md:rounded bg-cover md:relative absolute ronded-[0rem] w-fit bottom-0 left-0' />
          </div>
        </div>

        {/* Contact */}
        <div className="text-center flex flex-col md:text-left text-sm mx-auto md:mx-0">
          <h3 className="text-lg font-semibold mb-3 text-center">Contactez-nous</h3>          

          <div className="flex items-center gap-4 mb-3">
            <img src={mail} className="w-7 flex-shrink-0" />
            <div className="flex flex-col items-start" style={{ minWidth: 0 }}>
              <a
                href="mailto:universitepriveambohidratrimo@gmail.com"
                className="hover:text-blue-600 break-all whitespace-normal"
              >
                universitepriveambohidratrimo@gmail.com
              </a>
              <a href="mailto:viescolaire.upa@gmail.com" className="hover:text-blue-600">
                viescolaire.upa@gmail.com
              </a>
            </div>
          </div>


          <div className='flex items-center gap-4 '>
            <img src={whatsapp} className='w-7'/>
            <div className='flex flex-col text-start'>
              <a href="tel:+261344900609" className="hover:text-blue-600">034 49 006 09</a>
              <a href="tel:+261388400003" className="hover:text-blue-600">038 84 000 03</a>
            </div>
          </div>
        </div>
        
      </div>
        
        <div className="border-t border-gray-300 dark:border-gray-700 w-full mt-8" />

          <div className="duration-700 md:mb-0 mb-12 dark:border-gray-700 pt-8 text-center">
            <p className="text-sm">&copy; Université privée d'Ambohidratrimo 2025. Tous droits réservés.</p>
          </div>

      {/* Boutons flottants */}
      <div className="fixed bottom-8 z-50 right-8 flex flex-col gap-3">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="p-2 sm:p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transform transition-all animate-bounce"
          >
            <ArrowUp size={24} />
          </button>
        )}
        <button
          onClick={toggleDarkMode}
          className="p-2 sm:p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all animate-pulse"
        >
          {isDarkMode ? (
            <Sun className="text-yellow-400" size={24} />
          ) : (
            <Moon className="text-gray-800" size={24} />
          )}
        </button>

        <ChatBotAssistant />
      </div>
    </footer>
  );
};

export default Footer;
