import axios from "axios";
import { Content, Respuesta } from "../Types/ObjectType";

export const getContent = async (
  setData: (data: Respuesta) => void,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);
  await axios
    .get("./sample.json")
    .then((response) => {
      setData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      redirectToErrorPage()
    });
};

export const getContentFilter = async (
  setData: (data: Content[]) => void,
  setLoading: (loading: boolean) => void,
  page: number,
  año: number | undefined,
  setPages: (pages: number) => void,
  itemsPerPage: number,
  mode: string
) => {
  setLoading(true);
  await axios
    .get("./sample.json")
    .then((response) => {
      const indexOfLastItem = page * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      let items = response.data?.entries.sort((a:Content, b:Content) => {
        return a?.title.localeCompare(b?.title, undefined, { numeric: true, sensitivity: 'base' });
      });

      items = items.filter((item:Content) => item?.programType === mode)
      let totalPages;

      if (año !== 0) {
        items = items.filter((item: Content) => item?.releaseYear === año)
        totalPages = Math.ceil(items?.length / itemsPerPage);
        items = items.slice(indexOfFirstItem, indexOfLastItem);
      } else {
        items = items.filter((item: Content) => item?.releaseYear >= 2010)
        totalPages = Math.ceil(items?.length / itemsPerPage);
        items = items.slice(indexOfFirstItem, indexOfLastItem);
      }

      setPages(totalPages)

      setData(items);

      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      redirectToErrorPage()
    });
};

const redirectToErrorPage = () => {
  window.location.href = '/error';
};
