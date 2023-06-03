import React from "react";
import styles from "./Footer.module.css";
import facebookLogo from "../../assets/social/facebook-blue.svg";
import twitterLogo from "../../assets/social/twitter-blue.svg";
import instagramLogo from "../../assets/social/instagram-blue.svg";
import playStoreLogo from "../../assets/store/play-store.svg";
import appStoreLogo from "../../assets/store/app-store.svg";
import windowsStoreLogo from "../../assets/store/windows-store.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.socialMedia}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebookLogo}
              alt="Facebook"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterLogo}
              alt="Twitter"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramLogo}
              alt="Instagram"
              className={styles.socialIcon}
            />
          </a>
        </div>
        <div className={styles.socialMedia}>
          <a
            href="https://play.google.com/store/games?hl=es_419&gl=US&pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={playStoreLogo}
              alt="Play Store"
              className={styles.storeIcon}
            />
          </a>
          <a
            href="https://www.apple.com/es/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appStoreLogo}
              alt="App Store"
              className={styles.storeIcon}
            />
          </a>
          <a
            href="https://www.microsoft.com/es-ad/store/b/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={windowsStoreLogo}
              alt="Windows Store"
              className={styles.storeIcon}
            />
          </a>
        </div>
      </div>

      <div className={styles.footerText}>
        &copy; 2023 MyWebsite. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
