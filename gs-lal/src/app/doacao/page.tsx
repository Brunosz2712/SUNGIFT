'use client';

import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { userAtom } from '@/atoms';
import type { Doacao } from '@/types';

export default function Doacao() {
    const [user] = useAtom(userAtom)
    const router = useRouter()
    const [teste, setTeste] = useState({
        ID_MATERIAIS: 0,
        NR_QUANTIDADE: 0,
        ID_CONDOMINIO: user?.ID_CONDOMINIO
    })
    const [DoacaoGet, setDoacaoGet] = useState<Doacao[]>([])
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTeste((prev) => ({
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
        if (!teste.ID_MATERIAIS) newErrors.ID_MATERIAIS = "O tipo de material é obrigatório.";
        if (!teste.NR_QUANTIDADE) newErrors.NR_QUANTIDADE = "A quantidade é obrigatória.";
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
                body: JSON.stringify(teste),
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar doacao. Tente novamente.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (!user) {
        router.push("/login")
    }


    // function calcularQuantidadeTotal(): import("react").ReactNode {
    //     throw new Error('Function not implemented.');
    // }

    return (
        <main className="flex items-center justify-center min-h-screen bg-[#f4f4f4]">
            <div className="text-center w-full max-w-4xl">
                <h1 className="text-5xl font-bold text-[#97987E] mb-8">DOAÇÃO</h1>
                {successMessage && (
                    <div className="w-full max-w-[900px] p-4 mb-6 bg-[#48d9717a] text-[#4a4a4a] rounded-lg shadow-md text-center">
                        <p className="font-semibold text-lg">{successMessage}</p>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#505050] mb-4">MATERIAL</h2>
                        <select
                            value={teste.ID_MATERIAIS}
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
                        <h2 className="text-2xl font-semibold text-[#505050] mb-4">QUANTIDADE</h2>
                        <input
                            type="number"
                            name="NR_QUANTIDADE"
                            min="1"
                            max="100"
                            value={teste.NR_QUANTIDADE}
                            onChange={handleChange}
                            placeholder="Digite a quantidade em KG (1 a 100)"
                            className="w-full max-w-[469.5px] h-[30.5px] bg-[#97987E66] text-[#505050] rounded-[15px] px-4 outline-none"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full max-w-[193px] h-[35px] bg-[#97987E] text-[#FFFFFF] text-xs font-bold uppercase rounded-[15px] hover:bg-[#6f7060] transition duration-200">
                            Cadastrar
                        </button>
                    </div>
                </form>
                {/* Exibindo a quantidade acumulada
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-[#505050] mb-4">Quantidade Total Acumulada: {calcularQuantidadeTotal()} kg</h2>
                </div> */}

                {/* Tabela de doações */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-[#505050] mb-4">Doações Registradas</h2>
                    <table className="w-full table-auto border-collapse border border-[#97987E66]">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-[#505050]">Material</th>
                                <th className="px-4 py-2 text-[#505050]">Quantidade (kg)</th>
                                <th className="px-4 py-2 text-[#505050]">Descontos</th>
                                <th className="px-4 py-2 text-[#505050]">Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(DoacaoGet) && DoacaoGet.length > 0 ? (
                                DoacaoGet.map((d) => (
                                    <tr key={d.ID_DOACOES} className="border-b border-[#97987E66]">
                                        <td className='"w-full bg-[#97987E66] text-[#505050] rounded-[15px] px-4'>{d.ID_MATERIAIS}</td>
                                        <td className='"w-full bg-[#97987E66] text-[#505050] rounded-[15px] px-4'>{d.NR_QUANTIDADE}</td>
                                        <td className='"w-full bg-[#97987E66] text-[#505050] rounded-[15px] px-4'>{d.NR_DESCONTOS}</td>
                                        <td className='"w-full bg-[#97987E66] text-[#505050] rounded-[15px] px-4'>{d.DT_DOACAO}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="text-center text-[#505050]">
                                        Nenhuma doação registrada.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}



// {/* <td className="px-4 py-2">
// {/* Se estiver editando, exibe um campo de input */}
// {editingDoacao === doacao.id ? (
//     <select
//         value={newMaterial}
//         onChange={(e) => setNewMaterial(e.target.value)}
//         className="w-full bg-[#97987E66] text-[#505050] rounded-[15px] px-4"
//     >
//         <option value="Alumínio">Alumínio</option>
//         <option value="Vidro">Vidro</option>
//         <option value="Plástico">Plástico</option>
//         <option value="Cobre">Cobre</option>
//         <option value="Dispositivos Eletrônicos">Dispositivos Eletrônicos</option>
//     </select>
// ) : (
//     doacao.material
// )}
// </td>
// <td className="px-4 py-2">
// {/* Se estiver editando, exibe um campo de input */}
// {editingDoacao === doacao.id ? (
//     <input
//         type="number"
//         value={newQuantidade}
//         onChange={(e) => setNewQuantidade(e.target.value)}
//         className="w-full bg-[#97987E66] text-[#505050] rounded-[15px] px-4"
//     />
// ) : (
//     doacao.quantidade
// )}
// </td>
// <td className="px-4 py-2 flex justify-center items-center space-x-4">
// {editingDoacao === doacao.id ? (
//     <button
//         onClick={() => alterarDoacao(doacao.id)}
//         className="bg-[#6f7060] text-white py-1 px-4 rounded-[15px] text-xs font-bold uppercase"
//     >
//         Salvar
//     </button>
// ) : (
//     <button
//         onClick={() => setEditingDoacao(doacao.id)}
//         className="text-[#97987E] hover:underline flex items-center space-x-2"
//     >
//         <PencilIcon className="h-5 w-5 text-[#97987E]" />
//         <span>Alterar</span>
//     </button>
// )}

// <button
//     onClick={() => {
//         setShowConfirm(true);
//         setDoacaoToDelete(doacao.id);
//     }}
//     className="text-[#97987E] hover:underline flex items-center space-x-2"
// >
//     <TrashIcon className="h-5 w-5 text-[#97987E]" />
//     <span>Excluir</span>
// </button>
// </td> */}



//  {/* Modal de exclusão */}
//  {showConfirm && (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
//         <div className="bg-white p-8 rounded-lg max-w-sm w-full">
//             <h3 className="text-xl mb-4">Tem certeza de que deseja excluir esta doação?</h3>
//             <div className="flex justify-end space-x-4">
//                 <button
//                     onClick={() => setShowConfirm(false)}
//                     className="bg-[#97987E66] px-4 py-2 rounded-[15px] text-sm"
//                 >
//                     Cancelar
//                 </button>
//                 <button
//                     onClick={excluirDoacao}
//                     className="bg-red-500 text-white px-4 py-2 rounded-[15px] text-sm"
//                 >
//                     Excluir
//                 </button>
//             </div>
//         </div>
//     </div>
// )}