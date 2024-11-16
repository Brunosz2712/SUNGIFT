"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        senha: "",
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateLogin = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = "E-mail é obrigatório.";
        if (!formData.senha) newErrors.senha = "Senha é obrigatória.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateLogin();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});

            // Verificar se o e-mail e senha estão presentes no localStorage
            const storedEmail = localStorage.getItem('userEmail');
            const storedSenha = localStorage.getItem('userSenha');

            // Comparar e-mail e senha do login com os dados armazenados no localStorage
            if (formData.email === storedEmail && formData.senha === storedSenha) {
                setSuccessMessage("Login realizado com sucesso! Redirecionando para a Página Inicial");
                setTimeout(() => {
                    router.push("/"); // Redireciona para a página principal após 3 segundos
                }, 3000);
            } else {
                setErrors({ email: "E-mail ou senha incorretos." });
            }
        }
    };

    return (
        <main className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
            <div className="mb-12">
                <h1 className="text-5xl font-bold text-center mb-8 text-[#97987E]">ENTRAR</h1>
            </div>

            {successMessage && (
                <div className="w-full max-w-[543px] p-4 mb-6 bg-[#e5e7eb] text-[#4a4a4a] rounded-lg shadow-md text-center">
                    <p className="font-semibold text-lg">{successMessage}</p>
                </div>
            )}

            <div className="w-full max-w-[543px] space-y-8">
                <div className="relative mb-8">
                    <label htmlFor="email" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">EMAIL</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="EMAIL"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] opacity-100 placeholder-transparent focus:outline-none text-center"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 text-center">{errors.email}</p>}
                </div>

                <div className="relative mb-8">
                    <label htmlFor="senha" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">SENHA</label>
                    <input
                        id="senha"
                        type="password"
                        placeholder="SENHA"
                        value={formData.senha}
                        onChange={handleChange}
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] opacity-100 placeholder-transparent focus:outline-none text-center"
                    />
                    {errors.senha && <p className="text-red-500 text-xs mt-1 text-center">{errors.senha}</p>}
                </div>

                <div className="flex justify-center items-center">
                    <button
                        onClick={handleSubmit}
                        className="w-[215px] h-[35px] bg-[#97987E] text-white text-lg font-semibold rounded-[15px] opacity-100 hover:bg-[#7a7a64] transition-colors font-roboto"
                    >
                        ENTRAR
                    </button>
                </div>

                <div className="text-center mt-6">
                    <p className="text-[#505050]">
                        Não tem uma conta?{" "}
                        <Link href="/cadastro" className="text-[#97987E] font-semibold">Cadastre-se</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
