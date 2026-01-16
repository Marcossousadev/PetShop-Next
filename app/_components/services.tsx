"use client"

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } 
from "lucide-react";
import {WhatsappLogoIcon} from "@phosphor-icons/react/dist/ssr";


const services = [
  {
    title: "Banho & Tosa",
    description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
    linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
  },
  {
    title: "Consulta Veterinária",
    description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: <Syringe />,
    linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
  },
  {
    title: "Táxi Pet",
    description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
  },
  {
    title: "Hotel para pets",
    description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
  },
]

export function Services() {

    const [ emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints:{
            '(min-width: 768px)': {
                slidesToScroll: 3,
            },
        }
    });

    function scroolPrev(){
        emblaApi?.scrollPrev();
    }
    function scroolNext(){
        emblaApi?.scrollNext();
    }
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12" data-aos="fade-right">
                        Serviços
                    </h2>
                    <div className="relative">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {services.map((item, index) => (
                                        <div key={index}  data-aos="fade-down" data-aos-delay="500" className="flex-[0_0_100%] 
                                        min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                            <article className="bg-[#1e293b]
                                             text-white rounded-2xl p-6 
                                            space-y-4 h-full flex flex-col gap-2">
                                                <div className="flex-1 flex items-start justify-between">
                                                    <div className="flex gap-3">
                                                        <span className="text-3xl">{item.icon}</span>
                                                        <div>
                                                        <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                        <p className="text-gray-400 select-none">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                               <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                                 <div className="flex items-center gap-2 text-sm">
                                                    <Clock className="w-4 h-4"/>
                                                    <span>{item.duration}</span>
                                                </div>

                                                <a href="#" target="_blank" className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300">
                                                    <WhatsappLogoIcon className="w-5 h-5"/>
                                                    Entrar em contato
                                                </a>
                                               </div>
                                            </article>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <button onClick={scroolPrev} className="bg-white rounded-full flex items-center justify-center shadow-lg w-10 h-10 absolute left-3
                        -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                            <ChevronLeft 
                            className="w-6 h-6 text-gray-600"/>
                        </button>
                        <button onClick={scroolNext} className="bg-white rounded-full flex items-center justify-center shadow-lg w-10 h-10 absolute -right-6
                        -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                            <ChevronRight 
                            className="w-6 h-6 text-gray-600"/>
                        </button>
                    </div>
            </div>
        </section>
    )
}