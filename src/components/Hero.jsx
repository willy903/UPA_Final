import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import buttonImg from '../assets/rejoignezUs.png';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
 
  const delayBeforeButton = 1.2;

  const buttonVariants = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: 'easeOut', 
        delay: delayBeforeButton
      },
    },
    swing: {
      rotate: [0, 10, -10, 10, -10, 0],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 4,
        ease: 'easeInOut',
        delay: delayBeforeButton + 0.8,
      },
    },
  };

  return (
    <section
      className="relative md:h-[90vh] min-h-[50vh] flex flex-col md:flex-row items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/56 to-transparent"></div>

      {/* Texte */}
      <div className="relative z-10 max-w-5xl w-full px-8 py-16 md:pr-16 md:w-2/3 flex flex-col">
        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="text-white text-[clamp(2.5rem,5vw,5rem)] leading-tight mb-16 drop-shadow-lg max-w-xl"
        >
          <span className="block font-bold">“Devenez les LEADERS</span>
          <span className="block text-[#C5A47E] font-semibold">engagés de demain,,</span>
        </motion.h1>

        <div className="pl-4 border-l-4 border-[#C5A47E] text-[#E8D9C5] text-lg mb-3 animate-fadeIn max-w-xs">
          <p>Université Privée d'Ambohidratrimo</p>
        </div>
        <div className="h-0.5 bg-[#C5A47E] w-20 scale-x-0 animate-lineExpand origin-left mb-16"></div>
      </div>

      {/* Bouton d'inscription*/}
      <div className="md:relative absolute right-0 bottom-0 z-10 px-8 py-8 md:py-16 md:pl-0 md:w-1/3 md:flex justify-center md:justify-start">
        <motion.div
          variants={buttonVariants}
          initial="initial"
          animate={["animate", "swing"]}
          className="cursor-pointer select-none"
        >
          <RouterLink to="/admission" className="flex items-center justify-center">
            <img
              src={buttonImg}
              className="md:w-auto bg-cover w-32 max-w-full h-auto"
              draggable={false}
              alt="Rejoignez-nous"
            />
          </RouterLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
