import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ImageProps } from '@/types/project'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import 'react-medium-image-zoom/dist/styles.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Zoom from 'react-medium-image-zoom'

const SwiperWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const NavButton = styled(motion.button)<{ direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => direction === 'prev' ? 'left: 10px;' : 'right: 10px;'}
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(118, 164, 218, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-top: 2.5px solid var(--primary-color);
    border-right: 2.5px solid var(--primary-color);
    transform: ${({ direction }) => direction === 'prev' ? 'rotate(-135deg)' : 'rotate(45deg)'};
    transition: all 0.3s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    border-color: var(--primary-color);
    box-shadow: 0 4px 12px rgba(118, 164, 218, 0.3);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    ${({ direction }) => direction === 'prev' ? 'left: 5px;' : 'right: 5px;'}
    
    &::before {
      width: 8px;
      height: 8px;
      border-width: 2px;
    }
  }
  
  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    ${({ direction }) => direction === 'prev' ? 'left: 3px;' : 'right: 3px;'}
    border-width: 1.5px;
    
    &::before {
      width: 7px;
      height: 7px;
      border-width: 2px;
    }
  }
`;

const SwiperImage = ({ images, onClick }: ImageProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <SwiperWrapper className="modal-swiper-wrap">
      <NavButton
        ref={prevRef}
        direction="prev"
        className="custom-swiper prev"
        aria-label="이전 이미지"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      />
      <NavButton
        ref={nextRef}
        direction="next"
        className="custom-swiper next"
        aria-label="다음 이미지"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
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
              <Zoom>
                <img
                  src={img.src}
                  alt="project image"
                  onClick={onClick}
                />
              </Zoom>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default SwiperImage;