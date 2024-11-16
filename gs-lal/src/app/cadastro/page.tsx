// AQUI EU FIZ A MESMA COISA QUE FIZ NA PAGINA DE DOAÇÃO TEM O CODIGO QUE ACREDITO FUNCIONAR PARA API NO FINAL
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Cadastro() {
    const [formData, setFormData] = useState({
        nomeCondominio: "",
        cep: "",
        estado: "",
        cidade: "",
        bairro: "",
        complemento: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(""); // Estado para mensagem de sucesso
    const router = useRouter(); // Hook para redirecionamento

    // Função para lidar com mudanças nos campos do formulário
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Validação do formulário
    const validateForm = () => {
        const newErrors = {};
        if (!formData.nomeCondominio) newErrors.nomeCondominio = "Nome do condomínio é obrigatório.";
        if (!formData.cep) newErrors.cep = "CEP é obrigatório.";
        if (!formData.estado) newErrors.estado = "Estado é obrigatório.";
        if (!formData.cidade) newErrors.cidade = "Cidade é obrigatória.";
        if (!formData.bairro) newErrors.bairro = "Bairro é obrigatório.";
        if (!formData.email) newErrors.email = "E-mail é obrigatório.";
        if (!formData.senha) newErrors.senha = "Senha é obrigatória.";
        if (formData.senha !== formData.confirmarSenha) {
            newErrors.confirmarSenha = "As senhas não coincidem.";
        }
        return newErrors;
    };

    // Função chamada ao submeter o formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            // Armazenar as informações do usuário no localStorage (simulação de backend)
            localStorage.setItem('userEmail', formData.email);
            localStorage.setItem('userSenha', formData.senha);
            
            setSuccessMessage("Cadastro realizado com sucesso! Redirecionando para a página de login...");
            setTimeout(() => {
                router.push("/login"); // Redireciona para a página de login após 3 segundos
            }, 3000);
        }
    };

    return (
        <main className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
            <div className="mb-12">
                <h1 className="text-5xl font-bold text-center mb-8 text-[#97987E]">CADASTRO</h1>
            </div>

            {successMessage && ( // Exibe a mensagem de sucesso em uma caixa estilizada
                <div className="w-full max-w-[900px] p-4 mb-6 bg-[#e5e7eb] text-[#4a4a4a] rounded-lg shadow-md text-center">
                    <p className="font-semibold text-lg">{successMessage}</p>
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {[ // Mapeando os campos do formulário
                    { id: "nomeCondominio", label: "NOME DO CONDOMÍNIO" },
                    { id: "cep", label: "CEP" },
                    { id: "estado", label: "ESTADO" },
                    { id: "cidade", label: "CIDADE" },
                    { id: "bairro", label: "BAIRRO" },
                    { id: "complemento", label: "COMPLEMENTO" },
                    { id: "email", label: "EMAIL", type: "email" },
                    { id: "senha", label: "SENHA", type: "password" },
                    { id: "confirmarSenha", label: "CONFIRMAR SENHA", type: "password" },
                ].map(({ id, label, type = "text" }) => (
                    <div key={id} className="relative">
                        <label
                            htmlFor={id}
                            className="absolute top-[-23px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] whitespace-nowrap"
                        >
                            {label}
                        </label>
                        <input
                            id={id}
                            type={type}
                            value={formData[id]}
                            onChange={handleChange}
                            placeholder={label}
                            className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] placeholder-transparent focus:outline-none text-center"
                        />
                        {errors[id] && (
                            <p className="text-red-500 text-xs mt-1 text-center">{errors[id]}</p>
                        )}
                    </div>
                ))}

                <div className="flex justify-center items-center mt-8 col-span-full">
                    <button
                        type="submit"
                        className="w-[215px] h-[35px] bg-[#97987E] text-white text-lg font-semibold rounded-[15px] opacity-100 hover:bg-[#7a7a64] transition-colors font-roboto"
                    >
                        CADASTRAR
                    </button>
                </div>
            </form>
        </main>
    );
}



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// // Definindo o tipo TipoCadastro
// export type TipoCadastro = {
//   nomeCondominio: string;
//   cep: string;
//   estado: string;
//   cidade: string;
//   bairro: string;
//   complemento: string;
//   email: string;
//   senha: string;
//   confirmarSenha: string;
// };

// export default function Cadastro() {
//     const [formData, setFormData] = useState<TipoCadastro>({
//         nomeCondominio: "",
//         cep: "",
//         estado: "",
//         cidade: "",
//         bairro: "",
//         complemento: "",
//         email: "",
//         senha: "",
//         confirmarSenha: "",
//     });

//     const [errors, setErrors] = useState<any>({});
//     const [successMessage, setSuccessMessage] = useState(""); // Estado para mensagem de sucesso
//     const router = useRouter(); // Hook para redirecionamento

//     // Função para lidar com mudanças nos campos do formulário
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { id, value } = e.target;
//         setFormData({ ...formData, [id]: value });
//     };

//     // Validação do formulário
//     const validateForm = () => {
//         const newErrors: any = {};
//         if (!formData.nomeCondominio) newErrors.nomeCondominio = "Nome do condomínio é obrigatório.";
//         if (!formData.cep) newErrors.cep = "CEP é obrigatório.";
//         if (!formData.estado) newErrors.estado = "Estado é obrigatório.";
//         if (!formData.cidade) newErrors.cidade = "Cidade é obrigatória.";
//         if (!formData.bairro) newErrors.bairro = "Bairro é obrigatório.";
//         if (!formData.email) newErrors.email = "E-mail é obrigatório.";
//         if (!formData.senha) newErrors.senha = "Senha é obrigatória.";
//         if (formData.senha !== formData.confirmarSenha) {
//             newErrors.confirmarSenha = "As senhas não coincidem.";
//         }
//         return newErrors;
//     };

//     // Função chamada ao submeter o formulário
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const validationErrors = validateForm();
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//         } else {
//             setErrors({});
//             try {
//                 // Chamada à API para realizar o cadastro
//                 const response = await fetch("/api/cadastrar", { // URL relativa para a API
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(formData), // Usando formData diretamente
//                 });

//                 // Verifica a resposta da API
//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.message || "Erro ao cadastrar. Tente novamente.");
//                 }

//                 setSuccessMessage("Cadastro realizado com sucesso! Redirecionando para a página de login...");
//                 setTimeout(() => {
//                     router.push("/login"); // Redireciona para a página de login após 3 segundos
//                 }, 3000);
//             } catch (error: any) {
//                 setErrors({ apiError: error.message }); // Exibe erro caso a chamada falhe
//             }
//         }
//     };

//     return (
//         <main className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
//             <div className="mb-12">
//                 <h1 className="text-5xl font-bold text-center mb-8 text-[#97987E]">CADASTRO</h1>
//             </div>

//             {successMessage && ( // Exibe a mensagem de sucesso em uma caixa estilizada
//                 <div className="w-full max-w-[900px] p-4 mb-6 bg-[#e5e7eb] text-[#4a4a4a] rounded-lg shadow-md text-center">
//                     <p className="font-semibold text-lg">{successMessage}</p>
//                 </div>
//             )}

//             {errors.apiError && ( // Exibe mensagem de erro da API
//                 <div className="w-full max-w-[900px] p-4 mb-6 bg-red-100 text-red-700 rounded-lg shadow-md text-center">
//                     <p className="font-semibold text-lg">{errors.apiError}</p>
//                 </div>
//             )}

//             <form
//                 onSubmit={handleSubmit}
//                 className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//                 {[ // Mapeando os campos do formulário
//                     { id: "nomeCondominio", label: "NOME DO CONDOMÍNIO" },
//                     { id: "cep", label: "CEP" },
//                     { id: "estado", label: "ESTADO" },
//                     { id: "cidade", label: "CIDADE" },
//                     { id: "bairro", label: "BAIRRO" },
//                     { id: "complemento", label: "COMPLEMENTO" },
//                     { id: "email", label: "EMAIL", type: "email" },
//                     { id: "senha", label: "SENHA", type: "password" },
//                     { id: "confirmarSenha", label: "CONFIRMAR SENHA", type: "password" },
//                 ].map(({ id, label, type = "text" }) => (
//                     <div key={id} className="relative">
//                         <label
//                             htmlFor={id}
//                             className="absolute top-[-23px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] whitespace-nowrap"
//                         >
//                             {label}
//                         </label>
//                         <input
//                             id={id}
//                             type={type}
//                             value={formData[id as keyof TipoCadastro]} // Usando a tipagem correta aqui
//                             onChange={handleChange}
//                             placeholder={label}
//                             className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] placeholder-transparent focus:outline-none text-center"
//                         />
//                         {errors[id] && (
//                             <p className="text-red-500 text-xs mt-1 text-center">{errors[id]}</p>
//                         )}
//                     </div>
//                 ))}

//                 <div className="flex justify-center items-center mt-8 col-span-full">
//                     <button
//                         type="submit"
//                         className="w-[215px] h-[35px] bg-[#97987E] text-white text-lg font-semibold rounded-[15px] opacity-100 hover:bg-[#7a7a64] transition-colors font-roboto"
//                     >
//                         CADASTRAR
//                     </button>
//                 </div>
//             </form>
//         </main>
//     );
// }
