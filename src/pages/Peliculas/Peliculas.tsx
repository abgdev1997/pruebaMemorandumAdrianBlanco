import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Peliculas.module.css";
import GridAllContent from "../../components/GridAllContent/GridAllContent";

export default function Peliculas() {
  return (
    <>
      <Header page="movie"/>
      <div className={styles.peliculas}>
        <GridAllContent page="movie"/>
      </div>
      <Footer />
    </>
  );
}
