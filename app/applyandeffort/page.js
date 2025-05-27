'use client';
import Link from 'next/link';
import { useState } from 'react';
import CustomButton from './components/CustomButton';

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className="p-8">
      <CustomButton onClick={() => alert('Button clicked!')}>
        Click Me
      </CustomButton>
     <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? '#f03c3c' : 'rgb(222, 178, 69)', // hover and base color
      }}
      className="flex justify-center mt-10 mx-auto text-white px-4 py-2 rounded"
    >
      Custom Color Button
    </button>
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <Link href="applyandeffort/users"
        className="text-blue-600 underline hover:text-blue-800">
        Go to Users
      </Link>
    </div>
    </main>
  );
}
