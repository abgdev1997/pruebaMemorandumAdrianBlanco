import React from "react";
import styles from "./Estrenos.module.css";
import contenido from "../../data/sample.json";
import ContentCard, { Content } from "../ContentCard/ContentCard";

export default function Estrenos({ type }: { type: "movie" | "series" }) {
  return (
    <div className={styles.content}>
    <h1 className={styles.title}>{type === "movie" ? "Ultimos seis estrenos de Peliculas" : "Ultimos seis estrenos de Series"}</h1>
    <div className={styles.cardGrid}>
      {contenido.entries
        .filter((object: Content) => object.programType === type)
        .sort((a, b) => b.releaseYear - a.releaseYear)
        .slice(0, 6)
        .map((object: Content, index: number) => (
          <ContentCard key={index} object={object} />
        ))}
    </div>
    </div>
    
  );
}
