"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Condominio } from "@/types";

export default function Cadastro() {
    const [Condominio, setCondominio] = useState<Condominio>({
        ID_CONDOMINIO: 0,
        NM_CONDOMINIO: "",
        NR_CEP: "",
        NM_BAIRRO: "",
        NM_ESTADO: "",
        NM_CIDADE: "",
        DS_COMPLEMENTO: "",
        DS_SENHA: "",
        NM_LOGRADOURO: "",
        NM_EMAIL: ""
    })

    const [confirmarSenha, setConfirmarSenha] = useState("")
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [successMessage, setSuccessMessage] = useState("");
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        if (id === "confirmarSenha") {
        setConfirmarSenha(value);
        }
        else {setCondominio((prev) => ({
          ...prev,
          [id]: value,
        }))
        }
    };

    const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!Condominio.NM_CONDOMINIO) newErrors.NM_CONDOMINIO = "Nome do condomínio é obrigatório.";
    if (!Condominio.NR_CEP) newErrors.NR_CEP = "CEP é obrigatório.";
    if (!Condominio.NM_ESTADO) newErrors.NM_ESTADO = "Estado é obrigatório.";
    if (!Condominio.NM_CIDADE) newErrors.NM_CIDADE = "Cidade é obrigatória.";
    if (!Condominio.NM_BAIRRO) newErrors.NM_BAIRRO = "Bairro é obrigatório.";
    if (!Condominio.NM_EMAIL) newErrors.NM_EMAIL = "E-mail é obrigatório.";
    if (!Condominio.DS_SENHA) newErrors.DS_SENHA = "Senha é obrigatória.";
    if (Condominio.DS_SENHA !== confirmarSenha) {
        newErrors.confirmarSenha = "As senhas não coincidem.";
    }
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
        const response = await fetch("http://localhost:8080/condominios", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Condominio),
        })

        if (!response.ok) {
            throw new Error("Erro ao cadastrar. Tente novamente.");
        }

        setCondominio({
            ID_CONDOMINIO: 0,
            NM_CONDOMINIO: "",
            NR_CEP: "",
            NM_BAIRRO: "",
            NM_ESTADO: "",
            NM_CIDADE: "",
            DS_COMPLEMENTO: "",
            DS_SENHA: "",
            NM_LOGRADOURO: "",
            NM_EMAIL: "",
        });

        setSuccessMessage("Cadastro realizado com sucesso! Redirecionando para a página de login...");
        setTimeout(() => {
            router.push("/login");
        }, 3000);
    } catch (error: any) {
        setErrors({ apiError: error.message });
    }
};


    return (
      <main className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-center mb-8 text-[#97987E]">
            CADASTRO
          </h1>
        </div>

        {successMessage && (
          <div className="w-full max-w-[900px] p-4 mb-6 bg-[#e5e7eb] text-[#4a4a4a] rounded-lg shadow-md text-center">
            <p className="font-semibold text-lg">{successMessage}</p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { id: "NM_CONDOMINIO", label: "NOME DO CONDOMÍNIO" },
            { id: "NR_CEP", label: "CEP" },
            { id: "NM_ESTADO", label: "ESTADO" },
            { id: "NM_CIDADE", label: "CIDADE" },
            { id: "NM_BAIRRO", label: "BAIRRO" },
            { id: "DS_COMPLEMENTO", label: "COMPLEMENTO" },
            { id: "NM_EMAIL", label: "EMAIL", type: "email" },
            { id: "DS_SENHA", label: "SENHA", type: "password" },
            { id: "confirmarSenha", label: "CONFIRMAR SENHA", type: "password",
            },
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
                value={id === "confirmarSenha" ? confirmarSenha : Condominio[id as keyof Condominio]}
                onChange={handleChange}
                placeholder={label}
                className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] placeholder-transparent focus:outline-none text-center"
              />
              {errors[id] && (
                <p className="text-red-500 text-xs mt-1 text-center">
                  {errors[id]}
                </p>
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
    )
}