import React from "react";
import styles from "./Grid.module.css";
import { Content } from "../../Types/ObjectType";
import ContentCard from "../ContentCard/ContentCard";

export default function Grid({
  content,
  loading,
  handleOpenModal,
  setContentSelected,
}: {
  content: Content[];
  loading: boolean;
  handleOpenModal: (isOpen: boolean) => void;
  setContentSelected: (content: Content) => void;
}) {
  return (
    <div className={styles.content}>
      <div className={styles.cardGrid} data-cy="rodajesList">
        {content.map((object: Content, index: number) => (
          <ContentCard
            key={index}
            object={object}
            loading={loading}
            handleOpenModal={handleOpenModal}
            setContentSelected={setContentSelected}
          />
        ))}
      </div>
    </div>
  );
}
