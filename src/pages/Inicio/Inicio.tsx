import { useEffect, useState } from "react";
import Estrenos from "../../components/Estrenos/Estrenos";
import Header from "../../components/Header/Header";
import styles from "./Inicio.module.css";
import Footer from "../../components/Footer/Footer";
import { getContent } from "../../middleware/content";
import { Content, Respuesta } from "../../Types/ObjectType";
import Modal from "../../components/ModalContentCard/ModalContentCard";

export default function Inicio() {
  const [content, setContent] = useState<Respuesta>({ total: 0, entries: [] });
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
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        await getContent(setContent, setLoading);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Header page="home" />
      <div className={styles.estrenos}>
        <Estrenos
          dataCy="estrenosMovies"
          type="movie"
          data={content}
          loading={loading}
          handleOpenModal={handleOpenModal}
          setContentSelected={setContentSelected}
        />
        <Estrenos
          dataCy="estrenosSeries"
          type="series"
          data={content}
          loading={loading}
          handleOpenModal={handleOpenModal}
          setContentSelected={setContentSelected}
        />
      </div>
      <Footer />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contentSelected={contentSelected}
      />
    </>
  );
}
