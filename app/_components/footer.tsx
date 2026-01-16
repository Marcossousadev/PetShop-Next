import royal from "../../public/royal.png";
import golden from "../../public/golden.png";
import primier from "../../public/primier.png";
import natural from "../../public/natural.png";
import whiskas from "../../public/whiskas.png";
import Image from "next/image";
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon  } from "@phosphor-icons/react/dist/ssr";
const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]
export function Footer(){
    return (
        <footer className="bg-[#E84C3D] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center">Nossos Parceiros</h4>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div key={index} data-aos="fade-right" data-aos-delay="300" className="bg-white p-4 rounded-lg flex items-center justify-center">
                                <Image 
                                 src={item.logo}
                                 alt={item.name}
                                 width={100}
                                 height={50}
                                 quality={100}
                                 style={{
                                    width: 'auto',
                                    height: 'auto',
                                 }}
                                 className="object-contain"
                                 />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-2xl font-semibold mb-2" data-aos="fade-right" data-aos-delay="500">Pet Shop</h3>
                        <p className="mb-4" data-aos="fade-right" data-aos-delay="500">Cuidando do seu melhor amigo com dedicação e carinho.</p>
                        <a href="#" data-aos="fade-right" data-aos-delay="500"
                        className="bg-green-500 px-4 py-2 rounded-md"
                        >
                        Contanto via Whatsapp
                        </a>
                    </div>
                     <div data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-2xl font-semibold mb-2" data-aos="fade-right" data-aos-delay="500">Contatos</h3>
                        <p data-aos="fade-right" data-aos-delay="500">Email: shoppet@gmail.com</p>
                        <p data-aos="fade-right" data-aos-delay="500">Telefone: (11) 9999-9999</p>
                        <p data-aos="fade-right" data-aos-delay="500">Endereço: Rua dos Pets, 123 - São Paulo, SP</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-2xl font-semibold mb-2" data-aos="fade-right" data-aos-delay="500">Redes Sociais</h3>
                        <div className="flex gap-4">
                            <a href="#" target="_blank" data-aos="fade-up" data-aos-delay="300">
                                <FacebookLogoIcon className="w-8 h-8" data-aos="fade-right" data-aos-delay="500"/>
                            </a>
                             <a href="#" target="_blank">
                                <InstagramLogoIcon className="w-8 h-8" data-aos="fade-right" data-aos-delay="500"/>
                            </a>
                             <a href="#" target="_blank">
                                <YoutubeLogoIcon className="w-8 h-8" data-aos="fade-right" data-aos-delay="500"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}