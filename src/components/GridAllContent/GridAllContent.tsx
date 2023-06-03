import React, { useEffect, useState } from "react";
import Filters from "../Filters/Filters";
import Grid from "./Grid";
import { Content } from "../../Types/ObjectType";
import { getContentFilter } from "../../middleware/content";
import Modal from "../ModalContentCard/ModalContentCard";
import Paginador from "../Paginador/Paginador";
import styles from "./GridAllContent.module.css";

export default function GridAllContent({ page }: { page: string }) {
  const queryString = window.location.search;

  const params = new URLSearchParams(queryString);

  let añoSeleccionado = params.get("añoSeleccionado");
  let cardsPerPage = params.get("cardsPerPage");

  const [content, setContent] = useState<Content[]>([]);
  const [contentSelected, setContentSelected] = useState<Content>({
    title: "",
    description: "",
    programType: "",
    images: {
      // eslint-disable-next-line no-useless-computed-key
      ["Poster Art"]: {
        url: "",
        width: 0,
        height: 0,
      },
    },
    releaseYear: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [año, setAño] = useState<number>(añoSeleccionado ? +añoSeleccionado : 0);
  const [pags, setPags] = useState<number>();
  const [itemsPerPage, setItemsPerPage] = useState<number>(cardsPerPage ? +cardsPerPage : 5);
  const [pag, setPag] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      try {
        await getContentFilter(
          setContent,
          setLoading,
          pag,
          año,
          setPags,
          itemsPerPage,
          page
        );
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pag, año, itemsPerPage]);

  useEffect(() => {
    setPag(1);
  }, [año, itemsPerPage]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Filters
        year={año}
        setYear={setAño}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
      <div className={styles.contentBox}>
        {pags === 0 ? (
          <div>No hay elementos para mostrar</div>
        ) : (
          <>
            <Grid
              content={content}
              loading={loading}
              handleOpenModal={handleOpenModal}
              setContentSelected={setContentSelected}
            />
            {pags !== 1 && (
              <Paginador
                totalPaginas={pags}
                paginaActual={pag}
                setPaginaActual={setPag}
              />
            )}
          </>
        )}
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contentSelected={contentSelected}
      />
    </div>
  );
}
