import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction: React.FC = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-[#F5F5F5]"
    >
      <div 
        className="absolute inset-0 bg-[url('/coming-soon-cel.png')] md:bg-[url('/coming-soon.png')] bg-center bg-no-repeat"
        style={{ backgroundSize: '100% 100%' }}
      />

      {/* Back Button */}
      <Link 
        to="/"
        className="absolute bottom-2 inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 z-10"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default UnderConstruction; 