import { SwiperProps, SwiperSlide } from 'swiper/react';
import { Slider } from '../Slider';

import { evaluations } from '../../evaluations.json'

export function CarouselEvaluation() {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    loop: evaluations.length >= 3
  }


  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-white text-2xl">Avaliações dos Clientes</h2>
        {/* <div>
          <button  className="bg-[#2D93EA] py-2 px-3 text-white mr-1 hover:opacity-80 active:opacity-60">{'<'}</button>
          <button className="bg-[#2D93EA] py-2 px-3 text-white hover:opacity-80 active:opacity-60">{'>'}</button>
        </div> */}
      </div>

      <div className="mt-6 flex gap-3">
        <Slider settings={settings}
        >
          {
            evaluations.map(item => (
              <SwiperSlide key={item.id} className="bg-[#3045A5] p-2 flex flex-col gap-4 mr-2">
                <p className="text-yellow-500">{item.rating}</p>

                <p className="text-gray-100">{item.comment}</p>

                <p className="text-gray-100">- {item.name}</p>
              </SwiperSlide>
            ))
          }

        </Slider>

      </div>

    </>
  )
}