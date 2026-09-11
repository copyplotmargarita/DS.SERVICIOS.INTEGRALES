import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contacto() {
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
          form.current.reset();
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
{/*  INTRO ARCHITECTURAL HEADER  */}
<section className="relative w-full bg-primary text-on-primary overflow-hidden px-gutter lg:px-margin -mt-20 pt-32 pb-16 lg:pt-20 lg:pb-0 h-auto lg:h-[550px] flex flex-col justify-center">
<div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
<div className="absolute left-1/3 bottom-0 w-80 h-80 rounded-full bg-tertiary-fixed/10 blur-2xl pointer-events-none"></div>
<div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-xl">
<div className="w-full md:w-7/12 space-y-space-sm text-left">
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary tracking-tight leading-tight">
          Atención Técnica Inmediata y Canales Directos en Isla de Margarita
        </h1>
<p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
          Respuesta técnica garantizada en menos de 30 minutos. Guardias activas para emergencias estructurales, hidráulicas y eléctricas en residencias, comercios y complejos hoteleros.
        </p>
</div>
<div className="w-full md:w-4/12 hidden md:block">
<div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest/10">
<img alt="Atención técnica en campo" className="w-full h-[280px] object-cover" src="/tecnico_atencion.png" />
<div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section>
{/*  CANALES PRIORITARIOS (3 CARDS)  */}
<section className="w-full px-gutter lg:px-margin -mt-8 relative z-10">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  Card 1: Emergencias & WhatsApp  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-all group">
<div>
<div className="flex items-center justify-between gap-space-sm mb-space-md">
<div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
</div>
<span className="px-space-sm py-space-xs rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm uppercase font-semibold">
              Urgencias 24/7
            </span>
</div>
<h2 className="font-title text-title text-primary group-hover:text-secondary-container transition-colors">
            Emergencias y WhatsApp Directo
          </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
            Atención prioritaria para fallas de bombeo, filtraciones mayores, cortocircuitos y contención de daños en inmuebles.
          </p>
<div className="mt-space-md pt-space-xs">
<div className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Línea Directa Insular</div>
<div className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight mt-0.5">+58 412 213-8418</div>
</div>
</div>
<div className="mt-space-lg">
<a className="w-full py-space-sm px-space-md rounded-lg bg-secondary-container text-on-secondary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-secondary transition-all shadow-sm" href="https://wa.me/584122138418" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px]">chat</span>
<span>Chatear con Coordinador</span>
</a>
</div>
</div>
{/*  Card 2: Oficina Técnica  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-all group">
<div>
<div className="flex items-center justify-between gap-space-sm mb-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">engineering</span>
</div>
<span className="px-space-sm py-space-xs rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase font-semibold">
              Proyectos &amp; Costos
            </span>
</div>
<h2 className="font-title text-title text-primary group-hover:text-primary-container transition-colors">
            Oficina Técnica y Presupuestos
          </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
            Cálculo de cómputos métricos, remodelaciones integrales, pintura epóxica y memorias descriptivas.
          </p>
<div className="mt-space-md space-y-space-xs text-on-surface">
<div className="flex items-center gap-space-xs font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary-container">schedule</span>
<span>Lun - Sáb: 7:30 AM a 6:00 PM</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary-container">mail</span>
<span className="truncate">contacto@dsservicios.com</span>
</div>
</div>
</div>
<div className="mt-space-lg">
<a className="w-full py-space-sm px-space-md rounded-lg bg-primary-container text-on-secondary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-primary transition-all shadow-sm" href="mailto:contacto@dsservicios.com">
<span className="material-symbols-outlined text-[20px]">send</span>
<span>Escribir al Equipo Técnico</span>
</a>
</div>
</div>
{/*  Card 3: Sede Operativa  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-all group">
<div>
<div className="flex items-center justify-between gap-space-sm mb-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">domain</span>
</div>
<span className="px-space-sm py-space-xs rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm uppercase font-semibold">
              Registro Formal
            </span>
</div>
<h2 className="font-title text-title text-primary group-hover:text-primary-container transition-colors">
            Sede Operativa &amp; Logística
          </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
            Atamo Sur / La Asuncion, Municipio Arismendi, Isla de Margarita, Estado Nueva Esparta, Venezuela.
          </p>
<div className="mt-space-md p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/30 space-y-1 font-body-sm text-body-sm text-on-surface-variant">
<div className="font-title text-label-sm uppercase text-primary">DS SERVICIOS Y REMODELACIONES</div>

</div>
</div>
<div className="mt-space-lg">
<a className="w-full py-space-sm px-space-md rounded-lg bg-surface-container-high text-primary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-surface-dim transition-all" href="#mapa-cobertura">
<span className="material-symbols-outlined text-[20px]">explore</span>
<span>Ver Rutas de Cobertura</span>
</a>
</div>
</div>
</div>
</section>
{/*  FORMULARIO DE CONSULTA & PANEL INFORMATIVO (2 COLUMNAS)  */}
<section className="w-full px-gutter lg:px-margin py-space-xl">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch">
{/*  Columna Izquierda: Formulario  */}
<div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-space-xl shadow-md">
<div className="mb-space-lg">
<div className="font-label-sm text-label-sm text-secondary-container uppercase tracking-wider mb-1">Petición Directa de Servicio</div>
<h3 className="font-headline-md text-headline-md text-primary tracking-tight">Solicitud de Inspección o Cotización</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Complete los datos de su propiedad para asignar el técnico especialista correspondiente en Margarita.
          </p>
</div>
<form ref={form} onSubmit={sendEmail} className="space-y-space-md" id="contacto-form" >
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div>
<label className="block font-title text-label-lg text-primary mb-1" htmlFor="nombre">Nombre Completo *</label>
<input className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all" id="nombre" name="nombre" placeholder="Ej. Carlos Mendoza" required="" type="text"/>
</div>
<div>
<label className="block font-title text-label-lg text-primary mb-1" htmlFor="telefono">Teléfono / WhatsApp *</label>
<input className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all" id="telefono" name="telefono" placeholder="+58 412 123 4567" required="" type="tel"/>
</div>
</div>
<div>
<label className="block font-title text-label-lg text-primary mb-1" htmlFor="email">Correo Electrónico *</label>
<input className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all" id="email" name="email" placeholder="propietario@ejemplo.com" required="" type="email"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div>
<label className="block font-title text-label-lg text-primary mb-1" htmlFor="municipio">Municipio / Sector *</label>
<select className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all" id="municipio" name="municipio" required="">
<option disabled="" selected="" value="">Seleccione ubicación</option>
<option value="maneiro-pampatar">Maneiro: Pampatar / Casco Histórico</option>
<option value="maneiro-playa-el-angel">Maneiro: Playa El Ángel / Jorge Coll</option>
<option value="maneiro-los-robles">Maneiro: Los Robles / San Lorenzo</option>
<option value="marino-costa-azul">Mariño: Costa Azul / Bella Vista</option>
<option value="marino-porlamar-centro">Mariño: Porlamar Centro / 4 de Mayo</option>
<option value="antolin-playa-el-agua">Antolín del Campo: Playa El Agua</option>
<option value="antolin-el-tirano">Antolín del Campo: El Tirano / Manzanillo</option>
<option value="arismendi-la-asuncion">Arismendi: La Asunción / Guacuco</option>
<option value="garcia-villa-rosa">García: Villa Rosa / El Valle</option>
<option value="marcano-juan-griego">Marcano: Juan Griego</option>
<option value="otro">Otro sector de Nueva Esparta</option>
</select>
</div>
<div>
<label className="block font-title text-label-lg text-primary mb-1" htmlFor="inmueble">Tipo de Inmueble *</label>
<select className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all" id="inmueble" name="inmueble" required="">
<option disabled="" selected="" value="">Seleccione tipo</option>
<option value="casa">Casa Unifamiliar / Townhouse</option>
<option value="villa">Villa Vacacional / Condominio Privado</option>
<option value="apartamento">Apartamento Residencial</option>
<option value="comercio">Local Comercial / Restaurante</option>
<option value="posada">Posada / Hotel Boutique</option>
<option value="industrial">Galpón / Almacén Industrial</option>
</select>
</div>
</div>
<div>
<label className="block font-title text-label-lg text-primary mb-1" htmlFor="mensaje">Descripción del Requerimiento *</label>
<textarea className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all resize-none" id="mensaje" name="mensaje" placeholder="Describa el trabajo a realizar (remodelación, impermeabilización, mantenimiento de tableros, plomería, etc.)" required="" rows="4"></textarea>
</div>
<div className="p-space-sm rounded-lg bg-surface-container border border-surface-container-high flex items-start gap-space-sm text-on-surface">
<span className="material-symbols-outlined text-secondary-container text-[20px] shrink-0 mt-0.5">verified_user</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Visitas de diagnóstico sin costo oculto en el eje Maneiro-Mariño. Sus datos están protegidos bajo estricta confidencialidad corporativa.
            </p>
</div>
<button disabled={isSubmitting} className="w-full py-space-md px-space-lg rounded-lg bg-secondary-container hover:bg-secondary text-on-secondary font-title text-title flex items-center justify-center gap-space-sm transition-all shadow-md hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
<span className="material-symbols-outlined text-[22px]">send</span>
<span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje Directo'}</span>
</button>
</form>
{submitStatus === 'success' && (
<div className="mt-space-md p-space-md rounded-lg bg-tertiary-container text-tertiary-fixed flex items-center gap-space-sm" id="form-success-message">
<span className="material-symbols-outlined text-[24px]">check_circle</span>
<div>
<div className="font-title text-label-lg">¡Mensaje recibido con éxito!</div>
<div className="font-body-sm text-body-sm">Un supervisor técnico de DS Servicios te contactará en breve vía WhatsApp.</div>
</div>
</div>
)}
{submitStatus === 'error' && (
<div className="mt-space-md p-space-md rounded-lg bg-error-container text-on-error-container flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[24px]">error</span>
<div>
<div className="font-title text-label-lg">Hubo un error</div>
<div className="font-body-sm text-body-sm">No pudimos enviar tu mensaje, intenta más tarde.</div>
</div>
</div>
)}
</div>
{/*  Columna Derecha: Tarjeta Resumen & Métricas  */}
<div className="lg:col-span-5 flex flex-col justify-between h-full gap-space-lg">
{/*  Tarjeta "¿Por qué elegirnos?"  */}
<div className="bg-primary text-on-primary rounded-xl p-space-lg shadow-xl relative overflow-hidden">
<div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-secondary-container/20 blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-md">
<span className="px-space-sm py-space-xs rounded-full bg-secondary-container text-on-secondary font-label-sm text-label-sm uppercase tracking-wider">
              Compromiso DS
            </span>
<div className="flex items-center gap-1 text-tertiary-fixed-dim font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">speed</span>
<span>&lt; 30 min respuesta</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-space-sm">
            ¿Por qué elegir a DS Servicios?
          </h3>
<p className="font-body-sm text-body-sm text-on-primary-container mb-space-lg leading-relaxed">
            Combinamos ingeniería aplicada con los materiales idóneos para resistir el ambiente marino, la alta salinidad y las variaciones de suministro en Margarita.
          </p>
<ul className="space-y-space-sm">
<li className="flex items-start gap-space-sm">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-tertiary-fixed-dim shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div>
<span className="font-title text-label-lg text-on-primary block">Diagnóstico Técnico Sin Compromiso</span>
<span className="font-body-sm text-body-sm text-on-primary-container">Inspeccionamos en sitio y entregamos dictamen claro antes de iniciar obra.</span>
</div>
</li>
<li className="flex items-start gap-space-sm">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-tertiary-fixed-dim shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div>
<span className="font-title text-label-lg text-on-primary block">Materiales Resistentes al Salitre</span>
<span className="font-body-sm text-body-sm text-on-primary-container">Recubrimientos anticorrosivos certificados para ambientes de playa.</span>
</div>
</li>
<li className="flex items-start gap-space-sm">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-tertiary-fixed-dim shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div>
<span className="font-title text-label-lg text-on-primary block">Garantía Escrita Post-Servicio</span>
<span className="font-body-sm text-body-sm text-on-primary-container">Seguimiento técnico a 30, 90 y 180 días según envergadura.</span>
</div>
</li>
</ul>
<div className="mt-space-lg pt-space-md border-t border-primary-container flex items-center justify-between">
<div className="text-center">
<div className="font-headline-sm text-headline-sm text-secondary-fixed">100%</div>
<div className="font-label-sm text-label-sm text-on-primary-container uppercase">Satisfacción</div>
</div>
<div className="text-center">
<div className="font-headline-sm text-headline-sm text-secondary-fixed">+300</div>
<div className="font-label-sm text-label-sm text-on-primary-container uppercase">Obras Isla</div>
</div>
<div className="text-center">
<div className="font-headline-sm text-headline-sm text-secondary-fixed">+10 Años</div>
<div className="font-label-sm text-label-sm text-on-primary-container uppercase">En Margarita</div>
</div>
</div>
</div>
{/*  Mapa / Esquema de Despliegue Rápido  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-space-md shadow-md">
<div className="flex items-center justify-between mb-space-sm">
<div className="font-title text-label-lg text-primary flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary-container">hub</span>
              Rutas Rápidas de Respuesta
            </div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
              Av. Aldonza • Pampatar
            </span>
</div>
<div className="relative w-full h-44 rounded-lg bg-surface-container-high overflow-hidden flex flex-col justify-end p-space-sm bg-cover bg-center" data-alt="Mapa cartográfico satelital de la costa oriental de la Isla de Margarita mostrando Pampatar, Porlamar, Costa Azul y Playa El Ángel en el Caribe venezolano con tonalidades azul marino y acentos modernos." data-location="Pampatar, Isla de Margarita, Venezuela" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAr9uRJvme4ZUHww2U4Yk-07E8Kow9VtRrUStp6zF2UeTxzIwEPfYd7oo6u4h7IyHwcP1sxedmTSXg8ZIw5QVpuqDufyK9_LumOOT-6AJt9C-CEVuOf-0hvXPzYcUkslMOdTAsKNADXGEs3Ig4qmvcnva3iiOI6sdhyVAmODuwdGp0fYByXWLEva_Zy204jSMs6og4PR-Nbym2BzNIplHBBxr7zpqxjKnVc1NZ_x0tECk1r1ssiaQ2Z')"}}>
<div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/35 to-transparent"></div>
<div className="relative z-10 text-on-primary flex items-center justify-between">
<div className="font-body-sm text-body-sm flex items-center gap-1 font-medium">
<span className="material-symbols-outlined text-tertiary-fixed text-[18px]">near_me</span>
<span>Base Central Maneiro</span>
</div>
<span className="font-label-sm text-label-sm text-secondary-fixed bg-primary/80 backdrop-blur-xs px-space-xs py-0.5 rounded">Radio: 35 KM</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  ZONA DE COBERTURA GEOGRÁFICA DETALLADA  */}
<section className="w-full bg-surface-container-low/70 border-y border-outline-variant/30 px-gutter lg:px-margin py-space-xl" id="mapa-cobertura">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container border border-outline-variant/40 text-primary font-label-sm text-label-sm tracking-wider uppercase mb-space-xs">
<span className="material-symbols-outlined text-[14px] text-secondary-container">pin_drop</span>
          Presencia Territorial
        </div>
<h3 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          Sectores con Asistencia Prioritaria en Nueva Esparta
        </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
          Nuestras camionetas taller y cuadrillas técnicas operan con rutas programadas diarias a lo largo de los principales municipios de la isla.
        </p>
</div>
{/*  Grid de Sectores con Badges  */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md">
{/*  Sector 1  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
</div>
<div className="font-title text-title text-primary">Pampatar</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Mcpio. Maneiro</div>
</div>
<span className="mt-space-md inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary-container font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Cobertura 15 min
          </span>
</div>
{/*  Sector 2  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
</div>
<div className="font-title text-title text-primary">Playa El Ángel</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Mcpio. Maneiro</div>
</div>
<span className="mt-space-md inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary-container font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Base Operativa
          </span>
</div>
{/*  Sector 3  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
</div>
<div className="font-title text-title text-primary">Costa Azul</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Mcpio. Mariño</div>
</div>
<span className="mt-space-md inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary-container font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Cuadrilla Diaria
          </span>
</div>
{/*  Sector 4  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
</div>
<div className="font-title text-title text-primary">Jorge Coll</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Mcpio. Maneiro</div>
</div>
<span className="mt-space-md inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary-container font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Respuesta Rápida
          </span>
</div>
{/*  Sector 5  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
</div>
<div className="font-title text-title text-primary">Los Robles</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Mcpio. Maneiro</div>
</div>
<span className="mt-space-md inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary-container font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Ronda Periódica
          </span>
</div>
{/*  Sector 6  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
</div>
<div className="font-title text-title text-primary">Porlamar Centro</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Av. 4 de Mayo / Santiago Mariño</div>
</div>
<span className="mt-space-md inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary-container font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Comercial / Retail
          </span>
</div>
{/*  Sector 7  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
</div>
<div className="font-title text-title text-primary">Playa El Agua</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Mcpio. Antolín del Campo</div>
</div>
<span className="mt-space-md inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Posadas &amp; Hoteles
          </span>
</div>
{/*  Sector 8  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
</div>
<div className="font-title text-title text-primary">Playa Guacuco</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Mcpio. Arismendi</div>
</div>
<span className="mt-space-md inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Complejos Turísticos
          </span>
</div>
{/*  Sector 9  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
</div>
<div className="font-title text-title text-primary">La Asunción</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Casco Histórico / Institucional</div>
</div>
<span className="mt-space-md inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Restauraciones
          </span>
</div>
{/*  Sector 10  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span>
</div>
<div className="font-title text-title text-primary">Juan Griego</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Mcpio. Marcano</div>
</div>
<span className="mt-space-md inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Zona Norte Insular
          </span>
</div>
</div>
{/*  Sub-banner de Cobertura Adicional  */}
<div className="mt-space-lg p-space-md bg-surface-container-highest border border-outline-variant/40 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary-container text-[24px]">flight_takeoff</span>
<div>
<div className="font-title text-title text-primary">¿Su proyecto está en la Península de Macanao, El Yaque o Coche?</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Movilizamos brigadas especiales y logística marina para obras de mediana y gran envergadura.</div>
</div>
</div>
<a className="py-space-xs px-space-md rounded-lg bg-primary text-on-primary font-title text-label-lg whitespace-nowrap hover:bg-primary-container transition-colors shadow-sm" href="https://wa.me/584122138418?text=Hola,%20tengo%20un%20proyecto%20especial%20en%20Nueva%20Esparta" rel="noopener noreferrer" target="_blank">
          Consultar Viabilidad
        </a>
</div>
</div>
</section>
{/*  PREGUNTAS FRECUENTES RÁPIDAS DE CONTACTO (ACORDEÓN INTERACTIVO)  */}
<section className="w-full px-gutter lg:px-margin py-space-xl">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-space-xl">
<div className="font-label-sm text-label-sm text-secondary-container uppercase tracking-wider mb-1">Dudas Frecuentes</div>
<h3 className="font-headline-md text-headline-md text-primary tracking-tight">Preguntas Habituales al Contactarnos</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Transparencia desde el primer contacto técnico.</p>
</div>
<div className="space-y-space-sm">
{/*  FAQ 1  */}
<div className="faq-item bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-space-lg shadow-sm">
<button className="w-full flex items-center justify-between text-left focus:outline-none"  type="button">
<span className="font-title text-title text-primary">¿Cobran por la visita técnica diagnóstica?</span>
<span className="material-symbols-outlined text-secondary-container text-[24px] transform transition-transform duration-200 faq-icon">expand_more</span>
</button>
<div className="faq-content hidden mt-space-md pt-space-md border-t border-surface-container text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Las inspecciones preliminares y levantamientos de cotización en el eje comercial (Pampatar, Playa El Ángel, Costa Azul, Jorge Coll y Porlamar) no tienen costo alguno. Para inspecciones con instrumentación avanzada (detección ultrasónica de fugas o termografía eléctrica) o traslados hacia el norte y oeste de la isla, se estipula un viático logístico mínimo descontable al aprobar el presupuesto de obra.
          </div>
</div>
{/*  FAQ 2  */}
<div className="faq-item bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-space-lg shadow-sm">
<button className="w-full flex items-center justify-between text-left focus:outline-none"  type="button">
<span className="font-title text-title text-primary">¿Atienden emergencias técnicas durante los fines de semana y feriados?</span>
<span className="material-symbols-outlined text-secondary-container text-[24px] transform transition-transform duration-200 faq-icon">expand_more</span>
</button>
<div className="faq-content hidden mt-space-md pt-space-md border-t border-surface-container text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Sí. Mantenemos una cuadrilla permanente de guardia para contingencias críticas: ruptura de tuberías matrices, inundaciones en sótanos, colapso de tableros trifásicos y filtraciones tras fuertes lluvias. La atención se canaliza directamente por la línea de emergencias WhatsApp disponible las 24 horas.
          </div>
</div>
{/*  FAQ 3  */}
<div className="faq-item bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-space-lg shadow-sm">
<button className="w-full flex items-center justify-between text-left focus:outline-none"  type="button">
<span className="font-title text-title text-primary">¿Cómo gestionan y en cuánto tiempo entregan los presupuestos formales?</span>
<span className="material-symbols-outlined text-secondary-container text-[24px] transform transition-transform duration-200 faq-icon">expand_more</span>
</button>
<div className="faq-content hidden mt-space-md pt-space-md border-t border-surface-container text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Tras la inspección técnica o recepción de planos, emitimos un presupuesto desglosado en formato digital (PDF corporativo) con cómputos métricos, especificación de marcas autorizadas y cronograma de fases en un plazo de 24 a 48 horas hábiles. Para reparaciones puntuales menores, el presupuesto se aprueba en sitio de manera inmediata.
          </div>
</div>
{/*  FAQ 4  */}
<div className="faq-item bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-space-lg shadow-sm">
<button className="w-full flex items-center justify-between text-left focus:outline-none"  type="button">
<span className="font-title text-title text-primary">¿Ofrecen facilidades y modalidades de pago comerciales?</span>
<span className="material-symbols-outlined text-secondary-container text-[24px] transform transition-transform duration-200 faq-icon">expand_more</span>
</button>
<div className="faq-content hidden mt-space-md pt-space-md border-t border-surface-container text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Aceptamos transferencias bancarias nacionales con factura fiscal (SENIAT), pagos electrónicos en divisas (Zelle, transferencias internacionales, efectivo) y planes escalonados según avance de obra (Anticipo de materiales, valuaciones periódicas y finiquito contra entrega satisfactoria).
          </div>
</div>
</div>
</div>
</section>
{/*  BANNER FINAL DE ACCIÓN RÁPIDA  */}
<section className="w-full bg-primary-container text-on-secondary px-gutter lg:px-margin py-space-xl">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg text-center md:text-left">
<div className="space-y-space-xs max-w-xl">
<h3 className="font-headline-md text-headline-md text-on-primary">
          ¿Necesita coordinar una inspección técnica hoy mismo?
        </h3>
<p className="font-body-md text-body-md text-on-primary-container">
          Hable directamente con el ingeniero jefe de guardia en Margarita para evaluar su inmueble o coordinar una visita de urgencia.
        </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0 w-full md:w-auto">
<a className="w-full sm:w-auto py-space-sm px-space-lg rounded-lg bg-secondary-container text-on-secondary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-secondary transition-all shadow-md" href="https://wa.me/584122138418?text=Hola,%20requiero%20una%20inspección%20urgente%20en%20Margarita" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px]">chat</span>
<span>WhatsApp Guardia</span>
</a>
<a className="w-full sm:w-auto py-space-sm px-space-lg rounded-lg bg-primary text-on-primary font-title text-label-lg flex items-center justify-center gap-space-xs hover:bg-surface-container-high hover:text-primary transition-all shadow-sm border border-outline-variant/30" href="tel:+584122138418">
<span className="material-symbols-outlined text-[20px]">call</span>
<span>Llamar a Central</span>
</a>
</div>
</div>
</section>
</div>

    </>
  );
}
