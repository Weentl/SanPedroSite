import React from 'react';
import { Phone, Mail, MapPin, Clock, Building } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Maderas San Pedro</h3>
            <p className="text-amber-200">
              Expertos en madera y materiales para construcción y muebles desde
              hace más de 20 años. Calidad y servicio garantizado.
            </p>
          </div>

          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">Nuestras Sucursales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-amber-200 mb-2">Sucursal Unión y Progreso</h4>
                <a
                  href="https://maps.app.goo.gl/uXsA9V95mP2Kxzt87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 hover:text-amber-200 transition-colors mb-2"
                >
                  <MapPin size={18} className="flex-shrink-0 mt-1" />
                  <span>Av. 3 1116, Unión y Progreso, 94340 Orizaba, Ver.</span>
                </a>
                <a
                  href="tel:+522726882777"
                  className="flex items-center space-x-2 hover:text-amber-200 transition-colors"
                >
                  <Phone size={18} />
                  <span>272 688 2777</span>
                </a>
              </div>
              <div>
                <h4 className="font-medium text-amber-200 mb-2">Sucursal Orizaba</h4>
                <a
                  href="https://maps.app.goo.gl/ZPwj8ZQhkC6tFYZY7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 hover:text-amber-200 transition-colors mb-2"
                >
                  <MapPin size={18} className="flex-shrink-0 mt-1" />
                  <span>Av. Oriente 6 1288, Centro, 94300 Orizaba, Ver.</span>
                </a>
                <a
                  href="tel:+522721061309"
                  className="flex items-center space-x-2 hover:text-amber-200 transition-colors"
                >
                  <Phone size={18} />
                  <span>272 106 1309</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horario de Atención</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Lunes a Viernes: 8:00 - 18:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Sábado: 8:00 - 14:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Domingo: Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-amber-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} Maderas San Pedro. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}