import React from "react";
import styles from "./ModalContentCard.module.css";
import { Content } from "../../Types/ObjectType";
import ImageWithFallback from "../ContentCard/ImageWithFallback";

const Modal = ({
  isOpen,
  setIsOpen,
  contentSelected,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  contentSelected: Content;
}) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>{contentSelected?.title}</h2>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                X
              </button>
            </div>
            <div className={styles.modalBody}>
              <ImageWithFallback
                src={contentSelected?.images?.["Poster Art"]?.url}
                alt={contentSelected?.title}
                width={contentSelected?.images?.["Poster Art"]?.width}
                height={contentSelected?.images?.["Poster Art"]?.height}
              />
              <div style={{fontWeight: "bold"}}>Descripción:</div>
              <div style={{textAlign: "center"}}>
                {contentSelected?.description}
              </div>
              <div style={{fontWeight: "bold"}}>Año:</div>
              <div>
                {contentSelected?.releaseYear}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
