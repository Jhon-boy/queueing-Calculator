import React from 'react';

export enum ButtonType {
  Button = 'button',
  Reset = 'reset',
  Submit = 'submit',
}

interface ButtonProps {
  text: string;
  type: ButtonType;
  onClick?(): any;
}

const Button = ({ text, type, onClick = () => {} }: ButtonProps) => {
  return (
    <button
      className="bg-green-400 hover:bg-green-900 text-black rounded shadow text-center uppercase font-bold w-full h-14"
      type={type}
      onClick={onClick}
    >
      <p className="w-full flex justify-center">{text}</p>
    </button>
  );
};

export default Button;
