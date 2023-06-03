import React from 'react';
import logo from '../../assets/logo-gray.png';
import styles from './Header.module.css';
import Button from '../Buttons/Button1';
import { useNavigate } from 'react-router-dom';

const Header = ({page}:{page: "home" | "movie" | "series"}) => {
    const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <img data-cy="logo" src={logo} style={{cursor: "pointer"}} alt="Logo" className={styles.logo} onClick={() => navigate("/")}/>
      <div className={styles.buttonsBox}>
        {(page === "home" || page === "series") && <Button dataCy="peliculasButton" text='Películas' onClick={() => navigate("/peliculas")}/>}
        {(page === "home" || page === "movie") &&<Button dataCy="seriesButton" text='Series' onClick={() => navigate("/series")}/>}
      </div>
    </header>
  );
};

export default Header;