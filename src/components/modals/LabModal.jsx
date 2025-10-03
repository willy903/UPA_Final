import React from 'react';
import { X } from 'lucide-react';

export default function LabModal({ data, onClose }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg max-w-5xl w-full max-h-[80vh] overflow-y-auto">
    <div className="flex justify-between items-center sticky p-3 z-10 top-0 bg-white dark:bg-gray-800">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{data.title}</h3>
        <button onClick={onClose} className="text-gray-600 dark:text-gray-400 text-2xl"><X /></button>
    </div>
      <div className="p-6">
        {/* Image de couverture */}
        <img
          src={data.image}
          alt={data.title}
          className="w-[99.9%] h-80 object-cover rounded mb-4 transition-all duration-700"
        />

        <p className="text-gray-700 dark:text-gray-300 mb-4">{data.description}</p>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {data.features.map((f, i) => (
            <div key={i} className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">{f.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}