export function Home() {
  return (
    <>
      <div className="flex flex-col w-full font-body-md text-on-surface">
{/*  1. HERO SECTION  */}
<section className="relative w-full overflow-hidden bg-primary-container -mt-20 pt-32 pb-16 lg:pt-20 lg:pb-0 h-auto lg:h-[550px] flex flex-col justify-center">
{/*  Background Image with Gradient Scrim  */}
<div className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform duration-1000 ease-out" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjSLHzylq14BYxzO169gjC0p74WUJn7XIQCHb3RNngaP_O8CYcRDej9LerOU4PNY-BxKTHl8Ui0ZJAzAqWQiJiyiJ0cbBoZ6a9I8STDyyBhU-ssk0pbacvtmFQzCM5qfJgKzBz97J__8lWTqoqcrDZOEqypwyDyAomfM1FVANHmD2BW-aZH7hb-oebuP7BSvfy4ASYk_VgVuqFwyhk_oCqDQkuyYbj4afwS1pRpiv9hPaamKFRP0rR')"}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary-container/70 z-10 backdrop-blur-[1px]"></div>
<div className="relative z-20 w-full px-gutter lg:px-margin max-w-7xl mx-auto flex flex-col items-start justify-center">

{/*  Main Headline  */}
<h1 className="font-display text-display-mobile lg:text-display text-on-primary max-w-4xl tracking-tight leading-tight mb-space-md">
        Soluciones Integrales para tu Propiedad en Margarita
      </h1>
{/*  Subtitle  */}
<p className="font-body-lg text-body-lg text-surface-container-high max-w-3xl leading-relaxed mb-space-xl">
        Limpieza profunda de tanques con suministro inmediato de agua, climatización, plomería, electricidad, remodelaciones de lujo y construcción civil de alta resistencia marina.
      </p>
{/*  CTAs Group  */}
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto mb-space-xl">
<a className="inline-flex items-center justify-center gap-space-sm px-space-lg py-4 rounded-xl bg-secondary-container text-on-secondary font-title text-title shadow-xl hover:bg-secondary transition-all transform hover:-translate-y-0.5" href="#contacto">
<span className="material-symbols-outlined text-[22px]">calculate</span>
<span className="">Solicitar Cotización Inmediata</span>
</a>
<a className="inline-flex items-center justify-center gap-space-sm px-space-lg py-4 rounded-xl bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 backdrop-blur-md text-on-primary font-title text-title transition-all" href="#servicios">
<span className="material-symbols-outlined text-[20px]">construction</span>
<span className="">Explorar Servicios</span>
</a>
</div>
{/*  Quick Highlights Strip  */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md w-full pt-space-lg border-t border-surface-container-highest/20">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-tertiary-fixed text-[22px]">emergency</span>
</div>
<div className="flex flex-col">
<span className="font-title text-body-md text-on-primary">Atención Inmediata</span>
<span className="font-body-sm text-body-sm text-surface-container-high">Respuesta rápida en toda la isla</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary-fixed text-[22px]">verified_user</span>
</div>
<div className="flex flex-col">
<span className="font-title text-body-md text-on-primary">Técnicos Certificados</span>
<span className="font-body-sm text-body-sm text-surface-container-high">Ingenieros e instaladores expertos</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-tertiary-fixed text-[22px]">workspace_premium</span>
</div>
<div className="flex flex-col">
<span className="font-title text-body-md text-on-primary">Garantía en Cada Obra</span>
<span className="font-body-sm text-body-sm text-surface-container-high">Materiales anti-salitre duraderos</span>
</div>
</div>
</div>
</div>
</section>
{/*  2. SECCIÓN QUIÉNES SOMOS  */}
<section className="w-full bg-surface-container-lowest py-space-xl lg:py-24" id="quienes-somos">
<div className="w-full px-gutter lg:px-margin max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
<div className="max-w-2xl">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container mb-space-xs block font-bold">
            Formalidad Operativa • Excelencia Técnica
          </span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight">
            Cuidamos el valor, la funcionalidad y la estética de tus inmuebles en Margarita
          </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Un enfoque integral de ingeniería adaptado al ecosistema insular: soluciones resistentes al salitre y gestión sin contratiempos.
        </p>
</div>
{/*  3 Key Pillars  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-xl">
{/*  Pillar 1  */}
<div className="bg-surface-container-low p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
<div>
<div className="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary-container mb-space-md shadow-sm group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[30px] text-secondary-container">engineering</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">Gestión Integral sin Complicaciones</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Supervisión rigurosa de principio a fin. Cronogramas exactos, informes fotográficos de avance y presupuestos transparentes sin sorpresas imprevistas.
            </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-secondary-container font-title text-body-sm">
<span className="">Control técnico activo</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
{/*  Pillar 2  */}
<div className="bg-surface-container-low p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
<div>
<div className="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary-container mb-space-md shadow-sm group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[30px] text-on-tertiary-container">group_work</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">Equipo Multidisciplinario</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Cuadrillas técnicas propias en la isla dotadas con maquinaria y herramientas industriales de precisión para plomería, climatización y albañilería.
            </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-on-tertiary-container font-title text-body-sm">
<span className="">Capacitación continua</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
{/*  Pillar 3  */}
<div className="bg-surface-container-low p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
<div>
<div className="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary-container mb-space-md shadow-sm group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[30px] text-primary-container">water_drop</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">Durabilidad Costera Caribeña</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Selección técnica de selladores epóxicos, recubrimientos marinos e inoxidables diseñados específicamente para resistir la humedad y la salinidad de Nueva Esparta.
            </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-primary-container font-title text-body-sm">
<span className="">Materiales grado marino</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
</div>
{/*  Stat Counter Strip  */}
<div className="bg-primary text-on-primary rounded-2xl p-space-lg lg:p-space-xl shadow-xl flex flex-wrap items-center justify-around gap-space-lg">
<div className="flex flex-col items-center text-center">
<span className="font-display text-display-mobile lg:text-display text-secondary-container font-extrabold">+10</span>
<span className="font-title text-title text-surface-container-lowest">Años de Experiencia</span>
<span className="font-body-sm text-body-sm text-surface-container-high">Operación ininterrumpida</span>
</div>
<div className="w-px h-16 bg-surface-container-highest/20 hidden md:block"></div>
<div className="flex flex-col items-center text-center">
<span className="font-display text-display-mobile lg:text-display text-tertiary-fixed font-extrabold">+300</span>
<span className="font-title text-title text-on-primary">Proyectos Culminados</span>
<span className="font-body-sm text-body-sm text-surface-container-high">Villas, condominios y locales</span>
</div>
<div className="w-px h-16 bg-surface-container-highest/20 hidden md:block"></div>
<div className="flex flex-col items-center text-center">
<span className="font-display text-display-mobile lg:text-display text-surface-container-lowest font-extrabold">100%</span>
<span className="font-title text-title text-surface-container-lowest">Satisfacción Garantizada</span>
<span className="font-body-sm text-body-sm text-surface-container-high">Cero compromisos de calidad</span>
</div>
</div>
</div>
</section>
{/*  3. SECCIÓN DE SERVICIOS  */}
<section className="w-full bg-surface-container-low py-space-xl lg:py-24" id="servicios">
<div className="w-full px-gutter lg:px-margin max-w-7xl mx-auto">
{/*  Section Title & Filter Tabs  */}
<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container font-bold mb-space-xs">
          Portafolio Especializado
        </span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight mb-space-sm">
          Servicios Profesionales de Mantenimiento y Obra Civil
        </h2>
<p className="font-body-lg text-body-md lg:text-body-lg text-on-surface-variant mb-space-lg">
          Respuestas técnicas ágiles con estándares industriales para residencias familiares, posadas, hoteles y comercios.
        </p>
{/*  Category Badges / Pills  */}
<div className="inline-flex p-1.5 bg-surface-container-high rounded-full shadow-inner gap-1">
<button className="filter-tab px-space-md py-space-xs rounded-full font-title text-label-lg transition-all bg-primary text-on-primary shadow-sm" id="btn-all" >
            Todos los Servicios
          </button>
<button className="filter-tab px-space-md py-space-xs rounded-full font-title text-label-lg transition-all text-on-surface-variant hover:text-on-surface" id="btn-mantenimiento" >
            Mantenimiento Preventivo &amp; Correctivo
          </button>
<button className="filter-tab px-space-md py-space-xs rounded-full font-title text-label-lg transition-all text-on-surface-variant hover:text-on-surface" id="btn-obras" >
            Obras &amp; Construcción Civil
          </button>
</div>
</div>
{/*  Services Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="services-grid">
{/*  Card 1: Tanques (Highlighted VIP Service)  */}
<div className="service-card cat-mantenimiento bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-container via-tertiary-fixed to-primary-container"></div>
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed/20 flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-[28px]">maps</span>
</div>
<span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-title uppercase tracking-wider">
                Servicio Estrella
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
              Tanques Subterráneos y Aéreos
            </h3>
<div className="mb-space-sm p-space-sm bg-surface-container-low rounded-lg">
<p className="font-title text-body-sm text-secondary-container font-semibold">
                Lavado profundo y coordinación de llenado inmediato con agua 100% limpia.
              </p>
</div>
<p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
              Desinfección química grado alimenticio con hipoclorito certificado, retiro de sedimentos, sellado de fisuras, impermeabilización epóxica y chequeo técnico de bombas y presostatos.
            </p>
<ul className="space-y-space-xs mb-space-md font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Desinfección bacteriológica total</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Logística rápida de cisternas verificadas</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Calibración del sistema hidroneumático</span>
</li>
</ul>
</div>
<a className="w-full py-space-sm rounded-lg bg-surface-container text-primary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-secondary-container hover:text-on-secondary transition-colors" href="#contacto">
<span className="">Cotizar Limpieza de Tanque</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/*  Card 2: Aires Acondicionados  */}
<div className="service-card cat-mantenimiento bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container mb-space-md">
<span className="material-symbols-outlined text-[28px]">mode_fan</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
              Aires Acondicionados &amp; Climatización
            </h3>
<p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
              Mantenimiento preventivo y correctivo con baño químico integral para split convencionales, inverter y centrales. Medición de presiones de gas ecológico y protección anti-salitre.
            </p>
<ul className="space-y-space-xs mb-space-md font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Desarme completo y lavado de serpentines</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Carga y balanceo de gas R410a / R32</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Revisión de tarjetas electrónicas y relés</span>
</li>
</ul>
</div>
<a className="w-full py-space-sm rounded-lg bg-surface-container text-primary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-secondary-container hover:text-on-secondary transition-colors" href="#contacto">
<span className="">Agendar Mantenimiento de A/A</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/*  Card 3: Plomería General  */}
<div className="service-card cat-mantenimiento bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container mb-space-md">
<span className="material-symbols-outlined text-[28px]">plumbing</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
              Plomería y Sistemas Hidráulicos
            </h3>
<p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
              Diagnóstico de fugas no visibles, instalación de líneas de termofusión PPR, mantenimiento de presurizadores y reparación de griferías de alta gama en baños y piscinas.
            </p>
<ul className="space-y-space-xs mb-space-md font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Termofusión para presiones constantes</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Detección técnica de filtraciones</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Bombas de achique y sanitarios suspendidos</span>
</li>
</ul>
</div>
<a className="w-full py-space-sm rounded-lg bg-surface-container text-primary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-secondary-container hover:text-on-secondary transition-colors" href="#contacto">
<span className="">Solicitar Plomero Especialista</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/*  Card 4: Electricidad y Tableros  */}
<div className="service-card cat-mantenimiento bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container mb-space-md">
<span className="material-symbols-outlined text-[28px]">electric_bolt</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
              Electricidad &amp; Tableros de Control
            </h3>
<p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
              Actualización de acometidas, balanceo de cargas eléctricas, instalación de breakers industriales, luminarias LED decorativas y conexión para plantas eléctricas de respaldo.
            </p>
<ul className="space-y-space-xs mb-space-md font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Protección contra fluctuaciones de voltaje</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Cableado ignífugo estructurado</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Automatización de luminarias exteriores</span>
</li>
</ul>
</div>
<a className="w-full py-space-sm rounded-lg bg-surface-container text-primary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-secondary-container hover:text-on-secondary transition-colors" href="#contacto">
<span className="">Revisión de Tableros Eléctricos</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/*  Card 5: Jardinería Costera  */}
<div className="service-card cat-mantenimiento bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container mb-space-md">
<span className="material-symbols-outlined text-[28px]">yard</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
              Jardinería y Paisajismo Costero
            </h3>
<p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
              Mantenimiento de áreas verdes en condiciones de alta salinidad y sequía, poda de palmeras, instalación de césped bermuda, control de plagas y riego inteligente por goteo.
            </p>
<ul className="space-y-space-xs mb-space-md font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Especies botánicas adaptadas al sol tropical</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Sistemas de riego para máximo ahorro de agua</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Embellecimiento de accesos y piscinas</span>
</li>
</ul>
</div>
<a className="w-full py-space-sm rounded-lg bg-surface-container text-primary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-secondary-container hover:text-on-secondary transition-colors" href="#contacto">
<span className="">Coordinar Paisajismo</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/*  Card 6: Remodelaciones Integrales  */}
<div className="service-card cat-obras bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container mb-space-md">
<span className="material-symbols-outlined text-[28px]">countertops</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
              Remodelaciones Integrales
            </h3>
<p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
              Renovación completa de cocinas con mesones de cuarzo, salas de baño modernas, microcemento, dry-wall hidrófugo y pisos de porcelanato rectificado en áreas sociales.
            </p>
<ul className="space-y-space-xs mb-space-md font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Diseño 3D previo y despiece de acabados</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Carpintería de alta resistencia a la humedad</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span>
<span className="">Ejecución limpia sin afectar vecinos</span>
</li>
</ul>
</div>
<a className="w-full py-space-sm rounded-lg bg-surface-container text-primary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-secondary-container hover:text-on-secondary transition-colors" href="#contacto">
<span className="">Planificar Remodelación</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/*  Card 7: Construcción y Obra Civil  */}
<div className="service-card cat-obras bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"><div><div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container mb-space-md"><span className="material-symbols-outlined text-[28px]">architecture</span></div><h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Ingeniería, Arquitectura y Diseño 3D</h3><p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed mb-space-md">Equipo profesional para desarrollo integral de proyectos: levantamientos arquitectónicos, planos técnicos en AutoCAD, modelado 3D, renders hiperrealistas, diseño de espacios y cálculos estructurales certificados para construcciones en zonas costeras.</p><ul className="space-y-space-xs mb-space-md font-body-sm text-body-sm text-on-surface"><li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span><span className="">Planos técnicos en AutoCAD y memorias descriptivas</span></li><li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span><span className="">Modelado 3D y renders hiperrealistas (fotorrealismo)</span></li><li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span><span className="">Diseño arquitectónico y distribución de espacios</span></li><li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span><span className="">Cálculo estructural antisísmico y resistencia marina</span></li></ul></div><a className="w-full py-space-sm rounded-lg bg-surface-container text-primary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-secondary-container hover:text-on-secondary transition-colors" href="#contacto"><span className="">Consultar Proyecto Arquitectónico</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span></a></div><div className="service-card cat-obras bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"><div><div className="flex items-center justify-between mb-space-md"><div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container"><span className="material-symbols-outlined text-[28px]">domain</span></div><div className="bg-surface-container-low px-space-sm py-1 rounded-lg text-center border border-outline-variant/30"><span className="block font-title text-label-sm text-primary font-bold leading-tight">10 Años</span><span className="font-body-sm text-[11px] text-on-surface-variant block leading-tight">Garantía de estanqueidad</span></div></div><h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Construcción Civil e Impermeabilización de Techos</h3><p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed mb-space-md">Ejecución de fundaciones, vigas, sobrepisos y muros perimetrales. Aplicación de mantos asfálticos de alta resistencia térmica y poliuretano elástico para techos expuestos a los vientos marinos.</p><ul className="space-y-space-xs mb-space-md font-body-sm text-body-sm text-on-surface"><li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span><span className="">Mantos asfálticos y poliuretano elástico</span></li><li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span><span className="">Fundaciones y muros con refuerzo anti-salitre</span></li><li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span><span className="">Garantía de estanqueidad certificada</span></li></ul></div><a className="w-full py-space-sm rounded-lg bg-primary text-on-primary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-secondary-container transition-colors shadow-sm" href="#contacto"><span className="">Inspección Técnica de Techo</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span></a></div><div className="service-card cat-obras bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"><div><div className="flex items-center justify-between mb-space-md"><div className="w-12 h-12 rounded-xl bg-tertiary-fixed/20 flex items-center justify-center text-on-tertiary-container"><span className="material-symbols-outlined text-[28px]">verified</span></div><div className="bg-surface-container-low px-space-sm py-1 rounded-lg text-center border border-outline-variant/30"><span className="block font-title text-label-sm text-secondary-container font-bold leading-tight">+10 Años</span><span className="font-body-sm text-[11px] text-on-surface-variant block leading-tight">En Nueva Esparta</span></div></div><h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Experiencia y Respaldo de Nuestro Equipo</h3><p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed mb-space-md">Más de 10 años de trayectoria en Nueva Esparta con ingenieros colegiados, arquitectos y maestros de obra certificados. Rigor técnico y supervisión continua en cada proyecto.</p><ul className="space-y-space-xs mb-space-md font-body-sm text-body-sm text-on-surface"><li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span><span className="">Ingenieros CIV colegiados e inspectores de obra</span></li><li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span><span className="">Supervisión de obra y control de calidad garantizado</span></li><li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check</span><span className="">Presupuestos transparentes sin sobrecostos</span></li></ul></div><a className="w-full py-space-sm rounded-lg bg-surface-container text-primary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-secondary-container hover:text-on-secondary transition-colors" href="#contacto"><span className="">Solicitar Asesoría Técnica</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span></a></div>
</div>
</div>
</section>
{/*  4. SECCIÓN DE PROYECTOS (PORTAFOLIO ANTES Y DESPUÉS)  */}

{/*  5. SECCIÓN DE CONTACTO (LEAD GENERATION MINIMALISTA)  */}
<section className="w-full py-space-xl lg:py-24 bg-surface-container-lowest" id="contacto">
<div className="w-full px-gutter lg:px-margin max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/*  Left: Direct Info Column (5 cols)  */}
<div className="lg:col-span-5 flex flex-col justify-between space-y-space-lg">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container font-bold mb-space-xs block">
              Atención Inmediata
            </span>
<h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight mb-space-md">
              Hablemos de tu Proyecto o Mantenimiento
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
              Nuestro equipo técnico atiende solicitudes de emergencia, proyectos arquitectónicos y programas de mantenimiento preventivo para propietarios e inquilinos en toda la Isla de Margarita.
            </p>
{/*  Contact Tiles  */}
<div className="space-y-space-md">
{/*  WhatsApp / Phone  */}
<a className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all group" href="https://wa.me/584122138418" rel="noopener noreferrer" target="_blank">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed-dim/20 flex items-center justify-center text-on-tertiary-container group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">chat</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">WhatsApp Técnico Directo</span>
<span className="font-title text-body-lg text-primary">+58 412-213-8418</span>
</div>
</a>
{/*  Email  */}
<div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[26px]">mail</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Correo Electrónico</span>
<span className="font-title text-body-md text-primary">contacto@dsservicios.com</span>
</div>
</div>
</div>
</div>
{/*  Coverage Badge Card  */}
<div className="p-space-lg bg-surface-container-lowest rounded-2xl shadow-sm">
<h4 className="font-title text-body-md text-primary mb-space-xs flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary-container text-[20px]">location_on</span>
<span className="">Cobertura en Todo el Estado Nueva Esparta</span>
</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Atención diaria prioritaria en <strong>Pampatar, Costa Azul, Playa El Ángel, Jorge Coll, Playa Moreno, Porlamar, Juan Griego, El Yaque</strong> y municipios adyacentes.
            </p>
</div>
</div>
{/*  Right: Minimalist Lead Form (7 cols)  */}
<div className="lg:col-span-7 bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-2xl shadow-xl">
<div className="mb-space-lg">
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
              Solicitar Presupuesto sin Compromiso
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Completa los datos a continuación y un asesor técnico se comunicará contigo en menos de 30 minutos.
            </p>
</div>
<form className="space-y-space-md" id="quote-form" >
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex flex-col space-y-space-xs">
<label className="font-title text-body-sm text-primary" htmlFor="name">Nombre y Apellido *</label>
<input className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface shadow-inner focus:outline-none focus:ring-2 focus:ring-on-tertiary-container placeholder:text-outline-variant text-body-md" id="name" placeholder="Ej. Carlos Mendoza" required="" type="text" />
</div>
<div className="flex flex-col space-y-space-xs">
<label className="font-title text-body-sm text-primary" htmlFor="phone">Teléfono / WhatsApp *</label>
<input className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface shadow-inner focus:outline-none focus:ring-2 focus:ring-on-tertiary-container placeholder:text-outline-variant text-body-md" id="phone" placeholder="Ej. 0412 000 0000" required="" type="tel" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex flex-col space-y-space-xs">
<label className="font-title text-body-sm text-primary" htmlFor="location">Ubicación en la Isla *</label>
<input className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface shadow-inner focus:outline-none focus:ring-2 focus:ring-on-tertiary-container placeholder:text-outline-variant text-body-md" id="location" placeholder="Ej. Pampatar, Urb. Playa El Ángel" required="" type="text" />
</div>
<div className="flex flex-col space-y-space-xs">
<label className="font-title text-body-sm text-primary" htmlFor="service-type">Tipo de Servicio Requerido *</label>
<select className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface shadow-inner focus:outline-none focus:ring-2 focus:ring-on-tertiary-container text-body-md" id="service-type" required="">
<option disabled="" selected="" value="">Selecciona una categoría</option>
<option value="tanques">Lavado de Tanques + Llenado Inmediato</option>
<option value="aires">Aires Acondicionados • Mantenimiento / Fuga</option>
<option value="plomeria">Plomería • Bombas / Filtración</option>
<option value="electricidad">Electricidad • Tableros / Iluminación</option>
<option value="remodelacion">Remodelación de Interiores / Cocinas</option><option value="ingenieria">Ingeniería y Arquitectura (Planos / Renders 3D)</option>
<option value="impermeabilizacion">Impermeabilización de Techos</option>
<option value="jardineria">Jardinería • Paisajismo Costero</option>
<option value="otro">Otro Requerimiento Específico</option>
</select>
</div>
</div>
<div className="flex flex-col space-y-space-xs">
<label className="font-title text-body-sm text-primary" htmlFor="message">Detalles del Requerimiento</label>
<textarea className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface shadow-inner focus:outline-none focus:ring-2 focus:ring-on-tertiary-container placeholder:text-outline-variant text-body-md" id="message" placeholder="Describe brevemente el trabajo: dimensiones del tanque, cantidad de aires acondicionados, tiempo estimado deseado..." rows="3"></textarea>
</div>
<button className="w-full py-4 rounded-xl bg-secondary-container text-on-secondary font-title text-title shadow-lg hover:bg-secondary transition-all flex items-center justify-center gap-space-sm transform active:scale-95" type="submit">
<span className="material-symbols-outlined text-[22px]">send</span>
<span className="">Enviar y Solicitar Presupuesto</span>
</button>
<div className="hidden p-space-sm rounded-lg bg-tertiary-fixed/30 text-on-tertiary-container text-center font-title text-body-sm" id="form-feedback">
              ¡Gracias por contactarnos! Tu solicitud ha sido recibida con alta prioridad. Nos comunicaremos por WhatsApp de inmediato.
            </div>
<p className="font-body-sm text-body-sm text-center text-on-surface-variant pt-space-xs">
              Privacidad garantizada. No compartimos tus datos con terceros.
            </p>
</form>
</div>
</div>
</div>
</section>
{/*  Interactive script for dynamic category filter and form submission  */}

</div>
    </>
  );
}
