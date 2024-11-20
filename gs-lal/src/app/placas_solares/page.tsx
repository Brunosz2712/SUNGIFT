"use client"
import { useRouter } from "next/navigation"
import { userAtom } from "@/atoms"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { Doacao, Produtos } from "@/types"
import { InfoCircleOutlined} from "@ant-design/icons"

export default function PlacasSolares() {
  const [user] = useAtom(userAtom)
  const router = useRouter()
  const [doacao, setDoacao] = useState<Doacao[]>([])
  const [produtos, setProdutos] = useState<Produtos[]>([])
  const descontoTotal = doacao.reduce((total, d) => total + d.NR_DESCONTOS, 0)

  if (!user) {
    const volta = setTimeout(() => {
      router.push("/login")
    }, 4000)
    return (
      <>
        <main className="min-h-screen flex justify-center flex-col items-center">
          <div className=" bg-[#97987e7e] shadow-2xl flex flex-col items-center rounded-lg p-10">
            <h1 className="font-bold flex gap-2 ">
              <InfoCircleOutlined />
              401: Login necessário
            </h1>
            <p>
              Redirecionando para a página de login...
            </p>
          </div>
        </main>
        {volta}
      </>
    )
  } else {
    const chamadaApiDoacao = async () => {
      const response = await fetch(
        `http://localhost:8080/doacao/${user?.ID_CONDOMINIO}`
      )
      const data = await response.json()
      setDoacao(data)
    }

    const chamadaApiProdutos = async () => {
      const response = await fetch(`http://localhost:8080/produtos`)
      const data = await response.json()
      setProdutos(data)
    }

    useEffect(() => {
      chamadaApiDoacao()
      chamadaApiProdutos()
    }, [])

    return (
      <main className="flex flex-col items-center justify-start min-h-screen bg-[#f4f4f4] py-8 px-4">
        {/* Exibição do desconto total */}
        <div className="text-2xl font-semibold text-[#505050] mb-6">
          Total de Descontos Acumulados: {descontoTotal}%
        </div>

        {/* Exibição de produtos */}
        <section className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-[#505050] mb-4">
            Lista de Produtos
          </h2>
          <div className="grid justify-start gap-4 md:grid-cols-3 grid-cols-1">
            {Array.isArray(produtos) && produtos.length > 0 ? (
              produtos.map((produto) => {
                const semEstoque = produto.NR_QUANTIDADE <= 0
                const comDesconto = descontoTotal > 0
                const precoComDesconto = comDesconto
                  ? (
                      produto.NR_PRECO -
                      (produto.NR_PRECO * descontoTotal) / 100
                    ).toFixed(2)
                  : null

                return (
                  <div
                    key={produto.ID_PRODUTOS}
                    className={`p-4 mb-4 rounded-lg shadow-md ${
                      semEstoque
                        ? "bg-gray-300 text-black"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    <h3 className="font-semibold text-lg">
                      {produto.NM_PRODUTO}
                    </h3>
                    <p className="text-sm">{produto.DS_PRODUTO}</p>
                    <p className="text-sm">
                      Estoque:{" "}
                      {semEstoque ? (
                        <span className="text-red-500 font-bold">
                          Sem estoque
                        </span>
                      ) : (
                        produto.NR_QUANTIDADE
                      )}
                    </p>
                    <p className="text-sm">
                      Preço:{" "}
                      {comDesconto ? (
                        <span className="text-green-500">
                          <span className="line-through text-red-500 mr-2">
                            R$ {produto.NR_PRECO.toFixed(2)}
                          </span>
                          R$ {precoComDesconto}
                        </span>
                      ) : (
                        `R$ ${produto.NR_PRECO.toFixed(2)}`
                      )}
                    </p>
                  </div>
                )
              })
            ) : (
              <p className="text-[#707070]">Nenhum produto encontrado.</p>
            )}
          </div>
        </section>
      </main>
    )
  }
}
