import { ReactNode } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperProps } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'


interface SliderProps {
    settings: SwiperProps
    children: ReactNode
}

export function Slider({ settings, children }: SliderProps){
    return (
        <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
            {children}
        </Swiper>
    )
}