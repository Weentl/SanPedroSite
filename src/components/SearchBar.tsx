import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(false);
    navigate(`/catalogo?search=${encodeURIComponent(query)}`);
    setQuery('');
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex items-center">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(e.target.value.length > 0);
            }}
            onFocus={() => setShowResults(query.length > 0)}
            placeholder="Buscar maderas..."
            className="w-64 pl-10 pr-4 py-2 rounded-lg bg-amber-800/20 text-white placeholder-amber-200/70 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-amber-200/70" />
        </div>
      </form>

      {showResults && query.length > 0 && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg py-2 max-h-96 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <button
                key={product.id}
                onClick={() => {
                  navigate(`/catalogo?search=${encodeURIComponent(product.name)}`);
                  setShowResults(false);
                  setQuery('');
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-3"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-10 h-10 object-cover rounded"
                />
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
              </button>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-500">No se encontraron resultados</p>
          )}
        </div>
      )}
    </div>
  );
}