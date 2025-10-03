import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinksByType = {
  home: [
    { href: 'accueil', label: 'Accueil', type: 'anchor' },
    { href: 'a-propos', label: 'À propos', type: 'anchor' },
    { href: 'programmes', label: 'Programmes', type: 'anchor' },
    { href: 'partenariat', label: 'Partenaires', type: 'anchor' },
    { href: 'contact', label: 'Contacts', type: 'anchor' },
    { href: '/vie-etudiante', label: 'Vie étudiante', type: 'route' },
    { href: '/admission', label: "S'inscrire", type: 'button' },
  ],
  vieEtudiante: [
    { href: '/', label: 'Accueil', type: 'route' },
    { href: 'vie-etudiante', label: 'Vie étudiante', type: 'anchor' },
    { href: '/admission', label: "S'inscrire", type: 'button' },
  ],
  admission: [
    { href: '/', label: 'Accueil', type: 'route' },
    { href: '/vie-etudiante', label: 'Vie étudiante', type: 'route' },
  ],
  listeNews: [
    { href: '/', label: 'Accueil', type: 'route' },
    { href: '/vie-etudiante', label: 'Vie étudiante', type: 'route' },
    { href: '/admission', label: "S'inscrire", type: 'button' },
  ],
};

const Navbar = ({ type = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    type === 'listeNews' ? '' : navLinksByType[type]?.find(link => link.type === 'anchor')?.href || ''
  );
  const observer = useRef(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (type === 'listeNews') {
    setActiveSection('');
    return;
  }
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(callback, {
      rootMargin: '-50% 50px -50% 50px',
      threshold: 0,
    });

    navLinksByType[type]?.forEach(({ href, type: linkType }) => {
      if (linkType === 'anchor') {
        const section = document.getElementById(href);
        if (section) observer.current.observe(section);
      }
    });

    return () => observer.current && observer.current.disconnect();
  }, [type]);

  const renderLink = ({ href, label, type: linkType }) => {
    const baseClassDesktop =
      'block p-2 rounded transition text-sm xl:text-base duration-700 ease-in-out';
    const baseClassMobile =
      'block px-4 py-2 text-center rounded transition text-sm duration-700 ease-in-out';

    if (linkType === 'anchor') {
      return (
        <>
          {/* Desktop */}
          <a
            href={`#${href}`}
            onClick={() => {
              setActiveSection(href);
              closeMenu();
            }}
            className={`hidden lg:block ${
              activeSection === href
                ? 'text-blue-600 font-semibold'
                : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-gray-800'
            } ${baseClassDesktop}`}
          >
            {label}
          </a>
          {/* Mobile */}
          <a
            href={`#${href}`}
            onClick={() => {
              setActiveSection(href);
              closeMenu();
            }}
            className={`block lg:hidden ${
              activeSection === href
                ? 'text-blue-600 font-bold'
                : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-gray-700/80'
            } ${baseClassMobile}`}
          >
            {label}
          </a>
        </>
      );
    }
    if (linkType === 'route') {
      return (
        <>
          {/* Desktop */}
          <RouterLink
            to={href}
            onClick={closeMenu}
            className={`${baseClassDesktop} hidden lg:block text-gray-800 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-gray-800`}
          >
            {label}
          </RouterLink>
          {/* Mobile */}
          <RouterLink
            to={href}
            onClick={closeMenu}
            className={`${baseClassMobile} block lg:hidden text-gray-800 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-gray-700/80`}
          >
            {label}
          </RouterLink>
        </>
      );
    }
    if (linkType === 'button') {
      return (
        <>
          {/* Desktop */}
          <RouterLink
            to={href}
            onClick={() => {
              setActiveSection('admissions');
              closeMenu();
            }}
            className="hidden lg:inline-block bg-blue-600 text-white text-sm xl:text-base px-5 py-2 rounded transition hover:scale-[1.02] duration-700 ease-in-out"
          >
            {label}
          </RouterLink>

          {/* Mobile */}
          <RouterLink
            to={href}
            onClick={() => {
              setActiveSection('admissions');
              closeMenu();
            }}
            className="block lg:hidden bg-blue-600 text-white text-sm px-6 py-2 rounded transition hover:scale-[1.02] duration-700 ease-in-out"
          >
            {label}
          </RouterLink>
        </>
      );
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md dark:bg-gray-900 duration-700 transition-all ease-in-out">
  <div className="container mx-auto flex items-center px-4 py-3 lg:px-6 lg:py-4">
    {/* Logo */}
    <RouterLink to="/" className="flex items-center gap-3 flex-shrink-0">
      <img
        src={logo}
        alt="Logo UPA"
        className="w-8  transition-all duration-500"
      />
      <div>
        <h1 className="text-sm sm:text-[1.2rem] md:text-[1.18rem] lg:text-[1.2rem] font-semibold text-blue-600 dark:text-blue-500 duration-700 transition-all ease-in-out">
          Université Privée d'Ambohidratrimo
        </h1>
        <p className="text-[0.7rem] uppercase sm:text-sm md:text-[0.7rem] lg:text-[0.7rem] text-gray-500 dark:text-gray-200 duration-700 transition-all ease-in-out">
          TOUJOURS PLUS HAUT
        </p>
      </div>
    </RouterLink>

    {/* Mobile Menu Icon */}
    <button
      className="lg:hidden p-2 text-blue-600 ml-auto z-50"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>

    {/* Desktop Menu */}
    <nav className="hidden lg:flex items-center ml-auto justify-end">
      <ul className="flex items-center gap-1 text-center">
        {navLinksByType[type]?.map((link) => (
          <li key={link.href}>{renderLink(link)}</li>
        ))}
      </ul>
    </nav>
  </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-start h-[100vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-[5.22rem] left-2 right-2 bg-white/95 dark:bg-gray-900/95 p-6 rounded-lg shadow-lg flex flex-col items-center gap-6 text-lg lg:hidden max-h-[calc(100vh-4rem)] h-auto overflow-auto"
            >


              <ul className="flex flex-col items-center space-y-4 w-full">
                {navLinksByType[type]?.map((link) => (
                  <li key={link.href} className="w-full text-center">
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;