import Image from 'next/image'
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

export default function Integrantes() {
  return (
    <main className="p-8 bg-[#f4f4f4]">
      <div>
        <h1 className="md:text-5xl text-3xl font-bold text-center mb-8 text-[#97987E]">
          INTEGRANTES
        </h1>
      </div>

      {/* Contêiner principal para os integrantes */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center md:h-[120vh] lg:h-[50vh] h-[200vh] lg:gap-0 gap-4">
        {/* Michelle */}
        <div className="flex flex-col items-center bg-white rounded-xl p-7 justify-between shadow-md hover:shadow-2xl transition-shadow duration-300">
          <h1 className="text-[#97987E] font-semibold text-2xl">
            Michelle Pontenza
          </h1>
          <div className="w-[208px] h-[208px] bg-[#97987E] rounded-[200px] flex items-center justify-center">
            <Image
              src="/img/michelle.jpeg"
              alt="Michelle"
              width={170}
              height={170}
              className="custom-image"
            />
          </div>
          <nav>
            <ul className="grid grid-cols-2 text-center gap-2">
              <li className="text-[#97987E] font-medium">557702</li>
              <li className="text-[#97987E] font-medium">1TDSPG</li>
              <li className="text-[#97987E] font-medium">
                <a href="https://github.com/michellepotenza01" target="_blank">
                  <GithubOutlined /> GitHub
                </a>
              </li>
              <li className="text-[#97987E] font-medium">
                <a
                  href="https://www.linkedin.com/in/michelle-potenza-338510231/"
                  target="_blank"
                >
                  <LinkedinOutlined /> Linkedin
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Luisa */}
        <div className="flex flex-col items-center bg-white rounded-xl p-7 justify-between shadow-md hover:shadow-2xl transition-shadow duration-300">
          <h1 className="text-[#97987E] font-semibold text-2xl">
            Luisa Danielle
          </h1>
          <div className="w-[208px] h-[208px] bg-[#97987E] rounded-[200px] flex items-center justify-center">
            <Image
              src="/img/luisa.jpeg"
              alt="Luisa"
              width={170}
              height={170}
              className="custom-image"
            />
          </div>
          <nav>
            <ul className="grid grid-cols-2 text-center gap-2">
              <li className="text-[#97987E] font-medium">555292</li>
              <li className="text-[#97987E] font-medium">1TDSPG</li>
              <li className="text-[#97987E] font-medium">
                <a href="https://github.com/ludanii" target="_blank">
                  <GithubOutlined /> GitHub
                </a>
              </li>
              <li className="text-[#97987E] font-medium">
                <a
                  href="https://www.linkedin.com/in/luisa-danielle-663126274/"
                  target="_blank"
                >
                  <LinkedinOutlined /> Linkedin
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bruno Souza */}
        <div className="flex flex-col items-center bg-white rounded-xl p-7 justify-between shadow-md hover:shadow-2xl transition-shadow duration-300">
          <h1 className="text-[#97987E] font-semibold text-2xl">Bruno Souza</h1>
          <div className="w-[208px] h-[208px] bg-[#97987E] rounded-[200px] flex items-center justify-center">
            <Image
              src="/img/bruno.png"
              alt="Bruno"
              width={170}
              height={170}
              className="custom-image"
            />
          </div>
          <nav>
            <ul className="grid grid-cols-2 text-center gap-2">
              <li className="text-[#97987E] font-medium">94346</li>
              <li className="text-[#97987E] font-medium">1TDSPG</li>
              <li className="text-[#97987E] font-medium">
                <a href="https://github.com/Brunosz2712" target="_blank">
                  <GithubOutlined /> GitHub
                </a>
              </li>
              <li className="text-[#97987E] font-medium">
                <a
                  href="https://www.linkedin.com/in/bruno-souza-79a354208/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                >
                  <LinkedinOutlined /> Linkedin
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  )
}
