// 'use client';

// import { useEffect, useState } from 'react';

// export default function Windowstime() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   const [windowWidth, setWindowWidth] = useState(0);

//   // 🕒 Update time every second
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, []);

//   // 📏 Track window width
//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     handleResize(); // Initialize
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//       <div className="bg-yellow-100 border mx-72 mt-50 border-yellow-300 p-8 rounded-xl shadow-xl text-center max-w-md w-full">
//         <h1 className="text-3xl font-bold mb-4 text-yellow-800">
//           🌞 Welcome to the Sunny Dashboard!
//         </h1>
//         <p className="text-lg text-yellow-700 mb-6">
//           Stay in sync with real time and your screen size!
//         </p>

//         <div className="bg-yellow-200 p-4 rounded-lg mb-4">
//           <p className="text-yellow-900 font-semibold">⏰ Current Time</p>
//           <p className="text-2xl font-mono mt-1">{time}</p>
//         </div>

//         <div className="bg-yellow-200 p-4 rounded-lg">
//           <p className="text-yellow-900 font-semibold">📏 Window Width</p>
//           <p className="text-2xl font-mono mt-1">{windowWidth}px</p>
//         </div>
//       </div>

//   );
// }


'use client';

import { useEffect, useState } from 'react';

export default function Windowstime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-yellow-50">
      <div className="bg-yellow-100 border border-yellow-300 p-6 sm:p-8 rounded-xl shadow-xl text-center w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-800">
          🌞 Welcome to the Sunny Dashboard!
        </h1>
        <p className="text-base sm:text-lg text-yellow-700 mb-6">
          Stay in sync with real time and your screen size!
        </p>

        <div className="bg-yellow-200 p-4 rounded-lg mb-4">
          <p className="text-yellow-900 font-semibold">⏰ Current Time</p>
          <p className="text-xl sm:text-2xl font-mono mt-1">{time}</p>
        </div>

        <div className="bg-yellow-200 p-4 rounded-lg">
          <p className="text-yellow-900 font-semibold">📏 Window Width</p>
          <p className="text-xl sm:text-2xl font-mono mt-1">{windowWidth}px</p>
        </div>
      </div>
    </div>
  );
}
