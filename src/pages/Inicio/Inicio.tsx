import React from "react";
import Estrenos from "../../components/Inicio/Estrenos";
import Header from "../../components/Header/Header";
import styles from "./Inicio.module.css"

export default function Inicio() {
  return (
    <>
      <Header />
      <div className={styles.estrenos}>
        <Estrenos type="movie" />
        <Estrenos type="series" />
      </div>
    </>
  );
}
