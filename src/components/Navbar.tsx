import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-40">
          {/* Logo alineado a la izquierda */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Barra de búsqueda */}
          <div className="hidden md:block mx-4">
            <SearchBar />
          </div>

          {/* Links de navegación distribuidos a lo largo y centrados */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-lg font-semibold hover:bg-amber-800 px-3 py-2 rounded-md"
            >
              Inicio
            </Link>
            <Link
              to="/catalogo"
              className="text-lg font-semibold hover:bg-amber-800 px-3 py-2 rounded-md"
            >
              Catálogo
            </Link>
            <Link
              to="/cotizacion"
              className="text-lg font-semibold hover:bg-amber-800 px-3 py-2 rounded-md"
            >
              Cotización
            </Link>
            <Link
              to="/contacto"
              className="text-lg font-semibold hover:bg-amber-800 px-3 py-2 rounded-md"
            >
              Contacto
            </Link>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-amber-800"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil expandido */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2">
              <SearchBar />
            </div>
            <Link
              to="/"
              className="block hover:bg-amber-800 px-3 py-2 rounded-md"
            >
              Inicio
            </Link>
            <Link
              to="/catalogo"
              className="block hover:bg-amber-800 px-3 py-2 rounded-md"
            >
              Catálogo
            </Link>
            <Link
              to="/cotizacion"
              className="block hover:bg-amber-800 px-3 py-2 rounded-md"
            >
              Cotización
            </Link>
            <Link
              to="/contacto"
              className="block hover:bg-amber-800 px-3 py-2 rounded-md"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}