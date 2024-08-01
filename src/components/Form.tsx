import React from 'react';

interface FormProps {
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg"
    >
      {children}
    </form>
  );
};

export default Form;
