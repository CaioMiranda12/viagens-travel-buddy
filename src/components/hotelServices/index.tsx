import Image from "next/image"
import serviceImg from '../../assets/img-card-tsp-03.svg'
import serviceImg2 from '../../assets/img-card-tsp-03 (1).svg'
import serviceImg3 from '../../assets/img-card-tsp-03 (2).svg'

export function HotelServices(){
    return (
        <div className="px-5 py-10">
        <div>
            <h2 className="text-[#041562] text-2xl font-bold text-center">Oferecemos os melhores serviços</h2>
            <p className="text-[#626262] text-center">The Best Service</p>

            <div className="flex justify-center gap-3 mt-5">
              <div>
                <Image src={serviceImg} alt='imagem do serviço de hotel'/>
                <p>Transporte</p>
                <span className="text-gray-500">Todos os custos de transporte que suportamos</span>
              </div>

              <div>
                <Image src={serviceImg2} alt='imagem do serviço de hotel'/>
                <p>Organização</p>
                <span className="text-gray-500">Oferecemos a melhor orientação para você</span>
              </div>

              <div>
                <Image src={serviceImg3} alt='imagem do serviço de hotel'/>
                <p>Acomodação</p>
                <span className="text-gray-500">Luxuoso e confortável</span>
              </div>


            </div>
        </div>
      </div>
    )
}