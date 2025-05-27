// 'use client';

// export default function Error({ error, reset }) {
//   return (
//     <div className="p-6 text-center text-red-600">
//       <h2 className="text-xl font-bold mb-2">Something went wrong!</h2>
//       <p>{error.message}</p>
//       <button
//         onClick={() => reset()}
//         className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
//       >
//         Try Again
//       </button>
//     </div>
//   );
// }
// 'use client';

// import { useEffect } from 'react';

// export default function Error({ error, reset }) {
//   useEffect(() => {
//     console.error("Caught by error.js:", error);
//   }, [error]);

//   return (
//     <div className="p-6 text-red-500">
//       <h2 className="text-xl font-bold">Oops, something went wrong!</h2>
//       <p>{error.message}</p>
//       <button onClick={() => reset()} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
//         Try again
//       </button>
//     </div>
//   );
// }
'use client';

export default function Error({ error, reset }) {
  return (
    <div className="p-6 text-center text-red-600">
      <h2 className="text-xl font-bold">Error loading countries</h2>
      <p>{error.message}</p>
      <button onClick={reset} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
        Retry
      </button>
    </div>
  );
}
