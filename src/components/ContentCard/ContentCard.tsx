import React from "react";
import styles from "./ContentCard.module.css";
import ImageWithFallback from "./ImageWithFallback";
import { Content } from "../../Types/ObjectType";
import Loader from "../Loader/Loader";

export default function ContentCard({
  object,
  loading,
  handleOpenModal,
  setContentSelected,
}: {
  object: Content;
  loading: boolean;
  handleOpenModal: (isOpen: boolean) => void;
  setContentSelected: (content: Content) => void;
}) {
  const handleOnClick = () => {
    handleOpenModal(true);
    setContentSelected(object);
  };

  return loading ? (
    <Loader/>
  ) : (
    <div data-cy="card" className={styles.card} onClick={handleOnClick}>
      <ImageWithFallback
        src={object?.images?.["Poster Art"]?.url}
        alt={object?.title}
        width={object?.images?.["Poster Art"]?.width}
        height={object?.images?.["Poster Art"]?.height}
      />
      <div>
        <h2 className={styles.title}>{object?.title}</h2>
        <h3 data-cy={`${object?.title}ReleaseYear`} className={styles.title}>({object?.releaseYear})</h3>
      </div>
    </div>
  );
}
