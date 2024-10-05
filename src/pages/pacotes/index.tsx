import { CarouselUpcoming } from "@/components/carouselUpcoming";
import { HotelsAndRestaurants } from "@/components/hotelsAndRestaurants";
import { HotelServices } from "@/components/hotelServices";
import { PageMain } from "@/components/pageMain";

export default function Pacotes(){
    return (
        <div>
            <main>
                <PageMain pageName="Pacotes" pageInfo="TravelBuddy O melhor serviço de viagens"/>
            </main>

            <section>
                <div>
                    <HotelsAndRestaurants />
                </div>

                <div>
                    <CarouselUpcoming />
                </div>

                <div>
                    <HotelServices />
                </div>
            </section>
        </div>
    )
}