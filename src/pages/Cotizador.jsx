import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Cotizador() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace with your EmailJS credentials
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          // No form reset to allow user to see what they submitted, or optionally reset
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="flex flex-col w-full">
{/*  Top Highlight Bar / Context Scrim  */}
<section className="relative w-full bg-primary text-on-primary py-space-xl overflow-hidden">
<div className="absolute -right-24 -top-24 w-96 h-96 bg-tertiary-fixed-dim/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute left-1/3 -bottom-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="w-full px-gutter lg:px-margin relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
<div className="max-w-3xl space-y-space-sm">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-highest/20 text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
          Ingeniería Civil • Remodelaciones • Isla de Margarita
        </div>
<h1 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
          Solicita tu Presupuesto a Medida
        </h1>
<p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
          Cotización formal y transparente en menos de 30 minutos. Sin costos ocultos y con evaluación técnica inicial en Pampatar, Porlamar, Maneiro y toda Nueva Esparta.
        </p>
</div>
<div className="flex items-center gap-space-md bg-primary-container/80 p-space-md rounded-xl backdrop-blur-md self-start md:self-auto">
<div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary shadow-md">
<span className="material-symbols-outlined text-[28px]">timer</span>
</div>
<div className="flex flex-col">
<span className="font-title text-title text-on-primary font-bold">Tiempo promedio</span>
<span className="font-body-sm text-body-sm text-tertiary-fixed-dim">Respuesta técnica &lt; 28 min</span>
</div>
</div>
</div>
</section>
{/*  Main Wizard & Content Shell  */}
<section className="w-full px-gutter lg:px-margin py-space-xl bg-surface">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/*  Left 8 Cols: Interactive Quote Funnel Wizard  */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/*  Interactive Progress Navigation Bar  */}
<div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="grid grid-cols-4 gap-space-xs relative">
{/*  Step Indicator 1  */}
<button className="step-tab flex flex-col items-center sm:items-start text-center sm:text-left gap-1 transition-all group" id="step-tab-1"  type="button">
<div className="flex items-center gap-space-xs w-full">
<span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary font-title text-label-lg flex items-center justify-center shadow-sm" id="tab-badge-1">1</span>
<div className="hidden sm:block h-1 flex-1 rounded bg-secondary-container" id="tab-bar-1"></div>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold mt-1" id="tab-label-1">Inmueble</span>
<span className="hidden sm:inline font-body-sm text-body-sm text-on-surface-variant text-xs">Ubicación y tipo</span>
</button>
{/*  Step Indicator 2  */}
<button className="step-tab flex flex-col items-center sm:items-start text-center sm:text-left gap-1 transition-all group opacity-60" id="step-tab-2"  type="button">
<div className="flex items-center gap-space-xs w-full">
<span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant font-title text-label-lg flex items-center justify-center" id="tab-badge-2">2</span>
<div className="hidden sm:block h-1 flex-1 rounded bg-surface-container-high" id="tab-bar-2"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold mt-1" id="tab-label-2">Especialidad</span>
<span className="hidden sm:inline font-body-sm text-body-sm text-on-surface-variant text-xs">Servicio puntual</span>
</button>
{/*  Step Indicator 3  */}
<button className="step-tab flex flex-col items-center sm:items-start text-center sm:text-left gap-1 transition-all group opacity-60" id="step-tab-3"  type="button">
<div className="flex items-center gap-space-xs w-full">
<span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant font-title text-label-lg flex items-center justify-center" id="tab-badge-3">3</span>
<div className="hidden sm:block h-1 flex-1 rounded bg-surface-container-high" id="tab-bar-3"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold mt-1" id="tab-label-3">Alcance</span>
<span className="hidden sm:inline font-body-sm text-body-sm text-on-surface-variant text-xs">Urgencia &amp; Planos</span>
</button>
{/*  Step Indicator 4  */}
<button className="step-tab flex flex-col items-center sm:items-start text-center sm:text-left gap-1 transition-all group opacity-60" id="step-tab-4"  type="button">
<div className="flex items-center gap-space-xs w-full">
<span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant font-title text-label-lg flex items-center justify-center" id="tab-badge-4">4</span>
<div className="hidden sm:block h-1 flex-1 rounded bg-surface-container-high" id="tab-bar-4"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold mt-1" id="tab-label-4">Contacto</span>
<span className="hidden sm:inline font-body-sm text-body-sm text-on-surface-variant text-xs">Envío formal</span>
</button>
</div>
</div>
{/*  Dynamic Form Container  */}
<form ref={form} onSubmit={sendEmail} className="w-full bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-md relative overflow-hidden" id="quote-funnel-form" >
{/*  STEP 1: Inmueble & Ubicación  */}
<div className="wizard-step flex flex-col gap-space-lg" id="step-panel-1">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary-container tracking-wider uppercase font-bold">Paso 1 de 4</span>
<h2 className="font-headline-md text-headline-md text-primary">¿Qué tipo de inmueble requiere el servicio?</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Selecciona la infraestructura para asignar al equipo de ingenieros o técnicos especializados.</p>
</div>
{/*  Property Type Cards Selection  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
{/*  Option A  */}
<label className="cursor-pointer property-card group relative p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all duration-200 shadow-sm flex flex-col justify-between border border-transparent has-[:checked]:border-secondary-container">
<input checked="" className="peer sr-only" name="property_type" type="radio" value="Villa / Casa Quinta"/>
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">villa</span>
</div>
<span className="material-symbols-outlined text-secondary-container opacity-0 peer-checked:opacity-100 transition-opacity">check_circle</span>
</div>
<div className="mt-space-md">
<h3 className="font-title text-title text-primary group-hover:text-secondary-container transition-colors">Villa / Casa Quinta</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Residencias unifamiliares, terrazas y parcelas privadas.</p>
</div>
<div className="absolute inset-0 rounded-lg pointer-events-none peer-checked:bg-secondary-container/5"></div>
</label>
{/*  Option B  */}
<label className="cursor-pointer property-card group relative p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all duration-200 shadow-sm flex flex-col justify-between border border-transparent has-[:checked]:border-secondary-container">
<input className="peer sr-only" name="property_type" type="radio" value="Apartamento / Penthouse"/>
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">apartment</span>
</div>
<span className="material-symbols-outlined text-secondary-container opacity-0 peer-checked:opacity-100 transition-opacity">check_circle</span>
</div>
<div className="mt-space-md">
<h3 className="font-title text-title text-primary group-hover:text-secondary-container transition-colors">Apartamento / Penthouse</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Torres residenciales, vistas marinas y áreas internas.</p>
</div>
<div className="absolute inset-0 rounded-lg pointer-events-none peer-checked:bg-secondary-container/5"></div>
</label>
{/*  Option C  */}
<label className="cursor-pointer property-card group relative p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all duration-200 shadow-sm flex flex-col justify-between border border-transparent has-[:checked]:border-secondary-container">
<input className="peer sr-only" name="property_type" type="radio" value="Edificio / Condominio"/>
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">corporate_fare</span>
</div>
<span className="material-symbols-outlined text-secondary-container opacity-0 peer-checked:opacity-100 transition-opacity">check_circle</span>
</div>
<div className="mt-space-md">
<h3 className="font-title text-title text-primary group-hover:text-secondary-container transition-colors">Edificio / Condominio</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Juntas de condominio, cisternas generales y azoteas comunes.</p>
</div>
<div className="absolute inset-0 rounded-lg pointer-events-none peer-checked:bg-secondary-container/5"></div>
</label>
{/*  Option D  */}
<label className="cursor-pointer property-card group relative p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all duration-200 shadow-sm flex flex-col justify-between border border-transparent has-[:checked]:border-secondary-container">
<input className="peer sr-only" name="property_type" type="radio" value="Local Comercial / Restaurante"/>
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">storefront</span>
</div>
<span className="material-symbols-outlined text-secondary-container opacity-0 peer-checked:opacity-100 transition-opacity">check_circle</span>
</div>
<div className="mt-space-md">
<h3 className="font-title text-title text-primary group-hover:text-secondary-container transition-colors">Local Comercial / Restaurante</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Malls, bodegones, cocinas comerciales y vitrinas.</p>
</div>
<div className="absolute inset-0 rounded-lg pointer-events-none peer-checked:bg-secondary-container/5"></div>
</label>
{/*  Option E  */}
<label className="cursor-pointer property-card group relative p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all duration-200 shadow-sm flex flex-col justify-between border border-transparent has-[:checked]:border-secondary-container">
<input className="peer sr-only" name="property_type" type="radio" value="Posada / Hotel Boutique"/>
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">hotel</span>
</div>
<span className="material-symbols-outlined text-secondary-container opacity-0 peer-checked:opacity-100 transition-opacity">check_circle</span>
</div>
<div className="mt-space-md">
<h3 className="font-title text-title text-primary group-hover:text-secondary-container transition-colors">Posada / Hotel Boutique</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Instalaciones hoteleras, piscinas y climatización intensiva.</p>
</div>
<div className="absolute inset-0 rounded-lg pointer-events-none peer-checked:bg-secondary-container/5"></div>
</label>
{/*  Option F  */}
<label className="cursor-pointer property-card group relative p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all duration-200 shadow-sm flex flex-col justify-between border border-transparent has-[:checked]:border-secondary-container">
<input className="peer sr-only" name="property_type" type="radio" value="Galpón / Depósito Industrial"/>
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center text-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">warehouse</span>
</div>
<span className="material-symbols-outlined text-secondary-container opacity-0 peer-checked:opacity-100 transition-opacity">check_circle</span>
</div>
<div className="mt-space-md">
<h3 className="font-title text-title text-primary group-hover:text-secondary-container transition-colors">Galpón / Depósito</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Estructuras metálicas, losas de alta carga y electricidad trifásica.</p>
</div>
<div className="absolute inset-0 rounded-lg pointer-events-none peer-checked:bg-secondary-container/5"></div>
</label>
</div>
{/*  Geographic Location Selector  */}
<div className="pt-space-md space-y-space-md">
<h3 className="font-title text-title text-primary flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary-container">location_on</span>
                Ubicación del Proyecto en Isla de Margarita
              </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-primary" htmlFor="municipio">Municipio</label>
<select className="w-full h-12 px-space-md rounded-lg bg-surface text-primary font-body-md shadow-sm outline-none border border-outline-variant/30 focus:border-secondary-container focus:bg-surface-container-lowest transition-all" id="municipio" name="municipio">
<option value="Municipio Maneiro">Municipio Maneiro (Pampatar, Playa El Ángel, Los Robles)</option>
<option value="Municipio Mariño">Municipio Mariño (Porlamar, Bella Vista, El Morro)</option>
<option value="Municipio Antolín del Campo">Municipio Antolín del Campo (Playa El Agua, El Tirano, Manzanillo)</option>
<option value="Municipio Arismendi">Municipio Arismendi (La Asunción, Guacuco)</option>
<option value="Municipio Gómez">Municipio Gómez (Santa Ana, Altagracia, Playa Zaragoza)</option>
<option value="Municipio Marcano">Municipio Marcano (Juan Griego, La Galera)</option>
<option value="Municipio Díaz">Municipio Díaz (San Juan Bautista, El Yaque)</option>
<option value="Municipio García">Municipio García (El Valle, Villa Rosa)</option>
<option value="Municipio Tubores / Península">Municipio Tubores / Macanao</option>
</select>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-primary" htmlFor="urbanizacion">Sector / Urbanización / Residencia</label>
<input className="w-full h-12 px-space-md rounded-lg bg-surface text-primary font-body-md shadow-sm outline-none border border-outline-variant/30 focus:border-secondary-container focus:bg-surface-container-lowest transition-all" id="urbanizacion" name="urbanizacion" placeholder="Ej. Costa Azul, C.R. Bahía Grande, Jorge Coll" type="text"/>
</div>
</div>
</div>
{/*  Next Navigation Step 1  */}
<div className="flex justify-end pt-space-md">
<button className="inline-flex items-center gap-space-sm px-space-xl py-space-md rounded-lg bg-secondary-container text-on-secondary font-title text-label-lg shadow-md hover:bg-secondary hover:shadow-xl transition-all"  type="button">
<span>Continuar a Especialidades</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</div>
{/*  STEP 2: Servicio o Especialidad Requerida  */}
<div className="wizard-step hidden flex flex-col gap-space-lg" id="step-panel-2">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary-container tracking-wider uppercase font-bold">Paso 2 de 4</span>
<h2 className="font-headline-md text-headline-md text-primary">¿Qué servicio técnico o ingeniería necesitas?</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Puedes seleccionar uno o varios requerimientos para armar un solo plan coordinado.</p>
</div>
{/*  Interactive Pill Multi-select Checkboxes  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/*  Service 1  */}
<label className="cursor-pointer service-checkbox-card p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all shadow-sm flex items-start gap-space-md border border-transparent has-[:checked]:border-secondary-container/40">
<input className="mt-1 w-5 h-5 rounded text-secondary-container focus:ring-0 accent-secondary-container" name="services" type="checkbox" value="Planos AutoCAD, Modelado 3D y Renders"/>
<div className="flex flex-col">
<span className="font-title text-title text-primary flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[20px]">architecture</span>
                    Planos AutoCAD, Modelado 3D y Renders
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Cálculos estructurales, permisología municipal, visualización fotorrealista.</span>
</div>
</label>
{/*  Service 2  */}
<label className="cursor-pointer service-checkbox-card p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all shadow-sm flex items-start gap-space-md border border-transparent has-[:checked]:border-secondary-container/40">
<input checked="" className="mt-1 w-5 h-5 rounded text-secondary-container focus:ring-0 accent-secondary-container" name="services" type="checkbox" value="Construcción Civil e Impermeabilización de Techos"/>
<div className="flex flex-col">
<span className="font-title text-title text-primary flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[20px]">roofing</span>
                    Construcción Civil e Impermeabilización
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manto asfáltico, sellado acrílico de platabandas, corrección de filtraciones severas.</span>
</div>
</label>
{/*  Service 3  */}
<label className="cursor-pointer service-checkbox-card p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all shadow-sm flex items-start gap-space-md border border-transparent has-[:checked]:border-secondary-container/40">
<input className="mt-1 w-5 h-5 rounded text-secondary-container focus:ring-0 accent-secondary-container" name="services" type="checkbox" value="Lavado de Tanques / Cisternas y Bombas Hidráulicas"/>
<div className="flex flex-col">
<span className="font-title text-title text-primary flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[20px]">water_damage</span>
                    Tanques, Cisternas &amp; Bombas Hidráulicas
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Desinfección química certificada, presurizadores y calibración de hidroneumáticos.</span>
</div>
</label>
{/*  Service 4  */}
<label className="cursor-pointer service-checkbox-card p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all shadow-sm flex items-start gap-space-md border border-transparent has-[:checked]:border-secondary-container/40">
<input className="mt-1 w-5 h-5 rounded text-secondary-container focus:ring-0 accent-secondary-container" name="services" type="checkbox" value="Mantenimiento Químico A/A (Anti-Salitre)"/>
<div className="flex flex-col">
<span className="font-title text-title text-primary flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[20px]">mode_fan</span>
                    Aires Acondicionados (Protección Anti-Salitre)
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Desincrustación profunda de serpentines, recarga ecológica y anticorrosivo marino.</span>
</div>
</label>
{/*  Service 5  */}
<label className="cursor-pointer service-checkbox-card p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all shadow-sm flex items-start gap-space-md border border-transparent has-[:checked]:border-secondary-container/40">
<input className="mt-1 w-5 h-5 rounded text-secondary-container focus:ring-0 accent-secondary-container" name="services" type="checkbox" value="Electricidad, Tableros y Generadores"/>
<div className="flex flex-col">
<span className="font-title text-title text-primary flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[20px]">electric_bolt</span>
                    Electricidad, Tableros &amp; Transferencias
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Balanceo de cargas, transfer automáticos para plantas eléctricas y cableado marino.</span>
</div>
</label>
{/*  Service 6  */}
<label className="cursor-pointer service-checkbox-card p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all shadow-sm flex items-start gap-space-md border border-transparent has-[:checked]:border-secondary-container/40">
<input checked="" className="mt-1 w-5 h-5 rounded text-secondary-container focus:ring-0 accent-secondary-container" name="services" type="checkbox" value="Remodelación General (Drywall, Porcelanato, Pintura)"/>
<div className="flex flex-col">
<span className="font-title text-title text-primary flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[20px]">format_paint</span>
                    Remodelación Integral (Pisos, Pintura, Drywall)
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Instalación de porcelanato importado, cielo raso, cocinas de diseño y carpintería náutica.</span>
</div>
</label>
{/*  Service 7  */}
<label className="cursor-pointer service-checkbox-card md:col-span-2 p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all shadow-sm flex items-start gap-space-md border border-transparent has-[:checked]:border-secondary-container/40">
<input className="mt-1 w-5 h-5 rounded text-secondary-container focus:ring-0 accent-secondary-container" name="services" type="checkbox" value="Plan de Mantenimiento Preventivo Mensual (Condominios)"/>
<div className="flex flex-col">
<span className="font-title text-title text-primary flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary-container text-[20px]">verified_user</span>
                    Plan de Mantenimiento Preventivo Mensual Integral
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Guardia técnica continua para residencias vacacionales, condominios frente al mar e instalaciones comerciales.</span>
</div>
</label>
</div>
{/*  Navigation Buttons  */}
<div className="flex items-center justify-between pt-space-md">
<button className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-lg bg-surface-container text-primary font-title text-label-lg hover:bg-surface-container-high transition-colors"  type="button">
<span className="material-symbols-outlined text-[20px]">arrow_back</span>
<span>Anterior</span>
</button>
<button className="inline-flex items-center gap-space-sm px-space-xl py-space-md rounded-lg bg-secondary-container text-on-secondary font-title text-label-lg shadow-md hover:bg-secondary hover:shadow-xl transition-all"  type="button">
<span>Continuar a Alcance y Urgencia</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</div>
{/*  STEP 3: Detalles y Alcance del Proyecto  */}
<div className="wizard-step hidden flex flex-col gap-space-lg" id="step-panel-3">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary-container tracking-wider uppercase font-bold">Paso 3 de 4</span>
<h2 className="font-headline-md text-headline-md text-primary">Detalles, Tiempos y Especificaciones</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Indícanos la prioridad de inicio y describe las características del área de trabajo.</p>
</div>
{/*  Urgency Level Selection  */}
<div className="space-y-space-xs">
<label className="font-title text-title text-primary">Nivel de Urgencia para el Inicio</label>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm pt-space-xs">
<label className="cursor-pointer p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all shadow-sm flex flex-col items-center text-center gap-space-xs group border border-transparent has-[:checked]:border-error/40">
<input className="peer sr-only" name="urgencia" type="radio" value="Emergencia Inmediata (Hoy)"/>
<span className="w-8 h-8 rounded-full bg-error-container text-error flex items-center justify-center peer-checked:bg-error peer-checked:text-on-error transition-colors">
<span className="material-symbols-outlined text-[20px]">warning</span>
</span>
<span className="font-title text-title text-primary group-hover:text-error transition-colors">Emergencia (Hoy)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-xs">Filtración activa, falla de bombas</span>
</label>
<label className="cursor-pointer p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all shadow-sm flex flex-col items-center text-center gap-space-xs group border border-transparent has-[:checked]:border-secondary-container/40">
<input checked="" className="peer sr-only" name="urgencia" type="radio" value="Esta misma semana"/>
<span className="w-8 h-8 rounded-full bg-secondary-fixed text-secondary-container flex items-center justify-center peer-checked:bg-secondary-container peer-checked:text-on-secondary transition-colors">
<span className="material-symbols-outlined text-[20px]">date_range</span>
</span>
<span className="font-title text-title text-primary group-hover:text-secondary-container transition-colors">Esta Semana</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-xs">Diagnóstico e inicio inmediato</span>
</label>
<label className="cursor-pointer p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all shadow-sm flex flex-col items-center text-center gap-space-xs group border border-transparent has-[:checked]:border-primary/40">
<input className="peer sr-only" name="urgencia" type="radio" value="En los próximos 30 días"/>
<span className="w-8 h-8 rounded-full bg-surface-container-high text-primary flex items-center justify-center peer-checked:bg-primary peer-checked:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">calendar_month</span>
</span>
<span className="font-title text-title text-primary transition-colors">Próximos 30 Días</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-xs">Planificación y compras previas</span>
</label>
<label className="cursor-pointer p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-all shadow-sm flex flex-col items-center text-center gap-space-xs group border border-transparent has-[:checked]:border-primary-container/40">
<input className="peer sr-only" name="urgencia" type="radio" value="Planificación a futuro"/>
<span className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center peer-checked:bg-primary-container peer-checked:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">hourglass_empty</span>
</span>
<span className="font-title text-title text-primary transition-colors">Proyecto Futuro</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-xs">Evaluación de costos y anteproyecto</span>
</label>
</div>
</div>
{/*  Area Estimada & Description  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-primary" htmlFor="area_aprox">Metros Cuadrados Estimados (m²)</label>
<div className="relative">
<input className="w-full h-12 px-space-md rounded-lg bg-surface text-primary font-body-md shadow-sm outline-none border border-outline-variant/30 focus:border-secondary-container focus:bg-surface-container-lowest transition-all" id="area_aprox" name="area_aprox" placeholder="Ej: 140 m² o Longitud" type="text"/>
<span className="absolute right-3 top-3 text-on-surface-variant text-sm font-label-sm">m²</span>
</div>
</div>
<div className="md:col-span-2 flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-primary" htmlFor="detalles_proyecto">Descripción breve de las obras a cotizar</label>
<textarea className="w-full p-space-md rounded-lg bg-surface text-primary font-body-md shadow-sm outline-none border border-outline-variant/30 focus:border-secondary-container focus:bg-surface-container-lowest transition-all" id="detalles_proyecto" name="detalles_proyecto" placeholder="Ej: Filtración en techo de tejas de la terraza principal, cambio de 80m² de piso a porcelanato pulido y revisión de bomba de 2HP..." rows="3"></textarea>
</div>
</div>
{/*  Drag & Drop Zone For Blueprints / Photos  */}
<div className="flex flex-col gap-space-xs">
<span className="font-label-lg text-label-lg text-primary">Planos previos o Fotografías de la zona (Opcional)</span>
<div className="p-space-xl rounded-xl bg-surface hover:bg-surface-container-low border border-dashed border-outline-variant/60 transition-colors text-center flex flex-col items-center justify-center gap-space-sm cursor-pointer relative group">
<div className="w-14 h-14 rounded-full bg-surface-container-highest text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[32px]">cloud_upload</span>
</div>
<div className="space-y-1">
<p className="font-title text-title text-primary font-bold">Arrastra fotos o planos aquí, o <span className="text-secondary-container underline">explora tus archivos</span></p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Soporta formatos DWG, PDF, JPG, PNG (Hasta 25 MB por archivo)</p>
</div>
<input className="absolute inset-0 opacity-0 cursor-pointer" multiple="" type="file"/>
</div>
</div>
{/*  Navigation Buttons  */}
<div className="flex items-center justify-between pt-space-md">
<button className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-lg bg-surface-container text-primary font-title text-label-lg hover:bg-surface-container-high transition-colors"  type="button">
<span className="material-symbols-outlined text-[20px]">arrow_back</span>
<span>Anterior</span>
</button>
<button className="inline-flex items-center gap-space-sm px-space-xl py-space-md rounded-lg bg-secondary-container text-on-secondary font-title text-label-lg shadow-md hover:bg-secondary hover:shadow-xl transition-all"  type="button">
<span>Paso Final: Datos de Contacto</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</div>
{/*  STEP 4: Datos de Contacto y Envío  */}
<div className="wizard-step hidden flex flex-col gap-space-lg" id="step-panel-4">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-secondary-container tracking-wider uppercase font-bold">Paso 4 de 4 • Final</span>
<h2 className="font-headline-md text-headline-md text-primary">¿A dónde enviamos tu presupuesto formal?</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Generaremos el desglose técnico y un ingeniero se pondrá en contacto directo con la evaluación.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-primary" htmlFor="nombre_apellido">Nombre y Apellido *</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-on-surface-variant text-[20px]">person</span>
<input className="w-full h-12 pl-10 pr-space-md rounded-lg bg-surface text-primary font-body-md shadow-sm outline-none border border-outline-variant/30 focus:border-secondary-container focus:bg-surface-container-lowest transition-all" id="nombre_apellido" name="nombre_apellido" placeholder="Ej. Carlos Mendoza" required="" type="text"/>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-primary" htmlFor="telefono_whatsapp">Teléfono / WhatsApp (Para envío de PDF) *</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-tertiary-fixed-dim text-[20px]">chat</span>
<input className="w-full h-12 pl-10 pr-space-md rounded-lg bg-surface text-primary font-body-md shadow-sm outline-none border border-outline-variant/30 focus:border-secondary-container focus:bg-surface-container-lowest transition-all" id="telefono_whatsapp" name="telefono_whatsapp" placeholder="+58 412 123 4567" required="" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-primary" htmlFor="correo_electronico">Correo Electrónico (Personal o Condominio) *</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-on-surface-variant text-[20px]">mail</span>
<input className="w-full h-12 pl-10 pr-space-md rounded-lg bg-surface text-primary font-body-md shadow-sm outline-none border border-outline-variant/30 focus:border-secondary-container focus:bg-surface-container-lowest transition-all" id="correo_electronico" name="correo_electronico" placeholder="carlos@empresa.com o mi-correo@gmail.com" required="" type="email"/>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-primary">Preferencia de Contacto</label>
<div className="grid grid-cols-2 gap-space-sm h-12">
<label className="cursor-pointer flex items-center justify-center gap-space-xs px-space-sm rounded-lg bg-surface hover:bg-surface-container-low transition-colors shadow-sm border border-outline-variant/20">
<input checked="" className="accent-secondary-container" name="canal_contacto" type="radio" value="WhatsApp"/>
<span className="font-body-md text-body-md text-primary font-medium">WhatsApp</span>
</label>
<label className="cursor-pointer flex items-center justify-center gap-space-xs px-space-sm rounded-lg bg-surface hover:bg-surface-container-low transition-colors shadow-sm border border-outline-variant/20">
<input className="accent-secondary-container" name="canal_contacto" type="radio" value="Llamada Telefónica"/>
<span className="font-body-md text-body-md text-primary font-medium">Llamada</span>
</label>
</div>
</div>
</div>
{/*  Instant Delivery Value Box  */}
<div className="p-space-md rounded-lg bg-surface-container-low flex items-start gap-space-md">
<span className="material-symbols-outlined text-secondary-container text-[24px] mt-0.5">verified</span>
<div className="space-y-0.5">
<h4 className="font-title text-title text-primary">Entrega de Presupuesto Detallado</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Recibirás un documento digital en formato PDF con el cómputo métrico aproximado, lista de materiales con calidad marina comprobada y cronograma de ejecución.</p>
</div>
</div>
{/*  Action Button & Back  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-md">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-lg bg-surface-container text-primary font-title text-label-lg hover:bg-surface-container-high transition-colors"  type="button">
<span className="material-symbols-outlined text-[20px]">arrow_back</span>
<span>Anterior</span>
</button>
<button disabled={isSubmitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-space-md px-space-xl py-space-md rounded-lg bg-secondary-container text-on-secondary font-title text-label-lg shadow-lg hover:bg-secondary hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
<span className="text-base font-bold">{isSubmitting ? 'Enviando Solicitud...' : 'Solicitar Presupuesto Formal Ahora'}</span>
<span className="material-symbols-outlined text-[24px]">arrow_forward</span>
</button>
</div>
</div>
{/*  Submission Confirmation View (Hidden by default)  */}
{submitStatus === 'success' && (
<div className="flex flex-col items-center text-center py-space-xl gap-space-md" id="step-panel-success">
<div className="w-20 h-20 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary-container shadow-lg animate-bounce">
<span className="material-symbols-outlined text-[44px]">check</span>
</div>
<div className="max-w-md space-y-space-xs">
<h2 className="font-headline-md text-headline-md text-primary">¡Solicitud Recibida con Éxito!</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Tu requerimiento ha sido asignado a nuestro departamento técnico de guardia en la Isla de Margarita. En breve te contactaremos vía WhatsApp con el reporte previo.</p>
</div>
<div className="p-space-md bg-surface-container-low rounded-lg text-left w-full max-w-sm font-body-sm text-body-sm space-y-1">
<p><strong className="font-title text-primary">Ingeniero a cargo:</strong> Ing. Civil de Guardia (CIV Activo)</p>
<p><strong className="font-title text-primary">Respuesta estimada:</strong> Menos de 30 minutos</p>
</div>
<a className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-[#00A896] text-on-secondary font-title text-label-lg shadow-md hover:brightness-110 transition-all" href="https://wa.me/584122138418" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px]">chat</span>
<span>Abrir WhatsApp Ahora</span>
</a>
</div>
)}
{submitStatus === 'error' && (
<div className="mt-space-md p-space-md rounded-lg bg-error-container text-on-error-container flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[24px]">error</span>
<div>
<div className="font-title text-label-lg">Hubo un error</div>
<div className="font-body-sm text-body-sm">No pudimos enviar tu solicitud, intenta más tarde.</div>
</div>
</div>
)}
</form>
{/*  Technical Specification Matrix Preview  */}
<div className="w-full bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between">
<div className="space-y-0.5">
<h3 className="font-title text-title text-primary">Estándares de Ejecución DS Servicios Margarita</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Protección anticorrosiva y resistencia climática comprobada para Nueva Esparta.</p>
</div>
<span className="hidden sm:inline-flex items-center gap-1 text-tertiary-fixed-dim bg-primary font-label-sm text-label-sm px-space-sm py-1 rounded-full">
<span className="material-symbols-outlined text-[14px]">shield</span> Norma Covenin
            </span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container font-title text-primary text-xs uppercase tracking-wider">
<tr>
<th className="p-space-sm rounded-l-lg">Disciplina</th>
<th className="p-space-sm">Materiales Certificados</th>
<th className="p-space-sm">Garantía Escrita</th>
<th className="p-space-sm rounded-r-lg">Tiempo Ejecución</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="p-space-sm font-semibold text-primary">Impermeabilización</td>
<td className="p-space-sm text-on-surface-variant">Manto 4mm Cindú + Pintura Alum. Marina</td>
<td className="p-space-sm text-secondary-container font-semibold">5 a 10 Años</td>
<td className="p-space-sm text-on-surface">3 a 6 días hábiles</td>
</tr>
<tr className="bg-surface/60 hover:bg-surface-container-low transition-colors">
<td className="p-space-sm font-semibold text-primary">Tanques &amp; Bombas</td>
<td className="p-space-sm text-on-surface-variant">Desinfección Hypo + Válvulas Bronce Pesado</td>
<td className="p-space-sm text-secondary-container font-semibold">12 Meses</td>
<td className="p-space-sm text-on-surface">24 a 48 horas</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="p-space-sm font-semibold text-primary">Aires Acondicionados</td>
<td className="p-space-sm text-on-surface-variant">Barniz Dieléctrico Epóxico Marino</td>
<td className="p-space-sm text-secondary-container font-semibold">6 Meses</td>
<td className="p-space-sm text-on-surface">Mismo día</td>
</tr>
<tr className="bg-surface/60 hover:bg-surface-container-low transition-colors">
<td className="p-space-sm font-semibold text-primary">Remodelación &amp; Pisos</td>
<td className="p-space-sm text-on-surface-variant">Pegamento Superflex Porcelanato + Drywall RH</td>
<td className="p-space-sm text-secondary-container font-semibold">3 Años Estructural</td>
<td className="p-space-sm text-on-surface">Según metraje</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  Right 4 Cols: Trust Sidebar, Guarantees & Social Proof  */}
<div className="lg:col-span-4 flex flex-col gap-space-lg sticky top-28">
{/*  Trust Box / Solid Value Props  */}
<div className="w-full bg-primary-container text-on-secondary p-space-lg rounded-xl shadow-lg space-y-space-md relative overflow-hidden">
<div className="absolute -right-8 -bottom-8 w-40 h-40 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none"></div>
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider">Compromiso Insular</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary">¿Por qué confiar en DS Servicios?</h3>
</div>
{/*  Feature items  */}
<div className="space-y-space-md font-body-sm text-body-sm text-on-primary-container">
<div className="flex items-start gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest/10 text-tertiary-fixed-dim flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">money_off</span>
</div>
<div>
<strong className="text-on-primary block font-title">100% Gratuito y sin Compromiso</strong>
<span>La visita técnica preliminar de evaluación no tiene costo en Pampatar, Porlamar y Maneiro.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest/10 text-secondary-container flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">verified</span>
</div>
<div>
<strong className="text-on-primary block font-title">Garantía Formal por Contrato</strong>
<span>Hasta 10 años de garantía escrita en impermeabilizaciones y respaldo legal con facturación fiscal.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest/10 text-tertiary-fixed-dim flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">engineering</span>
</div>
<div>
<strong className="text-on-primary block font-title">Ingenieros Colegiados CIV</strong>
<span>Todos los cálculos hidroneumáticos, cargas eléctricas y planos están avalados por el Colegio de Ingenieros.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest/10 text-secondary-container flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">bolt</span>
</div>
<div>
<strong className="text-on-primary block font-title">Respuesta Rápida Garantizada</strong>
<span>Un ingeniero o técnico líder se comunicará contigo vía WhatsApp en menos de 30 minutos hábiles.</span>
</div>
</div>
</div>
{/*  Direct Line Callout  */}
<div className="pt-space-xs">
<a className="w-full inline-flex items-center justify-center gap-space-xs py-space-sm rounded-lg bg-surface-container-lowest text-primary font-title text-label-lg hover:bg-surface-container-low transition-colors shadow-sm" href="https://wa.me/584122138418" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[#00A896] text-[20px]">chat</span>
<span>Hablar directo con Ingeniero</span>
</a>
</div>
</div>
{/*  Mini Portfolio Highlight Card with Real Photo Prompt  */}
<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col border border-outline-variant/30">
<div className="relative h-48 w-full bg-surface-container">
<img alt="Remodelación Terraza en Pampatar Margarita" className="w-full h-full object-cover" data-alt="Modern renovated luxury penthouse terrace overlooking the sea in Pampatar Margarita Island, high quality porcelain tiles, sleek aluminum pergola, crystal railings, vibrant tropical lighting, spotless engineering finish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAscTjkH-mVUGb3RbbNPUdhZy_H1F-bIXsLaY9-WJiKm1oGDFxsdbZyu9JG-jD_nncV6etQ8CCs3587DdmZYcXFDM9kr_j3vQ4O9FQTFrvtrDV745fEb6QNau0i7nJXGNVExX4XBUHB1lcsFMzpDDr0TRpJzES5YctnI-ewapohwAlTPBkfuQqAd4cYqKxq0bE2bWA-Ttj0YhD-CwfhziswpvXRQL6ovHefAUWm3y_1Yf1UC574V8AG"/>
<div className="absolute top-3 left-3 px-space-xs py-0.5 rounded-full bg-primary/80 backdrop-blur-sm text-tertiary-fixed text-label-sm font-label-sm">
              Proyecto Reciente • Pampatar
            </div>
</div>
<div className="p-space-md space-y-1">
<h4 className="font-title text-title text-primary">Remodelación Terraza • C.R. Bahía Bella</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Impermeabilización multicapa, colocación de 160m² de gres porcelánico antiresbalante y luminarias LED marinas.</p>
</div>
</div>
{/*  Real Client Testimonials (Social Proof)  */}
<div className="w-full bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md border border-outline-variant/30">
<div className="flex items-center justify-between">
<h4 className="font-title text-title text-primary">Opiniones en Margarita</h4>
<div className="flex text-secondary-container">
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
</div>
</div>
{/*  Testimonial 1  */}
<div className="p-space-md rounded-lg bg-surface space-y-space-xs">
<p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
              “Cotizamos el lavado de la cisterna de 120.000 litros del edificio en Playa El Ángel y en 20 minutos ya teníamos el presupuesto formal con certificación sanitaria. Trabajo impecable.”
            </p>
<div className="flex items-center justify-between pt-1 font-label-sm text-label-sm">
<span className="text-primary font-bold">Dra. Luisa Gómez</span>
<span className="text-on-surface-variant">Junta Condominio Maneiro</span>
</div>
</div>
{/*  Testimonial 2  */}
<div className="p-space-md rounded-lg bg-surface space-y-space-xs">
<p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
              “Excelente servicio de impermeabilización en nuestra quinta en Jorge Coll. Llovieron los temporales de noviembre y ni una sola gota. Los ingenieros son muy atentos y profesionales.”
            </p>
<div className="flex items-center justify-between pt-1 font-label-sm text-label-sm">
<span className="text-primary font-bold">Ing. Roberto Castillo</span>
<span className="text-on-surface-variant">Residencia Particular Mariño</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive JavaScript logic for Funnel Steps  */}

</div>
    </>
  );
}
