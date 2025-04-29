
const NftShowcase = () => {
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/80 rounded-2xl shadow-xl p-4 backdrop-blur-md border border-white/10 flex flex-col">
                  <div className="flex justify-between items-start mb-4">

                  </div>
                  
                  <div className="flex-1 bg-black/30 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="/spfc.png"
                      alt="SPFC"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-black/30 p-2 rounded">
                      <h4 className="font-bold">Flamengo vs Corinthians</h4>
                      <p className="text-xs opacity-80">Final - Campeonato Brasileiro 2023</p>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <div>
                        <p className="opacity-80">Data</p>
                        <p className="font-medium">10/12/2023</p>
                      </div>
                      <div>
                        <p className="opacity-80">Setor</p>
                        <p className="font-medium">Leste Superior</p>
                      </div>
                      <div>
                        <p className="opacity-80">Assento</p>
                        <p className="font-medium">E42</p>
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
