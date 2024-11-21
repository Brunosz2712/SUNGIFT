'use client'
import { WorkShop } from '@/types'
import { useEffect, useState } from 'react'
import { CalendarOutlined, PushpinOutlined } from '@ant-design/icons'

export default function WorkShops() {
  const [WorkShop, setWorkShop] = useState<WorkShop[]>([])

  const chamadaApi = async () => {
    const response = await fetch('http://localhost:8080/workshop')
    const data = await response.json()

    setWorkShop(data)
  }

  useEffect(() => {
    chamadaApi()
  }, [])

  const workshopsEmBreve = WorkShop.filter((w) => w.ST_WORKSHOP === 'Em breve')
  const workshopsRealizados = WorkShop.filter(
    (w) => w.ST_WORKSHOP === 'Realizado',
  )

  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-center mb-8 text-[#97987E]">
        WORKSHOP
      </h1>

      {/* Seção "Em Breve" */}
      <h2 className="text-3xl font-bold text-center mb-4 text-[#97987E]">
        EM BREVE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {workshopsEmBreve.map((w) => (
          <div
            key={w.ID_WORKSHOPS}
            className="flex flex-col justify-between h-full bg-white text-black shadow-lg rounded-lg p-6 border border-gray-300 transition-transform transform hover:scale-105"
          >
            <h1 className="text-xl font-bold text-center text-[#97987E] mb-2">
              {w.NM_WORKSHOP}
            </h1>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">
                {w.TP_WORKSHOPS}
              </p>
              <p className="text-sm text-gray-700 mt-1">{w.DS_WORKSHOP}</p>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <PushpinOutlined className="h-5 w-5 text-gray-600" />
              <p className="text-sm font-semibold text-gray-800">
                Local: {w.NM_LOGRADOURO}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarOutlined className="h-5 w-5 text-gray-600" />
              <p className="text-sm text-gray-500">
                Data: {new Date(w.DT_WORKSHOP).toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Seção "Realizadas" */}
      <h2 className="text-3xl font-bold text-center mb-4 text-[#97987E]">
        REALIZADAS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {workshopsRealizados.map((w) => (
          <div
            key={w.ID_WORKSHOPS}
            className="flex flex-col justify-between h-full bg-gray-300 text-black shadow-lg rounded-lg p-6 border border-gray-300"
          >
            <h1 className="text-xl font-bold text-center text-black mb-2">
              {w.NM_WORKSHOP}
            </h1>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">
                {w.TP_WORKSHOPS}
              </p>
              <p className="text-sm text-gray-700 mt-1">{w.DS_WORKSHOP}</p>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <PushpinOutlined className="h-5 w-5 text-gray-600" />
              <p className="text-sm font-semibold text-gray-800">
                Local: {w.NM_LOGRADOURO}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarOutlined className="h-5 w-5 text-gray-600" />
              <p className="text-sm text-gray-500">
                Data: {new Date(w.DT_WORKSHOP).toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
