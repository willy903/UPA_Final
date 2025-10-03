import React, { useState, useEffect, useRef } from 'react';
import historyImg from '../assets/hero.png';
import visionImg from '../assets/VieEtudiante3.jpg';
import miniLogoUpa from '../assets/UPAlogo.jpg';

// le compteur du stats
function useCountUp(target, duration = 1500, animate = false) {
  const [count, setCount] = useState(0);
  const rafId = useRef(null);
  const startTime = useRef(null);

  const animateCount = timestamp => {
    if (!startTime.current) startTime.current = timestamp;
    const progress = timestamp - startTime.current;
    if (progress < duration) {
      const value = Math.min(target, Math.floor((progress / duration) * target));
      setCount(value);
      rafId.current = requestAnimationFrame(animateCount);
    } else {
      setCount(target);
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  useEffect(() => {
    if (animate) {
      startTime.current = null;
      rafId.current = requestAnimationFrame(animateCount);
    } else {
      setCount(0);
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }

    return () => cancelAnimationFrame(rafId.current);
  }, [animate, target]);

  return count;
}

// Hook useInView qui informe en temps réel
function useInView(ref, options = { threshold: 0.3 }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      options
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
}

const stats = [
  ['3', 'Mentions'],
  ['+200', 'Étudiants'],
  ['+10', 'Entreprises partenaires'],
];

const parseNumber = str => Number(str.replace(/[^\d]/g, ''));

function CountUpCard({ value, label, animate }) {
  const targetNumber = parseNumber(value);
  const count = useCountUp(targetNumber, 1500, animate);

  return (
    <div
      className="flex flex-col items-center justify-center text-center p-8 rounded-full w-32 h-32 sm:w-40 sm:h-40 shadow-lg bg-gray-100 dark:bg-gray-800 transition transform hover:-translate-y-1 hover:shadow-2xl duration-500 ease-in-out cursor-default"
    >
      <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-1 text-[#2563EB]">
        {value.startsWith('+') ? `+${count}` : count}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-200">{label}</p>
    </div>
  );
}

const About = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef);

  return (
    <section className="bg-gray-50 py-12 dark:bg-gray-900 duration-700 transition-all ease-in-out">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="text-center mb-2 sm:mb-12">
          <h1 className="text-3xl font-bold text-blue-500 duration-700 transition-all ease-in-out">
            À propos de nous
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 duration-700 transition-all ease-in-out">
            Découvrez l'histoire et les valeurs qui font de l'Université Privée d'Ambohidratrimo une institution d'excellence.
          </p>
        </div>

        {/* Histoire & Image */}
        <div className="grid gap-8 mb-12 grid-cols-1 md:grid-cols-2">
          {/* Texte Histoire */}
          <div className="bg-white p-8 rounded-lg shadow-md dark:bg-gray-900 duration-700 dark:shadow-xl transition-all ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-200 duration-700 transition-all ease-in-out">
              HISTORIQUE
            </h2>
            <p className="text-gray-700 mb-4 dark:text-gray-400 duration-700 transition-all ease-in-out">
              Fondée en 2021, l'Université Privée d'Ambohidratrimo est née de la vision de fournir une éducation de qualité accessible pour tous les jeunes malgaches.
            </p>
            <p className="text-gray-700 mb-4 dark:text-gray-400 duration-700 transition-all ease-in-out">
              Commençant avec deux programmes et une cinquantaine d'étudiants, UpA s'est rapidement développée pour devenir l'une des institutions éducatives les plus respectées.
            </p>
            <p className="text-gray-700 dark:text-gray-400 duration-700 transition-all ease-in-out">
              Au fil des années, nous avons continuellement évolué. De nouveaux programmes ont été ajoutés en plus des partenariats internationaux fait pour offrir à nos étudiants les meilleures opportunités possibles.
            </p>
          </div>
          {/* Image Histoire */}
          <div className="flex-1 min-w-[280px] sm:rounded-xl rounded overflow-hidden relative">
            <div
              className="rounded-lg overflow-hidden min-h-[300px] h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${historyImg})` }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white sm:p-5 p-3 opacity-0 hover:opacity-100 duration-500 transition-all ease-in-out">
              <img src={miniLogoUpa} alt="" className="sm:w-20 w-10 rounded" />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* Texte Mission/Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md dark:bg-gray-900 duration-700 dark:shadow-xl transition-all ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-200 duration-700 transition-all ease-in-out">
              MISSION
            </h2>
            <div className="mb-4">
              <p className="text-gray-700 dark:text-gray-400 duration-700 transition-all ease-in-out">
                Fournir une éducation supérieure de qualité accessible à tous les étudiants malgaches, avec des programmes axés sur l'excellence académique et l'innovation.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-200 duration-700 transition-all ease-in-out">
                VISION
              </h2>
              <p className="text-gray-700 dark:text-gray-400 duration-700 transition-all ease-in-out">
                Devenir un leader reconnu dans l'enseignement supérieur, en formant des professionnels compétents et engagés pour répondre aux défis du monde actuel.
              </p>
            </div>
          </div>
          {/* Image Vision */}
          <div className="flex-1 min-w-[280px] sm:rounded-xl rounded overflow-hidden relative">
            <div
              className="rounded-lg overflow-hidden min-h-[300px] h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${visionImg})` }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white sm:p-5 p-3 opacity-0 hover:opacity-100 duration-500 transition-all ease-in-out">
              <img src={miniLogoUpa} alt="" className="sm:w-20 w-10 rounded" />
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 dark:text-gray-200 text-center">
          VALEURS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence et Amélioration continue",
                desc: `Nous visons l'Excellence dans tout ce que nous entreprenons.
                Même si la perfection n'est pas atteignable, rien ne nous empêche de nous surpasser.
                C'est ainsi que nous accompagnons nos étudiants vers les plus hauts sommets.`,
              },
              {
                title: "Ouverture et Respect",
                desc: `Nous reconnaissons les goûts et les choix de chacun.
                C'est pourquoi nous misons sur la diversité de notre équipe,
                de nos partenaires et de nos étudiants.`,
              },
              {
                title: "Passion et innovation",
                desc: `La passion d'apprendre, d'explorer, d'innover, de découvrir et de transmettre
                vont permettre à nos étudiants d'anticiper les changements et de s'y préparer de façon créative.
                Nous cherchons constamment à nous améliorer et à aller toujours plus haut.`,
              },
              {
                title: "Professionnalisme et Discipline",
                desc: `Ce n'est qu'en restant inflexible sur le professionnalisme et la discipline
                de nos collaborateurs ainsi que de nos étudiants, sur le plan éthique et de l'honnêteté,
                que nous atteindrons l'excellence.`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 p-6 border-t-4 border-[#2563EB]"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3 dark:text-gray-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8" ref={statsRef}>          
          <div className='flex flex-wrap sm:gap-14 gap-8 justify-center'>
            {stats.map(([value, label]) => (
              <CountUpCard key={label} value={value} label={label} animate={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
