import React, { useState, useMemo } from 'react';

export function LandingLimpieza() {
  const [liters, setLiters] = useState(5000);
  const [wantsTruck, setWantsTruck] = useState(false);
  const [truckCapacity, setTruckCapacity] = useState("25"); // "25" for 5000L, "35" for 10000L
  
  const [faqOpen, setFaqOpen] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false
  });

  const toggleFaq = (faqId) => {
    setFaqOpen(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Logic rules from code.html
  const cleaningPrice = useMemo(() => {
    if (liters < 5000) return 60;
    if (liters >= 5000 && liters <= 9000) return (liters / 1000) * 12;
    if (liters >= 10000 && liters <= 19000) return (liters / 1000) * 10;
    return 160;
  }, [liters]);

  const truckPrice = wantsTruck ? parseInt(truckCapacity, 10) : 0;
  const grandTotal = cleaningPrice + truckPrice;

  const percentage = 12 + ((liters - 1000) / (20000 - 1000)) * 78;

  let tankSubText = "";
  if (liters <= 4000) {
    tankSubText = "Tanque Pequeño / Apartamento";
  } else if (liters <= 9000) {
    tankSubText = "Tanque Residencial Promedio";
  } else if (liters <= 15000) {
    tankSubText = "Quinta / Casa Grande / Comercio";
  } else {
    tankSubText = "Conjunto Residencial / Capacidad Mayor";
  }

  const truckText = wantsTruck ? ` Adicionalmente, solicito un camión de agua dulce de ${truckCapacity === "25" ? "5.000 L" : "10.000 L"}.` : "";
  const baseText = `¡Hola! Deseo cotizar la limpieza de mi tanque subterráneo en la Isla de Margarita. Mi tanque es de aprox. ${formatNumber(liters)} litros.${truckText} El monto estimado en la web es de $${grandTotal} USD.`;
  const encodedText = encodeURIComponent(baseText);
  const whatsappLink = `https://wa.me/584122138418?text=${encodedText}`;

  return (
    <div className="bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-sky-100 selection:text-sky-900 min-h-screen flex flex-col">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes waveFlow {
          0% { transform: translateX(0) translateZ(0) scaleY(1); }
          50% { transform: translateX(-25%) translateZ(0) scaleY(1.1); }
          100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
        }
        .water-wave {
          position: absolute;
          top: -18px;
          left: 0;
          width: 200%;
          height: 24px;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z' fill='%2338BDF8' opacity='0.7'%3E%3C/path%3E%3C/svg%3E");
          background-size: 600px 24px;
          animation: waveFlow 4s linear infinite;
        }
        .water-wave-secondary {
          position: absolute;
          top: -14px;
          left: 0;
          width: 200%;
          height: 20px;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,40 C300,110 500,0 700,50 C900,100 1050,10 1200,30 L1200,120 L0,120 Z' fill='%230284C7' opacity='0.85'%3E%3C/path%3E%3C/svg%3E");
          background-size: 600px 20px;
          animation: waveFlow 6s linear infinite reverse;
        }
        
        .custom-range::-webkit-slider-runnable-track {
          width: 100%;
          height: 12px;
          cursor: pointer;
          background: #E2E8F0;
          border-radius: 9999px;
          border: 1px solid #CBD5E1;
        }
        .custom-range::-webkit-slider-thumb {
          height: 28px;
          width: 28px;
          border-radius: 50%;
          background: #0284C7;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
          margin-top: -8px;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.45), 0 0 0 4px #FFFFFF;
          transition: transform 0.15s ease, background 0.15s ease;
        }
        .custom-range::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          background: #0369A1;
        }
        .custom-range::-moz-range-track {
          width: 100%;
          height: 12px;
          cursor: pointer;
          background: #E2E8F0;
          border-radius: 9999px;
          border: 1px solid #CBD5E1;
        }
        .custom-range::-moz-range-thumb {
          height: 28px;
          width: 28px;
          border-radius: 50%;
          background: #0284C7;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.45), 0 0 0 4px #FFFFFF;
          transition: transform 0.15s ease, background 0.15s ease;
          border: none;
        }
        
        @keyframes waPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 8px 25px rgba(37, 211, 102, 0.45); }
          50% { transform: scale(1.06); box-shadow: 0 14px 35px rgba(37, 211, 102, 0.65); }
        }
        .wa-floating-btn {
          animation: waPulse 2.8s infinite ease-in-out;
        }
      `}} />

      {/* TOP BAR & HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow duration-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 sm:py-3">
          
          <a href="#" className="flex items-center gap-3 group">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqux5GrD6QuiHYE3jKAALBPpM2ts4SYz6-Dz1TRL5OC3bD5ZqR_zZCEKMF3fdSC88KFfI-p_sKfmg_DcwzBORmB0_TaU6PJ4IwC6RO7TisuRKUNjKzIplt19yJxwN1nqT2Rdox8qh8szNrluaTKtOB7qFh3AZgzGS-yRCfwTixdor0kOEYxIA_RVdiZGEANXXwuXLiltGIgMX1CuxyR0E3-D4RX-nml1V1x1RXmOxF-sjVil0scEwF2lEycf4x9Ef3Z1E" alt="DS Servicios Integrales" className="h-16 sm:h-20 md:h-24 lg:h-[120px] w-auto object-contain transition-transform group-hover:scale-105 duration-200" />
          </a>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Atención Inmediata</span>
              <span className="text-sm font-bold text-slate-900 font-mono">+58 412-2138418</span>
            </div>
            <a href="tel:+584122138418" className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md hover:shadow-lg transition-all transform active:scale-95">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="hidden sm:inline">Llamar Ahora</span>
              <span className="sm:hidden">Llamar</span>
            </a>
            <a href="https://wa.me/584122138418" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-white via-sky-50/50 to-slate-50">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200/80 text-sky-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            Especialistas Certificados en Saneamiento Hídrico
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Agua pura y segura para tu familia.
            <span className="block mt-2 bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-800 bg-clip-text text-transparent">
              Limpieza profesional de tanques subterráneos
            </span>
            <span className="text-2xl sm:text-4xl text-slate-700 font-semibold block mt-1">en la Isla de Margarita</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-10">
            Servicio rápido, higiénico y 100% garantizado en toda la isla sin recargos. Eliminamos lodos, bacterias y sedimentos para devolverle la pureza a tu hogar o comercio.
          </p>

          {/* Trust Badges Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-sky-300 transition group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Salud Garantizada</p>
                <p className="text-sm font-bold text-slate-800">100% Biodegradable</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-sky-300 transition group">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Cero Discriminación</p>
                <p className="text-sm font-bold text-slate-800">Toda la Isla sin Recargo</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-sky-300 transition group">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Alto Rendimiento</p>
                <p className="text-sm font-bold text-slate-800">Equipos Especializados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COTIZADOR INTERACTIVO */}
      <section id="cotizador" className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-widest mb-3 border border-cyan-200">
            Calculadora en Tiempo Real
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cotiza tu Limpieza en Segundos
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Desliza el control según la capacidad estimada de tu tanque subterráneo y obtén un presupuesto transparente y al instante.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Water Tank */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-sky-50/40 p-5 sm:p-6 rounded-2xl border border-slate-200/80">
            
            <div className="relative w-40 sm:w-52 h-56 sm:h-80 bg-slate-100/90 rounded-[2.5rem] border-4 border-slate-700/80 p-2 shadow-inner flex flex-col justify-end overflow-hidden">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-600 rounded-b-md z-20"></div>
              <div className="absolute top-2 left-4 w-3 h-3 rounded-full bg-slate-300 border border-slate-400 z-20"></div>
              
              <div className="absolute left-3 top-8 bottom-8 flex flex-col justify-between text-[10px] font-mono font-bold text-slate-400 z-20 select-none pointer-events-none">
                <span>20k</span><span>15k</span><span>10k</span><span>5k</span><span>1k</span>
              </div>

              <div className="absolute top-0 right-3 w-4 h-full bg-gradient-to-b from-white/60 via-white/20 to-transparent rounded-r-full z-20 pointer-events-none"></div>

              <div className="relative w-full rounded-b-[2rem] bg-gradient-to-t from-sky-600 via-sky-500 to-cyan-400 overflow-hidden shadow-lg transition-all duration-300 ease-out" style={{ height: `${percentage}%` }}>
                <div className="water-wave"></div>
                <div className="water-wave-secondary"></div>
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              </div>

              <div className="absolute bottom-4 right-3 text-[10px] font-bold text-sky-900 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full z-20 border border-sky-300">
                Nivel de Agua
              </div>
            </div>

            <div className="text-center mt-6 mb-2">
              <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Capacidad Seleccionada</span>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight text-sky-600">
                {formatNumber(liters)} L
              </div>
              <span className="text-xs text-slate-500 font-medium">{tankSubText}</span>
            </div>

            <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-500 text-center max-w-[200px] sm:max-w-none">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              <span>Calculado para tanques cilíndricos o rectangulares</span>
            </div>
          </div>

          {/* Controls */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="hidden sm:flex justify-between items-center">
                <label htmlFor="tankSlider" className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-black">1</span>
                  Selecciona los litros de tu tanque:
                </label>
                <div className="bg-sky-50 text-sky-700 px-3 py-1 rounded-lg font-mono font-bold text-sm border border-sky-100">
                  Paso de 1.000 L
                </div>
              </div>

              <div className="px-2 pt-2">
                <input 
                  type="range" 
                  id="tankSlider" 
                  min="1000" 
                  max="20000" 
                  step="1000" 
                  value={liters} 
                  onChange={(e) => setLiters(Number(e.target.value))}
                  className="w-full custom-range appearance-none bg-transparent" 
                />
                <div className="flex justify-between text-xs font-semibold text-slate-400 mt-2 font-mono">
                  <span className="hidden sm:inline">1.000 L (Mín.)</span><span className="sm:hidden">1k</span>
                  <span className="hidden sm:inline">5.000 L</span><span className="sm:hidden">5k</span>
                  <span className="hidden sm:inline">10.000 L</span><span className="sm:hidden">10k</span>
                  <span className="hidden sm:inline">15.000 L</span><span className="sm:hidden">15k</span>
                  <span className="hidden sm:inline">20.000 L +</span><span className="sm:hidden">20k+</span>
                </div>
              </div>

              <div className="pt-1">
                <span className="text-xs font-medium text-slate-500 block mb-2 sm:inline sm:mb-0 sm:mr-3 text-center sm:text-left">Comunes:</span>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                  {[3000, 5000, 10000, 20000].map(val => (
                    <button 
                      key={val}
                      type="button" 
                      onClick={() => setLiters(val)}
                      className={`text-xs font-semibold px-3 py-1.5 sm:py-1 rounded-full transition ${liters === val ? 'border border-sky-500 bg-sky-50 text-sky-700 shadow-sm' : 'border border-slate-200 hover:border-sky-400 hover:bg-sky-50 text-slate-600 bg-white'}`}
                    >
                      {formatNumber(val)} L{val === 20000 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Checkbox Truck */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 transition-all hover:border-slate-300">
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="truckCheckbox" 
                  checked={wantsTruck}
                  onChange={(e) => setWantsTruck(e.target.checked)}
                  className="mt-1 w-5 h-5 text-sky-600 rounded border-slate-300 focus:ring-sky-500 cursor-pointer" 
                />
                <div className="flex-1">
                  <label htmlFor="truckCheckbox" className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer block leading-snug">
                    ¿Desea un camión de agua nueva y limpia para surtir el tanque al terminar?
                    <span className="inline-block mt-1.5 sm:mt-0 sm:ml-2 align-middle text-[10px] sm:text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">Recomendado</span>
                  </label>
                  <p className="text-xs text-slate-500 mt-2 sm:mt-1">
                    Llegamos con agua dulce potable garantizada para dejar su sistema 100% operativo inmediatamente tras la desinfección.
                  </p>

                  {wantsTruck && (
                    <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="relative flex items-center p-3 rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-sky-500 transition group has-[:checked]:border-sky-600 has-[:checked]:bg-sky-50/50">
                        <input 
                          type="radio" 
                          name="truckOption" 
                          value="25" 
                          checked={truckCapacity === "25"}
                          onChange={(e) => setTruckCapacity(e.target.value)}
                          className="w-4 h-4 text-sky-600 focus:ring-sky-500" 
                        />
                        <div className="ml-3">
                          <span className="block text-xs font-bold text-slate-900 group-hover:text-sky-700">Camión de 5.000 L</span>
                          <span className="block text-xs font-extrabold text-sky-600">+$25 USD</span>
                        </div>
                      </label>

                      <label className="relative flex items-center p-3 rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-sky-500 transition group has-[:checked]:border-sky-600 has-[:checked]:bg-sky-50/50">
                        <input 
                          type="radio" 
                          name="truckOption" 
                          value="35" 
                          checked={truckCapacity === "35"}
                          onChange={(e) => setTruckCapacity(e.target.value)}
                          className="w-4 h-4 text-sky-600 focus:ring-sky-500" 
                        />
                        <div className="ml-3">
                          <span className="block text-xs font-bold text-slate-900 group-hover:text-sky-700">Camión de 10.000 L</span>
                          <span className="block text-xs font-extrabold text-sky-600">+$35 USD</span>
                        </div>
                      </label>
                    </div>
                  )}
                  {wantsTruck && (
                    <p className="text-[11px] text-slate-400 italic mt-2.5">
                      * Nota: Si requiere más de un camión o una cantidad distinta, podrá especificarlo al coordinar por WhatsApp.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Real-Time Breakdown */}
            <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="w-full md:w-auto space-y-1.5 text-center md:text-left">
                <div className="flex justify-between md:justify-start gap-4 text-xs text-slate-400">
                  <span>Limpieza Profunda:</span>
                  <span className="font-mono font-bold text-slate-200">${cleaningPrice}</span>
                </div>
                {wantsTruck && (
                  <div className="flex justify-between md:justify-start gap-4 text-xs text-slate-400">
                    <span>Camión de Agua Dulce:</span>
                    <span className="font-mono font-bold text-slate-200">+${truckPrice}</span>
                  </div>
                )}
                <div className="pt-4 mt-2 sm:pt-2 sm:mt-0 border-t border-slate-700 sm:border-slate-800 flex flex-col sm:flex-row items-center sm:items-baseline justify-between md:justify-start gap-1 sm:gap-4">
                  <span className="text-sm font-bold text-slate-300 uppercase tracking-wider">Total Estimado:</span>
                  <div className="text-4xl sm:text-3xl font-black font-mono text-cyan-400 mt-1 sm:mt-0">${grandTotal} <span className="text-sm sm:text-xs font-sans text-slate-400 font-normal ml-1 sm:ml-0">USD</span></div>
                </div>
                {liters >= 20000 && (
                  <p className="text-[11px] text-amber-300/90 leading-tight max-w-sm mt-1">
                    * Monto referencial. Para capacidades mayores a 20.000L, comuníquese directamente con nuestro equipo para una evaluación personalizada.
                  </p>
                )}
              </div>
              <div className="w-full md:w-auto shrink-0">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-extrabold text-white bg-emerald-500 hover:bg-emerald-400 shadow-xl shadow-emerald-500/25 transform active:scale-95 transition-all text-center group">
                  <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                  </svg>
                  <span>Solicitar Visita y Agendar</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* PLANES Y SERVICIOS */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-100 px-3 py-1.5 rounded-full border border-sky-200 shadow-sm">
              Planes a Medida
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-5 mb-4 tracking-tight">
              Soluciones Integrales por Sector
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Adaptamos nuestros servicios de limpieza, desinfección y suministro de agua a las necesidades específicas de tu infraestructura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Viviendas y Posadas */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col group hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-125"></div>
              <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-6 shadow-inner border border-sky-200">
                <span className="material-symbols-outlined text-3xl">home</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Viviendas y Posadas</h3>
              <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                Servicio rápido y eficiente diseñado para garantizar agua 100% pura y segura. Incluye vaciado, cepillado profundo, desinfección total y llenado inmediato con camión cisterna.
              </p>
              <a href="https://wa.me/584122138418?text=%C2%A1Hola!%20Deseo%20solicitar%20una%20visita%20para%20presupuestar%20el%20plan%20de%20Viviendas%20y%20Posadas." target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 w-full px-6 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-sky-600 transition-colors shadow-md">
                <span>Solicitar Visita</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

            {/* Conjuntos Residenciales */}
            <div className="bg-gradient-to-b from-sky-600 to-sky-700 rounded-3xl p-8 sm:p-10 border border-sky-500 shadow-2xl shadow-sky-900/30 relative overflow-hidden flex flex-col transform md:-translate-y-4 scale-100 md:scale-105 z-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/50 rounded-bl-[120px] -z-10"></div>
              <div className="absolute top-5 right-5 text-[10px] font-black bg-amber-400 text-amber-950 px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                Más Solicitado
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6 shadow-inner backdrop-blur-sm border border-white/30">
                <span className="material-symbols-outlined text-3xl">domain</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Conjuntos y Edificios</h3>
              <p className="text-sky-100 mb-8 flex-1 leading-relaxed">
                Atención especializada para condominios. Coordinación logística para minimizar el tiempo sin agua, desinfección de alto nivel y múltiples camiones cisternas para surtido continuo.
              </p>
              <a href="https://wa.me/584122138418?text=%C2%A1Hola!%20Deseo%20solicitar%20una%20visita%20para%20presupuestar%20el%20plan%20de%20Conjuntos%20Residenciales%20y%20Edificios." target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 w-full px-6 py-4 rounded-xl bg-white text-sky-900 font-bold hover:bg-sky-50 transition-colors shadow-xl">
                <span>Solicitar Visita</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

            {/* Hoteles y Comercios */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col group hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-125"></div>
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-6 shadow-inner border border-slate-200">
                <span className="material-symbols-outlined text-3xl">storefront</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Hoteles y Comercios</h3>
              <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                Servicio corporativo en horarios flexibles para no afectar la operatividad de tu negocio. Certificación sanitaria y suministro masivo de agua dulce garantizada.
              </p>
              <a href="https://wa.me/584122138418?text=%C2%A1Hola!%20Deseo%20solicitar%20una%20visita%20para%20presupuestar%20el%20plan%20de%20Hoteles%20y%20Comercios." target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 w-full px-6 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-sky-600 transition-colors shadow-md">
                <span>Solicitar Visita</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICIO ADICIONAL */}
      <section className="py-12 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
            <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                  Servicio Especializado de Recuperación de Agua
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Ideal para cuando su tanque ha sido surtido con agua sucia, turbia o de pozo profundo. Mediante floculación, filtración y tratamiento químico controlado, tratamos y recuperamos su agua sin necesidad de botarla.
                </p>
              </div>
              <div className="shrink-0 w-full lg:w-auto">
                <a href="https://wa.me/584122138418?text=%C2%A1Hola!%20Deseo%20coordinar%20una%20visita%20para%20el%20servicio%20de%20recuperaci%C3%B3n%20de%20agua%20en%20mi%20tanque." target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-400/25 active:scale-95">
                  <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>Solicitar Visita para Evaluación</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS Y SALUD ECOLÓGICA */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/70 border-2 border-emerald-200/80 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/30">
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-emerald-950 mb-1 flex items-center gap-2">
                Compromiso con la Salud y el Medio Ambiente
                <span className="text-xs bg-emerald-200 text-emerald-900 font-bold px-2 py-0.5 rounded-full">Grado Alimenticio</span>
              </h4>
              <p className="text-emerald-900/80 text-sm sm:text-base leading-relaxed">
                Utilizamos productos <strong>100% biodegradables y no tóxicos</strong>. Garantizamos un proceso riguroso y seguro que no altera la salud de tu familia ni modifica el sabor u olor natural del agua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONDICIONES Y REQUISITOS DEL SERVICIO */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Preparación Previa
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Requisitos Técnicos para la Visita
            </h3>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Para realizar una limpieza impecable y eficiente, solicitamos cumplir con estos 3 puntos sencillos:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 transition-all shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4"><div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 text-xl sm:text-2xl font-black shadow-inner">⚡</div><h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">1. Punto de Electricidad</h4></div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Contar con una toma eléctrica cercana y funcional disponible (110V o 220V) para conectar nuestras bombas de achique, hidrolavadoras y extractores de lodos.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 transition-all shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4"><div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 text-xl sm:text-2xl font-black shadow-inner">💧</div><h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">2. Reserva de Agua (500 L)</h4></div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dejar un aproximado de por lo menos 500 litros de agua en el fondo del tanque, los cuales extraeremos con nuestros equipos para el proceso de lavado, cepillado y extracción de sedimentos.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 transition-all shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4"><div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 text-xl sm:text-2xl font-black shadow-inner">🚰</div><h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">3. Punto de Drenaje</h4></div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Disponer de un desagüe, alcantarillado, drenaje o canal cercano para desechar de manera ordenada y limpia el agua sucia y lodos extraídos del fondo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES (ACCORDION) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Preguntas Frecuentes
            </h3>
            <p className="text-slate-500 text-sm mt-1">Todo lo que necesitas saber antes de solicitar nuestro servicio</p>
          </div>
          <div className="space-y-4">
            
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <button type="button" onClick={() => toggleFaq('faq1')} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-sky-600 transition">
                <span className="text-base sm:text-lg">¿Qué zonas de la isla atienden?</span>
                <svg className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${faqOpen.faq1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {faqOpen.faq1 && (
                <div className="px-6 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                  Atendemos <strong>toda la Isla de Margarita</strong> sin discriminación ni recargos adicionales (Porlamar, Pampatar, La Asunción, Juan Griego, Maneiro, Mariño, Tubores, Macanao, etc.). Nuestro equipo móvil llega a cualquier rincón con la misma tarifa plana.
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <button type="button" onClick={() => toggleFaq('faq2')} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-sky-600 transition">
                <span className="text-base sm:text-lg">¿Cuánto tiempo tarda la limpieza de un tanque?</span>
                <svg className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${faqOpen.faq2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {faqOpen.faq2 && (
                <div className="px-6 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                  El proceso promedio toma <strong>entre 2 y 4 horas</strong> dependiendo de la capacidad del tanque y del nivel de sedimentos y suciedad acumulada en el fondo y paredes.
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <button type="button" onClick={() => toggleFaq('faq3')} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-sky-600 transition">
                <span className="text-base sm:text-lg">¿Es necesario vaciar el tanque por completo antes de que lleguen?</span>
                <svg className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${faqOpen.faq3 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {faqOpen.faq3 && (
                <div className="px-6 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                  <strong>No.</strong> De hecho, es fundamental que deje al menos 500 litros de agua en el tanque, ya que la utilizamos con nuestras hidrolavadoras y bombas especiales para emulsionar los lodos y realizar la limpieza profunda.
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <button type="button" onClick={() => toggleFaq('faq4')} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-sky-600 transition">
                <span className="text-base sm:text-lg">¿Los productos que usan dejan olor o sabor en el agua?</span>
                <svg className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${faqOpen.faq4 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {faqOpen.faq4 && (
                <div className="px-6 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                  <strong>Para nada.</strong> Todos nuestros desinfectantes son 100% biodegradables, grado alimenticio y sanitarios, totalmente seguros para el consumo humano y diseñados para no dejar residuales tóxicos ni alterar el sabor u olor del agua potable.
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="text-center md:text-left">
              <div className="text-2xl font-extrabold text-white tracking-tight">
                DS <span className="text-sky-400">Servicios Integrales</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">
                Especialistas en limpieza, desinfección y recuperación de tanques subterráneos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Isla de Margarita, Nueva Esparta, Venezuela</span>
              </div>
              <a href="tel:+584122138418" className="text-white hover:text-sky-300 font-mono font-semibold flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z"></path>
                </svg>
                +58 412-2138418
              </a>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} DS Servicios Integrales. Todos los derechos reservados.</p>
            <p>Garantía de pureza e higiene en cada servicio realizado en Margarita.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <aside className="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/584122138418?text=%C2%A1Hola!%20Quisiera%20informaci%C3%B3n%20sobre%20la%20limpieza%20de%20tanques%20subterr%C3%A1neos." target="_blank" rel="noopener noreferrer" className="wa-floating-btn flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 group" aria-label="Contactar por WhatsApp">
          <svg className="w-7 h-7 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
          </svg>
          <span className="font-bold text-sm hidden sm:inline-block tracking-wide">¿Dudas? Escríbenos</span>
        </a>
      </aside>
    </div>
  );
}
