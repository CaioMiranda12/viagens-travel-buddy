import Carousel from 'react-elastic-carousel'

export function CarouselUpcoming(){
    return (
        <Carousel 
          itemsToShow={1}
          >
            <div className="bg-white max-w-80p p-4">
              <div className="">
                <p className="text-orange-400">Upcoming Event</p>
                <h4 className="text-[#041562] font-bold text-xl">Bali - Indonesia</h4>
              </div>

              <div className="my-4 flex flex-col gap-3">
                <p className="text-[#626262]">Waters make fish every without firmament saw had. Morning
                  air subdue. Our, air very one. Whales grass is fish whales
                  winged.</p>

                <p><span className="text-gray-500">date</span> : 12 Aug 2020</p>
                <p><span className="text-gray-500">cost</span> : Start from Rp3000.000,00</p>
                <p><span className="text-gray-500">organizer</span> : TravelBuddy</p>
                <p><span className="text-gray-500">Rating</span> : 4 / 5</p>
              </div>

              <button className="bg-orangeButton p-2 text-white hover:opacity-80 active:opacity-60">Ver detalhes</button>
            </div>

            <div className="bg-white max-w-80p p-4">
            <div className="">
              <p className="text-orange-400">Upcoming Event</p>
              <h4 className="text-[#041562] font-bold text-xl">Bali - Indonesia</h4>
            </div>

            <div className="my-4 flex flex-col gap-3">
              <p className="text-[#626262]">Waters make fish every without firmament saw had. Morning
                air subdue. Our, air very one. Whales grass is fish whales
                winged.</p>
                
              <p><span className="text-gray-500">date</span> : 12 Aug 2020</p>
              <p><span className="text-gray-500">cost</span> : Start from Rp3000.000,00</p>
              <p><span className="text-gray-500">organizer</span> : TravelBuddy</p>
              <p><span className="text-gray-500">Rating</span> : 4 / 5</p>
            </div>

            <button className="bg-orangeButton p-2 text-white">Ver detalhes</button>
          </div>

          <div className="bg-white max-w-80p p-4">
            <div className="">
              <p className="text-orange-400">Upcoming Event</p>
              <h4 className="text-[#041562] font-bold text-xl">Bali - Indonesia</h4>
            </div>

            <div className="my-4 flex flex-col gap-3">
              <p className="text-[#626262]">Waters make fish every without firmament saw had. Morning
                air subdue. Our, air very one. Whales grass is fish whales
                winged.</p>
                
              <p><span className="text-gray-500">date</span> : 12 Aug 2020</p>
              <p><span className="text-gray-500">cost</span> : Start from Rp3000.000,00</p>
              <p><span className="text-gray-500">organizer</span> : TravelBuddy</p>
              <p><span className="text-gray-500">Rating</span> : 4 / 5</p>
            </div>

            <button className="bg-orangeButton p-2 text-white hover:opacity-80 active:opacity-60">Ver detalhes</button>
          </div>
          </Carousel>
    )
}