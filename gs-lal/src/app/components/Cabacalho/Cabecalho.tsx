"use client"
import Image from "next/image"
import cabecalho from "@/public/img/img-cabecalho.png"
import Menu from "../Menu/Menu"
import { userAtom } from "@/atoms"
import { useAtom } from "jotai"

export default function Cabecalho() {
  const [user] = useAtom(userAtom)
  return (
    <header className="flex items-center justify-evenly flex-col w-full h-[50vh] md:h-[40vh] bg-black overflow-hidden relative">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        <Image
          src={cabecalho}
          alt="Cabeçalho-img"
          objectFit="cover"
          fill
          priority
        />
      </div>

      {/* Conteúdo centralizado */}
      <div className="z-10 flex flex-col items-center text-white text-center">
        {/* Título */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">SUNGIFT</h1>

        {/* Mensagem Condicional */}
        {user ? (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold mt-4">
              Bem-vindo, {user.NM_CONDOMINIO}
            </h2>
          </>
        ) : (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold mt-4">
              Bem-vindo ao SUNGIFT!
            </h2>
            <p className="text-sm sm:text-base">
              Faça login para acessar sua conta.
            </p>
          </>
        )}
      </div>

      {/* Menu de navegação */}
      <div className="z-10 mt-4">
        <Menu />
      </div>
    </header>
  )

}
