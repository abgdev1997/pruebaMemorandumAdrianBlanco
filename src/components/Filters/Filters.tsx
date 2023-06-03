import styles from "./Filters.module.css";

const Componente = ({
  year,
  setYear,
  itemsPerPage,
  setItemsPerPage,
}: {
  year: number | undefined;
  setYear: (year: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (itemsPerPage: number) => void;
}) => {
  const queryString = window.location.search;

  const params = new URLSearchParams(queryString);

  const handleYearChange = (e: any) => {
    setYear(+e.target.value);
    params.set("añoSeleccionado", `${+e.target.value}`);
    if (+e.target.value === 0) params.delete("añoSeleccionado");
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.location.href = newUrl;
  };

  const handleItemsPerPageChange = (e: any) => {
    setItemsPerPage(+e.target.value);
    params.set("cardsPerPage", `${+e.target.value}`);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.location.href = newUrl;
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Año:</label>
      <select
        data-cy="yearSelector"
        id="year"
        value={year}
        onChange={handleYearChange}
        className={styles.select}
      >
        <option value={0} className={styles.option}>
          -
        </option>
        {Array.from({ length: new Date().getFullYear() - 2009 }, (_, index) => (
          <option key={index} value={2010 + index} className={styles.option}>
            {2010 + index}
          </option>
        ))}
      </select>
      <label style={{ marginLeft: "10px" }} className={styles.label}>
        Páginas a mostrar:
      </label>
      <select
        data-cy="cardsPerPageSelector"
        id="itemsPerPage"
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        className={styles.select}
      >
        <option value={5} className={styles.option}>
          5
        </option>
        <option value={10} className={styles.option}>
          10
        </option>
        <option value={15} className={styles.option}>
          15
        </option>
      </select>
    </div>
  );
};

export default Componente;
