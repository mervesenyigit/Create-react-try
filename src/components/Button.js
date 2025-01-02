
import React from 'react';

const Button = ({ backgroundColor, onClick, children ,color,borderRadius = '5px' }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ color:color,backgroundColor: backgroundColor, padding: '10px 20px', border: 'none', borderRadius:borderRadius }}
    >
      {children}
    </button>
  );
};

export default Button;
