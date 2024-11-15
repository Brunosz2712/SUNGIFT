export default function Cadastro() {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
            
            <div className="mb-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-[#97987E]">CADASTRO</h1>
            </div>

            
            <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="relative">
                    <label htmlFor="nome-condominio" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2 whitespace-nowrap">
                        NOME DO CONDOMINIO
                    </label>
                    <input
                        id="nome-condominio"
                        type="text"
                        placeholder="NOME DO CONDOMÍNIO"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] placeholder-transparent focus:outline-none text-center"
                    />
                </div>

                <div className="relative">
                    <label htmlFor="cep" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">
                        CEP
                    </label>
                    <input
                        id="cep"
                        type="text"
                        placeholder="CEP"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] placeholder-transparent focus:outline-none text-center"
                    />
                </div>

                <div className="relative">
                    <label htmlFor="estado" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">
                        ESTADO
                    </label>
                    <input
                        id="estado"
                        type="text"
                        placeholder="ESTADO"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] placeholder-transparent focus:outline-none text-center"
                    />
                </div>

                
                <div className="relative">
                    <label htmlFor="cidade" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">
                        CIDADE
                    </label>
                    <input
                        id="cidade"
                        type="text"
                        placeholder="CIDADE"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] placeholder-transparent focus:outline-none text-center"
                    />
                </div>

                <div className="relative">
                    <label htmlFor="bairro" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">
                        BAIRRO
                    </label>
                    <input
                        id="bairro"
                        type="text"
                        placeholder="BAIRRO"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] placeholder-transparent focus:outline-none text-center"
                    />
                </div>

                <div className="relative">
                    <label htmlFor="complemento" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">
                        COMPLEMENTO
                    </label>
                    <input
                        id="complemento"
                        type="text"
                        placeholder="COMPLEMENTO"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] placeholder-transparent focus:outline-none text-center"
                    />
                </div>

                
                <div className="relative">
                    <label htmlFor="email" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">
                        EMAIL
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="EMAIL"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] placeholder-transparent focus:outline-none text-center"
                    />
                </div>

                <div className="relative">
                    <label htmlFor="senha" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">
                        SENHA
                    </label>
                    <input
                        id="senha"
                        type="password"
                        placeholder="SENHA"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] placeholder-transparent focus:outline-none text-center"
                    />
                </div>

                <div className="relative">
                    <label htmlFor="confirmar-senha" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[#505050] mb-2">
                        CONFIRMAR SENHA
                    </label>
                    <input
                        id="confirmar-senha"
                        type="password"
                        placeholder="CONFIRMAR SENHA"
                        className="w-full h-[41px] bg-[#97987E66] text-[#505050] p-3 rounded-[15px] placeholder-transparent focus:outline-none text-center"
                    />
                </div>
            </div>

            
            <div className="flex justify-center items-center mt-8">
                <button
                    className="w-[215px] h-[35px] bg-[#97987E] text-white text-lg font-semibold rounded-[15px] opacity-100 hover:bg-[#7a7a64] transition-colors font-roboto"
                >
                    CADASTRAR
                </button>
            </div>
        </main>
    );
}
