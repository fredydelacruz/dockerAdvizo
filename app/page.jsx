import Mision from "./reviews/Mision";
import Projects from "./reviews/projects";
import Contacto from "./reviews/Contacto";


const classBkx =
    "bg-contain bg-local bg-center bg-no-repeat xl:py-48 md:py-24 py-16";

export const metadata = {
  title: {
    default: 'TechAdvizo',
    template: '%s | TechAdvizo'
  },
  description: "TechAdvizo"
}

export default function MainAdvizo() {
    return (
        <main>
            <div className="bg-black bg-cover bg-local">
              <Contacto />

            </div>
    
            <div
                className={`bg-[url(../public/background/adviso_bg_mobile.png)] 
                    bg-cover 
                    bg-local 
                    bg-center 
                    bg-no-repeat
                    h-80
                    sm:bg-[url(../public/background/adviso_bg.png)]
                    `}
            >
                {/*<div
                    className={`container mx-auto snap-center px-5 py-10
                        text-center text-green-100
                        md:px-10 md:py-20
                        xl:px-52 xl:py-72`}
                >
                    <HomePage />
                </div>*/}
            </div>
            
            <div className="bg-black bg-cover bg-local">
                <Mision />
            </div>

            <div className="relative">
                <div
                    className={` bg-[url('../public/background/projects.png')] bg-cover bg-local bg-center bg-no-repeat`}
                >
                    <Projects />
                </div>
                <div
                    className={`bg-black 
                py-16
                md:py-16
                xl:py-36
                `}
                ></div>
                <div
                    className={`absolute inset-x-0 bottom-0  h-32  bg-[url('../public/background/back2.png')] bg-contain bg-local 
                    bg-center bg-no-repeat py-24
                    md:h-56 md:bg-contain md:py-10
                    xl:h-96 xl:bg-auto xl:py-28
                    `}
                ></div>
            </div>

            <div className="bg-black">
                <div
                    className={`pt-0 text-center text-xl 
                font-bold text-green-100
                md:pt-20 md:text-3xl
                xl:pt-20 xl:text-6xl
                `}
                >
                    Nuestros Logros Tecnológicos Más Recientes
                </div>
                <div
                    className={`px-10 py-1 text-center  
                text-xs font-bold text-green-100
                md:px-36 md:py-5 md:text-lg
                xl:px-96 xl:py-5 xl:text-2xl
                `}
                >
                    Navegamos la complejidad tecnológica para potenciar su productividad.
                    Soluciones automatizadas que generan ganancias y ahorros.
                    Simplificamos su éxito empresarial
                </div>
                <div className="flex">
                    <div
                        className={`flex-auto bg-[url('../public/background/bk1.png')] ${classBkx}`}
                    ></div>
                    <div
                        className={`flex-auto bg-[url('../public/background/bk2.png')] ${classBkx}`}
                    ></div>
                    <div
                        className={`flex-auto bg-[url('../public/background/bk3.png')] ${classBkx}`}
                    ></div>
                    <div
                        className={`flex-auto bg-[url('../public/background/bk4.png')] ${classBkx}`}
                    ></div>
                </div>
            </div>
            
        </main>
    );
}