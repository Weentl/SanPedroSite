import React, { useState } from 'react';
import { Product } from '../types/catalog';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="mb-3">
          <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
            {product.subcategory}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-sm text-gray-500 mb-2">
          Dimensiones: {product.dimensions}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-1">Usos:</h4>
          <ul className="text-sm text-gray-600 list-disc list-inside">
            {product.uses.map((use, index) => (
              <li key={index}>{use}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <Minus size={18} />
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-16 text-center border-x py-1"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <Plus size={18} />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-300"
          >
            <ShoppingCart size={18} className="mr-2" />
            Agregar a cotización
          </button>
        </div>
      </div>
    </div>
  );
}
