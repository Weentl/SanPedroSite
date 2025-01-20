import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import QuoteForm, { QuoteFormData } from '../components/QuoteForm';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Configura el cliente de Supabase
const supabaseUrl = 'https://ehqyghzmncsmssxypjve.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVocXlnaHptbmNzbXNzeHlwanZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNjY0MjgsImV4cCI6MjA1MTg0MjQyOH0.eM6-MGi1drbUvxUBEf6Wo0C8zME1iK5aK6-wDQXd1vo';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Quote() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleQuoteSubmit = async (formData: QuoteFormData) => {
    try {
      setIsSubmitting(true);
      setError(null);
      const response = await fetch(
        'https://sanpedrofinal.onrender.com/send-quote',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customer_info: formData,
            items: items,
          }),
        }
      );

      if (!response.ok) throw new Error('Error al enviar la cotización');

      // Limpiar carrito y mostrar mensaje de éxito
      clearCart();
      alert(
        '¡Cotización enviada con éxito! Recibirás un correo con los detalles.'
      );
      navigate('/');
    } catch (err) {
      setError('Error al enviar la cotización. Por favor, intente nuevamente.');
      console.error('Quote submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Tu cotización está vacía</h1>
          <p className="text-gray-600 mb-8">
            Agrega productos desde nuestro catálogo para solicitar una
            cotización.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Tu Cotización</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {items.map((item) => (
            <div key={item.id} className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm text-gray-500">
                    Dimensiones: {item.dimensions}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-12 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus size={20} />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {showForm ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">
              Datos para la Cotización
            </h2>
            <QuoteForm
              items={items}
              onSubmit={handleQuoteSubmit}
              onCancel={() => setShowForm(false)}
              isSubmitting={isSubmitting}
            />
          </div>
        ) : (
          <div className="mt-8">
            <button
              onClick={() => setShowForm(true)}
              className="w-full md:w-auto bg-amber-600 text-white py-3 px-8 rounded-lg hover:bg-amber-700 transition-colors duration-300"
            >
              Solicitar Cotización
            </button>
          </div>
        )}

        <WhatsAppButton phoneNumber="522721564206" />
      </div>
    </div>
  );
}
