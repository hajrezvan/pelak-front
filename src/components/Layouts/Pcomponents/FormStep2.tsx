'use client';

import { useState } from 'react';

interface FormStep2Props {
  onSubmit: (description: string) => void;
  isLoading: boolean;
}

export default function FormStep2({ onSubmit, isLoading }: FormStep2Props) {
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!description.trim()) {
      setError('Description is required');
      return;
    }

    setError('');
    onSubmit(description);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Request Description *
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Please provide a complete description of your request..."
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
        <p>💡 Tip: The more detailed your description, the better we can help you.</p>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : 'Final Submit'}
      </button>
    </form>
  );
}