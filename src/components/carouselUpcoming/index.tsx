
// className="mt-8 bg-[url(../assets/home-img-2.png)] bg-cover bg-center py-10 px-1 flex flex-row-reverse"

import { SwiperProps, SwiperSlide } from "swiper/react";
import { Slider } from "../Slider";

import  upcoming from '../../upcoming.json'

export function CarouselUpcoming() {
  const upcomings = upcoming.upcoming

  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    loop: upcomings.length >= 3
  }

  return (
    <div className="mt-8 bg-[url(../assets/home-img-2.png)] bg-cover bg-center py-10 px-10 sm:px-20 flex flex-row-reverse">
      <Slider settings={settings}
    >
      {
        upcomings.map(item => (
          <SwiperSlide key={item.id} className="bg-white p-4 flex flex-col">
        <div>
          <p className="text-orange-400">Próximo evento</p>
          <h4 className="text-[#041562] font-bold text-xl">{item.place}</h4>
        </div>

        <div className="my-4 flex flex-col gap-3">
          <p className="text-[#626262]">{item.description}</p>

          <p><span className="text-gray-500">Data</span> : {item.date}</p>
          <p><span className="text-gray-500">Custo</span> : {item.cost}</p>
          <p><span className="text-gray-500">Agência</span> : {item.organizer}</p>
          <p><span className="text-gray-500">Avaliação</span> : {item.rating}</p>
        </div>

        <button className="bg-orangeButton p-2 text-white hover:opacity-80 active:opacity-60 sm:w-max">Ver detalhes</button>
      </SwiperSlide>
        ))
      }

    
    </Slider>
    </div>
  )
}