import React from "react";
import styles from "./Error.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>Oops, algo salió mal...</h1>
      <p className={styles.errorMessage}>
        Lo sentimos, pero ha ocurrido un error al intentar cargar la página web.
      </p>
    </div>
  );
};

export default ErrorPage;
