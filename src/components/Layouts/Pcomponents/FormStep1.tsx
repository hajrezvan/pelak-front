'use client';

import { useState } from 'react';
import * as P from '@/components/Playout'

interface IFormProduct {
  name: string;
  email: string;
  phone: string;
  contactMethods: ("t" | "w")[];
  description: string; // در مرحله اول خالی، در مرحله دوم پر
}

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
        <label className="block text-sm font-medium text-PC-Text mb-1">
          Name *
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-3 py-2 border border-PC-BackgroundBorder rounded-md focus:outline-none focus:ring-2 focus:ring-PC-Primary"
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-PC-Error text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-PC-Text mb-1">
          Email *
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-3 py-2 border border-PC-BackgroundBorder rounded-md focus:outline-none focus:ring-2 focus:ring-PC-Primary"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-PC-Error text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-PC-Text mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-3 py-2 border border-PC-BackgroundBorder rounded-md focus:outline-none focus:ring-2 focus:ring-PC-Primary"
          placeholder="09123456789"
        />
        {errors.phone && <p className="text-PC-Error text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Contact Methods */}
      <div>
        <label className="block text-sm font-medium text-PC-Text mb-2">
          Preferred Contact Method *
        </label>
        <select
          value={formData.contactMethods[0] || ''}
          onChange={handleContactMethodChange}
          className="w-full px-3 py-2 border border-PC-BackgroundBorder rounded-md focus:outline-none focus:ring-2 focus:ring-PC-Primary"
        >
          <option value="">Select contact method</option>
          <option value="t">Telegram</option>
          <option value="w">WhatsApp</option>
        </select>
        {errors.contactMethods && <p className="text-PC-Error text-sm mt-1">{errors.contactMethods}</p>}
      </div>

      {/* Submit Button */}
      <P.Button
        type="submit"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? 'Sending...' : 'Next Step'}
      </P.Button>
    </form>
  );
}