import Image from 'next/image';
import cabecalho from '@/public/img/img-cabecalho.png';
import Menu from '../Menu/Menu';

export default function Cabecalho() {
    return (
        <header className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
            
            <div className="absolute inset-0">
                <Image
                    src={cabecalho}
                    alt="Cabeçalho-img"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>
            
            
            <h1 className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl font-bold z-10">
                LIGHT AND LIFE
            </h1>

            
            <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Menu />
            </div>
        </header>
    );
}
