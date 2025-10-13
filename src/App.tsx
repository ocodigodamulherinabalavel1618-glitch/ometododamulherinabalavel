import FadeInSection from './FadeInSection';
import { Sparkles, Heart, Brain, Shield, Crown, CheckCircle2, Lock } from 'lucide-react';
import WhatsAppIcon from './WhatsappIcon';
import { useState, useEffect } from 'react';
import image1 from '../.bolt/1.png';
import image2 from '../.bolt/2.png';
import image3 from '../.bolt/3.png';

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

  // Timer countdown
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Define o tempo final (1 hora a partir de agora)
    const endTime = new Date().getTime() + (1 * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-hidden" style={{ background: 'linear-gradient(to bottom, #000000 0%, #0d0607 20%, #0a0506 50%, #0d0607 80%, #000000 100%)' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Background Image with low opacity */}
        <div className="absolute inset-0 opacity-[0.08]" style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}>
          <img
            src="https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Background"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: '50% 30%' }}
          />
        </div>

        {/* Subtle golden glow background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-rose-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-100">
           Descubra o método que milhares de mulheres estão usando para reprogramar o cérebro,{' '}
            <span className="text-gradient-gold">silenciar a autocrítica e despertar sua autoconfiança!</span>
            <span className="block mt-4 text-2xl md:text-4xl lg:text-5xl text-gray-200">
           
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl text-white max-w-4xl mx-auto font-light leading-relaxed">
           ESQUEÇA os métodos vazios e as frases de auto ajuda. Aqui, você vai sentir a diferença em poucos dias quando a neurociência começa a trabalhar a seu favor.
          </p>

          {/* VSL Section */}
          <div className="pt-8 space-y-6">
            <div className="flex items-center justify-center gap-2 text-amber-500/80">
              <Sparkles className="w-5 h-5" />
              <p className="text-base md:text-lg font-normal">Assista e sinta sua virada começar.</p>
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
              className="group relative px-8 md:px-10 py-4 md:py-5 text-black font-semibold text-base md:text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
              style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)' }}
            >
              <Crown className="inline-block w-5 h-5 mr-2 -mt-1 animate-float" />
              Quero sentir o poder que sempre foi meu
            </button>

            {/* Price Badge - Now Clickable */}
            <button
              onClick={handleCTA}
              className="inline-block px-6 py-3 border border-rose-400/20 rounded-full hover:border-rose-400/40 transition-all duration-300 hover:scale-105 cursor-pointer shimmer"
              style={{ background: 'rgba(236, 72, 153, 0.05)' }}
            >
              <p className="text-sm">
                De <span className="line-through text-gray-500">R$52,90</span> por{' '}
                <span className="text-2xl font-bold text-gradient-rose">R$19,90</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">oferta exclusiva por tempo limitado</p>
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <FadeInSection className="relative py-24 px-4" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(13,6,7,0.3), rgba(0,0,0,0))' }}>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-6">
            <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
              Você não está sozinha nessa sensação.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
              Aquele peso de olhar no espelho e não reconhecer mais quem você era.
              A voz interna que sussurra que você não é boa o suficiente.
              As dúvidas que surgem antes de qualquer decisão importante.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
              Você sabe que tem potencial. Sabe que poderia brilhar.
              Mas algo sempre parece segurar você de volta.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-amber-500/90 leading-relaxed font-normal mt-8">
              E se eu te dissesse que isso não é culpa sua, mas sim dos padrões mentais
              que você nunca aprendeu a reprogramar?
            </p>
          </div>

          {/* Timeline de Resultados */}
          <div className="mt-16 space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-amber-600/10" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.03), rgba(236,72,153,0.02))' }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-black font-semibold" style={{ background: 'linear-gradient(135deg, #d4af37, #f4e5c3)' }}>
                7
              </div>
              <div className="flex-1">
                <p className="text-base md:text-lg text-white leading-relaxed">
                  <span className="text-amber-400/80 font-medium">Em 7 dias</span>, você notará o fim da auto crítica constante.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-amber-600/10" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.03), rgba(236,72,153,0.02))' }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-black font-semibold" style={{ background: 'linear-gradient(135deg, #d4af37, #f4e5c3)' }}>
                14
              </div>
              <div className="flex-1">
                <p className="text-base md:text-lg text-white leading-relaxed">
                  <span className="text-amber-400/80 font-medium">Em 14 dias</span>, vai se sentir mais segura nas decisões.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-amber-600/10" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.03), rgba(236,72,153,0.02))' }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-black font-semibold" style={{ background: 'linear-gradient(135deg, #d4af37, #f4e5c3)' }}>
                21
              </div>
              <div className="flex-1">
                <p className="text-base md:text-lg text-white leading-relaxed">
                  <span className="text-amber-400/80 font-medium">Em 21 dias</span>, você estará irreconhecível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Solution Section */}
      <FadeInSection className="relative py-24 px-4" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(212,175,55,0.02), rgba(0,0,0,0))' }}>
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gradient-gold">
              O Método da Mulher Inabalável
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-rose-400/60 font-light">
              O Segredo da Confiança Feminina
            </p>
          </div>

          <p className="text-base md:text-lg lg:text-xl text-white text-center max-w-3xl mx-auto leading-relaxed">
            Uma fórmula neurocientífica que usa práticas simples e consistentes
            para transformar crenças limitantes em alicerces de poder interior.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 pt-8">
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
                description: 'Desenvolva uma autoconfiança que não depende de validação externa, pois ela vem de dentro.'
              },
              {
                icon: Sparkles,
                title: 'Desperte seu brilho',
                description: 'Sinta a transformação que as pessoas veem em você, e que você sente ao acordar.'
              }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="group relative p-6 md:p-8 rounded-2xl border border-amber-600/10 hover:border-amber-600/20 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.03), rgba(236,72,153,0.02))' }}
              >
                <benefit.icon className="w-10 h-10 text-amber-500/70 mb-4" />
                <h3 className="text-xl md:text-2xl font-serif text-amber-400/80 mb-3">{benefit.title}</h3>
                <p className="text-sm md:text-base text-white leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <button
              onClick={handleCTA}
              className="group relative px-8 md:px-10 py-4 md:py-5 text-black font-semibold text-base md:text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
              style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)' }}
            >
              <Crown className="inline-block w-5 h-5 mr-2 -mt-1 animate-float" />
              Quero sentir o poder que sempre foi meu
            </button>
          </div>
        </div>
      </FadeInSection>

      {/* Scientific Base Section */}
      <FadeInSection className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <Brain className="w-12 h-12 md:w-16 md:h-16 text-amber-500/70 mx-auto" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gradient-gold">
              Por que isso funciona?
            </h2>
          </div>

          <div className="space-y-6 text-base md:text-lg lg:text-xl text-white leading-relaxed">
            <p>
              Seu cérebro não é fixo. Ele se molda, se adapta, se reconstrói.
              Esse fenômeno se chama <span className="text-amber-500/80 font-normal">neuroplasticidade</span>.
            </p>
            <p>
              Cada pensamento que você repete cria uma trilha neural.
              Cada crença limitante que você alimenta se fortalece.
            </p>
            <p>
              Mas o oposto também é verdade: <span className="text-rose-400/70 font-normal">você pode reprogramar
              essas trilhas</span>. Pode criar novos caminhos. Pode ensinar seu cérebro a acreditar em você novamente.
            </p>
            <p className="text-xl md:text-2xl text-amber-500/90 text-center font-normal pt-6">
              E é exatamente isso que O Método da Mulher Inabalável faz.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Results Timeline */}
      <FadeInSection className="relative py-24 px-4" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(236,72,153,0.02), rgba(0,0,0,0))' }}>
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gradient-rose text-center">
            Sua jornada de transformação
          </h2>

          <div className="space-y-8 md:space-y-12">
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
              <div key={idx} className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-black font-semibold text-sm md:text-base" style={{ background: 'linear-gradient(135deg, #d4af37, #f4bfbf)' }}>
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif text-amber-400/80 mb-2">{stage.stage}</h3>
                  <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Testimonials Section */}
      <FadeInSection className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gradient-gold text-center">
            Elas sentiram a transformação
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <img src={image1} alt="Testimonial 1" className="rounded-2xl border border-amber-600/10" />
            <img src={image2} alt="Testimonial 2" className="rounded-2xl border border-amber-600/10" />
            <img src={image3} alt="Testimonial 3" className="rounded-2xl border border-amber-600/10" />
          </div>
        </div>
      </FadeInSection>

      {/* Offer Section with Timer */}
      <FadeInSection className="relative py-24 px-4" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(212,175,55,0.03), rgba(0,0,0,0))' }}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gradient-gold">
            Oferta Exclusiva
          </h2>

          <div className="w-full max-w-md mx-auto bg-black/20 backdrop-blur-lg rounded-2xl border border-amber-500/20 p-8 space-y-6 shadow-lg shadow-amber-500/10">
            <div className="text-center">
              <p className="text-lg text-amber-400/80">Oferta exclusiva termina em:</p>
              <div className="flex justify-center items-center gap-4 mt-2">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-400">HORAS</span>
                </div>
                <span className="text-4xl font-bold text-white">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-400">MINUTOS</span>
                </div>
                <span className="text-4xl font-bold text-white">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-400">SEGUNDOS</span>
                </div>
              </div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-lg text-gray-400 line-through">De R$ 52,90</p>
              <p className="text-5xl font-bold text-gradient-rose animate-pulse-text">por R$ 19,90</p>
              <div className="flex items-center justify-center gap-2 text-amber-500/80 pt-4">
                <CheckCircle2 className="w-5 h-5" />
                <p className="text-sm">Acesso imediato e vitalício</p>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-amber-500/90 font-normal leading-relaxed">
            Acesso imediato. Resultados que você sente e as pessoas ao seu redor desacreditam.
          </p>

          <button
            onClick={handleCTA}
            className="group relative px-8 md:px-10 py-4 md:py-5 text-black font-semibold text-base md:text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
            style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)' }}
          >
            <Crown className="inline-block w-5 h-5 mr-2 -mt-1 animate-float" />
            Quero sentir o poder que sempre foi meu
          </button>
        </div>
      </FadeInSection>

      {/* Access Section */}
      <FadeInSection className="relative py-24 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gradient-rose">
            Acesso ao Método
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed">
            Um método que une neurociência e empoderamento feminino.
            Práticas simples, resultados profundos. Feito para mulheres que estão prontas
            para se reconectar com sua força natural e se tornarem verdadeiramente inabaláveis.
          </p>
        </div>
      </FadeInSection>

      {/* Guarantee Section */}
      <FadeInSection className="relative py-16 px-4" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(212,175,55,0.02), rgba(0,0,0,0))' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-500/70" />
              <p className="text-sm md:text-base text-gray-400">Compra 100% segura</p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-500/70" />
              <p className="text-sm md:text-base text-gray-400">Acesso imediato</p>
            </div>
            <a
              href="https://wa.me/5561993711943?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20O%20Método%20da%20Mulher%20Inabalável"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-600/20 hover:border-amber-600/40 transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.05), rgba(236,72,153,0.03))' }}
            >
                            <WhatsAppIcon className="w-5 h-5 text-amber-500/70" />
              <p className="text-sm md:text-base text-gray-400">Suporte via WhatsApp</p>
            </a>
          </div>
        </div>
      </FadeInSection>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-amber-600/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-xl md:text-2xl font-serif text-amber-400/80">
            O Método da Mulher Inabalável
          </h3>
          <p className="text-sm text-gray-500">
            © 2025 – Todos os direitos reservados
          </p>
          <div className="flex justify-center gap-6 md:gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-amber-500/80 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-amber-500/80 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
