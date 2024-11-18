// LA NO FINAL DO CODIGO TEM MAIS COMENTADO, EU USEI O QUE O PROFESSOR PASSOU EM SALA DE AULA, POSSA SER QUE AJUDA VOCES JA CRIEI A PASTA API E A TYPES.TS VOU DEIXAR ALGUMAS COISAS COMENTADAS QUE ACHO QUE É ASSIM QUE TEM QUE SER FEITO

'use client'; // Marcação do componente como "use client" no Next.js

import { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { userAtom } from '@/atoms';

export default function Doacao() {
    const [user] = useAtom(userAtom)
    const router = useRouter()

    if (!user) {
      router.push("/login")
    } 
    
    const [doacoes, setDoacoes] = useState([]);
    const [material, setMaterial] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [showConfirm, setShowConfirm] = useState(false);
    const [doacaoToDelete, setDoacaoToDelete] = useState(null);
    const [editingDoacao, setEditingDoacao] = useState(null); // Estado para editar doações
    const [newMaterial, setNewMaterial] = useState(''); // Para armazenar material editado
    const [newQuantidade, setNewQuantidade] = useState(''); // Para armazenar quantidade editada

    const adicionarDoacao = () => {
        if (material && quantidade) {
            const novaDoacao = { id: Date.now(), material, quantidade: parseFloat(quantidade) };
            setDoacoes([...doacoes, novaDoacao]);
            setMaterial('');
            setQuantidade('');
        }
    };

    const alterarDoacao = (id) => {
        setDoacoes(doacoes.map(d => 
            d.id === id ? { ...d, material: newMaterial, quantidade: parseFloat(newQuantidade) } : d
        ));
        setEditingDoacao(null); // Finaliza a edição
    };

    const excluirDoacao = () => {
        setDoacoes(doacoes.filter(d => d.id !== doacaoToDelete));
        setShowConfirm(false);
    };

    const calcularQuantidadeTotal = () => {
        return doacoes.reduce((total, doacao) => total + doacao.quantidade, 0);
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-[#f4f4f4]">
            <div className="text-center w-full max-w-4xl">
                <h1 className="text-5xl font-bold text-[#97987E] mb-8">DOAÇÃO</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-[#505050] mb-4">MATERIAL</h2>
                    <select
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                        className="w-full max-w-[469.5px] h-[30.5px] bg-[#97987E66] text-[#505050] rounded-[15px] px-4 outline-none"
                    >
                        <option value="">Selecione um material</option>
                        <option value="Alumínio">Alumínio</option>
                        <option value="Vidro">Vidro</option>
                        <option value="Plástico">Plástico</option>
                        <option value="Cobre">Cobre</option>
                        <option value="Dispositivos Eletrônicos">Dispositivos Eletrônicos</option>
                    </select>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-[#505050] mb-4">QUANTIDADE</h2>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        placeholder="Digite a quantidade em KG (1 a 100)"
                        className="w-full max-w-[469.5px] h-[30.5px] bg-[#97987E66] text-[#505050] rounded-[15px] px-4 outline-none"
                    />
                </div>

                <div>
                    <button
                        onClick={adicionarDoacao}
                        className="w-full max-w-[193px] h-[35px] bg-[#97987E] text-[#FFFFFF] text-xs font-bold uppercase rounded-[15px] hover:bg-[#6f7060] transition duration-200"
                    >
                        Cadastrar
                    </button>
                </div>

                {/* Exibindo a quantidade acumulada */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-[#505050] mb-4">Quantidade Total Acumulada: {calcularQuantidadeTotal()} kg</h2>
                </div>

                {/* Tabela de doações */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-[#505050] mb-4">Doações Registradas</h2>
                    <table className="w-full table-auto border-collapse border border-[#97987E66]">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-[#505050]">Material</th>
                                <th className="px-4 py-2 text-[#505050]">Quantidade (kg)</th>
                                <th className="px-4 py-2 text-[#505050]">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doacoes.map((doacao) => (
                                <tr key={doacao.id} className="border-b border-[#97987E66]">
                                    <td className="px-4 py-2">
                                        {/* Se estiver editando, exibe um campo de input */}
                                        {editingDoacao === doacao.id ? (
                                            <select
                                                value={newMaterial}
                                                onChange={(e) => setNewMaterial(e.target.value)}
                                                className="w-full bg-[#97987E66] text-[#505050] rounded-[15px] px-4"
                                            >
                                                <option value="Alumínio">Alumínio</option>
                                                <option value="Vidro">Vidro</option>
                                                <option value="Plástico">Plástico</option>
                                                <option value="Cobre">Cobre</option>
                                                <option value="Dispositivos Eletrônicos">Dispositivos Eletrônicos</option>
                                            </select>
                                        ) : (
                                            doacao.material
                                        )}
                                    </td>
                                    <td className="px-4 py-2">
                                        {/* Se estiver editando, exibe um campo de input */}
                                        {editingDoacao === doacao.id ? (
                                            <input
                                                type="number"
                                                value={newQuantidade}
                                                onChange={(e) => setNewQuantidade(e.target.value)}
                                                className="w-full bg-[#97987E66] text-[#505050] rounded-[15px] px-4"
                                            />
                                        ) : (
                                            doacao.quantidade
                                        )}
                                    </td>
                                    <td className="px-4 py-2 flex justify-center items-center space-x-4">
                                        {editingDoacao === doacao.id ? (
                                            <button
                                                onClick={() => alterarDoacao(doacao.id)}
                                                className="bg-[#6f7060] text-white py-1 px-4 rounded-[15px] text-xs font-bold uppercase"
                                            >
                                                Salvar
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => setEditingDoacao(doacao.id)}
                                                className="text-[#97987E] hover:underline flex items-center space-x-2"
                                            >
                                                <PencilIcon className="h-5 w-5 text-[#97987E]" />
                                                <span>Alterar</span>
                                            </button>
                                        )}

                                        <button
                                            onClick={() => {
                                                setShowConfirm(true);
                                                setDoacaoToDelete(doacao.id);
                                            }}
                                            className="text-[#97987E] hover:underline flex items-center space-x-2"
                                        >
                                            <TrashIcon className="h-5 w-5 text-[#97987E]" />
                                            <span>Excluir</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal de exclusão */}
                {showConfirm && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
                        <div className="bg-white p-8 rounded-lg max-w-sm w-full">
                            <h3 className="text-xl mb-4">Tem certeza de que deseja excluir esta doação?</h3>
                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={() => setShowConfirm(false)}
                                    className="bg-[#97987E66] px-4 py-2 rounded-[15px] text-sm"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={excluirDoacao}
                                    className="bg-red-500 text-white px-4 py-2 rounded-[15px] text-sm"
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}


// 'use client';

// import { useState, useEffect } from 'react';
// import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
// import { TipoDoacao } from './types'; // Importe o tipo

// export default function Doacao() {
//     const [doacoes, setDoacoes] = useState<TipoDoacao[]>([]); // Define o estado com o tipo correto
//     const [material, setMaterial] = useState('');
//     const [quantidade, setQuantidade] = useState('');
//     const [showConfirm, setShowConfirm] = useState(false);
//     const [doacaoToDelete, setDoacaoToDelete] = useState<number | null>(null); // Tipo do ID da doação
//     const [editingDoacao, setEditingDoacao] = useState<number | null>(null); // Tipo do ID da doação
//     const [newMaterial, setNewMaterial] = useState('');
//     const [newQuantidade, setNewQuantidade] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');

//     useEffect(() => {
//         const chamadaApiJava = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/api/doacoes");
//                 if (!response.ok) {
//                     throw new Error('Erro ao buscar as doações: ' + response.statusText);
//                 }
//                 const data: TipoDoacao[] = await response.json(); // Define o tipo do dado
//                 setDoacoes(data);
//             } catch (error) {
//                 console.error('Erro na requisição:', error);
//                 setErrorMessage('Falha ao carregar doações');
//             }
//         };
//         chamadaApiJava();
//     }, []);

//     const adicionarDoacao = async () => {
//         if (material && quantidade) {
//             const novaDoacao: TipoDoacao = { 
//                 material, 
//                 quantidade: parseFloat(quantidade), 
//                 id: Date.now() // Supondo que o id será gerado no frontend para uma nova doação
//             };
//             setLoading(true);

//             try {
//                 const response = await fetch("http://localhost:5000/api/doacoes", {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify(novaDoacao),
//                 });

//                 if (response.ok) {
//                     const data: TipoDoacao = await response.json();
//                     setDoacoes([...doacoes, data]);
//                     setMaterial('');
//                     setQuantidade('');
//                     setErrorMessage('');
//                 } else {
//                     console.error('Erro ao adicionar doação:', response.statusText);
//                     setErrorMessage('Erro ao adicionar doação');
//                 }
//             } catch (error) {
//                 console.error('Erro ao enviar a doação:', error);
//                 setErrorMessage('Erro ao enviar a doação');
//             } finally {
//                 setLoading(false);
//             }
//         }
//     };

//     const alterarDoacao = async (id: number) => {
//         const updatedDoacao: TipoDoacao = { material: newMaterial, quantidade: parseFloat(newQuantidade), id };
//         setLoading(true);

//         try {
//             const response = await fetch(`http://localhost:5000/api/doacoes/${id}`, {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(updatedDoacao),
//             });

//             if (response.ok) {
//                 setDoacoes(doacoes.map(d => d.id === id ? { ...d, ...updatedDoacao } : d));
//                 setEditingDoacao(null);
//                 setNewMaterial('');
//                 setNewQuantidade('');
//             } else {
//                 console.error('Erro ao atualizar doação:', response.statusText);
//                 setErrorMessage('Erro ao atualizar doação');
//             }
//         } catch (error) {
//             console.error('Erro ao atualizar a doação:', error);
//             setErrorMessage('Erro ao atualizar doação');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const excluirDoacao = async () => {
//         setLoading(true);

//         try {
//             const response = await fetch(`http://localhost:5000/api/doacoes/${doacaoToDelete}`, { method: 'DELETE' });

//             if (response.ok) {
//                 setDoacoes(doacoes.filter(d => d.id !== doacaoToDelete));
//                 setShowConfirm(false);
//             } else {
//                 console.error('Erro ao excluir doação:', response.statusText);
//                 setErrorMessage('Erro ao excluir doação');
//             }
//         } catch (error) {
//             console.error('Erro ao excluir a doação:', error);
//             setErrorMessage('Erro ao excluir a doação');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const calcularQuantidadeTotal = () => {
//         return doacoes.reduce((total, doacao) => total + doacao.quantidade, 0);
//     };

//     return (
//         <main className="flex items-center justify-center min-h-screen bg-[#f4f4f4]">
//             <div className="text-center w-full max-w-4xl">
//                 <h1 className="text-5xl font-bold text-[#97987E] mb-8">DOAÇÃO</h1>

//                 <div className="mb-8">
//                     <h2 className="text-2xl font-semibold text-[#505050] mb-4">MATERIAL</h2>
//                     <select
//                         value={material}
//                         onChange={(e) => setMaterial(e.target.value)}
//                         className="w-full max-w-[469.5px] h-[30.5px] bg-[#97987E66] text-[#505050] rounded-[15px] px-4 outline-none"
//                     >
//                         <option value="">Selecione um material</option>
//                         <option value="Alumínio">Alumínio</option>
//                         <option value="Vidro">Vidro</option>
//                         <option value="Plástico">Plástico</option>
//                         <option value="Cobre">Cobre</option>
//                         <option value="Dispositivos Eletrônicos">Dispositivos Eletrônicos</option>
//                     </select>
//                 </div>

//                 <div className="mb-8">
//                     <h2 className="text-2xl font-semibold text-[#505050] mb-4">QUANTIDADE</h2>
//                     <input
//                         type="number"
//                         min="1"
//                         max="100"
//                         value={quantidade}
//                         onChange={(e) => setQuantidade(e.target.value)}
//                         placeholder="Digite a quantidade em KG (1 a 100)"
//                         className="w-full max-w-[469.5px] h-[30.5px] bg-[#97987E66] text-[#505050] rounded-[15px] px-4 outline-none"
//                     />
//                 </div>

//                 <div>
//                     <button
//                         onClick={adicionarDoacao}
//                         className="w-full max-w-[193px] h-[35px] bg-[#97987E] text-[#FFFFFF] text-xs font-bold uppercase rounded-[15px] hover:bg-[#6f7060] transition duration-200"
//                         disabled={loading}
//                     >
//                         {loading ? 'Cadastrando...' : 'Cadastrar'}
//                     </button>
//                 </div>

//                 {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

//                 <div className="mt-8">
//                     <h2 className="text-2xl font-semibold text-[#505050] mb-4">Quantidade Total Acumulada: {calcularQuantidadeTotal()} kg</h2>
//                 </div>

//                 <div className="mt-12">
//                     <h2 className="text-2xl font-semibold text-[#505050] mb-4">Doações Registradas</h2>
//                     <table className="w-full table-auto border-collapse border border-[#97987E66]">
//                         <thead>
//                             <tr>
//                                 <th className="px-4 py-2 text-[#505050]">Material</th>
//                                 <th className="px-4 py-2 text-[#505050]">Quantidade (kg)</th>
//                                 <th className="px-4 py-2 text-[#505050]">Ações</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {doacoes.map((doacao) => (
//                                 <tr key={doacao.id} className="border-b border-[#97987E66]">
//                                     <td className="px-4 py-2">
//                                         {editingDoacao === doacao.id ? (
//                                             <select
//                                                 value={newMaterial}
//                                                 onChange={(e) => setNewMaterial(e.target.value)}
//                                                 className="w-full bg-[#97987E66] text-[#505050] rounded-[15px] px-4"
//                                             >
//                                                 <option value="Alumínio">Alumínio</option>
//                                                 <option value="Vidro">Vidro</option>
//                                                 <option value="Plástico">Plástico</option>
//                                                 <option value="Cobre">Cobre</option>
//                                                 <option value="Dispositivos Eletrônicos">Dispositivos Eletrônicos</option>
//                                             </select>
//                                         ) : (
//                                             doacao.material
//                                         )}
//                                     </td>
//                                     <td className="px-4 py-2">
//                                         {editingDoacao === doacao.id ? (
//                                             <input
//                                                 type="number"
//                                                 min="1"
//                                                 max="100"
//                                                 value={newQuantidade}
//                                                 onChange={(e) => setNewQuantidade(e.target.value)}
//                                                 className="w-full bg-[#97987E66] text-[#505050] rounded-[15px] px-4"
//                                             />
//                                         ) : (
//                                             doacao.quantidade
//                                         )}
//                                     </td>
//                                     <td className="px-4 py-2">
//                                         {editingDoacao === doacao.id ? (
//                                             <button
//                                                 onClick={() => alterarDoacao(doacao.id)}
//                                                 className="text-green-600"
//                                             >
//                                                 Salvar
//                                             </button>
//                                         ) : (
//                                             <>
//                                                 <button
//                                                     onClick={() => {
//                                                         setEditingDoacao(doacao.id);
//                                                         setNewMaterial(doacao.material);
//                                                         setNewQuantidade(String(doacao.quantidade));
//                                                     }}
//                                                     className="text-blue-600 mr-2"
//                                                 >
//                                                     <PencilIcon className="h-5 w-5" />
//                                                 </button>
//                                                 <button
//                                                     onClick={() => {
//                                                         setShowConfirm(true);
//                                                         setDoacaoToDelete(doacao.id);
//                                                     }}
//                                                     className="text-red-600"
//                                                 >
//                                                     <TrashIcon className="h-5 w-5" />
//                                                 </button>
//                                             </>
//                                         )}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </main>
//     );
// }

