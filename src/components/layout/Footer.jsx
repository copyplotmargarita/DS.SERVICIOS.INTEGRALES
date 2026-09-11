import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-secondary border-t border-primary mt-auto">
      <div className="w-full px-gutter lg:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
          <div className="space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <img 
                alt="DS Servicios y Remodelaciones Logo" 
                className="h-8 w-auto object-contain bg-surface-container-lowest rounded-lg p-space-xs" 
                src="https://lh3.googleusercontent.com/aida/AEtjO1VRYWsiqmGo2hP4RvaVHmfkxnuwP64Adp1-dvSgfgm8jTHl2oRqFRj2_5RY7rGtXgaajIolropzeGBYMviw42pxsOQ6VFMv9ORKoynyyAG5xCrQxUZh12nbFWIOVhTONdvvCgq-fW9Zc9m6D-PsHsei5vzcmWnGBmaEIUiC6Qb4-fEw0HhZ6bMeWJEXM0AZ9kMZ5_NM0fB3CplSdPQMO11AoL-3UJugfrbmV40YYlswJ4vs47tFuR142SI" 
              />
              <span className="font-title text-title text-on-secondary">DS SERVICIOS</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              Líderes en mantenimiento integral, obras civiles y remodelaciones estructurales para residencias, comercios y complejos hoteleros en la Isla de Margarita.
            </p>
            <div className="flex items-center gap-space-sm text-on-primary-container">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-secondary hover:bg-secondary-container transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">public</span></span>
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-secondary hover:bg-secondary-container transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">mail</span></span>
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-secondary hover:bg-secondary-container transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">support_agent</span></span>
            </div>
          </div>
          <div className="space-y-space-md">
            <h4 className="font-title text-title text-on-secondary border-b border-on-primary-container/20 pb-space-xs">Navegación</h4>
            <ul className="space-y-space-sm">
              <li className="font-body-sm text-body-sm"><Link to="/" className="text-on-primary-container hover:text-on-secondary transition-colors">Inicio</Link></li>
              <li className="font-body-sm text-body-sm"><Link to="/servicios" className="text-on-primary-container hover:text-on-secondary transition-colors">Nuestros Servicios</Link></li>
              <li className="font-body-sm text-body-sm"><Link to="/quienes-somos" className="text-on-primary-container hover:text-on-secondary transition-colors">Sobre Nosotros</Link></li>
              <li className="font-body-sm text-body-sm"><Link to="/contacto" className="text-on-primary-container hover:text-on-secondary transition-colors">Contacto Directo</Link></li>
            </ul>
          </div>
          <div className="space-y-space-md">
            <h4 className="font-title text-title text-on-secondary border-b border-on-primary-container/20 pb-space-xs">Cobertura Insular</h4>
            <ul className="space-y-space-sm text-on-primary-container font-body-sm text-body-sm">
              <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span>Porlamar (Municipio Mariño)</li>
              <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span>Pampatar (Municipio Maneiro)</li>
              <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span>Juan Griego (Municipio Marcano)</li>
              <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span>Playa El Agua &amp; Antolín del Campo</li>
              <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span>Atención Corporativa en Todo el Estado Nueva Esparta</li>
            </ul>
          </div>
          <div className="space-y-space-md">
            <h4 className="font-title text-title text-on-secondary border-b border-on-primary-container/20 pb-space-xs">Oficina Técnica</h4>
            <div className="space-y-space-xs text-on-primary-container font-body-sm text-body-sm">
              <p className="flex items-start gap-space-xs"><span className="material-symbols-outlined text-secondary-container text-[18px] shrink-0">pin_drop</span><span className="">Atamo Sur / La Asuncion, Municipio Arismendi, Isla de Margarita, Estado Nueva Esparta, Venezuela.</span></p>
              <p className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-secondary-container text-[18px] shrink-0">phone_in_talk</span><span className="">+58 412-213-8418</span></p>
              <p className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-secondary-container text-[18px] shrink-0">schedule</span><span className="">Lun - Sáb: 7:30 AM - 5:30 PM</span></p>
            </div>
            <div className="pt-space-xs">
              <Link to="/cotizador" className="inline-block font-label-sm text-label-sm uppercase tracking-wider text-tertiary-fixed-dim hover:text-on-secondary underline transition-colors">Solicitar Inspección en Sitio</Link>
            </div>
          </div>
        </div>
        <div className="mt-space-xl pt-space-md border-t border-primary flex flex-col sm:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-primary-container">
          <p className="">© 2025 DS Servicios y Remodelaciones. Todos los derechos reservados.</p>
          <p className="font-label-sm text-label-sm text-outline-variant">Ingeniería y Construcción en el Caribe Sur</p>
        </div>
      </div>
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center group">
        <a aria-label="WhatsApp Contacto" className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00A896] text-on-secondary shadow-lg hover:scale-105 active:scale-95 transition-all duration-200" href="https://wa.me/584122138418" rel="noopener noreferrer" target="_blank">
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-secondary-container"></span>
          </span>
          <span className="material-symbols-outlined text-[24px] sm:text-[28px]">chat</span>
        </a>
      </div>
    </footer>
  );
}
