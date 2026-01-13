"use client"
import { ModelFeature } from "../../types/cars";
import Image from "next/image";
import s from "./features-carousel.module.css"
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { useMemo } from "react";


export default function Carousel({ features }: { features: ModelFeature[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const safeSlides = useMemo(() => {
    if (features.length === 0) return [];
    if (features.length >= 6) return features;

    const factor = Math.ceil(6 / features.length);
    return Array(factor).fill(features).flat();
  }, [features]);


  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  return (
    <div className={s.embla}>
      <div className={s.embla__viewport} ref={emblaRef}>

        {/* Carousel container */}
        <div className={s.embla__container}>
          {safeSlides.map((ft, i) =>
            <div key={i} className={s.embla__slide}>
              <Image src={ft.image} alt="Característica del auto" width={330} height={180} className="rounded-md" />
              <h3 className="text-[#373737] text-xl font-semibold">{ft.name}</h3>
              <p>{ft.description.replace(/<[^>]*>/g, '')}</p>
            </div>
          )}
        </div>
        {/* Controls + dots */}
        <div className={s.embla__controls}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className="h-full bg-[#FFFFFF99] p-2 hover:bg-[#FFFFFFCC] transition duration-100 flex self-start" />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className="h-full bg-[#FFFFFF99] p-2 hover:bg-[#FFFFFFCC] transition duration-100 flex self-start" />
        </div>



      </div>
    </div>
  )
}