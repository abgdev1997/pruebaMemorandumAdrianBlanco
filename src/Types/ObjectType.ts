export type Content = {
  title: string;
  description: string;
  programType: string;
  images: {
    ["Poster Art"]: {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
};

export type Respuesta = { total: number; entries: Content[] };
