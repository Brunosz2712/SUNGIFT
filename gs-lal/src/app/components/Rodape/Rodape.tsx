import Link from 'next/link';

export default function Rodape() {
    return (
      <footer className="bg-[#97987E] text-white text-center py-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">
          PROGRAMA DE DOAÇÃO DE MATERIAIS
        </h1>
        <p className="mb-4">
          Acreditamos que energia limpa é um direito de todos. Através do nosso
          programa de doação, você pode:
        </p>
        <p className="text-lg mb-6">
          ✨ Doar materiais básicos em bom estado
          <br />
          🌟 Contribuir com recursos para novas instalações
          <br />
          🛒 Ganhar descontos de até 20% nos precos das placas solares!
        </p>

        {/* Link estilizado como botão e centralizado */}
        <Link
          href="/doacao"
          className="w-[240px] h-[70px] bg-white text-[#97987E] text-xl uppercase font-bold flex items-center justify-center rounded-[40px] hover:bg-[#6f7060] hover:text-white transition duration-200"
        >
          QUERO DOAR
        </Link>
      </footer>
    )
}
