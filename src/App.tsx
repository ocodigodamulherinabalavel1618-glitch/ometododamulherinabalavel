import { Sparkles, Heart, Brain, Shield, Crown, CheckCircle2, Lock } from 'lucide-react';

const removeFloating = () => {
  document
    .querySelectorAll(
      '[style*="position: fixed"][style*="bottom: 1rem"][style*="right: 1rem"][style*="z-index: 2147483647"]'
    )
    .forEach(el => el.remove());
};

// executa já no load
removeFloating();

// observa mudanças no DOM
const observer = new MutationObserver(removeFloating);
observer.observe(document.body, { childList: true, subtree: true });


function App() {
  const handleCTA = () => {
    window.open('https://pay.cakto.com.br/wkggpv4_591435', '_blank');
  };

  return (
    <div className="min-h-screen text-white overflow-hidden" style={{ background: 'linear-gradient(to bottom, #000000 0%, #0d0607 20%, #0a0506 50%, #0d0607 80%, #000000 100%)' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Subtle golden glow background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-rose-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight font-light text-gray-100">
            A mulher confiante que você sempre buscou{' '}
            <span className="text-gradient-gold">já habita em você</span>
            <span className="block mt-4 text-3xl md:text-5xl lg:text-6xl text-gray-200">
              chegou o momento de deixá-la brilhar sem medo.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Dentro deste método exclusivo, você vai descobrir o processo neurocientífico que desperta autoconfiança,
            silencia a autocrítica e ativa a sua força natural.
          </p>

          {/* VSL Section */}
          <div className="pt-8 space-y-6">
            <div className="flex items-center justify-center gap-2 text-amber-500/80">
              <Sparkles className="w-5 h-5" />
              <p className="text-lg font-normal">Assista e sinta sua virada começar.</p>
            </div>

            {/* YouTube Shorts Embed */}
            <div className="relative max-w-md mx-auto aspect-[9/16] rounded-2xl overflow-hidden border border-amber-600/10" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/zG09GhyL5Eg"
                title="O Código da Mulher Inabalável"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8 space-y-4">
            <button
              onClick={handleCTA}
              className="group relative px-10 py-5 text-black font-semibold text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)' }}
            >
              <Crown className="inline-block w-5 h-5 mr-2 -mt-1" />
              Quero sentir o poder que sempre foi meu
            </button>

            {/* Price Badge */}
            <div className="inline-block px-6 py-3 border border-rose-400/20 rounded-full" style={{ background: 'rgba(236, 72, 153, 0.05)' }}>
              <p className="text-sm">
                De <span className="line-through text-gray-500">R$52,90</span> por{' '}
                <span className="text-2xl font-bold text-gradient-rose">R$19,90</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">oferta de lançamento por tempo limitado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-24 px-4" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(13,6,7,0.3), rgba(0,0,0,0))' }}>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-6">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Você não está sozinha nessa sensação.
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Aquele peso de olhar no espelho e não reconhecer mais quem você era.
              A voz interna que sussurra que você não é boa o suficiente.
              As dúvidas que surgem antes de qualquer decisão importante.
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Você sabe que tem potencial. Sabe que poderia brilhar.
              Mas algo sempre parece segurar você de volta.
            </p>
            <p className="text-xl md:text-2xl text-amber-500/90 leading-relaxed font-normal mt-8">
              E se eu te dissesse que isso não é culpa sua — mas sim dos padrões mentais
              que você nunca aprendeu a reprogramar?
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-24 px-4" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(212,175,55,0.02), rgba(0,0,0,0))' }}>
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gradient-gold">
              O Código da Mulher Inabalável
            </h2>
            <p className="text-xl md:text-2xl text-rose-400/60 font-light">
              O Segredo da Confiança Feminina
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
            Um método neurocientífico que usa práticas simples e consistentes
            para transformar crenças limitantes em alicerces de poder interior.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {[
              {
                icon: Brain,
                title: 'Reprograme sua mente',
                description: 'Transforme padrões mentais antigos em novos circuitos de confiança e clareza.'
              },
              {
                icon: Heart,
                title: 'Reconecte-se consigo',
                description: 'Descubra a mulher que você sempre foi, mas que ficou escondida sob camadas de insegurança.'
              },
              {
                icon: Shield,
                title: 'Torne-se inabalável',
                description: 'Desenvolva uma autoconfiança que não depende de validação externa — ela vem de dentro.'
              },
              {
                icon: Sparkles,
                title: 'Desperte seu brilho',
                description: 'Sinta a transformação que as pessoas veem em você — e que você sente ao acordar.'
              }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl border border-amber-600/10 hover:border-amber-600/20 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.03), rgba(236,72,153,0.02))' }}
              >
                <benefit.icon className="w-10 h-10 text-amber-500/70 mb-4" />
                <h3 className="text-2xl font-serif text-amber-400/80 mb-3 font-light">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <button
              onClick={handleCTA}
              className="group relative px-10 py-5 text-black font-semibold text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)' }}
            >
              <Crown className="inline-block w-5 h-5 mr-2 -mt-1" />
              Quero sentir o poder que sempre foi meu
            </button>
          </div>
        </div>
      </section>

      {/* Scientific Base Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <Brain className="w-16 h-16 text-amber-500/70 mx-auto" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gradient-gold">
              Por que isso funciona?
            </h2>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed">
            <p>
              Seu cérebro não é fixo. Ele se molda, se adapta, se reconstrói —
              esse fenômeno se chama <span className="text-amber-500/80 font-normal">neuroplasticidade</span>.
            </p>
            <p>
              Cada pensamento que você repete cria uma trilha neural.
              Cada crença limitante que você alimenta se fortalece.
            </p>
            <p>
              Mas o oposto também é verdade: <span className="text-rose-400/70 font-normal">você pode reprogramar
              essas trilhas</span>. Pode criar novos caminhos. Pode ensinar seu cérebro a acreditar em você novamente.
            </p>
            <p className="text-2xl text-amber-500/90 text-center font-normal pt-6">
              E é exatamente isso que O Código da Mulher Inabalável faz.
            </p>
          </div>
        </div>
      </section>

      {/* Results Timeline */}
      <section className="relative py-24 px-4" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(236,72,153,0.02), rgba(0,0,0,0))' }}>
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gradient-rose text-center">
            Sua jornada de transformação
          </h2>

          <div className="space-y-12">
            {[
              {
                stage: 'Reconexão',
                description: 'Você começa a reconhecer os padrões que te sabotam. A voz da autocrítica perde força. Você respira diferente.'
              },
              {
                stage: 'Autoconfiança',
                description: 'Você toma decisões sem duvidar tanto. Se olha no espelho e reconhece alguém que vale a pena conhecer. As pessoas percebem a mudança.'
              },
              {
                stage: 'Segurança',
                description: 'Você entra em qualquer ambiente com presença. Sua energia não depende mais de validação. Você se tornou inabalável.'
              }
            ].map((stage, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-black font-semibold" style={{ background: 'linear-gradient(135deg, #d4af37, #f4bfbf)' }}>
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-amber-400/80 mb-2 font-light">{stage.stage}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gradient-gold text-center">
            Elas sentiram a transformação
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: 'Eu me via no espelho e não reconhecia mais quem eu era. Depois que comecei o método, voltei a gostar da mulher que me olha de volta. É surreal.',
                author: 'Larissa',
                age: '34 anos'
              },
              {
                text: 'Eu sempre fui a que duvidava de tudo, principalmente de mim. Hoje, eu entro em qualquer lugar e as pessoas sentem a minha energia. E o melhor: eu também sinto.',
                author: 'Jéssica',
                age: '42 anos'
              },
              {
                text: 'Eu não comprei achando que ia mudar minha vida. Eu comprei por curiosidade. Mas mudei. Hoje eu acordo com outra cabeça — e outro brilho no olhar.',
                author: 'Tainá',
                age: '31 anos'
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="relative p-8 rounded-2xl border border-amber-600/10 space-y-4"
                style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.05), rgba(236,72,153,0.03))' }}
              >
                <p className="text-gray-400 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-amber-600/10">
                  <p className="text-amber-400/80 font-normal">{testimonial.author}, {testimonial.age}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="relative py-24 px-4" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(212,175,55,0.03), rgba(0,0,0,0))' }}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gradient-gold">
            Oferta Exclusiva de Lançamento
          </h2>

          <div className="inline-block p-8 rounded-3xl border border-amber-600/15" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.05), rgba(236,72,153,0.03))' }}>
            <p className="text-lg text-gray-400 mb-2">De</p>
            <p className="text-3xl line-through text-gray-600 mb-4">R$ 52,90</p>
            <p className="text-lg text-gray-400 mb-2">por apenas</p>
            <p className="text-6xl md:text-7xl font-bold text-gradient-rose mb-6">R$ 19,90</p>
            <div className="flex items-center justify-center gap-2 text-amber-500/80">
              <CheckCircle2 className="w-5 h-5" />
              <p className="text-sm">Acesso imediato</p>
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-amber-500/90 font-normal leading-relaxed">
            Acesso imediato. Resultados que você sente — e o espelho confirma.
          </p>

          <button
            onClick={handleCTA}
            className="group relative px-10 py-5 text-black font-semibold text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)' }}
          >
            <Crown className="inline-block w-5 h-5 mr-2 -mt-1" />
            Quero sentir o poder que sempre foi meu
          </button>
        </div>
      </section>

      {/* Access Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-gradient-rose">
            Acesso ao Método
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Um método que une neurociência e empoderamento feminino.
            Práticas simples, resultados profundos. Feito para mulheres que estão prontas
            para se reconectar com sua força natural e se tornarem verdadeiramente inabaláveis.
          </p>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative py-16 px-4" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(212,175,55,0.02), rgba(0,0,0,0))' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-500/70" />
              <p className="text-gray-400">Compra 100% segura</p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-500/70" />
              <p className="text-gray-400">Acesso imediato</p>
            </div>
            <a
              href="https://wa.me/SEU_NUMERO?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20O%20Código%20da%20Mulher%20Inabalável"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-600/20 hover:border-amber-600/40 transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.05), rgba(236,72,153,0.03))' }}
            >
              <Heart className="w-5 h-5 text-amber-500/70" />
              <p className="text-gray-400">Suporte via WhatsApp</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-amber-600/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-serif text-amber-400/80 font-light">
            O Código da Mulher Inabalável
          </h3>
          <p className="text-sm text-gray-500">
            © 2025 – Todos os direitos reservados
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-amber-500/80 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-amber-500/80 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
