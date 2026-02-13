
import React, { useState } from 'react';
import { AppView } from '../types';

interface VersionPageProps {
  type: AppView;
  title: string;
  image: string;
  buttonColor: string;
}

const VersionPage: React.FC<VersionPageProps> = ({ type, title, image, buttonColor }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mjgeyjov', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-2xl text-center px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Servizio momentaneamente fuori uso</h1>
      <h2 className="text-base md:text-lg font-light mb-8 opacity-80">
        La {title} del portale ARGOS SEA sarà disponibile a breve
      </h2>

      <div className="mb-8 inline-block">
        <img 
          src={image} 
          alt={title} 
          className="w-full max-w-[350px] border-2 border-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)] mx-auto"
        />
      </div>

      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full md:w-[85%] mx-auto"
      >
        <input 
          type="text" 
          name="name"
          placeholder="Nome" 
          required
          className="p-3 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-400 outline-none transition-shadow"
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          required
          className="p-3 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-400 outline-none transition-shadow"
        />
        <textarea 
          name="message"
          placeholder="Messaggio" 
          required
          className="p-3 rounded-md text-gray-900 h-32 resize-none focus:ring-2 focus:ring-blue-400 outline-none transition-shadow"
        ></textarea>
        
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className={`py-3 px-6 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${buttonColor}`}
        >
          {status === 'submitting' ? 'INVIO IN CORSO...' : 'INVIA RICHIESTA'}
        </button>

        {status === 'success' && (
          <p className="text-green-400 font-medium mt-2 bg-green-900/30 py-2 rounded">
            Richiesta inviata con successo! Ti contatteremo a breve.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 font-medium mt-2 bg-red-900/30 py-2 rounded">
            Si è verificato un errore. Riprova più tardi.
          </p>
        )}
      </form>
    </div>
  );
};

export default VersionPage;
