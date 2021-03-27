import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

export function useCarousel(init, limit = 7) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesArr, setSlidesArr] = useState(init);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlidesArr([...slidesArr, slidesArr[activeSlide]]);
      setActiveSlide(activeSlide + 1);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeSlide, slidesArr]);

  const limitedArr = slidesArr.slice(activeSlide, activeSlide + limit);

  return [limitedArr];
}

export function Carousel({ people }) {
  const [slides] = useCarousel(people);

  return (
    <ul className={styles.carousel}>
      {slides.map((person) => (
        <li className={styles.item} key={person.name}>
          <img className={styles.avatar} src={person.image} alt="avatar" width="120" height="120" />
          <h5 className={styles.itemHeading}>{person.name}</h5>
          <p>{person.company}</p>
        </li>
      ))}
    </ul>
  );
}
