'use client';

import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { userAtom } from '@/atoms';
import type { Doacao } from '@/types';

export default function Doacao() {
    const [user] = useAtom(userAtom)
    const router = useRouter()
    const [doacao, setDoacao] = useState({
        ID_MATERIAIS: 0,
        NR_QUANTIDADE: 0,
        ID_CONDOMINIO: user?.ID_CONDOMINIO
    })
    const [DoacaoGet, setDoacaoGet] = useState<Doacao[]>([])
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setDoacao((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const chamadaApi = async () => {
        const response = await fetch(`http://localhost:8080/doacao/${user?.ID_CONDOMINIO}`)
        const data = await response.json()
        setDoacaoGet(data)
    }

    useEffect(() => {
        chamadaApi()
    }, [])

    const validateForm = () => {
        let newErrors: { [key: string]: string } = {};
        if (!doacao.ID_MATERIAIS) newErrors.ID_MATERIAIS = "O tipo de material é obrigatório.";
        if (!doacao.NR_QUANTIDADE) newErrors.NR_QUANTIDADE = "A quantidade é obrigatória.";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/doacao", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(doacao),
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar doacao. Tente novamente.");
            }

            setSuccessMessage(
              "Doacao cadastrada com sucesso!"
            )

        } catch (error) {
            console.error(error);
        }
    };

    if (!user) {
        router.push("/login")
    }

    return (
      <main className="flex items-center justify-center min-h-screen bg-[#f4f4f4] py-8">
        <div className="text-center w-full max-w-4xl items-center flex flex-col">
          <h1 className="text-5xl font-bold text-[#97987E] mb-8">DOAÇÃO</h1>
          {successMessage && (
            <div className="w-full max-w-[900px] p-4 mb-6 bg-[#48d9717a] text-[#4a4a4a] rounded-lg shadow-md text-center">
              <p className="font-semibold text-lg">{successMessage}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#505050] mb-4">
                MATERIAL
              </h2>
              <select
                value={doacao.ID_MATERIAIS}
                name="ID_MATERIAIS"
                onChange={handleChange}
                className="w-full max-w-[469.5px] h-[30.5px] bg-[#97987E66] text-[#505050] rounded-[15px] px-4 outline-none"
              >
                <option value="">Selecione um material</option>
                <option value={2}>Alumínio</option>
                <option value={3}>Vidro</option>
                <option value={1}>Plástico</option>
                <option value={4}>Cobre</option>
                <option value={5}>Dispositivos Eletrônicos</option>
              </select>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#505050] mb-4">
                QUANTIDADE
              </h2>
              <input
                type="number"
                name="NR_QUANTIDADE"
                min="1"
                max="100"
                value={doacao.NR_QUANTIDADE}
                onChange={handleChange}
                placeholder="Digite a quantidade em KG (1 a 100)"
                className="w-full max-w-[469.5px] h-[30.5px] bg-[#97987E66] text-[#505050] rounded-[15px] px-4 outline-none mb-4"
              />
              <p className="text-sm text-[#707070] leading-relaxed text-justify w-full max-w-[469.5px]">
                Até <strong>10 kg</strong> ganhe <strong>5%</strong> de
                desconto, de <strong>11 a 20 kg</strong> ganhe{" "}
                <strong>10%</strong>, de <strong>21 a 30 kg</strong> ganhe{" "}
                <strong>15%</strong> e acima de <strong>30 kg</strong> ganhe{" "}
                <strong>20%</strong>. O valor máximo de desconto é{" "}
                <strong>20%</strong>!
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="w-full max-w-[193px] h-[35px] bg-[#97987E] text-[#FFFFFF] text-xs font-bold uppercase rounded-[15px] hover:bg-[#6f7060] transition duration-200"
              >
                Cadastrar
              </button>
            </div>
          </form>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#505050] mb-4">
              Quantidade Total Acumulada:{" "}
              {DoacaoGet.reduce((total, d) => total + d.NR_QUANTIDADE, 0)} kg
            </h2>
          </div>

          {/* Tabela de doações */}
          <div className="mt-12 w-full">
            <h2 className="text-2xl font-semibold text-[#505050] mb-4">
              Doações Registradas
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-[#97987E66]">
                <thead>
                  <tr className="bg-[#f4f4f4]">
                    <th className="px-4 py-2 text-[#505050] text-center whitespace-nowrap">
                      Material
                    </th>
                    <th className="px-4 py-2 text-[#505050] text-center whitespace-nowrap">
                      Quantidade (kg)
                    </th>
                    <th className="px-4 py-2 text-[#505050] text-center whitespace-nowrap">
                      Descontos
                    </th>
                    <th className="px-4 py-2 text-[#505050] text-center whitespace-nowrap">
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(DoacaoGet) && DoacaoGet.length > 0 ? (
                    DoacaoGet.map((d) => (
                      <tr
                        key={d.ID_DOACOES}
                        className="border-b border-[#97987E66] hover:bg-[#f9f9f9]"
                      >
                        <td className="px-4 py-2 bg-[#97987E66] text-[#505050] rounded-l-[15px]">
                          {{
                            1: "Plástico",
                            2: "Alumínio",
                            3: "Vidro",
                            4: "Cobre",
                            5: "Dispositivos Eletrônicos",
                          }[d.ID_MATERIAIS] || d.ID_MATERIAIS}
                        </td>
                        <td className="px-4 py-2 bg-[#97987E66] text-[#505050]">
                          {d.NR_QUANTIDADE} kg
                        </td>
                        <td className="px-4 py-2 bg-[#97987E66] text-[#505050]">
                          {d.NR_DESCONTOS}%
                        </td>
                        <td className="px-4 py-2 bg-[#97987E66] text-[#505050] rounded-r-[15px]">
                          {d.DT_DOACAO}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        className="text-center text-[#505050] py-4"
                      >
                        Nenhuma doação registrada.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    )
}