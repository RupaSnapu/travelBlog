// InputField.jsx
'use client';

export default function InputField({ label, type = 'text', onInput }) {
  return (
    <label className="block mb-6">
      <span className="text-amber-900 font-semibold mb-1 block">{label}</span>
      <input
        type={type}
        onInput={onInput}
        required
        className="w-full rounded-md border border-amber-300 px-4 py-3
          focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-600"
      />
    </label>
  );
}
