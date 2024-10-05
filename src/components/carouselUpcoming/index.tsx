import Carousel from 'react-elastic-carousel'
// className="mt-8 bg-[url(../assets/home-img-2.png)] bg-cover bg-center py-10 px-1 flex flex-row-reverse"

export function CarouselUpcoming() {
  return (
    <div className="mt-8 bg-[url(../assets/home-img-2.png)] bg-cover bg-center py-10 px-1 flex flex-row-reverse">
      <Carousel
      itemsToShow={1}
    >
      <div className="bg-white max-w-80p p-4">
        <div className="">
          <p className="text-orange-400">Próximo evento</p>
          <h4 className="text-[#041562] font-bold text-xl">Bali - Indonesia</h4>
        </div>

        <div className="my-4 flex flex-col gap-3">
          <p className="text-[#626262]">As águas fazem peixes todos sem serra do firmamento. O ar da manhã subjuga. Nosso, ar muito único. A grama das baleias é um peixe com asas de baleia.</p>

          <p><span className="text-gray-500">Data</span> : 12 Aug 2020</p>
          <p><span className="text-gray-500">Custo</span> : Start from Rp3000.000,00</p>
          <p><span className="text-gray-500">Agência</span> : TravelBuddy</p>
          <p><span className="text-gray-500">Avaliação</span> : 4 / 5</p>
        </div>

        <button className="bg-orangeButton p-2 text-white hover:opacity-80 active:opacity-60">Ver detalhes</button>
      </div>

      <div className="bg-white max-w-80p p-4">
        <div className="">
          <p className="text-orange-400">Próximo evento</p>
          <h4 className="text-[#041562] font-bold text-xl">Bali - Indonesia</h4>
        </div>

        <div className="my-4 flex flex-col gap-3">
          <p className="text-[#626262]">As águas fazem peixes todos sem serra do firmamento. O ar da manhã subjuga. Nosso, ar muito único. A grama das baleias é um peixe com asas de baleia.</p>

          <p><span className="text-gray-500">Data</span> : 12 Aug 2020</p>
          <p><span className="text-gray-500">Custo</span> : Start from Rp3000.000,00</p>
          <p><span className="text-gray-500">Agência</span> : TravelBuddy</p>
          <p><span className="text-gray-500">Avaliação</span> : 4 / 5</p>
        </div>

        <button className="bg-orangeButton p-2 text-white">Ver detalhes</button>
      </div>

      <div className="bg-white max-w-80p p-4">
        <div className="">
          <p className="text-orange-400">Próximo evento</p>
          <h4 className="text-[#041562] font-bold text-xl">Bali - Indonesia</h4>
        </div>

        <div className="my-4 flex flex-col gap-3">
          <p className="text-[#626262]">As águas fazem peixes todos sem serra do firmamento. O ar da manhã subjuga. Nosso, ar muito único. A grama das baleias é um peixe com asas de baleia.</p>

          <p><span className="text-gray-500">Data</span> : 12 Aug 2020</p>
          <p><span className="text-gray-500">Custo</span> : Start from Rp3000.000,00</p>
          <p><span className="text-gray-500">Agência</span> : TravelBuddy</p>
          <p><span className="text-gray-500">Avaliação</span> : 4 / 5</p>
        </div>

        <button className="bg-orangeButton p-2 text-white hover:opacity-80 active:opacity-60">Ver detalhes</button>
      </div>
    </Carousel>
    </div>
  )
}