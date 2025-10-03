import React from 'react';
import { X } from 'lucide-react';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';

export default function ClubModal({ data, onClose }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg max-w-5xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center sticky p-3 z-10 top-0 bg-white dark:bg-gray-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{data.title}</h3>
          <button onClick={onClose} className="text-gray-600 dark:text-gray-400 text-2xl"><X /></button>
        </div>

      <div className="p-6">
        {/* Image de couverture du club */}
        <img
          src={data.image}
          alt={data.title}
          className="w-[99.9%] h-72 object-cover rounded mb-4 transition-all duration-700"
        />

        <p className="text-gray-700 dark:text-gray-300 mb-4">{data.description}</p>

        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Activités :</h4>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
          {data.activities.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>

        {data.image1 && data.image2 && (
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <img src={data.image1} alt={`${data.title} visuel 1`} className="w-full h-64 object-cover rounded" />
            <img src={data.image2} alt={`${data.title} visuel 2`} className="w-full h-64 object-cover rounded" />
          </div>
        )}

        {/* Liens réseaux sociaux du club, le cas échéant */}
        {(data.liensFB || data.liensIG) && (
          <>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Suivez-nous pour plus de détails :
            </h4>
            <div className="flex items-center gap-4">
              {data.liensFB && (
                <a href={data.liensFB} target="_blank" rel="noopener noreferrer">
                  <img src={facebook} className='w-10' />
                </a>
              )}
              {data.liensIG && (
                <a href={data.liensIG} target="_blank" rel="noopener noreferrer">
                  <img src={instagram} className='w-10' />
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}