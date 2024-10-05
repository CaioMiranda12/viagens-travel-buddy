import Image from "next/image"
import imgHotel from '../../assets/img-card-hotel-03.png'
import imgHotel2 from '../../assets/img-card-hotel-03.svg'
import imgHotel3 from '../../assets/img-card-hotel-03 (1).svg'

export function HotelsAndRestaurants(){
    return (
        <div className="py-10 flex justify-center">
          <div>
            <div className="mb-5">
              <h2 className="text-center text-2xl text-[#041562] font-bold">Top Hoteis e Restaurantes</h2>
              <p className="text-center text-[#626262] text-sm">Os melhores hotéis e restaurantes da Indonésia</p>
            </div>

            <div className="grid grid-cols-2 gap-4 px-8">
              <div className=" flex flex-col gap-2">
                <Image src={imgHotel} alt='imagem do hotel'/>
                <p className="font-bold">Hotel Grand Indonesia</p>
                <div>
                  <p><span className="text-orange-500">4/5</span> (200 avaliações)</p>
                  <p className="text-[#626262]">Jakarta, Indonesia</p>
                </div>
              </div>

              <div className=" flex flex-col gap-2">
                <Image src={imgHotel2} alt='imagem do hotel'/>
                <p className="font-bold">Hotel Grand Indonesia</p>
                <div>
                  <p><span className="text-orange-500">4/5</span> (200 avaliações)</p>
                  <p className="text-[#626262]">Jakarta, Indonesia</p>
                </div>
              </div>

              <div className=" flex flex-col gap-2">
                <Image src={imgHotel3} alt='imagem do hotel'/>
                <p className="font-bold">Hotel Grand Indonesia</p>
                <div>
                  <p><span className="text-orange-500">4/5</span> (200 avaliações)</p>
                  <p className="text-[#626262]">Jakarta, Indonesia</p>
                </div>
              </div>

              <div className=" flex flex-col gap-2">
                <Image src={imgHotel} alt='imagem do hotel'/>
                <p className="font-bold">Hotel Grand Indonesia</p>
                <div>
                  <p><span className="text-orange-500">4/5</span> (200 avaliações)</p>
                  <p className="text-[#626262]">Jakarta, Indonesia</p>
                </div>
              </div>

            </div>

          </div>
      </div>
    )
}