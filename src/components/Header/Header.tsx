import React from 'react';
import logo from '../../assets/logo-gray.png';
import styles from './Header.module.css';
import Button from '../Buttons/Button1/Button1';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.buttonsBox}>
        <Button text='Peliculas' onClick={() => navigate("/peliculas")}/>
        <Button text='Series' onClick={() => navigate("/series")}/>
      </div>
    </header>
  );
};

export default Header;