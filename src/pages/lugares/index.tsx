import { PageMain } from "@/components/pageMain";
import Image from "next/image";

import placeImg1 from '../../assets/place1.svg'
import placeImg2 from '../../assets/place2.svg'
import placeImg3 from '../../assets/place3.svg'
import placeImg4 from '../../assets/place4.svg'
import placeImg5 from '../../assets/place5.svg'
import placeImg6 from '../../assets/place6.svg'
import placeImg7 from '../../assets/place7.svg'
import placeImg8 from '../../assets/place8.svg'

export default function Lugares(){
    return (
        <div className="w-full">
            <main className="w-full">
                <PageMain pageName="Lugares" pageInfo="Os melhores lugares para você"/>
            </main>

            <section className="w-full flex flex-col items-center py-14">
                <div className="mb-10">
                    <h1 className="text-[#041562] text-3xl font-bold text-center">Lugares</h1>
                    <p className="text-[#626262] text-lg text-center">Os melhores lugares para ir na Indonesia</p>
                </div>

                <div className="grid grid-cols-2 max-w-80p gap-3 sm:gap-8">
                    <Image src={placeImg1} alt='imagem do lugar'/>
                    <Image src={placeImg2} alt='imagem do lugar'/>
                    <Image src={placeImg3} alt='imagem do lugar'/>
                    <Image src={placeImg4} alt='imagem do lugar'/>
                    <Image src={placeImg5} alt='imagem do lugar'/>
                    <Image src={placeImg6} alt='imagem do lugar'/>
                    <Image src={placeImg7} alt='imagem do lugar'/>
                    <Image src={placeImg8} alt='imagem do lugar'/>
                </div>
            </section>
        </div>
    )
}