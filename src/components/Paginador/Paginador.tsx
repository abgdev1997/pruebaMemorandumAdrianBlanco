import Button from "../Buttons/Button1";
import styles from "./Paginador.module.css";

const Paginador = ({
  totalPaginas,
  paginaActual,
  setPaginaActual,
}: {
  totalPaginas: number | undefined;
  paginaActual: number;
  setPaginaActual: (paginaActual: number) => void;
}) => {
  const cambiarPagina = (direccion: string) => {
    if (direccion === "anterior" && paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    } else if (
      totalPaginas &&
      direccion === "siguiente" &&
      paginaActual < totalPaginas
    ) {
      setPaginaActual(paginaActual + 1);
    }
  };

  return (
    <div className={styles.paginador}>
      <Button
        dataCy="anteriorPagina"
        onClick={() => cambiarPagina("anterior")}
        text="Anterior"
        disabled={paginaActual === 1}
      />
      <span data-cy="paginaNumber" className={styles.info}>
        Página {paginaActual} de {totalPaginas}
      </span>
      <Button
        dataCy="siguientePagina"
        onClick={() => cambiarPagina("siguiente")}
        text="Siguiente"
        disabled={paginaActual === totalPaginas}
      />
    </div>
  );
};

export default Paginador;
