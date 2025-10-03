import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hest from '../assets/hest.png';
import hecm from '../assets/hecm.png';
import hep from '../assets/hep.png';
import webCover from '../assets/infoPic.jpg';
import civilCover from '../assets/genieCivil.jpg';
import philoCover from '../assets/VieEtudiante3.jpg';
import hepCover from '../assets/VieEtudiante1.jpg';
import PedagoCover from '../assets/VieEtudiante2.jpg';
import comptaCover from '../assets/compta.jpg';
import affaireCover from '../assets/affaire.jpg';
import marketCover from '../assets/market.jpg';




import { ArrowRight, X } from 'lucide-react';


const schools = [
  {
    image: hecm,
    code: 'HECM',
    name: 'Hautes Etudes en Commerce et Management',
    description:
      "Développez vos compétences en gestion dans le domaine du Management, du Commerce Internationnal et de la Finance et Comptabilité.",
    programs: '3 parcours',
  },
  {
    image: hest,
    code: 'HEST',
    name: 'Hautes Etudes en Sciences et Technologies',
    description:
      "Formez-vous aux technologies de pointe et aux sciences appliquées grâce à nos programmes innovants en Génie Civil et en Informatique.",
    programs: '2 parcours',
  },
  {
    image: hep,
    code: 'HELS',
    name: 'Hautes Etudes en Lettres et Sciences Humaines',
    description:
      "Maîtrisez les outils de la pensée, de l'éducation et de la communication à travers les parcours en Journalisme, Pédagogie et Philosophie.",
    programs: '3 parcours',
  },
];

const hestSectors = [
  {
    title: 'Informatique',
    cover: webCover,
    items: [
      'Développement Web/Mobile',
      'Génie Logiciel et Admninistration base de données',
      'Administration Systèmes & Réseaux'
    ]
  },
  {
    title: 'Génie Civil',
    cover: civilCover,
    items: [
      'Bâtiment & Travaux Publics',
      'Architecture',
    ]
  }
];

const hecmSectors = [
  {
    title: 'Management et Administration d\'entreprise',
    cover: affaireCover,
    items: [
      'Fondamentaux du management',
      'droit des affaires', 
      'économie d’entreprise',
    ]
  },
  {
    title: 'Marketing et Commerce International',
    cover: marketCover,
    items: [
      'Études de marché',
      'stratégie de marque', 
      'communication digitale',
    ]
  },
  {
    title: 'Finances et Comptabilité',
    cover: comptaCover,
    items: [
      'Analyse financière', 
      'contrôle de gestion', 
      'gestion de trésorerie',
    ]
  },
];

const hepSectors = [
  {
    title: 'Communication et Journalisme',
    cover: hepCover,
    items: [
      'Chargé de communication',
      'Community Manager',
      'Responsable relations publiques'
    ]
  },
  {
    title: 'Enseignement et Pédagogie',
    cover: PedagoCover,
    items: [
      'Formateur professionnel',
      'Pédagogue spécialisé',
      'Conseiller pédagogique'
    ]
  },
  {
    title: 'Philosophie',
    cover: philoCover,
    items: [
      'Consultant en éthique',
      'Conseiller stratégique',
      'Conférencier'
    ]
  }
];


const Programme = () => {
  const [openhest, setOpenhest] = useState(false);
  const [openhecm, setOpenhecm] = useState(false);
  const [openhep, setOpenhep] = useState(false);


  const [sectors, setSectors] = useState([]);

  const showHest = () => {
    setSectors(hestSectors);
    setOpenhest(true);
  };

  const showHecm = () => {
    setSectors(hecmSectors);
    setOpenhecm(true);
  };

    const showHep = () => {
    setSectors(hepSectors);
    setOpenhep(true);
  };

  return (
    <section className="bg-blue-50 py-12 dark:bg-gray-800 transition-all duration-700">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Nos programmes</h1>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            Découvrez nos programmes variés.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {schools.map((school, idx) => (
            <div key={idx} className="w-full sm:w-80 bg-white rounded-lg shadow-md border-t-8 border-b-2 border-blue-600 p-6 flex flex-col justify-between dark:bg-gray-900">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded overflow-hidden">
                    <img src={school.image} alt={school.code} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-200">{school.code}</h3>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-300">{school.name}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">{school.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">{school.programs}</span>
                {/*HEST */}
                {school.code === 'HEST' && (
                  <button onClick={showHest} className="text-blue-600 hover:underline flex gap-1 items-center">
                    En savoir plus <ArrowRight size={20} />
                  </button>
                )}
                {/*HECM */}
                {school.code === 'HECM' && (
                  <button onClick={showHecm} className="text-blue-600 hover:underline flex gap-1 items-center">
                    En savoir plus <ArrowRight size={20} />
                  </button>
                )}
                {/*HEP */}
                {school.code === 'HELS' && (
                  <button onClick={showHep} className="text-blue-600 hover:underline flex gap-1 items-center">
                    En savoir plus <ArrowRight size={20} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal HEST */}
        <AnimatePresence>
          {openhest && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-start pt-20 z-50"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpenhest(false)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full mx-4 overflow-y-auto max-h-[80vh] relative"
                initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 50 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center sticky top-0 p-3 w-full bg-white dark:bg-gray-900">
                  <h2 className="sm:text-2xl text-lg flex items-center gap-3 font-bold text-blue-600"><img src={hest} alt="icon" className='sm:w-8 w-6' />HEST</h2>
                  <button onClick={() => setOpenhest(false)} className="text-gray-600 dark:text-gray-300 text-2xl"><X size={24}/></button>
                </div>
                <div className="p-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  {sectors.map((sec, i) => (
                    <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                      <img src={sec.cover} alt={sec.title} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{sec.title}</h3>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                          {sec.items.map((item, j) => <li key={j}>{item}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal HECM */}
        <AnimatePresence>
          {openhecm && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-start pt-20 z-50"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpenhecm(false)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl mx-4 overflow-y-auto max-h-[80vh] relative"
                initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 50 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center sticky top-0 p-3 w-full bg-white dark:bg-gray-900">
                  <h2 className="sm:text-2xl text-lg font-bold flex items-center gap-3 text-blue-600"><img src={hecm} alt="icon" className='sm:w-8 w-6' />HECM</h2>
                  <button onClick={() => setOpenhecm(false)} className="text-gray-600 dark:text-gray-300 text-2xl"><X size={24}/></button>
                </div>
                <div className="p-6">                  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  {sectors.map((sec, i) => (
                    <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                      <img src={sec.cover} alt={sec.title} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{sec.title}</h3>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                          {sec.items.map((item, j) => <li key={j}>{item}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

                {/* Modal HEP */}
        <AnimatePresence>
          {openhep && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-start pt-20 z-50"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpenhep(false)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full mx-4 relative overflow-y-auto max-h-[80vh]"
                initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 50 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center sticky p-3 top-0 w-full bg-white dark:bg-gray-900">
                  <h2 className="sm:text-2xl text-lg font-bold flex items-center gap-3 text-blue-600"><img src={hep} alt="icon" className='sm:w-8 w-6' />HELS</h2>
                  <button onClick={() => setOpenhep(false)} className="text-gray-600 dark:text-gray-300 text-2xl"><X size={24}/></button>
                </div>

                <div className="p-6">                  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  {sectors.map((sec, i) => (
                    <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                      <img src={sec.cover} alt={sec.title} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{sec.title}</h3>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                          {sec.items.map((item, j) => <li key={j}>{item}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Programme;