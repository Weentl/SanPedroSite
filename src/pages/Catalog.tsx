import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

import WhatsAppButton from '../components/WhatsAppButton';
import { X, ChevronDown } from 'lucide-react';

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchQuery = searchParams.get('search') || '';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  // Obtener categorías y subcategorías únicas
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const subcategories = Array.from(
    new Set(
      products
        .filter(
          (p) => selectedCategory === 'all' || p.category === selectedCategory
        )
        .map((p) => p.subcategory)
    )
  );

  useEffect(() => {
    if (searchQuery) {
      setSelectedCategory('all');
      setSelectedSubcategory('all');
    }
  }, [searchQuery]);

  // Reset subcategory when category changes
  useEffect(() => {
    setSelectedSubcategory('all');
  }, [selectedCategory]);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = searchQuery
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesCategory =
      selectedCategory === 'all' || p.category === selectedCategory;

    const matchesSubcategory =
      selectedSubcategory === 'all' || p.subcategory === selectedSubcategory;

    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  const clearSearch = () => {
    navigate('/catalogo');
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Catálogo de Productos
          </h1>
          <p className="text-lg text-gray-600">
            Explora nuestra amplia selección de maderas y materiales
          </p>
        </div>

        {searchQuery && (
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Resultados para "{searchQuery}"
            </h2>
            <button
              onClick={clearSearch}
              className="flex items-center px-3 py-1 text-sm text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
            >
              <X size={16} className="mr-1" />
              Limpiar búsqueda
            </button>
          </div>
        )}

        <div className="mb-8 space-y-4">
          {/* Filtros */}
          <div className="flex flex-wrap gap-4">
            {/* Selector de Categoría */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="all">Todas las categorías</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>

            {/* Selector de Subcategoría */}
            {selectedCategory !== 'all' && (
              <div className="relative">
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="all">Todas las subcategorías</option>
                  {subcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            )}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
            <button
              onClick={clearSearch}
              className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-md shadow-sm"
            >
              <X size={16} className="mr-2" />
              Limpiar búsqueda
            </button>
          </div>
        )}

        <WhatsAppButton phoneNumber="522721564206" />
      </div>
    </div>
  );
}
