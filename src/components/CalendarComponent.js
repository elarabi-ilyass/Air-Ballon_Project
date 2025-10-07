'use client';

import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleCheckAvailability = () => {
    alert(`Vérification de la disponibilité pour le ${selectedDate.toLocaleDateString('fr-FR')}`);
  };

  const handleContact = () => {
    alert('Ouverture du formulaire de contact...');
  };

  return (
    <MantineProvider>
      <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 max-w-md w-full mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
            Réservation
          </h1>
          
          <div className="mb-4 md:mb-6 flex justify-center">
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
              size="responsive"
              styles={{
                calendar: {
                  maxWidth: '100%',
                },
                day: {
                  borderRadius: '8px',
                  fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
                  height: 'clamp(2rem, 8vw, 2.5rem)',
                  width: 'clamp(2rem, 8vw, 2.5rem)',
                  '&[data-selected]': {
                    backgroundColor: '#4F46E5',
                  },
                  '&:hover': {
                    backgroundColor: '#e0e7ff',
                  },
                },
                weekday: {
                  fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
                  height: 'clamp(1.5rem, 6vw, 2rem)',
                },
                month: {
                  width: '100%',
                },
                monthCell: {
                  width: '100%',
                },
                monthsList: {
                  gap: 'clamp(0.5rem, 2vw, 1rem)',
                },
                yearsList: {
                  gap: 'clamp(0.5rem, 2vw, 1rem)',
                },
              }}
            />
          </div>

          <div className="text-center mb-4 md:mb-6">
            <p className="text-gray-600 text-sm md:text-base">Date sélectionnée :</p>
            <p className="text-lg md:text-xl font-semibold text-indigo-600">
              {selectedDate.toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleCheckAvailability}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 md:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md text-sm md:text-base"
            >
              Vérifier la disponibilité
            </button>
            
            <button
              onClick={handleContact}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 md:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md text-sm md:text-base"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}