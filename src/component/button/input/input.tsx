import React from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <input
      className="border px-3 py-2 rounded-md outline-none focus:ring-2 ring-blue-400"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
