import React from 'react';
import { ArrowRight, Truck, Clock, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/catalogo?category=${encodeURIComponent(category)}`);
  };

  return (
    <>
      <Helmet>
        <title>Maderas San Pedro - Materiales de Calidad en Orizaba</title>
        <meta
          name="description"
          content="Expertos en madera para construcción y muebles en Orizaba. Ofrecemos la mejor selección de materiales para tus proyectos con entrega a domicilio."
        />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <div
          className="relative h-[600px] bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1610505466122-b1fe334e37e1?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Calidad en Maderas y Materiales en Orizaba
              </h1>
              <p className="text-xl mb-8 max-w-2xl">
                Expertos en madera para construcción y muebles. Ofrecemos la
                mejor selección de materiales para tus proyectos con entrega a
                domicilio.
              </p>
              <Link
                to="/catalogo"
                className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Ver Catálogo
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <Truck className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Entrega a Domicilio
                </h3>
                <p className="text-gray-600">
                  Servicio de entrega seguro y puntual en toda la zona
                  metropolitana de Orizaba.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Clock className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Atención Inmediata
                </h3>
                <p className="text-gray-600">
                  Respuesta rápida a tus cotizaciones y consultas técnicas
                  especializadas.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Shield className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Calidad Garantizada
                </h3>
                <p className="text-gray-600">
                  Todos nuestros productos cumplen con los más altos estándares
                  de calidad en el mercado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Preview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nuestras Categorías de Productos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Triplay',
                  category: 'Triplay',
                  image:
                    'https://images.unsplash.com/photo-1533090368676-1fd25485db88?auto=format&fit=crop&q=80',
                  description: 'Para muebles y acabados de calidad',
                },
                {
                  title: 'Material para Construcción',
                  category: 'Material para Construcción',
                  image:
                    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
                  description: 'Cimbra, Polines y Barrotes resistentes',
                },
                {
                  title: 'Madera para Muebles',
                  category: 'Madera para Muebles',
                  image:
                    'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&q=80',
                  description: 'Pino, Cedro, Parota y más variedades',
                },
                {
                  title: 'Materiales Sintéticos',
                  category: 'Materiales Sintéticos',
                  image:
                    'https://images.unsplash.com/photo-1517646331032-9e8563c520a1?auto=format&fit=crop&q=80',
                  description: 'MDF, Melaminas y Enchapados durables',
                },
              ].map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(category.category)}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                  aria-label={`Ver productos de ${category.title}`}
                >
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      src={category.image}
                      alt={`Categoría de ${category.title} en Maderas San Pedro`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {category.title}
                    </h3>
                    <p className="text-amber-200">{category.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <WhatsAppButton phoneNumber="522721564206" />
        </section>
      </div>
    </>
  );
}
