import React from 'react';
import { useForm } from 'react-hook-form';
import { CartItem } from '../types/catalog';

interface QuoteFormProps {
  items: CartItem[];
  onSubmit: (data: QuoteFormData) => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

export interface QuoteFormData {
  clientName: string;
  clientLastname: string;
  clientEmail: string;
  clientPhone: string;
  clientCompany?: string;
}

export default function QuoteForm({ items, onSubmit, onCancel, isSubmitting }: QuoteFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<QuoteFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
            Nombre *
          </label>
          <input
            type="text"
            id="clientName"
            {...register('clientName', { required: 'El nombre es requerido' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
          />
          {errors.clientName && (
            <p className="mt-1 text-sm text-red-600">{errors.clientName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="clientLastname" className="block text-sm font-medium text-gray-700">
            Apellido *
          </label>
          <input
            type="text"
            id="clientLastname"
            {...register('clientLastname', { required: 'El apellido es requerido' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
          />
          {errors.clientLastname && (
            <p className="mt-1 text-sm text-red-600">{errors.clientLastname.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-700">
            Correo electrónico *
          </label>
          <input
            type="email"
            id="clientEmail"
            {...register('clientEmail', {
              required: 'El correo electrónico es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Correo electrónico inválido'
              }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
          />
          {errors.clientEmail && (
            <p className="mt-1 text-sm text-red-600">{errors.clientEmail.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="clientPhone" className="block text-sm font-medium text-gray-700">
            Teléfono *
          </label>
          <input
            type="tel"
            id="clientPhone"
            {...register('clientPhone', {
              required: 'El teléfono es requerido',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Ingrese un número de teléfono válido (10 dígitos)'
              }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
          />
          {errors.clientPhone && (
            <p className="mt-1 text-sm text-red-600">{errors.clientPhone.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="clientCompany" className="block text-sm font-medium text-gray-700">
            Empresa (opcional)
          </label>
          <input
            type="text"
            id="clientCompany"
            {...register('clientCompany')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Cotización'}
        </button>
      </div>
    </form>
  );
}