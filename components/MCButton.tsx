import React from 'react';

interface MCButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'success' | 'danger';
  fullWidth?: boolean;
}

const MCButton: React.FC<MCButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  fullWidth = false,
  ...props 
}) => {
  let bgClass = 'bg-[#7d7d7d] hover:bg-[#8d8d8d] text-white';
  
  if (variant === 'success') {
    bgClass = 'bg-mc-green hover:brightness-110 text-white';
  } else if (variant === 'danger') {
    bgClass = 'bg-red-700 hover:bg-red-600 text-white';
  }

  return (
    <button
      className={`
        mc-btn px-6 py-3 text-xl leading-none transition-transform active:scale-[0.98]
        ${bgClass}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      <span className="drop-shadow-md">{children}</span>
    </button>
  );
};

export default MCButton;