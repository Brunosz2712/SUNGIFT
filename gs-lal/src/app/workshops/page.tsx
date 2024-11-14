// src/app/workshops/page.tsx
export default function WorkShops() {
    return (
        <div className="p-8">
            <h1 className="text-5xl font-bold text-center mb-8 text-[#97987E]">WORKSHOP</h1>
            
            {/* Seção "Em Breve" */}
            <h2 className="text-3xl font-bold text-center mb-4 text-[#97987E]">EM BREVE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center h-32 bg-[#97987E] text-white font-semibold text-lg border rounded-lg">
                    COLOCAR INFORMAÇÕES
                </div>
                <div className="flex items-center justify-center h-32 bg-[#97987E] text-white font-semibold text-lg border rounded-lg">
                    COLOCAR INFORMAÇÕES
                </div>
                <div className="flex items-center justify-center h-32 bg-[#97987E] text-white font-semibold text-lg border rounded-lg">
                    COLOCAR INFORMAÇÕES
                </div>
            </div>
            
            {/* Seção "Realizadas" */}
            <h2 className="text-3xl font-bold text-center mb-4 text-[#97987E]">REALIZADAS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center h-32 bg-[#97987E] text-white font-semibold text-lg border rounded-lg">
                    COLOCAR INFORMAÇÕES
                </div>
                <div className="flex items-center justify-center h-32 bg-[#97987E] text-white font-semibold text-lg border rounded-lg">
                    COLOCAR INFORMAÇÕES
                </div>
                <div className="flex items-center justify-center h-32 bg-[#97987E] text-white font-semibold text-lg border rounded-lg">
                    COLOCAR INFORMAÇÕES
                </div>
            </div>
        </div>
    );
}
