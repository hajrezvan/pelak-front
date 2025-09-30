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
        <label className="block text-sm font-medium text-P-Text mb-1">
          Your Request Description *
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-P-BackgroundBorder rounded-md focus:outline-none focus:ring-2 focus:ring-P-Primary resize-none"
          placeholder="Please provide a complete description of your request..."
        />
        {error && <p className="text-P-Error text-sm mt-1">{error}</p>}
      </div>

      <div className="text-sm text-P-Text bg-P-BackgroundPanel border-P-1 border-P-BackgroundBorder p-3 rounded-md">
        <p>💡 Tip: The more detailed your description, the better we can help you.</p>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-P-Success text-white py-2 px-4 rounded-md hover:bg-P-SuccessDark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : 'Final Submit'}
      </button>
    </form>
  );
}