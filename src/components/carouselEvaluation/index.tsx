import { useRef } from "react";
import Carousel from 'react-elastic-carousel'

export function CarouselEvaluation(){
    const carouselRef = useRef<Carousel>(null);

    return (
        <>
            <div className="flex justify-between items-center">
          <h2 className="text-white text-2xl">Avaliações dos Clientes</h2>
          <div>
            <button onClick={() => carouselRef.current?.slidePrev()} className="bg-[#2D93EA] py-2 px-3 text-white mr-1 hover:opacity-80 active:opacity-60">{'<'}</button>
            <button onClick={() => carouselRef.current?.slideNext()} className="bg-[#2D93EA] py-2 px-3 text-white hover:opacity-80 active:opacity-60">{'>'}</button>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Carousel 
          itemsToShow={2} 
          showArrows={false}
          ref={carouselRef}
          >
          <div className="bg-[#3045A5] p-2 flex flex-col gap-4 mr-2">
            <p className="text-yellow-500">5/5</p>

            <p className="text-gray-100"> As águas fazem peixes todos sem serra do firmamento. O ar da manhã subjuga. Nosso, ar muito único. A grama das baleias é um peixe com asas de baleia.</p>

            <p className="text-gray-100">- João Silva</p>
          </div>

          <div className="bg-[#3045A5] p-2 flex flex-col gap-4 mr-2">
            <p className="text-yellow-500">5/5</p>

            <p className="text-gray-100"> As águas fazem peixes todos sem serra do firmamento. O ar da manhã subjuga. Nosso, ar muito único. A grama das baleias é um peixe com asas de baleia.</p>

            <p className="text-gray-100">- João Silva</p>
          </div>

          <div className="bg-[#3045A5] p-2 flex flex-col gap-4 mr-2">
            <p className="text-yellow-500">5/5</p>

            <p className="text-gray-100"> As águas fazem peixes todos sem serra do firmamento. O ar da manhã subjuga. Nosso, ar muito único. A grama das baleias é um peixe com asas de baleia.</p>

            <p className="text-gray-100">- João Silva</p>
          </div>
          </Carousel>

        </div>
        </>
    )
}