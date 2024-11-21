'use client'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { userAtom } from '@/atoms'
import { useRouter } from 'next/navigation'
import { LogoutOutlined } from '@ant-design/icons'

export default function Menu() {
  const [user, setUser] = useAtom(userAtom)
  const router = useRouter()

  const handleLogout = () => {
    setUser(null)
    router.push('/login')
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5 justify-items-center">
      <Link
        href="/"
        className="w-[120px] h-[35px] bg-[#97987E] text-white text-xs uppercase font-bold flex flex-col items-center justify-center rounded-[20px] hover:bg-[#6f7060] transition duration-200"
      >
        Pagina Inicial
      </Link>

      <Link
        href="/workshops"
        className="w-[120px] h-[35px] bg-[#97987E] text-white text-xs uppercase font-bold flex items-center justify-center rounded-[20px] hover:bg-[#6f7060] transition duration-200"
      >
        Workshops
      </Link>
      <Link
        href="/placas_solares"
        className="w-[120px] h-[35px] bg-[#97987E] text-white text-xs uppercase font-bold flex flex-col items-center justify-center rounded-[20px] hover:bg-[#6f7060] transition duration-200"
      >
        Placa Solares
      </Link>
      <Link
        href="/integrantes"
        className="w-[120px] h-[35px] bg-[#97987E] text-white text-xs uppercase font-bold flex flex-col items-center justify-center rounded-[20px] hover:bg-[#6f7060] transition duration-200"
      >
        Integrantes
      </Link>

      {!user ? (
        <Link
          href="/login"
          className="w-[120px] h-[35px] bg-[#97987E] text-white text-xs uppercase font-bold flex items-center justify-center rounded-[20px] hover:bg-[#6f7060] transition duration-200"
        >
          Entrar
        </Link>
      ) : (
        <button
          onClick={handleLogout}
          className="w-[120px] h-[35px] bg-red-500 text-white text-xs uppercase font-bold flex items-center justify-center rounded-[20px] hover:bg-red-600 transition duration-200"
        >
          <LogoutOutlined className="text-lg" />
          <span className="ml-2">Sair</span>
        </button>
      )}
    </div>
  )
}
