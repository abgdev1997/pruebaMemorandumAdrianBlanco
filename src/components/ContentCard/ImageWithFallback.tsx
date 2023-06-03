import React, { useState } from 'react';
import styles from "./ContentCard.module.css";
import Loader from '../Loader/Loader';


const ImageWithFallback = ({ src, alt, width, height }:{src:string, alt:string, width: number, height:number}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [loading, setLoading] = useState(false);

  const handleImageError = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500);
    setImageSrc("https://images.unsplash.com/photo-1633502067399-75a548e457c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80");
  };

  return loading ? <Loader/> : <img src={imageSrc} width={width} height={height} alt={alt} onError={handleImageError} className={styles.image}/>;
};

export default ImageWithFallback;