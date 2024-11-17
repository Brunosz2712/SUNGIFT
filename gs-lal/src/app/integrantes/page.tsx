import Image from 'next/image';
import michelle from '@/public/img/michelle.jpeg';
import luisa from '@/public/img/luisa.jpeg';
import bruno from '@/public/img/bruno.png';
import { GithubOutlined } from '@ant-design/icons';

export default function Integrantes() {
    return (
      <main className="p-8 bg-[#f4f4f4]">
        <div>
          <h1 className="text-5xl font-bold text-center mb-8 text-[#97987E]">
            INTEGRANTES
          </h1>
        </div>

        {/* Contêiner principal para os integrantes */}
        <div className="flex justify-center gap-8 flex-wrap">
          {/* Michelle */}
          <div className="flex flex-col items-center">
            <div className="w-[208px] h-[208px] bg-[#97987E] rounded-[200px] flex items-center justify-center">
              <Image
                src={michelle}
                alt="Michelle"
                className="rounded-full w-[120px] h-[120px] object-cover mt-20"
              />
            </div>
            <a href="#" className="text-[#505050] font-medium mt-4">
              <GithubOutlined /> GitHub
            </a>
          </div>

          {/* Luisa */}
          <div className="flex flex-col items-center">
            <div className="w-[208px] h-[208px] bg-[#97987E] rounded-[200px] flex items-center justify-center">
              <Image
                src={luisa}
                alt="Luisa"
                className="rounded-full w-[120px] h-[120px] object-cover mt-20"
              />
            </div>
            <a href="#" className="text-[#505050] font-medium mt-4">
              <GithubOutlined /> GitHub
            </a>
          </div>

          {/* Bruno Souza */}
          <div className="flex flex-col items-center">
            <div className="w-[208px] h-[208px] bg-[#97987E] rounded-[200px] flex items-center justify-center">
              <Image
                src={bruno}
                alt="Bruno Souza"
                className="rounded-full w-[120px] h-[120px] object-cover mt-20"
              />
            </div>

            <a href="#" className="text-[#505050] font-medium mt-4">
              <GithubOutlined /> GitHub
            </a>
          </div>
        </div>
      </main>
    )
}
