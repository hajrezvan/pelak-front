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
        <label className="block text-sm font-medium text-PC-Text mb-1">
          Your Request Description *
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-PC-BackgroundBorder rounded-md focus:outline-none focus:ring-2 focus:ring-PC-Primary resize-none"
          placeholder="Please provide a complete description of your request..."
        />
        {error && <p className="text-PC-Error text-sm mt-1">{error}</p>}
      </div>

      <div className="text-sm text-PC-Text bg-PC-BackgroundPanel border-PC-1 border-PC-BackgroundBorder p-3 rounded-md">
        <p>💡 Tip: The more detailed your description, the better we can help you.</p>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-PC-Success text-white py-2 px-4 rounded-md hover:bg-PC-SuccessDark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : 'Final Submit'}
      </button>
    </form>
  );
}