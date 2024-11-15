"use client";
import Link from "next/link";

export default function Menu() {
    return (
        <div className="flex justify-center gap-4 p-4 mt-20">
            <Link href="/" className="w-[120px] h-[35px] bg-[#97987E] text-white text-xs uppercase font-bold flex flex-col items-center justify-center rounded-[20px] hover:bg-[#6f7060] transition duration-200">
                Pagina Inicial
            </Link>
            <Link href="/login" className="w-[120px] h-[35px] bg-[#97987E] text-white text-xs uppercase font-bold flex items-center justify-center rounded-[20px] hover:bg-[#6f7060] transition duration-200">
                Entrar
            </Link>
            <Link href="/workshops" className="w-[120px] h-[35px] bg-[#97987E] text-white text-xs uppercase font-bold flex items-center justify-center rounded-[20px] hover:bg-[#6f7060] transition duration-200">
                Workshops
            </Link>
            <Link href="/placas_solares" className="w-[120px] h-[35px] bg-[#97987E] text-white text-xs uppercase font-bold flex flex-col items-center justify-center rounded-[20px] hover:bg-[#6f7060] transition duration-200">
                Placa Solares
            </Link>
            <Link href="/integrantes" className="w-[120px] h-[35px] bg-[#97987E] text-white text-xs uppercase font-bold flex flex-col items-center justify-center rounded-[20px] hover:bg-[#6f7060] transition duration-200">
                Integrantes
            </Link>
        </div>
    );
}
