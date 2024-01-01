import { useEffect, useState } from "react";

const goToOtherImage = (href: string, carouselId: string) => {
  const carousel = document.getElementById(carouselId);
  if (carousel) {
    const target = document.querySelector<HTMLDivElement>(href)!;
    const left = target.offsetLeft;
    carousel.scrollTo({ left: left });
  }
};

export const HeroCarousel = ({
  imgs,
  carouselId,
  isAutoPlay = true,
  autoPlayMilliseconds = 5000,
}: any) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleClickBtn = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    i: number
  ) => {
    event.preventDefault();
    const btn = event.currentTarget;
    const href = btn.getAttribute("href")!;
    goToOtherImage(href, carouselId);
    setActiveIndex(i);
  };

  useEffect(() => {
    if (isAutoPlay) {
      const intervalId = setInterval(() => {
        const newActiveIndex =
          activeIndex + 1 === imgs.length ? 0 : activeIndex + 1;
        goToOtherImage(`#DaisyUICarousel_img_${newActiveIndex}`, carouselId);
        setActiveIndex(newActiveIndex);
      }, autoPlayMilliseconds);
      return () => clearInterval(intervalId);
    }
  }, [activeIndex, autoPlayMilliseconds, carouselId, imgs.length, isAutoPlay]);
  return (
    <div>
      <div id={carouselId} className={"carousel rounded-box  w-full h-60v"}>
        {imgs.map((img: any, i: any) => {
          return (
            <div
              key={`DaisyUICarousel_img_${i}`}
              id={`DaisyUICarousel_img_${i}`}
              className={
                "carousel-item w-full bg-center bg-cover bg-no-repeat relative"
              }
            >
              <img
                src={img}
                className="w-full h-auto object-cover lg:object-left-bottom object-center"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2 bottom-3">
        {imgs.map((img: any, i: any) => {
          return (
            <a
              onClick={(e) => handleClickBtn(e, i)}
              key={`DaisyUICarousel_img_point_${i}`}
              href={`#DaisyUICarousel_img_${i}`}
              className={`${
                activeIndex !== i && "opacity-10 h-2 w-2"
              } bg-slate-500 h-3 w-3 rounded-full`}
            ></a>
          );
        })}
      </div>
    </div>
  );
};
