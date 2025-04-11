import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ImageProps } from '@/types/project'

import 'react-medium-image-zoom/dist/styles.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Zoom from 'react-medium-image-zoom'
import rightArrow from '@/assets/images/common/left-arrow.png';
import leftArrow from '@/assets/images/common/right-arrow.png';

const SwiperImage = ({ images, onClick, style }: ImageProps) => {
  const prevRef = useRef<HTMLImageElement>(null);
  const nextRef = useRef<HTMLImageElement>(null);

  return (
    <div className="modal-swiper-wrap">
      <img
        ref={prevRef}
        src={rightArrow}
        className="custom-swiper prev"
        alt="prev button"
      />
      <img
        ref={nextRef}
        src={leftArrow}
        className="custom-swiper next"
        alt="next button"
      />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== 'boolean'
          ) {
            swiper.params.navigation.prevEl = prevRef.current!;
            swiper.params.navigation.nextEl = nextRef.current!;
          }
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
              { style ? (
              <div style={style}>
                <Zoom>
                  <img
                    src={img.src}
                    alt="project image"
                    onClick={onClick}
                  />
                </Zoom>
              </div>
            ) : (
              <img
                src={img.src}
                alt="project image"
                onClick={onClick}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperImage;