import React from 'react';
import styles from './Button1.module.css';

const Button = ({ id, text, onClick, disabled, dataCy }:{id?: string, text: string, onClick:any, disabled?: boolean, dataCy: string}) => {
  return (
    <button data-cy={dataCy} className={disabled ? styles.buttonDisabled : styles.button} id={id} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
