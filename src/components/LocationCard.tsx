import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

interface LocationCardProps {
  title: string;
  address: string;
  phone: string;
  mapUrl: string;
}

export default function LocationCard({ title, address, phone, mapUrl }: LocationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-700">{address}</p>
            <a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center space-x-1 mt-1"
            >
              <span>Ver en Google Maps</span>
              <span>→</span>
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <div>
            <a 
              href={`tel:+52${phone.replace(/\s/g, '')}`}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {phone}
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <div className="text-gray-700">
            <p>Lun - Vie: 8:00 - 18:00</p>
            <p>Sáb: 8:00 - 14:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}