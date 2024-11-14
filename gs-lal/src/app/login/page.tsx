import Link from "next/link";

export default function Login() {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
            
            
            <div className="mb-12">
                <h1 className="text-4xl text-[#97987E] font-semibold font-roboto">ENTRAR</h1>
            </div>

            
            <div className="w-full max-w-[543px] space-y-8">

                
                <div className="relative mb-8">
                    <label htmlFor="email" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">
                        EMAIL
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="EMAIL"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] opacity-100 placeholder-transparent focus:outline-none text-center"
                    />
                </div>

                
                <div className="relative mb-8">
                    <label htmlFor="senha" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">
                        SENHA
                    </label>
                    <input
                        id="senha"
                        type="password"
                        placeholder="SENHA"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] opacity-100 placeholder-transparent focus:outline-none text-center"
                    />
                </div>

                
                <div className="flex justify-center items-center mt-8">
                    <button
                        className="w-[215px] h-[35px] bg-[#97987E] text-white text-lg font-semibold rounded-[15px] opacity-100 hover:bg-[#7a7a64] transition-colors font-roboto"
                    >
                        ENTRAR
                    </button>
                </div>

                
                <div className="flex justify-center mt-8"> 
                    <Link
                        href="/cadastro"
                        className="text-[#505050] text-sm font-semibold hover:text-[#7a7a64] transition-colors"
                    >
                        NÃO POSSUO CADASTRO
                    </Link>
                </div>

            </div>
        </main>
    );
}
