'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { userAtom } from '@/atoms'
import { useSetAtom } from 'jotai'
import Link from 'next/link'

export default function Login() {
  const [formData, setFormData] = useState({
    NM_EMAIL: '',
    DS_SENHA: '',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [successMessage, setSuccessMessage] = useState('')
  const setUser = useSetAtom(userAtom)
  const router = useRouter()

  const validateLogin = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.NM_EMAIL) newErrors.NM_EMAIL = 'E-mail é obrigatório.'
    if (!formData.DS_SENHA) newErrors.DS_SENHA = 'Senha é obrigatória.'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateLogin()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      const response = await fetch(
        `http://localhost:8080/condominios/${formData.NM_EMAIL}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        },
      )

      if (!response.ok) {
        setErrors({ NM_EMAIL: 'E-mail ou senha incorretos.' })
        return
      }

      const userData = await response.json()

      if (userData.DS_SENHA !== formData.DS_SENHA) {
        setErrors({ DS_SENHA: 'E-mail ou senha incorretos.' })
        return
      }

      setUser(userData)
      setSuccessMessage(
        'Login realizado com sucesso! Redirecionando para a Página Inicial...',
      )

      setTimeout(() => {
        router.push('/')
      }, 3000)
    } catch (error) {
      if (error instanceof Error) {
        setErrors({ apiError: error.message })
      } else {
        setErrors({ apiError: 'Erro desconhecido.' })
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  return (
    <main className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-center mb-8 text-[#97987E]">
          LOGIN
        </h1>
      </div>

      {successMessage && (
        <div className="w-full max-w-[900px] p-4 mb-6 bg-[#48d9717a] text-[#4a4a4a] rounded-lg shadow-md text-center">
          <p className="font-semibold text-lg">{successMessage}</p>
        </div>
      )}
      {Object.keys(errors).length > 0 && (
        <div className="w-full max-w-[900px] p-4 mb-6 bg-[#d948487a] text-[#4a4a4a] rounded-lg shadow-md text-center">
          <p className="font-semibold text-lg">{errors.apiError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full max-w-[543px] space-y-8">
        <div className="relative mb-8">
          <label
            htmlFor="NM_EMAIL"
            className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2"
          >
            EMAIL
          </label>
          <input
            id="NM_EMAIL"
            type="email"
            placeholder="EMAIL"
            value={formData.NM_EMAIL}
            onChange={handleChange}
            className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] opacity-100 placeholder-transparent focus:outline-none text-center"
          />
          {errors.NM_EMAIL && (
            <p className="text-red-500 text-xs mt-1 text-center">
              {errors.NM_EMAIL}
            </p>
          )}
        </div>

        <div className="relative mb-8">
          <label
            htmlFor="DS_SENHA"
            className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2"
          >
            SENHA
          </label>
          <input
            id="DS_SENHA"
            type="password"
            placeholder="SENHA"
            value={formData.DS_SENHA}
            onChange={handleChange}
            className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] opacity-100 placeholder-transparent focus:outline-none text-center"
          />
          {errors.DS_SENHA && (
            <p className="text-red-500 text-xs mt-1 text-center">
              {errors.DS_SENHA}
            </p>
          )}
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-[215px] h-[35px] bg-[#97987E] text-white text-lg font-semibold rounded-[15px] opacity-100 hover:bg-[#7a7a64] transition-colors font-roboto"
          >
            ENTRAR
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-[#505050]">
            Não tem uma conta?{' '}
            <Link href="/cadastro" className="text-[#97987E] font-semibold">
              Cadastre-se
            </Link>
          </p>
        </div>
      </form>
    </main>
  )
}
