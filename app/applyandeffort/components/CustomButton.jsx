'use client';

export default function CustomButton({ children, onClick }) {
  return (
    <button className="btn-custom" onClick={onClick}>
      {children}
    </button>
  );
}
