import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Clock } from 'lucide-react';

const NftShowcase = () => {
  const getClubGradient = (clubId) => {
    const gradients = {
      1: "linear-gradient(180deg, #7a0f23, #3a0a11)", // São Paulo
      2: "linear-gradient(180deg, #8b0000, #4b0000)", // Flamengo
      3: "linear-gradient(180deg, #2c2c2c, #111111)", // Vasco
      4: "linear-gradient(180deg, #00582c, #00331b)", // Palmeiras
      5: "linear-gradient(180deg, #7a1020, #400a10)", // Internacional
      6: "linear-gradient(180deg, #007b3b, #004d23)", // Fluminense
      7: "linear-gradient(180deg, #2c2c2c, #111111)", // Corinthians
    };
    return gradients[clubId] || "linear-gradient(180deg, #2B2B2B, #1A1A1A)";
  };

  const getTeamLogo = (clubId) => {
    const logos = {
      1: 'https://s2.coinmarketcap.com/static/img/coins/200x200/14661.png',
      2: '/mengo.png',
      3: '/vasco.png',
      4: '/palmeiras.png',
      5: '/inter.png',
      6: '/flu.png',
      7: '/corinthians.png'
    };
    return logos[clubId] || 'https://s2.coinmarketcap.com/static/img/coins/200x200/14661.png';
  };

  const getTokenSymbol = (clubId) => {
    const symbols = {
      1: 'SPFC',
      2: 'FLA',
      3: 'VAS',
      4: 'PAL',
      5: 'INT',
      6: 'FLU',
      7: 'COR'
    };
    return symbols[clubId] || 'TOKEN';
  };

  const formatPrice = (price) => {
    if (!price) return '0';
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(price);
  };

  const formatDate = (dateString) => {
    try {
      return formatDistanceToNow(new Date(dateString), {
        addSuffix: true,
        locale: ptBR
      });
    } catch (error) {
      return 'Data indisponível';
    }
  };

  return (
    <section className="bg-card/40 py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seu ingresso é mais que um <span className="text-gradient-primary">acesso</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Cada ingresso NFT é único, verificável e colecionável. Acesse eventos exclusivos, 
              receba prêmios especiais e mantenha uma lembrança digital eterna de momentos inesquecíveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-card p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Transferível</h4>
                <p className="text-sm text-muted-foreground">Envie ou revenda seu ingresso com segurança</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Colecionável</h4>
                <p className="text-sm text-muted-foreground">Guarde como recordação ou item de colecionador</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-slide-up" style={{ transitionDelay: '200ms' }}>
            <div className="relative w-64 h-96 perspective-1000">
              <div className="absolute inset-0 [transform-style:preserve-3d] animate-[float_6s_ease-in-out_infinite]">
                <div className="absolute inset-0 bg-[#2B2B2B] rounded-2xl shadow-xl p-4 backdrop-blur-md border border-white/5 hover:border-[#FF595C]/50 hover:shadow-xl hover:shadow-[#FF595C]/5">
                  {/* Imagem com fundo gradiente específico */}
                  <div
                    className="relative aspect-[4/3] flex items-center justify-center overflow-hidden mb-4 rounded-lg"
                    style={{ background: getClubGradient(2) }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/250px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png"
                      alt="SPFC"
                      className="object-contain max-h-32 w-full"
                    />
                    
                    {/* Badge tipo */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/10">
                      Venda
                    </div>

                    {/* Likes */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/10">
                      <svg className="w-4 h-4 text-[#FF595C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>42</span>
                    </div>
                  </div>

                  {/* Informações */}
                  <div className="space-y-3">
                    {/* Nome + logo */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-white text-lg font-bold leading-tight line-clamp-2 flex-1">
                        Ingresso SPFC - Setor Norte
                      </h3>
                      <img
                        src={getTeamLogo(1)}
                        alt="Team logo"
                        className="w-6 h-6 rounded-full bg-white/5 p-0.5"
                      />
                    </div>

                    {/* Temporada */}
                    <p className="text-sm text-gray-400">
                      Temporada 2025
                    </p>

                    {/* Preço */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={getTeamLogo(1)}
                          alt="Token"
                          className="w-5 h-5"
                        />
                        <span className="text-lg font-bold text-white">
                          {formatPrice(150)} {getTokenSymbol(1)}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">
                        ≈ R$ 45,00
                      </span>
                    </div>

                    {/* Lance Atual */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">

                        <span className="text-xs text-gray-400">
                          Lance atual: <span className="text-white font-medium">{formatPrice(120)}</span>
                        </span>
                        <img
                          src={getTeamLogo(1)}
                          alt="Token"
                          className="w-3 h-3"
                        />
                      </div>
                      <span className="text-xs text-gray-400">
                        ≈ R$ 36,00
                      </span>
                    </div>

                    {/* Detalhes do ingresso */}
                    <div className="flex justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{formatDate(new Date().toISOString())}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftShowcase;
