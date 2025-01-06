"use client";

import { FormEvent, ChangeEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData extends Record<string, unknown> {
  to_name: string;
  to_email: string;  // Added email field
  from_name: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    to_name: '',
    to_email: '',  // Initialize email field
    from_name: '',
    message: ''
  });
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await emailjs.send(
        'service_t1st13j',
        'template_wzk609k',
        formData,
        'lHYF9zJWeaB3KgDsH'
      );
      
      setStatus('Email sent successfully!');
      setFormData({
        to_name: '',
        to_email: '',
        from_name: '',
        message: ''
      });
    } catch (error: any) {
      const errorMessage = error?.text || 'Failed to send email. Please try again.';
      setStatus(errorMessage);
      console.error('Error:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Send Email</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="to_name" className="block text-sm font-medium text-gray-700">
            Recipient Name:
          </label>
          <input
            type="text"
            id="to_name"
            name="to_name"
            value={formData.to_name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="to_email" className="block text-sm font-medium text-gray-700">
            Recipient Email:
          </label>
          <input
            type="email"
            id="to_email"
            name="to_email"
            value={formData.to_email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
            Your Name:
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Email
        </button>

        {status && (
          <p className={`text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}