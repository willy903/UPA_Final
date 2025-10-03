import React from 'react';
import { X } from 'lucide-react';

export default function BlogModal({ data, onClose }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg max-w-5xl w-full max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center sticky p-3 z-10 top-0 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{data.title}</h3>
            <button onClick={onClose} className="text-gray-600 dark:text-gray-400 text-2xl"><X /></button>
      </div>
      <div className="p-6">
        {/* Image de couverture */}
        <img
          src={data.src}
          alt={data.title}
          className="w-[99.9%] h-72 object-cover rounded mb-4 transition-all duration-700"
          />

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Publié le {data.date}</p>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{data.content}</p>

        {data.contentHack1 && (
          <p className="mt-4 text-gray-700 dark:text-gray-300 whitespace-pre-line">{data.contentHack1}</p>
        )}
      </div>
    </div>
  );
}