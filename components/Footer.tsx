import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a252f] text-[#7f8c8d] py-8 text-center text-sm">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="mb-2">&copy; {new Date().getFullYear()} LCgeoma. Ingeniería al servicio de la naturaleza.</p>
        <p className="opacity-60">Laura Camila Bernate & Anyi Catalina Páez - Ingenieras Civiles</p>
      </div>
    </footer>
  );
};

export default Footer;
// Updated 2025