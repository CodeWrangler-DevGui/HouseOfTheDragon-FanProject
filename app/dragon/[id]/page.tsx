import { dragonsData } from '@/data/dragons';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Função para renderizar os negritos
const renderFormattedText = (text: string) => {
  return text.split('**').map((part, index) => {
    return index % 2 === 1 ? (
      <strong key={index} className="text-white font-bold">
        {part}
      </strong>
    ) : (
      part
    );
  });
};

// ATENÇÃO AQUI: Adicionamos o "async" e mudamos o tipo do params para Promise
export default async function DragonDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // ATENÇÃO AQUI: Agora nós "esperamos" o ID carregar da URL
  const { id } = await params;
  
  // Busca o dragão específico pelo ID
  const dragon = dragonsData.find((d) => d.id === id);

  // Se não achar o dragão, joga pro 404
  if (!dragon) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Botão de Voltar */}
        <Link 
          href="/" 
          className="inline-flex items-center text-zinc-400 hover:text-red-500 font-bold mb-8 transition-colors uppercase tracking-widest text-sm"
        >
          <span className="mr-2">←</span> Voltar para o Fosso
        </Link>

        {/* Cabeçalho da Página */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2">
                {dragon.name}
              </h1>
              <p className="text-red-600 font-mono text-xl tracking-widest uppercase">
                {dragon.rider}
              </p>
            </div>
            
            {/* Badge da Facção */}
            <div className={`px-4 py-2 rounded-lg font-black uppercase tracking-widest text-sm border-2 ${
              dragon.faction === 'Pretos' ? 'bg-black text-red-500 border-red-900' :
              dragon.faction === 'Verdes' ? 'bg-black text-emerald-500 border-emerald-900' :
              dragon.faction === 'Selvagens' ? 'bg-black text-zinc-300 border-zinc-600' :
              'bg-zinc-900 text-yellow-600 border-yellow-900'
            }`}>
              Facção: {dragon.faction}
            </div>
          </div>

          {/* Imagem de Destaque */}
          <div className="relative h-96 md:h-125 w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <Image 
              src={dragon.imageUrl} 
              alt={dragon.name} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Grid de Informações Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center">
            <span className="text-zinc-500 font-bold uppercase text-xs mb-1">Cor das Escamas</span>
            <span className="text-xl font-bold text-white">{dragon.color}</span>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center">
            <span className="text-zinc-500 font-bold uppercase text-xs mb-1">Nascimento</span>
            <span className="text-xl font-bold text-white">{dragon.born}</span>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center">
            <span className="text-zinc-500 font-bold uppercase text-xs mb-1">Morte</span>
            <span className="text-xl font-bold text-white">{dragon.died}</span>
          </div>
        </div>

        {/* Textos de História */}
        <div className="space-y-12">
          <section className="bg-zinc-900/50 border border-zinc-800/50 p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-black text-red-600 uppercase tracking-widest mb-6">A Lenda</h2>
            <p className="text-zinc-300 text-lg leading-relaxed md:text-xl whitespace-pre-line">
              {renderFormattedText(dragon.description)}
            </p>
          </section>

          {/* Renderiza a parte da Dança apenas se existir no dado do dragão */}
          {dragon.danceHistory && (
            <section className="bg-black border border-red-900/30 p-8 md:p-12 rounded-3xl shadow-[0_0_30px_rgba(185,28,28,0.05)]">
              <h2 className="text-3xl font-black text-red-600 uppercase tracking-widest mb-6 border-b border-red-900/50 pb-4">
                Na Dança dos Dragões
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed md:text-xl whitespace-pre-line">
                {renderFormattedText(dragon.danceHistory)}
              </p>
            </section>
          )}
        </div>
        
      </div>
    </main>
  );
}