'use client';

import { useState } from 'react';
import { IFormProduct } from '@/type/formProduct';

interface FormStep1Props {
  onSubmit: (data: Omit<IFormProduct, 'description'>) => void;
  isLoading: boolean;
}

export default function FormStep1({ onSubmit, isLoading }: FormStep1Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethods: [] as ("t" | "w")[]
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethods: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      contactMethods: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is incorrect';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (formData.contactMethods.length === 0) {
      newErrors.contactMethods = 'Please select at least one contact method';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleContactMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "t" | "w" | "";
    if (value) {
      setFormData(prev => ({
        ...prev,
        contactMethods: [value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        contactMethods: []
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="09123456789"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Contact Methods */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Contact Method *
        </label>
        <select
          value={formData.contactMethods[0] || ''}
          onChange={handleContactMethodChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select contact method</option>
          <option value="t">Telegram</option>
          <option value="w">WhatsApp</option>
        </select>
        {errors.contactMethods && <p className="text-red-500 text-sm mt-1">{errors.contactMethods}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : 'Next Step'}
      </button>
    </form>
  );
}