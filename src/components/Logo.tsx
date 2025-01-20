import React from 'react';

export default function Logo({ height = '8.5rem', marginLeft = '0' }) {
  return (
    <img
      src="/Logo.png"
      alt="Maderas San Pedro"
      className="w-auto" // El logo se ajustará automáticamente
      style={{ height, marginLeft }}
    />
  );
}
