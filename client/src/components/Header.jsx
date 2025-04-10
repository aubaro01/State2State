import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Cláudio Barroso</h1>

        <nav className="space-x-4">
          <a href="#about" className="hover:text-purple-400">Sobre</a>
          <a href="#projects" className="hover:text-purple-400">Projetos</a>
          <a href="#techs" className="hover:text-purple-400">Techs</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
