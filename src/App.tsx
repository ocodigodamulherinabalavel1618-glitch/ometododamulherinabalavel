import FadeInSection from './FadeInSection';
import { Sparkles, Heart, Brain, Shield, Crown, CheckCircle2, Lock, ShieldCheck, User } from 'lucide-react';
import WhatsAppIcon from './WhatsappIcon';
import { useState, useEffect, useRef } from 'react';

import bonusImage from '../.bolt/ChatGPT_Image_Oct_17__2025__06_17_21_PM-removebg-preview.png';

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


declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

function App() {
  const [isVslFinished, setIsVslFinished] = useState(false);
  const playerRef = useRef(null);

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

  useEffect(() => {
    if (window.YT) {
      createPlayer();
    } else {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    }

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  const createPlayer = () => {
    playerRef.current = new window.YT.Player('youtube-player', {
      videoId: 'zG09GhyL5Eg',
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  }

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      setIsVslFinished(true);
    }
  };

  const handleShowRestOfPage = () => {
    setIsVslFinished(true);
    const finalCta = document.getElementById('final-cta');
    if (finalCta) {
      finalCta.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToVSL = () => {
    const vslSection = document.getElementById('vsl-section');
    if (vslSection) {
      vslSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen text-white overflow-hidden" style={{ background: 'linear-gradient(to bottom, #000000 0%, #0d0607 20%, #0a0506 50%, #0d0607 80%, #000000 100%)' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20">
        {/* Background Image with low opacity */}
        <div className="absolute inset-0 opacity-[0.08]" style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}>

        </div>

        {/* Subtle golden glow background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-rose-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-100">
            Esse é o <span className="text-gradient-gold">segredo para reprogramar</span> sua mente.
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl text-white max-w-4xl mx-auto font-light leading-relaxed">
           Esse é o método que milhares de mulheres usam para transformar suas vidas e reprogramar suas mentes.
          </p>

          <div className="pt-8">
            <button
              onClick={handleScrollToVSL}
              className="group relative px-8 md:px-10 py-4 md:py-5 text-white font-semibold text-base md:text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
              style={{ background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
            >
              Esse método é pra quem decidiu dar um basta nisso! Assista o vídeo ou clique no botão abaixo.
            </button>
          </div>

          {/* VSL Section */}
          <div id="vsl-section" className="space-y-6">
            {/* YouTube Shorts Embed */}
            <div className="relative max-w-md mx-auto aspect-[9/16] rounded-2xl overflow-hidden border border-amber-600/10" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
              <div id="youtube-player" className="absolute inset-0 w-full h-full"></div>
            </div>


          </div>
          
          {!isVslFinished && (
            <div className="pt-8">
              <button
                onClick={handleShowRestOfPage}
                className="group relative px-8 md:px-10 py-4 md:py-5 text-black font-semibold text-base md:text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)' }}
              >
                <Crown className="inline-block w-5 h-5 mr-2 -mt-1 animate-float" />
                Quero conhecer o Método!
              </button>
            </div>
          )}


        </div>
      </section>

      {isVslFinished && (
        <>
          {/* Solution Section */}
          <FadeInSection className="relative py-16 sm:py-20 md:py-24 px-4 mt-24">
            <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
              <div className="text-center space-y-4">
                                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gradient-wine-white">
                                    A Chave Para Reprogramação Mental
                                  </h2>              </div>
              <p className="text-base md:text-lg lg:text-xl text-white text-center max-w-3xl mx-auto leading-relaxed">
                Uma fórmula neurocientífica que usa práticas simples e consistentes
                para transformar crenças limitantes em alicerces de poder interior.
              </p>



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

          {/* New Section: De mulher pra mulher */}
          <FadeInSection className="relative py-16 sm:py-20 md:py-24 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white">
                De mulher pra mulher: eu também já me senti presa em mim mesma.
              </h2>
              {/* Add content for this section here */}
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                Oi, eu sou a Juliana.Por muito tempo, achei
              </p>
            </div>
          </FadeInSection>

          {/* Scientific Base Section */}
          <FadeInSection className="relative py-16 sm:py-20 md:py-24 px-4">
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



          {/* Testimonials Section */}
          <FadeInSection className="relative py-16 sm:py-20 md:py-24 px-4">
            <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gradient-gold text-center">
                Elas sentiram a transformação
              </h2>


            </div>
          </FadeInSection>

          {/* Bonus Section */}
          <FadeInSection className="relative py-16 sm:py-20 md:py-24 px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gradient-wine-white">
                Somente HOJE! Bonus exclusivo GRÁTIS:
              </h2>
              <div className="p-8 bg-gray-800 rounded-lg">
                <img src={bonusImage} alt="Bônus Exclusivo" className="w-full h-auto mx-auto" />
              </div>
              <div className="text-center space-y-2">
                <p className="text-5xl font-bold text-gradient-wine-white font-serif">Por R$ 00,00 <span className="text-lg text-gray-400 line-through">R$ 19,90</span></p>
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

          {/* Offer Section with Timer */}
          <FadeInSection id="final-cta" className="relative py-16 sm:py-20 md:py-24 px-4" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(212,175,55,0.03), rgba(0,0,0,0))' }}>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gradient-gold">
                Oferta Exclusiva
              </h2>

              <div className="w-full max-w-md mx-auto bg-black/20 backdrop-blur-lg rounded-2xl border border-amber-500/20 p-8 space-y-6 shadow-lg shadow-amber-500/10">
                <div className="text-center">
                  <p className="text-lg text-amber-400/80">Termina em:</p>
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
                  <p className="text-5xl font-bold text-gradient-rose animate-pulse-text font-serif">Por Apenas<br/>R$ 19,90</p>
                  <div className="flex items-center justify-center gap-2 text-amber-500/80 pt-4">
                    <CheckCircle2 className="w-5 h-5" />
                    <p className="text-sm">Acesso imediato e vitalício</p>
                  </div>
                </div>
              </div>

              <p className="text-xl md:text-2xl lg:text-3xl text-amber-500/90 font-normal leading-relaxed">
                Acesso imediato. O resultado fala tão alto que nem precisa de promessa.
              </p>

              <button
                onClick={handleCTA}
                className="group relative px-8 md:px-10 py-4 md:py-5 text-black font-semibold text-base md:text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)' }}
              >
                <Crown className="inline-block w-5 h-5 mr-2 -mt-1 animate-float" />
                Quero sentir o poder que sempre foi meu
              </button>
            </div>
          </FadeInSection>

          {/* Access Section */}
          <FadeInSection className="relative py-16 sm:py-20 md:py-24 px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gradient-rose">
                Acesso ao Método
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed">
                Um processo criado a partir da neurociência e da experiência real de mulheres que decidiram assumir o próprio poder.
    Simples na forma. Profundo nos resultados. Uma escolha que muda o jeito como você se enxerga e como o mundo passa a enxergar você.
              </p>
            </div>
          </FadeInSection>

          {/* User-requested Guarantee Section */}
          <FadeInSection className="relative pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gradient-gold">
                Garantia de Confiança
                <span className="block">30 dias</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed">
                Assim como a neurociência, acreditamos em resultados reais, e eles começam com confiança.<br />
                Por isso, seu acesso tem garantia total de 30 dias.<br />
                Se por qualquer motivo você sentir que o método não é pra você, devolvemos 100% do valor.<br />
                Sem perguntas. Sem burocracia. Só respeito pela sua escolha.
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

              <p className="text-sm text-gray-500">
                © 2025 – Todos os direitos reservados
              </p>
              <div className="flex justify-center gap-6 md:gap-8 text-sm text-gray-500">
                <a href="#" className="hover:text-amber-500/80 transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-amber-500/80 transition-colors">Termos de Uso</a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
