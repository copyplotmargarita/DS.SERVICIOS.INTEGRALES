export function Servicios() {
  return (
    <>
      <div className="flex flex-col w-full">
{/*  Top Ambient Banner & Services Title Hero  */}
<section className="relative w-full bg-primary text-on-primary overflow-hidden px-gutter lg:px-margin -mt-20 pt-36 pb-16 lg:pt-32 lg:pb-16 h-auto lg:min-h-[550px] flex flex-col justify-center">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-tertiary-fixed-dim/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary-container/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="max-w-6xl w-full mx-auto flex flex-col gap-space-lg relative z-10 overflow-hidden">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch">
<div className="lg:col-span-8 space-y-space-md flex flex-col justify-center">
<h1 className="font-display text-display-mobile md:text-display text-on-primary tracking-tight leading-tight break-words">
            Servicios Integrales de <span className="text-tertiary-fixed-dim">Ingeniería</span>, Construcción y Facility Management
          </h1>
<p className="font-body-lg text-body-lg text-on-primary-container max-w-3xl leading-relaxed">
            Diseño arquitectónico de vanguardia, obras civiles robustas y mantenimiento preventivo especializado para residencias de lujo, condominios y cadenas hoteleras en Pampatar, Porlamar, Costa Azul y Antolín del Campo.
          </p>
</div>
<div className="lg:col-span-4 bg-primary-container/80 backdrop-blur rounded-xl p-space-lg shadow-xl flex flex-col justify-between h-full">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-primary-container uppercase">Disponibilidad Inmediata</span>
<span className="inline-flex items-center gap-1 text-[11px] font-label-sm text-tertiary-fixed bg-tertiary-container px-2 py-0.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
              Operatividad 100%
            </span>
</div>
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary shadow-md">
<span className="material-symbols-outlined text-[26px]">engineering</span>
</div>
<div>
<p className="font-title text-title text-on-primary">Supervisión en Sitio</p>
<p className="font-body-sm text-body-sm text-on-primary-container">Ingenieros e inspectores colegiados en cada obra</p>
</div>
</div>
<div className="pt-space-xs flex flex-wrap items-center justify-between gap-2 text-on-primary-container font-body-sm text-body-sm">
<span>Margarita • Coche • Cubagua</span>
<span className="text-tertiary-fixed-dim font-title">Garantía Certificada</span>
</div>
</div>
</div>
{/*  Quick Search & Interactive Filtering Bar  */}
<div className="mt-space-md bg-surface-container-lowest text-on-surface rounded-xl p-space-md shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md w-full overflow-hidden">
<div className="relative flex-1 min-w-0 w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-low" id="service-search-input" placeholder="Buscar por especialidad..." type="text"/>
</div>
<div className="flex items-center gap-space-xs overflow-x-auto pb-1 md:pb-0 min-w-0 max-w-full w-full md:w-auto" id="filter-container">
<button className="filter-pill px-4 py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg whitespace-nowrap transition-all shadow-sm" data-filter="all">
            Todos (6)
          </button>
<button className="filter-pill px-4 py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary font-label-lg text-label-lg whitespace-nowrap transition-all" data-filter="ing">
            Ingeniería &amp; Proyectos 3D
          </button>
<button className="filter-pill px-4 py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary font-label-lg text-label-lg whitespace-nowrap transition-all" data-filter="hidro">
            Mantenimiento &amp; Hidráulica
          </button>
<button className="filter-pill px-4 py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary font-label-lg text-label-lg whitespace-nowrap transition-all" data-filter="clima">
            Climatización
          </button>
<button className="filter-pill px-4 py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary font-label-lg text-label-lg whitespace-nowrap transition-all" data-filter="const">
            Construcción &amp; Techos
          </button>
</div>
</div>
</div>
</section>
{/*  High-Impact Technical Catalog by Specialty  */}
<section className="w-full py-space-xl px-gutter lg:px-margin bg-surface">
<div className="max-w-6xl mx-auto space-y-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary-container uppercase tracking-widest">Portafolio Operativo</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Catálogo Técnico Especializado</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Estandarización bajo normas COVENIN y metodologías de protección de materiales para atmósferas marítimas con alta concentración salina.
        </p>
</div>
{/*  Service Cards Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl" id="services-grid">
{/*  1. Ingeniería, Arquitectura y Renders 3D  */}
<article className="service-item bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl" data-category="ing">
<div className="relative h-64 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern architectural 3D rendering of a luxury coastal villa in Margarita Island featuring infinity pool, sleek white concrete cantilevered roofs, marine grade wood accents and tropical landscaping with dramatic sunset lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoklMQYrpk1gQJS9HJQkJvR-B3gK7JwVYHeZYoQxveh80xyJxtsjwoAPeb3YJjFvHqCVnySF_mNzzracvFqJDznpEpf2xktnER1IlmguVQC8dlGG1-S3xCCUGn-EYt-GonGBTDdMW1RIZtt4eOdLHWF65T_6BxCvUVY2RVIYfJH-ZpHvRYmxsgCwk_MsKJr_Epsb-HB5hsIMaqhLeeMadussPJ0qVoBR_HHhRMLbnr-GYg61bAub0v"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
<span className="absolute top-4 left-4 bg-tertiary-container text-tertiary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow-md">
              Fase Proyectual &amp; Legal
            </span>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-primary">
<span className="font-label-lg text-label-lg flex items-center gap-1">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">view_in_ar</span>
                AutoCAD 2025 + Lumion Pro
              </span>
<span className="font-label-sm text-label-sm text-tertiary-fixed-dim">Cálculo Sísmico / Eólico</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-lg">
<div className="space-y-space-sm">
<h3 className="font-headline-md text-headline-md text-primary tracking-tight">
                Ingeniería, Arquitectura y Renders 3D
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Desarrollo exhaustivo de anteproyectos, permisología municipal (Alcaldías de Maneiro, Mariño y Antolín) y cálculo estructural adaptado a la presión de vientos costeros y comportamiento de suelos insulares.
              </p>
<div className="pt-space-xs grid grid-cols-2 gap-space-sm font-body-sm text-body-sm text-on-surface">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Planos de instalaciones MEP</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Modelado BIM y Renders 4K</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Cómputos métricos exactos</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Firmas autorizadas CIV</span>
</div>
</div>
</div>
<div className="pt-space-md bg-surface-container-low rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md sm:gap-0">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Entregables Clave</span>
<p className="font-title text-title text-primary">Dossier de Planos + Render Pack</p>
</div>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-secondary-container text-on-secondary rounded-lg font-title text-label-lg shadow-sm hover:bg-secondary transition-colors" data-path="cotizar" href="#">
<span>Cotizar Proyecto</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</article>
{/*  2. Construcción Civil e Impermeabilización de Techos  */}
<article className="service-item bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl" data-category="const">
<div className="relative h-64 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Technical workers applying heavy-duty reflective aluminum asphalt membrane waterproofing on a large commercial flat roof terrace overlooking the Caribbean sea in Porlamar under bright daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA38aqxtY74yYgmPYIWytngo-UUKbw7GhFQL27JfDOVpyN3yZwBluC4B0N_G3sHJDXTJ1-pZMORIm6duuPdH5sbtY3jR4VfMV8tP8OBy9Y77pMGDlK1QyEZovgDz8oFIDY1PUQ6b8Wm6AXXaKF8Y8tWFQl7ARj55T70xluF2KLM1PhSafIPYk0V3gX_MEQ3mRoS0N2o5LlKeCXlP4J44tIJe754LKokdt7LN9jC_DShblG4Y6Js2fm6"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
<span className="absolute top-4 left-4 bg-secondary-container text-on-secondary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow-md">
              Garantía Escrita 10 Años
            </span>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-primary">
<span className="font-label-lg text-label-lg flex items-center gap-1">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">roofing</span>
                Estanqueidad Total
              </span>
<span className="font-label-sm text-label-sm text-tertiary-fixed-dim">Poliuretano Elástico UV</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-lg">
<div className="space-y-space-sm">
<h3 className="font-headline-md text-headline-md text-primary tracking-tight">
                Construcción Civil e Impermeabilización
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Remodelación estructural pesada, vaciado de losas con aditivos impermeabilizantes integrales y solución definitiva a filtraciones por lluvias tropicales y radiación solar extrema en placas y techos de tejas.
              </p>
<div className="pt-space-xs grid grid-cols-2 gap-space-sm font-body-sm text-body-sm text-on-surface">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Manto asfáltico 4mm autoprotegido</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Sellado con poliuretano elástico</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Refuerzo estructural anti-corrosión</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Pruebas hidráulicas de inundación</span>
</div>
</div>
</div>
<div className="pt-space-md bg-surface-container-low rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md sm:gap-0">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Cobertura</span>
<p className="font-title text-title text-primary">Placas, Aleros, Muros y Terrazas</p>
</div>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-secondary-container text-on-secondary rounded-lg font-title text-label-lg shadow-sm hover:bg-secondary transition-colors" data-path="cotizar" href="#">
<span>Solicitar Inspección</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</article>
{/*  3. Sistemas Hidráulicos, Cisternas y Tanques Subterráneos  */}
<article className="service-item bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl" data-category="hidro">
<div className="relative h-64 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Sanitary hydraulic technician in safety gear coating the interior walls of a large residential concrete water cistern with turquoise food-grade non-toxic epoxy paint using professional spray equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC150Dq7C7_NpQfivwTJp93s7HcdNYwgq3t4lP8CQrLeb0hD2iwxhDX5iEfQuegp2UukohfluS6z3xWk9_EOOCFSyD3AOzRQOeBq2lBM6Fm6bOXdbuyiMdqk-2YMDyoqG_o4yHYMZvs-RZreQWyr3O3hLzg_p263UqYPmjddpZ6jHI2WX5hKclmuEPF-rghgcuhpHFfdWRDHrxCRoLPUkzmjPCgmzzKxqBW4tXZ14vdAEqeecIY90-2"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
<span className="absolute top-4 left-4 bg-tertiary-container text-tertiary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow-md">
              Salubridad del Agua
            </span>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-primary">
<span className="font-label-lg text-label-lg flex items-center gap-1">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">water_drop</span>
                Epóxico Atóxico Grado FDA
              </span>
<span className="font-label-sm text-label-sm text-tertiary-fixed-dim">Bombas e Hidroneumáticos</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-lg">
<div className="space-y-space-sm">
<h3 className="font-headline-md text-headline-md text-primary tracking-tight">
                Sistemas Hidráulicos y Cisternas Subterráneas
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Aseguramos la autonomía hídrica en Margarita. Servicio integral de desinfección profunda, sellado epóxico anti-filtración de tanques de agua potable y configuración de bancos de bombeo hidroneumático de alta presión.
              </p>
<div className="pt-space-xs grid grid-cols-2 gap-space-sm font-body-sm text-body-sm text-on-surface">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Limpieza con achique y camión cisterna</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Revestimiento epóxico libre de solventes</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Calibración de pulmones y presostatos</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Sistemas de filtración y purificación UV</span>
</div>
</div>
</div>
<div className="pt-space-md bg-surface-container-low rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md sm:gap-0">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Capacidad Técnica</span>
<p className="font-title text-title text-primary">Tanques desde 2.000L a 300.000L</p>
</div>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-secondary-container text-on-secondary rounded-lg font-title text-label-lg shadow-sm hover:bg-secondary transition-colors" data-path="cotizar" href="#">
<span>Agendar Lavado</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</article>
{/*  4. Climatización y Refrigeración Anti-Salitre  */}
<article className="service-item bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl" data-category="clima">
<div className="relative h-64 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="HVAC refrigeration technician in clean uniform performing chemical anti-corrosion condenser fin treatment on a multi-split AC outdoor compressor unit at a luxury penthouse in Pampatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdFvGBy55_r9-f52gSpYs8cdDdv8idrmymLf6NzDjCyCHOIamGevwMxIoVK6dOD3jYtdd0pzaAjGodni2w3dwg1sErbdeiCqlYHhpvIEan9DoEorM7YJ5kH8gOIkL5uxNhF63wE4HZWHBWQ-rmUwQeLJuFPYLh7AK39hvdqLpsyNTbbrY3AeoOO8PYKd9kOd-QHpVvRcPJBTKXfTnmvRDU2_gA23EmzN6mZA9cHKY5-i6QnwLmDqKa"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
<span className="absolute top-4 left-4 bg-primary-container text-tertiary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow-md">
              Escudo Marino Blue Fin
            </span>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-primary">
<span className="font-label-lg text-label-lg flex items-center gap-1">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">mode_fan</span>
                VRF, Chiller &amp; Split
              </span>
<span className="font-label-sm text-label-sm text-tertiary-fixed-dim">Gas Ecológico R410A / R32</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-lg">
<div className="space-y-space-sm">
<h3 className="font-headline-md text-headline-md text-primary tracking-tight">
                Climatización y Refrigeración Anti-Salitre
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Tratamiento preventivo para neutralizar la degradación de serpentines por cloruro de sodio en primera línea de playa. Prolongamos hasta 3 veces la vida útil de compresores y ductos en apartamentos y locales comerciales.
              </p>
<div className="pt-space-xs grid grid-cols-2 gap-space-sm font-body-sm text-body-sm text-on-surface">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Lavado químico desincrustante de condensadores</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Aplicación de película polimérica anticorrosiva</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Recarga certificada de refrigerante ecológico</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Sanitización antibacteriana de turbinas</span>
</div>
</div>
</div>
<div className="pt-space-md bg-surface-container-low rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md sm:gap-0">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Eficiencia</span>
<p className="font-title text-title text-primary">-25% en Consumo Eléctrico</p>
</div>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-secondary-container text-on-secondary rounded-lg font-title text-label-lg shadow-sm hover:bg-secondary transition-colors" data-path="cotizar" href="#">
<span>Servicio Clima</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</article>
{/*  5. Electricidad Residencial, Comercial e Industrial  */}
<article className="service-item bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl" data-category="hidro">
<div className="relative h-64 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Industrial electrical engineer in hard hat inspecting a high precision automated generator transfer switch and circuit breaker panel inside an upscale condominium utility room in Pampatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2tJ2xyuO3qO-e8aA-0Vw3juqOMlarST2qN_uDFd0pzvsEgQQvMH_dB4TwhKpuJG4S0xHpn_y_0Vm6R0J08Fc3-_nMzHGESBjsJ3PqNnnkdF0B9karAbo0Tii6qBvWwXby2uTaiv0SMi4EuztPr2rTQbOoe2RQ3PYs2KFUjOYyM9ipIck55Y4HuVnrWdw0XYxMK1IoKCeh0GA498p49UMVLlEeIRCqQWBy1CTesAHU9Mhimk_gc4mf"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
<span className="absolute top-4 left-4 bg-primary-container text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow-md">
              Estabilidad &amp; Autonomía
            </span>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-primary">
<span className="font-label-lg text-label-lg flex items-center gap-1">
<span className="material-symbols-outlined text-[18px] text-secondary-container">bolt</span>
                Plantas &amp; Inversores Solares
              </span>
<span className="font-label-sm text-label-sm text-tertiary-fixed-dim">Protección Transitorios</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-lg">
<div className="space-y-space-sm">
<h3 className="font-headline-md text-headline-md text-primary tracking-tight">
                Electricidad Integral y Respaldo Eléctrico
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Protección absoluta frente a las variaciones de frecuencia y voltaje de la red insular. Diseño e instalación de tableros de transferencia automática (ATS), cableado con cobre THHN marino y bancos de baterías de litio.
              </p>
<div className="pt-space-xs grid grid-cols-2 gap-space-sm font-body-sm text-body-sm text-on-surface">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Mantenimiento de plantas eléctricas diésel/gas</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Sistemas de supresión de picos (TVSS/SPD)</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Balanceo de cargas trifásicas y monofásicas</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Sistemas fotovoltaicos con inversores híbridos</span>
</div>
</div>
</div>
<div className="pt-space-md bg-surface-container-low rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md sm:gap-0">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Respaldo Continuo</span>
<p className="font-title text-title text-primary">Cero Apagones en tu Inmueble</p>
</div>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-secondary-container text-on-secondary rounded-lg font-title text-label-lg shadow-sm hover:bg-secondary transition-colors" data-path="cotizar" href="#">
<span>Diagnosticar Red</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</article>
{/*  6. Acabados, Drywall y Pintura Grado Marino  */}
<article className="service-item bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl" data-category="const">
<div className="relative h-64 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Artisanal painter applying pristine elastomeric marine-grade textured white paint on an open terrace with smooth microcement floors and moisture-resistant drywall ceiling in a seaside apartment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwzB1s3yydeXZaSVAd4deucpVRN9MwgN6_bRvbRapIqcygmNW1USWLIRoUuIbrlse6l1YMYNqAIOYEYcjmQ_rXlfulmMTO5F1S6QHsrskMw9kMK5CIJ38NvIQIaQclKngLVYv0ErYLJRbrws_liovGGDsfMr_N9eYcaVJOl10oe4a2IUJtWMxa_uLw5BfJLDfMb7mgKUWy3nWqT5FjPz0VIvPGV60u2xttKJg-TwUbzjqAeDNv06jl"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
<span className="absolute top-4 left-4 bg-tertiary-container text-tertiary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow-md">
              Estética &amp; Longevidad
            </span>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-primary">
<span className="font-label-lg text-label-lg flex items-center gap-1">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">format_paint</span>
                Elastoméricos Sherwin / VP
              </span>
<span className="font-label-sm text-label-sm text-tertiary-fixed-dim">Drywall RH Verde</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-lg">
<div className="space-y-space-sm">
<h3 className="font-headline-md text-headline-md text-primary tracking-tight">
                Acabados, Drywall y Pintura Grado Marino
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Pinturas elásticas con agentes fungicidas y antialgas que sellan microfisuras y resisten el lavado de la lluvia ácida costera. Remodelación interior con tabiquería hidrófuga, pisos continuos de microcemento y porcelanatos importados.
              </p>
<div className="pt-space-xs grid grid-cols-2 gap-space-sm font-body-sm text-body-sm text-on-surface">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Esmaltes de poliuretano para herrería y barandas</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Cielos rasos en yeso hidrófugo (RH)</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Nivelación de pisos y colocación de gran formato</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Garantía de adherencia sin desconchado</span>
</div>
</div>
</div>
<div className="pt-space-md bg-surface-container-low rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md sm:gap-0">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Especialidad</span>
<p className="font-title text-title text-primary">Interiores &amp; Fachadas Costeras</p>
</div>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-secondary-container text-on-secondary rounded-lg font-title text-label-lg shadow-sm hover:bg-secondary transition-colors" data-path="cotizar" href="#">
<span>Renovar Acabados</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</article>
</div>
</div>
</section>
{/*  Preventive Maintenance Plans & Subscriptions  */}
<section className="w-full py-space-xl px-gutter lg:px-margin bg-surface-container-low">
<div className="max-w-6xl mx-auto space-y-space-xl">
<div className="text-center max-w-2xl mx-auto space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary-container uppercase tracking-widest">Servicio Continuo Planificado</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Planes y Abonos de Mantenimiento</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Evite reparaciones de emergencia costosas con auditorías programadas, informes técnicos mensuales y guardia de atención prioritaria.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
{/*  Plan 1: Condominios & Edificios  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between space-y-space-lg hover:shadow-xl transition-shadow">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">apartment</span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface px-3 py-1 rounded-full">Mensual / Trimestral</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary">Plan Condominios</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Edificios residenciales, torres corporativas y conjuntos cerrados.</p>
</div>
<div className="space-y-space-xs pt-space-xs border-t border-surface-container font-body-sm text-body-sm text-on-surface">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px] mt-0.5">check</span>
<span>Chequeo quincenal de sala de bombas e hidroneumáticos</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px] mt-0.5">check</span>
<span>Inspección de luminarias y circuitos de áreas comunes</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px] mt-0.5">check</span>
<span>Monitoreo de filtraciones y desagües pluviales en azoteas</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px] mt-0.5">check</span>
<span>Informe técnico sellado para Junta de Condominio</span>
</div>
</div>
</div>
<a className="w-full py-2.5 rounded-lg bg-primary text-on-primary font-title text-label-lg text-center hover:bg-primary-container transition-colors shadow-sm" data-path="cotizar" href="#">
            Consultar para Mi Edificio
          </a>
</div>
{/*  Plan 2: Villas & Residencias Vacacionales (Featured)  */}
<div className="bg-primary text-on-primary rounded-xl p-space-lg shadow-xl flex flex-col justify-between space-y-space-lg relative overflow-hidden">
<div className="absolute -right-6 -top-6 w-28 h-28 bg-secondary-container/20 rounded-full blur-xl pointer-events-none"></div>
<div className="space-y-space-md relative z-10">
<div className="flex items-center justify-between">
<span className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">villa</span>
</span>
<span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary px-3 py-1 rounded-full font-bold">
                Más Solicitado
              </span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Villas &amp; Casas de Playa</h3>
<p className="font-body-sm text-body-sm text-on-primary-container mt-1">Cuidado preventivo y custodia técnica para propietarios ausentes.</p>
</div>
<div className="space-y-space-xs pt-space-xs border-t border-primary-container font-body-sm text-body-sm text-on-primary">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary-container text-[16px] mt-0.5">verified</span>
<span>Encendido y prueba de aires acondicionados y generador</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary-container text-[16px] mt-0.5">verified</span>
<span>Monitoreo de humedad, moho y olores por inactividad</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary-container text-[16px] mt-0.5">verified</span>
<span>Limpieza de trampas de grasa y niveles de cisterna</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary-container text-[16px] mt-0.5">verified</span>
<span>Reporte fotográfico vía WhatsApp en cada visita</span>
</div>
</div>
</div>
<a className="w-full py-2.5 rounded-lg bg-secondary-container text-on-secondary font-title text-label-lg text-center hover:bg-secondary transition-colors shadow-md" data-path="cotizar" href="#">
            Proteger Mi Villa
          </a>
</div>
{/*  Plan 3: Comercial & Hotelería  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between space-y-space-lg hover:shadow-xl transition-shadow">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">hotel</span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface px-3 py-1 rounded-full">SLA 24/7 Prioritario</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary">Comercial &amp; Hotelería</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Posadas boutique, restaurantes, centros comerciales y locales.</p>
</div>
<div className="space-y-space-xs pt-space-xs border-t border-surface-container font-body-sm text-body-sm text-on-surface">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px] mt-0.5">check</span>
<span>Guardia de emergencias técnicas con respuesta prioritaria</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px] mt-0.5">check</span>
<span>Mantenimiento correctivo nocturno o fuera de horas pico</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px] mt-0.5">check</span>
<span>Inventario y auditoría de repuestos de misión crítica</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px] mt-0.5">check</span>
<span>Facturación fiscal formal y cumplimiento normativo</span>
</div>
</div>
</div>
<a className="w-full py-2.5 rounded-lg bg-primary text-on-primary font-title text-label-lg text-center hover:bg-primary-container transition-colors shadow-sm" data-path="cotizar" href="#">
            Cotizar Plan Corporativo
          </a>
</div>
</div>
</div>
</section>
{/*  Technical Specification & Comparison Matrix  */}
<section className="w-full py-space-xl px-gutter lg:px-margin bg-surface">
<div className="max-w-6xl mx-auto space-y-space-lg">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary-container uppercase tracking-widest">Rigor Técnico DS</span>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">Estándar DS vs. Métodos Tradicionales Insulares</h2>
</div>
<div className="bg-surface-container-lowest rounded-xl shadow-md overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-primary text-on-primary font-title text-label-sm uppercase tracking-wider">
<tr>
<th className="py-4 px-6">Parámetro Técnico</th>
<th className="py-4 px-6 text-tertiary-fixed-dim">Solución Especializada DS</th>
<th className="py-4 px-6 text-on-primary-container">Práctica Tradicional No Certificada</th>
</tr>
</thead>
<tbody className="divide-y-0">
<tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
<td className="py-4 px-6 font-semibold text-primary">Resistencia al Salitre</td>
<td className="py-4 px-6 text-on-surface font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">verified</span>
                Pinturas elastoméricas grado marino + recubrimientos Blue Fin en climas
              </td>
<td className="py-4 px-6 text-on-surface-variant">Pintura de caucho común y piezas expuestas sin sellar</td>
</tr>
<tr className="bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
<td className="py-4 px-6 font-semibold text-primary">Cisternas y Depósitos</td>
<td className="py-4 px-6 text-on-surface font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">verified</span>
                Epóxico atóxico 100% sólidos certificado para agua de consumo
              </td>
<td className="py-4 px-6 text-on-surface-variant">Pinturas con solventes tóxicos o cemento crudo permeable</td>
</tr>
<tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
<td className="py-4 px-6 font-semibold text-primary">Supervisión Técnica</td>
<td className="py-4 px-6 text-on-surface font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">verified</span>
                Ingenieros CIV e inspectores asignados con libro de obra
              </td>
<td className="py-4 px-6 text-on-surface-variant">Cuadrillas autónomas sin fiscalización profesional</td>
</tr>
<tr className="bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
<td className="py-4 px-6 font-semibold text-primary">Seguridad Eléctrica</td>
<td className="py-4 px-6 text-on-surface font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">verified</span>
                Supresores SPD certificados, cálculo de armónicos y balance térmico
              </td>
<td className="py-4 px-6 text-on-surface-variant">Conexiones empíricas sin protección contra picos de voltaje</td>
</tr>
<tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
<td className="py-4 px-6 font-semibold text-primary">Garantía Documentada</td>
<td className="py-4 px-6 text-on-surface font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary-container">verified</span>
                Acta de entrega formal y garantía escrita hasta por 10 años
              </td>
<td className="py-4 px-6 text-on-surface-variant">Acuerdos verbales sin respaldo legal ni pólizas de servicio</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/*  Work Protocol & Quality Control: 4 Steps  */}
<section className="w-full py-space-xl px-gutter lg:px-margin bg-surface-container-lowest">
<div className="max-w-6xl mx-auto space-y-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary-container uppercase tracking-widest">Metodología de Excelencia</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Protocolo de Trabajo en 4 Pasos</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Transparencia y trazabilidad desde la primera inspección técnica hasta la firma de entrega final.
        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
{/*  Step 1  */}
<div className="bg-surface rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<span className="font-display text-[44px] leading-none font-extrabold text-outline-variant/60 block">01</span>
<h4 className="font-title text-title text-primary">Inspección Diagnóstica</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Visita técnica a la propiedad en cualquier municipio de la isla. Evaluación de humedad, salinidad y patologías estructurales.
            </p>
</div>
<div className="pt-space-xs flex items-center gap-1.5 text-secondary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">pin_drop</span>
<span>En Sitio en &lt; 24h</span>
</div>
</div>
{/*  Step 2  */}
<div className="bg-surface rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<span className="font-display text-[44px] leading-none font-extrabold text-outline-variant/60 block">02</span>
<h4 className="font-title text-title text-primary">Presupuesto Desglosado</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Cómputos métricos detallados, especificación de marcas, cronograma de obra de ruta crítica y condiciones de pago claras.
            </p>
</div>
<div className="pt-space-xs flex items-center gap-1.5 text-tertiary-fixed-dim text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">description</span>
<span>Partidas Transparentes</span>
</div>
</div>
{/*  Step 3  */}
<div className="bg-surface rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<span className="font-display text-[44px] leading-none font-extrabold text-outline-variant/60 block">03</span>
<h4 className="font-title text-title text-primary">Ejecución Profesional</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Dirección de obra por ingenieros CIV. Cuadrillas uniformadas con EPP completo, control de polvo y limpieza permanente.
            </p>
</div>
<div className="pt-space-xs flex items-center gap-1.5 text-secondary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">engineering</span>
<span>Personal Calificado</span>
</div>
</div>
{/*  Step 4  */}
<div className="bg-surface rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<span className="font-display text-[44px] leading-none font-extrabold text-outline-variant/60 block">04</span>
<h4 className="font-title text-title text-primary">Entrega y Garantía</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Revisión conjunta de acabados con checklist de calidad. Emisión de certificado de garantía técnica y soporte postventa.
            </p>
</div>
<div className="pt-space-xs flex items-center gap-1.5 text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified_user</span>
<span>Acta de Conformidad</span>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive Project Cost Estimator Teaser  */}
<section className="w-full py-space-xl px-gutter lg:px-margin bg-surface">
<div className="max-w-6xl mx-auto bg-primary rounded-xl overflow-hidden shadow-xl text-on-primary">
<div className="grid grid-cols-1 lg:grid-cols-12">
<div className="lg:col-span-7 p-space-xl space-y-space-md flex flex-col justify-between">
<div className="space-y-space-sm">
<span className="inline-flex items-center gap-1 text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px]">calculate</span>
              Calculadora Rápida de Soluciones
            </span>
<h3 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
              ¿Tienes una urgencia técnica o un proyecto en mente?
            </h3>
<p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              Selecciona tu tipo de inmueble y la zona en Margarita para recibir atención inmediata de nuestro departamento de ingeniería.
            </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-sm font-label-sm text-label-sm text-on-primary">
<div className="bg-primary-container p-3 rounded-lg flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">location_on</span>
<span>Pampatar &amp; Bella Vista</span>
</div>
<div className="bg-primary-container p-3 rounded-lg flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">location_on</span>
<span>Playa El Ángel &amp; El Yaque</span>
</div>
<div className="bg-primary-container p-3 rounded-lg flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">location_on</span>
<span>Costa Azul &amp; Antolín</span>
</div>
</div>
</div>
<div className="lg:col-span-5 bg-surface-container-lowest p-space-xl text-on-surface flex flex-col justify-center space-y-space-md">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary-container uppercase">Atención Sin Espera</span>
<h4 className="font-headline-sm text-headline-sm text-primary">Canal Directo de Despacho</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Nuestro equipo técnico atiende consultas y coordina levantamientos en menos de 2 horas hábiles.</p>
</div>
<div className="space-y-space-sm pt-space-xs">
<a className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#00A896] text-on-secondary font-title text-label-lg shadow-md hover:opacity-95 transition-all" href="https://wa.me/584122138418" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px]">chat</span>
<span>Escribir por WhatsApp Directo</span>
</a>
<a className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-secondary-container text-on-secondary font-title text-label-lg shadow-md hover:bg-secondary transition-all" data-path="cotizar" href="#">
<span className="material-symbols-outlined text-[20px]">receipt_long</span>
<span>Solicitar Cotización Formal</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  Final Call to Action Banner  */}
<section className="w-full py-space-xl px-gutter lg:px-margin bg-surface-container-high relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center space-y-space-md relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
        Compromiso y Respaldo Insular
      </div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
        Protege y Revaloriza tu Propiedad en la Isla de Margarita
      </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
        Evita el deterioro prematuro causado por el ambiente marino. Deja tus remodelaciones y mantenimiento en manos de profesionales con solvencia técnica comprobada.
      </p>
<div className="pt-space-sm flex flex-col sm:flex-row items-center justify-center gap-space-md">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-secondary-container text-on-secondary font-title text-label-lg shadow-lg hover:bg-secondary transition-all" data-path="cotizar" href="#">
<span>Solicitar Inspección Técnica Ahora</span>
<span className="material-symbols-outlined text-[20px]">send</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-surface-container-lowest text-primary font-title text-label-lg shadow-sm hover:bg-surface-container transition-all" data-path="quienes-somos" href="#">
<span>Conocer al Equipo Técnico</span>
<span className="material-symbols-outlined text-[20px]">groups</span>
</a>
</div>
</div>
</section>
{/*  Interactive JavaScript for Filtering & Live Search  */}

</div>
    </>
  );
}
