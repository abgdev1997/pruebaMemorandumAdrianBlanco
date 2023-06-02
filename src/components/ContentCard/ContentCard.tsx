import React from "react";
import styles from "./ContentCard.module.css";
import ImageWithFallback from "./ImageWithFallback";

export type Content = {
  title: string;
  description: string;
  programType: string;
  images: {
    PosterArt: {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
};

export default function ContentCard({ object }: { object: Content }) {
  return (
    <div className={styles.card}>
      <ImageWithFallback src={object?.images?.PosterArt?.url}
        alt={object?.title} />
      <h2 className={styles.title}>{object?.title}</h2>
    </div>
  );
}
