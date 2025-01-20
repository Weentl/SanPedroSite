import React from 'react';
import LocationCard from '../components/LocationCard';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import { Mail, Clock, Building, Truck } from 'lucide-react';

const locations = [
  {
    title: 'Sucursal Unión y Progreso',
    address: 'Av. 3 1116, Unión y Progreso, 94340 Orizaba, Ver.',
    phone: '272 688 2777',
    mapUrl: 'https://maps.app.goo.gl/uXsA9V95mP2Kxzt87',
  },
  {
    title: 'Sucursal Orizaba',
    address: 'Av. Oriente 6 1288, Centro, 94300 Orizaba, Ver.',
    phone: '272 106 1309',
    mapUrl: 'https://maps.app.goo.gl/ZPwj8ZQhkC6tFYZY7',
  },
];

const features = [
  {
    icon: Building,
    title: 'Dos Ubicaciones',
    description:
      'Contamos con dos sucursales estratégicamente ubicadas para tu comodidad.',
  },
  {
    icon: Clock,
    title: 'Horario Extendido',
    description:
      'Abierto de lunes a sábado para atender todas tus necesidades.',
  },
  {
    icon: Truck,
    title: 'Servicio a Domicilio',
    description:
      'Entrega de materiales en toda la zona de Orizaba y alrededores.',
  },
  {
    icon: Mail,
    title: 'Atención Personalizada',
    description:
      'Asesoría especializada para tus proyectos de construcción y carpintería.',
  },
];

export default function Contact() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En Maderas San Pedro estamos comprometidos con brindar el mejor
            servicio. Contáctanos por cualquiera de nuestros medios de
            comunicación y con gusto te atenderemos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-gray-600 mb-8">
            Completa el siguiente formulario y nos pondremos en contacto contigo
            lo antes posible. También puedes llamarnos directamente a cualquiera
            de nuestras sucursales.
          </p>
          <ContactForm />
        </div>

        <WhatsAppButton phoneNumber="522721564206" />
      </div>
    </div>
  );
}
