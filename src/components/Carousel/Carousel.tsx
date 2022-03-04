import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "./EmblaCarouselButton";
import Autoplay from "embla-carousel-autoplay";

import hc1 from "/public/static/hc1.jpg";
import hc2 from "/public/static/hc2.jpg";
import hc3 from "/public/static/hc3.jpg";
import hc4 from "/public/static/hc4.jpg";
import hc5 from "/public/static/hc5.png";
import hc6 from "/public/static/hc6.jpg";
import hc7 from "/public/static/hc7.png";
import hc8 from "/public/static/hc8.jpg";
import hc9 from "/public/static/hc9.jpg";
import hc10 from "/public/static/hc10.jpg";

import styles from "./Carousel.module.css";

interface CarouselProps {}

const media = [hc1, hc2, hc3, hc4, hc5, hc6, hc7, hc8, hc9, hc10];
const mediaByIndex = (index: number) => media[index % media.length];

const SLIDE_COUNT = 10;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Carousel: React.FC<CarouselProps> = () => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [viewportRef, embla] = useEmblaCarousel(
    {
      containScroll: "trimSnaps",
      dragFree: true,
    },
    [autoplay.current]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    autoplay.current.reset();
  }, [embla]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    autoplay.current.reset();
  }, [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
  }, [embla, onSelect, onScroll]);

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {slides.map((index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={`${styles.embla__slide__inner} lg:h-96` }>
                  <Image
                    className={styles.embla__slide__img}
                    src={mediaByIndex(index)}
                    alt="Photos of past runs"
                  />
                </div>
              </div>
            ))}
          </div>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </div>
      <div className={styles.embla__progress}>
        <div
          className={styles.embla__progress__bar}
          style={{ transform: `translateX(${scrollProgress}%)` }}
        />
      </div>
    </>
  );
};

export default Carousel;
