import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';

export default function FloatingInput({id, value, onChange, label, ariaLabel}){
  return (
    <div className="floating-input">
      <div className="fi-icon">
        <SearchIcon sx={{ fontSize: 28 }} />
      </div>
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder=" "
        aria-label={ariaLabel || label}
        className="fi-input"
      />
      <label htmlFor={id} className="fi-label">{label}</label>
    </div>
  );
}
