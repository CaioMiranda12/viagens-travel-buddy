import Head from "next/head"
import Image from "next/image"
import BannerImg from '../../assets/bannerHome.png'
import Logo from '../../assets/Logo3.svg'
import { CarouselUpcoming } from "@/components/carouselUpcoming"
import { HotelServices } from "@/components/hotelServices"
import { PageMain } from "@/components/pageMain"


export default function About() {
    return (
        <div className="bg-[#F3F3F3]">
            <Head>
                <title>Sobre Nós</title>
            </Head>

            <main>
                <PageMain pageName="Sobre nós" pageInfo="TravelBuddy O melhor serviço de viagens"/>
            </main>

            <section>
                <div className="w-full py-14 flex flex-col items-center sm:flex-row sm:items-start sm:justify-center">
                    <div>
                        <Image src={Logo} alt='logo do site' />
                    </div>

                    <div className=" lg:w-1/2 px-8 h-full">
                        <span className="text-[#FF5403] text-lg">Quem nós somos</span>

                        <h2 className="my-5 text-[#041562] font-bold text-3xl">Adoramos descobrir a Indonésia</h2>

                        <p className="text-gray-500 text-xl sm:leading-relaxed">
                            Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one.
                            Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.
                            <br /> <br />
                            Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one.
                            Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.
                        </p>
                    </div>
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