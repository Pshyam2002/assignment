// src/components/Button/Button.tsx
import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  primary?: boolean;
};

const Button = ({ label, onClick, primary = false }: ButtonProps) => {
  const mode = primary ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black';

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold ${mode}`}
    >
      {label}
    </button>
  );
};

export default Button;
