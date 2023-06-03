import styles from "./Estrenos.module.css";
import ContentCard from "../ContentCard/ContentCard";
import { Content, Respuesta } from "../../Types/ObjectType";

export default function Estrenos({
  type,
  data,
  loading,
  handleOpenModal,
  setContentSelected,
  dataCy
}: {
  type: "movie" | "series";
  data: Respuesta;
  loading: boolean;
  handleOpenModal: (isOpen: boolean) => void;
  setContentSelected: (content: Content) => void;
  dataCy: string;
}) {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        {type === "movie"
          ? "Ultimos cinco estrenos de Peliculas"
          : "Ultimos cinco estrenos de Series"}
      </h1>
      <div className={styles.cardGrid} data-cy={dataCy}>
        {data.entries
          .filter((object: Content) => object.programType === type)
          .sort((a, b) => b.releaseYear - a.releaseYear)
          .slice(0, 5)
          .map((object: Content, index: number) => (
            <ContentCard key={index} object={object} loading={loading} handleOpenModal={handleOpenModal} setContentSelected={setContentSelected}/>
          ))}
      </div>
    </div>
  );
}
