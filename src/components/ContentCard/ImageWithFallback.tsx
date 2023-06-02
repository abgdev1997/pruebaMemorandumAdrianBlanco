import React, { useState } from 'react';
import placeholder from "../../assets/placeholder.png"
import styles from "./ContentCard.module.css";


const ImageWithFallback = ({ src, alt }:{src:string, alt:string}) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageError = () => {
    setImageSrc(placeholder);
  };

  return <img src={imageSrc} alt={alt} onError={handleImageError} className={styles.image}/>;
};

export default ImageWithFallback;