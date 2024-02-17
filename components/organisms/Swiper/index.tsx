"use client";
import React, { ReactNode } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { clsx } from "clsx";

type PropsSwiperComponent = {
  data: any;
  itemRender: (item: any, isActive: boolean) => ReactNode; // eslint-disable-line no-unused-vars
  classNameSlider?: string;
} & SwiperProps;

const SwiperComponent = (props: PropsSwiperComponent) => {
  const { data, itemRender, classNameSlider, ...others } = props;
  return (
    <Swiper spaceBetween={50} slidesPerView={3} {...others}>
      {data.map((item: any, key: number) => (
        <SwiperSlide className={clsx(classNameSlider)} key={`swiper-${key}`}>
          {({ isActive }) => itemRender(item, isActive)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
