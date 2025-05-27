// 'use client';

// export default function TextareaField({ label, onInput }) {
//   return (
//     <label className="block mb-6">
//       <span className="text-amber-900 font-semibold mb-1 block">{label}</span>
//       <textarea
//         rows={4}
//         onInput={onInput}
//         required
//         className="w-full rounded-md border border-amber-300 px-4 py-3
//           focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-600 resize-none"
//       />
//     </label>
//   );
// }

// TextareaField.jsx
'use client';

export default function TextareaField({ label, onInput }) {
  return (
    <label className="block mb-6">
      <span className="text-amber-900 font-semibold mb-1 block">{label}</span>
      <textarea
        onInput={onInput}
        required
        rows="5"
        className="w-full rounded-md border border-amber-300 px-4 py-3 resize-none
          focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-600"
      ></textarea>
    </label>
  );
}
