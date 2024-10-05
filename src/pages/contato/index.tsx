import { PageMain } from "@/components/pageMain";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contato() {
    return (
        <div className="w-full">
            <main className="w-full">
                <PageMain pageName="Contato" pageInfo="Críticas e recomendações para nós" />
            </main>

            <section className="w-full py-12 flex flex-col items-center">
                <div className="w-full flex justify-center items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.542833604306!2d106.89078016483613!3d-6.245841026845495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d3f1742e881%3A0x33ca5e7800959f45!2sTravelBuddies!5e0!3m2!1spt-BR!2sbr!4v1728152947414!5m2!1spt-BR!2sbr" width="80%" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="w-80p mt-10">
                    <h2 className="text-[#041562] text-3xl mb-5">Entre em contato</h2>

                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/2">

                            <div className="flex flex-col gap-5">
                                <textarea placeholder="Digite sua mensagem" className="outline-none border border-gray-500 resize-none w-full h-20 p-2"></textarea>

                                <div className="grid grid-cols-2 gap-4">
                                    <input placeholder="Digite seu nome" type="text" className="border border-gray-500 outline-none p-2" />
                                    <input placeholder="Digite seu e-mail" type="text" className="border border-gray-500 outline-none p-2" />
                                </div>

                                <input placeholder="Digite seu assunto" type="text" className="border border-gray-500 outline-none p-2" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex gap-3 items-center">
                                <FaPhoneAlt size={25} />
                                <div>
                                    <p className="font-bold">(024) 123981240</p>
                                    <p className="text-gray-600">Seg a Sex 9h às 18h</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <MdEmail size={25}/>
                                <div>
                                    <p className="font-bold">TravelBuddy@gmail.com</p>
                                    <p className="text-gray-600">Envie-nos sua dúvida a qualquer momento!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="bg-orangeButton py-3 px-5 mt-5 text-white hover:opacity-80 active:opacity-60">Enviar mensagem</button>
                </div>
            </section>


        </div>
    )
}