
import React from 'react';

const Button = ({ backgroundColor, onClick, children ,color}) => {
  return (
    <button 
      onClick={onClick} 
      style={{ color:color,backgroundColor: backgroundColor, padding: '10px 20px', border: 'none', borderRadius: '5px' }}
    >
      {children}
    </button>
  );
};

export default Button;
