import Head from "next/head";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { GoChevronDown } from "react-icons/go";
import Image from "next/image";
import placeImg1 from '../assets/img-box-place.png'
import placeImg2 from '../assets/img-box-02.png'
import placeImg3 from '../assets/img-box-place (1).png'
import placeImg4 from '../assets/img-box-place.svg'
import imgHotel from '../assets/img-card-hotel-03.png'
import imgHotel2 from '../assets/img-card-hotel-03.svg'
import imgHotel3 from '../assets/img-card-hotel-03 (1).svg'
import serviceImg from '../assets/img-card-tsp-03.svg'
import serviceImg2 from '../assets/img-card-tsp-03 (1).svg'
import serviceImg3 from '../assets/img-card-tsp-03 (2).svg'

import { CarouselUpcoming } from "@/components/carouselUpcoming";
import { CarouselEvaluation } from "@/components/carouselEvaluation";


export default function Home() {

  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      <Head>
        <title>Página Inicial</title>
      </Head>

      <main className="
      bg-[url(../assets/bannerHome.png)]
      w-full
      h-80
      bg-cover
      bg-center
      relative 
      inline-block 
      z-10 
      before:absolute 
      before:top-0 
      before:left-0 
      before:w-full 
      before:h-full 
      before:bg-black 
      before:opacity-10 
      before:-z-10 
      before:content-['']
      ">
        <div className="h-full flex flex-col justify-center items-center mx-8 text-center">
          <h1 className="text-white font-bold text-3xl">Travel Buddy</h1>
          <p className="text-white text-base my-4">Let’s start your journey with us, your dream will come true</p>
          <button className="bg-orangeButton p-3 text-white hover:opacity-80 active:opacity-60">Pesquisar agora</button>
        </div>
      </main>

      <section className="w-full">
        <div className="bg-white w-3/4 mx-auto px-6 py-2 z-20 relative -top-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <h2 className="text-black font-bold text-2xl text-center mb-4">Faça sua reserva!</h2>

          <div className="flex flex-col gap-3">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 items-center">
                  Lugar
                  <GoChevronDown />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Fortaleza
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Aracati
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>

            <button className="bg-orangeButton py-2 text-white hover:opacity-80 active:opacity-60">Procurar</button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-[#041562] font-bold text-2xl">Melhores Lugares para Visitar</h2>
          <p className="text-gray-600">Melhor lugar para ir na Indonesia</p>

          <div className="grid grid-cols-2 gap-3 mx-auto max-w-80p mt-6">
            <Image className="" src={placeImg1} alt='img-lugar' />
            <Image className="" src={placeImg2} alt='img-lugar' />
            <Image className="" src={placeImg3} alt='img-lugar' />
            <Image className="" src={placeImg4} alt='img-lugar' />
          </div>

          <button className="bg-orangeButton py-2 text-white p-3 mt-6 hover:opacity-80 active:opacity-60">Descubra mais</button>
        </div>

        <div className="mt-8 bg-[url(../assets/home-img-2.png)] bg-cover bg-center py-10 px-1 flex flex-row-reverse">
          <CarouselUpcoming />
        </div>

        <div className="py-10 flex justify-center">
          <div>
            <div className="mb-5">
              <h2 className="text-center text-2xl text-[#041562] font-bold">Top Hoteis e Restaurantes</h2>
              <p className="text-center text-[#626262] text-sm">The Best Hotel & Restorants in Indonesia</p>
            </div>

            <div className="grid grid-cols-2 gap-4 px-8">
              <div className=" flex flex-col gap-2">
                <Image src={imgHotel} alt='imagem do hotel'/>
                <p className="font-bold">Hotel Grand Indonesia</p>
                <div>
                  <p><span className="text-orange-500">4/5</span> (200 reviews)</p>
                  <p className="text-[#626262]">Jakarta, Indonesia</p>
                </div>
              </div>

              <div className=" flex flex-col gap-2">
                <Image src={imgHotel2} alt='imagem do hotel'/>
                <p className="font-bold">Hotel Grand Indonesia</p>
                <div>
                  <p><span className="text-orange-500">4/5</span> (200 reviews)</p>
                  <p className="text-[#626262]">Jakarta, Indonesia</p>
                </div>
              </div>

              <div className=" flex flex-col gap-2">
                <Image src={imgHotel3} alt='imagem do hotel'/>
                <p className="font-bold">Hotel Grand Indonesia</p>
                <div>
                  <p><span className="text-orange-500">4/5</span> (200 reviews)</p>
                  <p className="text-[#626262]">Jakarta, Indonesia</p>
                </div>
              </div>

              <div className=" flex flex-col gap-2">
                <Image src={imgHotel} alt='imagem do hotel'/>
                <p className="font-bold">Hotel Grand Indonesia</p>
                <div>
                  <p><span className="text-orange-500">4/5</span> (200 reviews)</p>
                  <p className="text-[#626262]">Jakarta, Indonesia</p>
                </div>
              </div>

            </div>

          </div>
      </div>

      <div className="p-8 bg-[#041562]">
        <CarouselEvaluation />
      </div>

      <div className="px-5 py-10">
        <div>
            <h2 className="text-[#041562] text-2xl font-bold text-center">Oferecemos os melhores serviços</h2>
            <p className="text-[#626262] text-center">The Best Service</p>

            <div className="flex justify-center gap-3 mt-5">
              <div>
                <Image src={serviceImg} alt='imagem do serviço de hotel'/>
                <p>Transporte</p>
                <span className="text-gray-500">All transportation cost we bear</span>
              </div>

              <div>
                <Image src={serviceImg2} alt='imagem do serviço de hotel'/>
                <p>Organização</p>
                <span className="text-gray-500">We offer the best guidence for you</span>
              </div>

              <div>
                <Image src={serviceImg3} alt='imagem do serviço de hotel'/>
                <p>Acomodação</p>
                <span className="text-gray-500">Luxarious and comfortable</span>
              </div>


            </div>
        </div>
      </div>

      
      
      </section>

      
    </div>
  );
}
