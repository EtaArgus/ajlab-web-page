import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white fixed top-0 w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">AJ-Lab</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Inicio</a></li>
          <li><a href="#services" className="hover:underline">Servicios</a></li>
          <li><a href="#about" className="hover:underline">Nosotros</a></li>
          <li><a href="#projects" className="hover:underline">Proyectos</a></li>
          <li><a href="#contact" className="hover:underline">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
