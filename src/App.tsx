import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ShieldAlert,
  Apple,
  Activity,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  Clock,
  CheckCircle,
  Utensils,
  Calendar,
  Users,
  ShieldCheck,
  Star,
  Dog,
  Cat,
  Flame,
  ArrowRight,
  Mail,
  HelpCircle,
  FileText
} from 'lucide-react';

import { modulesData, differentialsData, bonusesData, testimonialsData, faqData } from './data';
import CheckoutModal from './components/CheckoutModal';
import FAQAccordion from './components/FAQAccordion';

// Import the generated happy healthy pet image
// @ts-ignore
import happyHealthyPet from './assets/images/happy_healthy_pet_1783469562780.jpg';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [showFloatingFooter, setShowFloatingFooter] = useState(false);

  // Real-time dynamic countdown timer for high conversion urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          return { minutes: 14, seconds: 59 };
        }
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Show floating footer CTA after scrolling past the fold
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingFooter(true);
      } else {
        setShowFloatingFooter(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to resolve icons dynamically
  const getIconComponent = (name: string, className = "h-6 w-6 text-orange-600") => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert className={className} />;
      case 'Apple':
        return <Apple className={className} />;
      case 'Activity':
        return <Activity className={className} />;
      case 'HeartHandshake':
        return <HeartHandshake className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'Clock':
        return <Clock className={className} />;
      case 'CheckCircle':
        return <CheckCircle className={className} />;
      case 'Utensils':
        return <Utensils className={className} />;
      case 'Calendar':
        return <Calendar className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      default:
        return <FileText className={className} />;
    }
  };

  const handleOpenCheckout = () => {
    window.open("https://pay.kiwify.com.br/XNv9sG9", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D3436] font-sans leading-relaxed selection:bg-amber-100 selection:text-amber-900 antialiased pb-20 sm:pb-24">
      
      {/* Emergency Countdown Sticky Bar */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-1.5 sm:gap-3 sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-1 animate-pulse text-yellow-300 shrink-0">
          <Flame className="h-4 w-4 fill-yellow-300" />
          <span className="font-extrabold tracking-tight uppercase">OFERTA EXPIRA EM:</span>
        </div>
        <div className="flex items-center gap-1 bg-black/20 px-2 py-0.5 rounded-md font-mono text-yellow-300 font-black text-sm shrink-0">
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="animate-pulse">:</span>
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
        <span className="hidden md:inline text-white/90 text-xs font-normal">| Restam poucas vagas com 50% de desconto + 3 Bônus Gratuitos!</span>
      </div>

      {/* Modern Compact Brand Header */}
      <header className="border-b border-slate-100/60 bg-[#FDFCF8]/90 backdrop-blur-md relative z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-md shadow-amber-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-slate-800">PET<span className="text-amber-500"> SAUDÁVEL</span></span>
              <span className="hidden sm:inline-block ml-2 text-xs font-medium text-slate-500 border-l border-slate-200 pl-2">Método PetLeve</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1.5 text-xs text-green-700 bg-green-50 px-2.5 py-1 rounded-full font-medium border border-green-100">
              <ShieldCheck className="h-3.5 w-3.5" /> Compra 100% Segura
            </div>
            <button
              onClick={handleOpenCheckout}
              className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm hover:shadow-amber-100 active:scale-95 transition-all cursor-pointer"
            >
              Comprar Agora
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative py-12 md:py-20 overflow-hidden bg-[#FDFCF8]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Copy content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-amber-100">
              <Flame className="h-3.5 w-3.5 text-amber-500 fill-amber-500 animate-pulse" /> Combata o Excesso de Peso do Seu Pet
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Seu melhor amigo está acima do peso? Descubra como <span className="text-amber-500 underline decoration-wavy decoration-amber-300">salvar a vida</span> dele hoje.
            </h1>
            
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal">
              Você sabia que a obesidade pet não é apenas estética? Ela inflama as articulações, causa diabetes e <strong className="text-slate-800">pode roubar até 2 anos e meio de vida</strong> do seu companheiro. Aprenda o método saudável e seguro de emagrecimento desenvolvido por especialistas.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleOpenCheckout}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-lg shadow-amber-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer"
              >
                QUERO TRATAR MEU PET AGORA
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-5 pt-1 text-slate-500">
              <div className="flex items-center gap-1 text-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> Garantia incondicional de 7 dias
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-1 text-xs">
                <Clock className="h-4 w-4 text-emerald-600" /> Liberação imediata no seu e-mail
              </div>
            </div>
          </div>

          {/* Right: Premium Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/40 to-indigo-100/40 rounded-3xl blur-2xl -z-10 transform scale-105" />
            
            <div className="bg-white p-3 rounded-3xl border border-slate-100 shadow-xl overflow-hidden group">
              <img
                src={happyHealthyPet}
                alt="Pet saudável e feliz brincando no jardim"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl border border-slate-100 shadow-lg p-4 flex items-center gap-3 max-w-[240px]">
                <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">+Saúde & Disposição</p>
                  <p className="text-[10px] text-slate-500 leading-snug">Menos sobrecarga, mais longevidade ativa.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. O QUE VOCÊ VAI RECEBER (WHAT YOU WILL RECEIVE) */}
      <section id="conteudo" className="py-16 md:py-24 bg-[#FDFCF8] border-t border-slate-100/40">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-emerald-700 text-xs font-extrabold tracking-widest uppercase bg-green-50 px-3 py-1 rounded-full border border-green-100/60">CONTEÚDO COMPLETO</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              O que você vai receber ao garantir seu guia hoje
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Acesso instantâneo a um método prático e cientificamente validado para cuidar de quem sempre esteve ao seu lado.
            </p>
          </div>

          {/* Grid of Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modulesData.map((module) => (
              <div
                key={module.id}
                className="bg-green-50/20 rounded-2xl p-6 md:p-8 border border-green-100/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-green-100/60 flex items-center justify-center shrink-0">
                      {getIconComponent(module.iconName, "h-6 w-6 text-emerald-700")}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-emerald-700 tracking-widest uppercase">{module.duration}</span>
                      <h3 className="font-bold text-slate-900 text-base md:text-lg">{module.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{module.description}</p>
                  
                  {/* Bullet Benefits list */}
                  <ul className="space-y-2 pt-2 border-t border-green-100/40">
                    {module.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-green-900/90">
                        <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Centralized CTA below modules */}
          <div className="mt-12 text-center">
            <button
              onClick={handleOpenCheckout}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-base px-10 py-4 rounded-xl shadow-lg shadow-amber-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              QUERO TRATAR MEU PET AGORA <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-[11px] text-slate-400 mt-3">🔒 Seus dados estão 100% protegidos com criptografia SSL militar</p>
          </div>

        </div>
      </section>

      {/* 3. POR QUE ESCOLHER ESTE PRODUTO (WHY CHOOSE) */}
      <section id="diferenciais" className="py-16 md:py-24 bg-white border-y border-slate-100/60">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-amber-500 text-xs font-extrabold tracking-widest uppercase font-mono bg-amber-50 px-3 py-1 rounded-full border border-amber-100/50">DIFERENCIAIS PETLEVE</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Por que escolher o Método PetLeve?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A diferença entre um plano genérico de internet e um método estruturado com empatia e carinho.
            </p>
          </div>

          {/* Differentials Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentialsData.map((diff) => (
              <div
                key={diff.id}
                className="bg-[#FDFCF8] rounded-2xl p-6 border border-slate-100/80 text-center space-y-4 hover:bg-amber-50/10 transition-colors shadow-sm"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-amber-100/70 flex items-center justify-center text-amber-500">
                  {getIconComponent(diff.iconName, "h-5 w-5 text-amber-500")}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base leading-tight">{diff.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{diff.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BÔNUS EXCLUSIVOS (BONUSES) */}
      <section id="bonus" className="py-16 md:py-24 bg-gradient-to-b from-[#FDFCF8] to-amber-50/20">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-amber-500 text-xs font-extrabold tracking-widest uppercase font-mono bg-amber-50 px-3 py-1 rounded-full border border-amber-100/50">PRESENTES EXCLUSIVOS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Garanta o manual hoje e ganhe 3 bônus exclusivos
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Para acelerar os resultados e tornar o acompanhamento do seu amado companheiro ainda mais fácil e interativo.
            </p>
          </div>

          {/* Bonus Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonusesData.map((bonus, index) => (
              <div
                key={bonus.id}
                className="relative bg-white rounded-2xl p-6 border border-slate-100/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Visual Label tag */}
                <div className="absolute -top-3 left-4 bg-amber-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Bônus 0{index + 1}
                </div>

                <div className="space-y-4 pt-2">
                  <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500">
                    {getIconComponent(bonus.iconName, "h-5 w-5 text-amber-500")}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">{bonus.title}</h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">{bonus.description}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400">Valor Separado:</p>
                    <p className="text-xs text-slate-500 line-through font-medium">R$ {bonus.originalValue},00</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-2.5 py-1 text-right">
                    <span className="text-xs font-black text-emerald-700">GRÁTIS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. OFERTA (THE OFFER) */}
      <section id="oferta" className="py-16 md:py-24 bg-[#1E293B] text-white relative overflow-hidden">
        {/* Background ambient lighting effects */}
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            🕒 OFERTA POR TEMPO LIMITADO
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Faça a escolha certa pela saúde e longevidade do seu pet
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Invista hoje no bem-estar do seu companheiro e ganhe years de lambidas, carinhos e brincadeiras ativas.
            </p>
          </div>

          {/* Pricing Box Container */}
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-3xl p-8 md:p-12 max-w-lg mx-auto shadow-2xl space-y-6">
            <div className="space-y-1">
              <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">MÉTODO PETLEVE COMPLETO</span>
              <p className="text-slate-400 text-xs line-through">De R$ 197,00 por apenas</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-slate-400 text-xs font-semibold">R$</span>
                <span className="text-4xl sm:text-5xl font-black text-amber-500">97,00</span>
                <span className="text-slate-300 text-xs font-medium">à vista</span>
              </div>
              <p className="text-emerald-400 text-xs font-semibold pt-1">
                Ou em até 10x de R$ 11,08 no cartão de crédito
              </p>
            </div>

            {/* List of included things in the box */}
            <div className="space-y-2.5 text-left border-t border-b border-slate-700/50 py-5">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Manual Completo de Emagrecimento PetLeve</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Bônus 1: Guia Prático de Petiscos Saudáveis (Grátis)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Bônus 2: Planilha de Progresso Interativa (Grátis)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Bônus 3: Comunidade VIP de Tutores (Grátis)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Acesso vitalício ao material e futuras atualizações</span>
              </div>
            </div>

            {/* Direct purchase CTA */}
            <button
              onClick={handleOpenCheckout}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-base py-4 rounded-xl shadow-lg hover:shadow-amber-500/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              QUERO TRATAR MEU PET AGORA
            </button>

            <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400">
              <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-amber-500" /> Acesso Imediato</span>
              <span>•</span>
              <span>Pix ou Cartão</span>
              <span>•</span>
              <span>Garantia de 7 dias</span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. DEPOIMENTOS (TESTIMONIALS) */}
      <section id="depoimentos" className="py-16 md:py-24 bg-[#FDFCF8] border-t border-slate-100/40">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-amber-500 text-xs font-extrabold tracking-widest uppercase font-mono bg-amber-50 px-3 py-1 rounded-full border border-amber-100/50">RELAÇÃO DE AMOR</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Quem amou o Método PetLeve
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Veja as transformações reais de animais de estimação que recuperaram a saúde e energia de filhote.
            </p>
          </div>

          {/* Testimonial Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100/80 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100/80">
                  {/* Styled Avatar initials for safe load */}
                  <div className={`h-11 w-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border ${test.avatarColor}`}>
                    {test.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs md:text-sm">{test.name}</h4>
                    <p className="text-[10px] md:text-xs text-slate-500">
                      Tutor(a) do <strong className="text-slate-700">{test.petName}</strong> ({test.petBreed})
                    </p>
                    <div className="mt-1 inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full">
                      🏆 {test.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section id="faq" className="py-16 md:py-24 bg-[#FDFCF8] border-t border-slate-100/40">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-amber-500 text-xs font-extrabold tracking-widest uppercase font-mono bg-amber-50 px-3 py-1 rounded-full border border-amber-100/50">SUPORTE E RESPOSTAS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Dúvidas frequentes sobre o método
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Se você tem qualquer dúvida, veja as respostas para as perguntas mais comuns dos tutores.
            </p>
          </div>

          <FAQAccordion items={faqData} />

          {/* Prompt below FAQ */}
          <div className="mt-12 text-center space-y-3">
            <p className="text-slate-600 text-xs md:text-sm">
              Ainda tem dúvidas sobre o PetLeve? Envie um e-mail para <strong className="text-slate-800">suporte@petleve.com</strong>
            </p>
          </div>

        </div>
      </section>

      {/* 8. SELO DE GARANTIA (WARRANTY SEAL) */}
      <section id="garantia" className="py-16 md:py-20 bg-[#FDFCF8] border-t border-slate-100/40">
        <div className="max-w-4xl mx-auto px-4 border border-amber-100 bg-amber-50/10 rounded-3xl p-8 md:p-12 shadow-sm text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            
            {/* Guarantee Emblem badge representation */}
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-amber-500 shadow-inner">
              <ShieldCheck className="h-10 w-10 stroke-[2]" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Garantia Incondicional de 7 Dias: Risco Zero!
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                Nós confiamos tanto na qualidade do método e nos bônus que preparamos para você, que oferecemos uma garantia completa. Você compra o material hoje, lê e começa a testar com o seu pet. Se em até 7 dias você achar que o método não serve ou que seu pet não se adaptou, basta nos enviar um e-mail de suporte. Nós devolvemos <strong className="text-slate-800">100% do seu investimento</strong>, centavo por centavo. Sem burocracia, sem perguntas chatas e sem ressentimentos.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleOpenCheckout}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg hover:shadow-amber-200 active:scale-[0.98] transition-all cursor-pointer"
              >
                QUERO TRATAR MEU PET AGORA
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 9. RODAPÉ (FOOTER) */}
      <footer className="bg-slate-950 text-slate-400 py-12 md:py-16 text-xs border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Brand details */}
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <span className="font-bold text-base tracking-tight text-white">PET<span className="text-amber-500"> SAUDÁVEL</span></span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Um guia focado na saúde, bem-estar e aumento da expectativa de vida saudável de cães e gatos de todas as raças e idades.
              </p>
            </div>

            {/* Links columns */}
            <div className="md:col-span-4 space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Suporte & Links</h4>
              <ul className="space-y-2 text-[11px]">
                <li className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-amber-500" />
                  <span>E-mail: suporte@petleve.com</span>
                </li>
                <li>
                  <a href="#termos" className="hover:text-white transition-colors">Termos de Uso</a>
                </li>
                <li>
                  <a href="#privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
                </li>
              </ul>
            </div>

            {/* Security badges */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Segurança</h4>
              <div className="flex flex-wrap gap-2">
                <div className="bg-slate-900 border border-slate-800/60 rounded px-2.5 py-1 text-[10px] text-slate-300 font-medium">
                  🔒 Criptografia SSL 256 bits
                </div>
                <div className="bg-slate-900 border border-slate-800/60 rounded px-2.5 py-1 text-[10px] text-slate-300 font-medium">
                  🛡️ Plataforma Segura
                </div>
              </div>
            </div>

          </div>

          {/* Legal / Medical Warning Disclaimer */}
          <div className="border-t border-slate-900 pt-8 space-y-4">
            <div className="bg-slate-900/60 border border-slate-800/50 rounded-xl p-4 text-[10px] leading-relaxed text-slate-500">
              <strong className="text-slate-400 block mb-1">AVISO IMPORTANTE E EXCLUSÃO DE RESPONSABILIDADE:</strong>
              O conteúdo apresentado neste guia (PetLeve) tem caráter meramente informativo e educacional sobre bem-estar e nutrição animal básica. Ele NÃO substitui, em hipótese alguma, a avaliação médica, consulta, diagnóstico ou tratamento fornecidos por um médico veterinário qualificado e credenciado. Sempre consulte o veterinário de sua confiança antes de fazer alterações drásticas na dieta ou rotina de exercícios físicos do seu cão ou gato, especialmente se o animal apresentar comorbidades ou condições médicas pré-existentes.
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500">
              <p>© {new Date().getFullYear()} PetLeve. Todos os direitos reservados.</p>
              <p>Feito com amor e carinho pela saúde dos nossos melhores amigos.</p>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Footer CTA */}
      {showFloatingFooter && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] py-3.5 px-4 z-50"
        >
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex h-10 w-10 rounded-full bg-amber-50 items-center justify-center text-amber-500 shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-xs sm:text-sm md:text-base tracking-tight leading-none">Método PetLeve Completo</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-slate-400 line-through">R$ 197,00</span>
                  <span className="text-xs sm:text-sm font-black text-amber-500 font-mono">R$ 97,00</span>
                  <span className="hidden sm:inline-block text-[10px] text-green-700 bg-green-50 px-1.5 py-0.5 rounded font-bold">50% OFF ATIVO</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-1.5 text-xs text-green-700 bg-green-50 px-2.5 py-1.5 rounded-xl font-medium border border-green-100/60">
                <ShieldCheck className="h-4 w-4" /> Compra Segura
              </div>
              <button
                onClick={handleOpenCheckout}
                className="bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-amber-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
              >
                COMPRAR AGORA <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Simulated Checkout Overlay Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        productPrice={97.0}
      />
    </div>
  );
}
