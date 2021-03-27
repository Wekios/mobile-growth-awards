import styles from "./Banner.module.css";
import { Carousel } from "components/Carousel";

export function Banner({ heading = BannerHeading, subheading, bgImage, mainImage, people }) {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.container}>
        {heading && <BannerHeading>{heading}</BannerHeading>}
        {subheading && <h4 className={styles.subheading}>{subheading}</h4>}
        {mainImage && <img className={styles.logo} src={mainImage.url} alt={mainImage.alt} />}
        <Carousel people={people} />
        <footer className={styles.footer}>
          <span>Presented by</span> branch 🕊
        </footer>
      </div>
    </div>
  );
}

/**
 * I wasn't sure if this was the requirement - to make the last word have accent color
 * or how flexible should the Banner component be so I've extracted heading into a smaller one where
 * the last word will always be colored according to the theme
 */
function BannerHeading({ children }) {
  const textToArr = children.split(" ");
  const lastWord = textToArr.pop();
  const arrToText = textToArr.join(" ");

  return (
    <h2 className={styles.heading}>
      {arrToText} <span>{lastWord}</span>
    </h2>
  );
}
