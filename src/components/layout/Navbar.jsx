import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/40 shadow-[0_4px_20px_-2px_rgba(15,39,68,0.05)]">
      <div className="h-20 w-full px-gutter lg:px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <Link to="/">
            <img 
              alt="DS Servicios y Remodelaciones Logo" 
              className="w-auto object-contain h-14" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1VRYWsiqmGo2hP4RvaVHmfkxnuwP64Adp1-dvSgfgm8jTHl2oRqFRj2_5RY7rGtXgaajIolropzeGBYMviw42pxsOQ6VFMv9ORKoynyyAG5xCrQxUZh12nbFWIOVhTONdvvCgq-fW9Zc9m6D-PsHsei5vzcmWnGBmaEIUiC6Qb4-fEw0HhZ6bMeWJEXM0AZ9kMZ5_NM0fB3CplSdPQMO11AoL-3UJugfrbmV40YYlswJ4vs47tFuR142SI" 
            />
          </Link>
        </div>
        <nav className="hidden xl:flex items-center gap-space-lg">
          <NavLink to="/" className={({isActive}) => isActive ? "transition-colors text-secondary-container font-title font-label-lg text-label-lg" : "font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"}>Inicio</NavLink>
          <NavLink to="/servicios" className={({isActive}) => isActive ? "transition-colors text-secondary-container font-title font-label-lg text-label-lg" : "font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"}>Servicios</NavLink>
          <NavLink to="/quienes-somos" className={({isActive}) => isActive ? "transition-colors text-secondary-container font-title font-label-lg text-label-lg" : "font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"}>Quiénes Somos</NavLink>
          <NavLink to="/contacto" className={({isActive}) => isActive ? "transition-colors text-secondary-container font-title font-label-lg text-label-lg" : "font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"}>Contacto</NavLink>
        </nav>
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          <div className="hidden md:flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-full border border-outline-variant/60">
            <span className="material-symbols-outlined text-secondary-container text-[18px]">location_on</span>
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">Isla de Margarita</span>
          </div>
          <Link to="/cotizador" className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm rounded-lg bg-secondary-container text-on-secondary font-title text-label-lg shadow-sm hover:bg-secondary transition-colors">
            Cotizar Servicio
          </Link>
          <button 
            className="xl:hidden p-2 rounded-lg text-primary hover:bg-surface-container-low flex items-center justify-center focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Drawer */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} xl:hidden w-full bg-surface-container-lowest border-t border-outline-variant/40 px-gutter py-space-md shadow-lg flex-col gap-space-sm`}>
        <NavLink to="/" className={({isActive}) => isActive ? "py-2 px-space-sm text-secondary-container font-title text-body-md rounded hover:bg-surface-container-low" : "py-2 px-space-sm text-on-surface-variant font-label-lg text-body-md rounded hover:bg-surface-container-low"} onClick={() => setIsMenuOpen(false)}>Inicio</NavLink>
        <NavLink to="/servicios" className={({isActive}) => isActive ? "py-2 px-space-sm text-secondary-container font-title text-body-md rounded hover:bg-surface-container-low" : "py-2 px-space-sm text-on-surface-variant font-label-lg text-body-md rounded hover:bg-surface-container-low"} onClick={() => setIsMenuOpen(false)}>Servicios</NavLink>
        <NavLink to="/quienes-somos" className={({isActive}) => isActive ? "py-2 px-space-sm text-secondary-container font-title text-body-md rounded hover:bg-surface-container-low" : "py-2 px-space-sm text-on-surface-variant font-label-lg text-body-md rounded hover:bg-surface-container-low"} onClick={() => setIsMenuOpen(false)}>Quiénes Somos</NavLink>
        <NavLink to="/contacto" className={({isActive}) => isActive ? "py-2 px-space-sm text-secondary-container font-title text-body-md rounded hover:bg-surface-container-low" : "py-2 px-space-sm text-on-surface-variant font-label-lg text-body-md rounded hover:bg-surface-container-low"} onClick={() => setIsMenuOpen(false)}>Contacto</NavLink>
        <div className="pt-space-sm border-t border-outline-variant/30 flex flex-col gap-space-xs">
          <Link to="/cotizador" className="w-full py-2.5 rounded-lg bg-secondary-container text-on-secondary text-center font-title text-label-lg shadow-sm" onClick={() => setIsMenuOpen(false)}>
            Cotizar Servicio
          </Link>
        </div>
      </div>
    </header>
  );
}
