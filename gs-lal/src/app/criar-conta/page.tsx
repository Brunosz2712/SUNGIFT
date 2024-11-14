export default function CriarConta() {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
            
            
            <div className="mb-12">
                <h1 className="text-4xl text-[#97987E] font-semibold font-roboto">CRIAR CONTA</h1>
            </div>

            
            <div className="w-full max-w-[543px] space-y-8">

                
                <div className="relative mb-8">
                    <label htmlFor="nome-completo" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">
                        NOME COMPLETO
                    </label>
                    <input
                        id="nome-completo"
                        type="text"
                        placeholder="NOME COMPLETO"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] opacity-100 placeholder-transparent focus:outline-none text-center"
                    />
                </div>

                
                <div className="relative mb-8">
                    <label htmlFor="cpf" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">
                        CPF
                    </label>
                    <input
                        id="cpf"
                        type="text"
                        placeholder="CPF"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] opacity-100 placeholder-transparent focus:outline-none text-center"
                    />
                </div>

                
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
                        CRIAR
                    </button>
                </div>

            </div>
        </main>
    );
}
