const fs = require('fs');
let c = fs.readFileSync('src/pages/LandingLimpieza.jsx', 'utf8');

c = c.replace(
`      {/* COTIZADOR INTERACTIVO */}
      <section id="cotizador" className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-widest mb-3 border border-cyan-200">
            Calculadora en Tiempo Real
          </div>`,
`      {/* CÓMO CALCULAR */}
      <section className="pt-12 pb-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="w-full md:w-1/3 flex justify-center">
            <svg viewBox="0 0 200 150" className="w-48 h-auto text-slate-300" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M40 50 L100 20 L160 50 L160 110 L100 140 L40 110 Z" />
              <path d="M100 20 L100 80" />
              <path d="M40 50 L100 80 L160 50" />
              <path d="M100 80 L100 140" />
              <text x="35" y="45" fontSize="12" fill="#64748b" stroke="none" fontWeight="bold">Alto</text>
              <text x="135" y="35" fontSize="12" fill="#64748b" stroke="none" fontWeight="bold">Largo</text>
              <text x="145" y="105" fontSize="12" fill="#64748b" stroke="none" fontWeight="bold">Ancho</text>
            </svg>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold text-slate-900 mb-2">¿Cómo calcular la capacidad de tu tanque?</h3>
            <p className="text-slate-600 mb-3 text-sm sm:text-base">Es muy sencillo. Solo necesitas medir las dimensiones internas de tu tanque en metros y multiplicarlas:</p>
            <div className="bg-sky-50 text-sky-800 font-mono font-bold text-sm sm:text-base p-3 rounded-lg inline-block border border-sky-100 shadow-inner">
              Largo × Ancho × Altura × 1000 = Litros
            </div>
            <p className="text-slate-500 mt-3 text-xs sm:text-sm">Ejemplo: 2m × 2m × 1.5m = 6m³ × 1000 = <strong>6.000 Litros</strong></p>
          </div>
        </div>
      </section>

      {/* COTIZADOR INTERACTIVO */}
      <section id="cotizador" className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-widest mb-3 border border-cyan-200">
            Calculadora en Tiempo Real
          </div>`
);

c = c.replace(
`              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight text-sky-600">
                {formatNumber(liters)} L
              </div>`,
`              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight text-sky-600">
                {liters > 20000 ? '+20.000' : formatNumber(liters)} L
              </div>`
);

c = c.replace(
`                <input 
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
                </div>`,
`                <input 
                  type="range" 
                  id="tankSlider" 
                  min="1000" 
                  max="25000" 
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
                </div>`
);

c = c.replace(
`                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                  {[3000, 5000, 10000, 20000].map(val => (
                    <button 
                      key={val}
                      type="button" 
                      onClick={() => setLiters(val)}
                      className={\`text-xs font-semibold px-3 py-1.5 sm:py-1 rounded-full transition \${liters === val ? 'border border-sky-500 bg-sky-50 text-sky-700 shadow-sm' : 'border border-slate-200 hover:border-sky-400 hover:bg-sky-50 text-slate-600 bg-white'}\`}
                    >
                      {formatNumber(val)} L{val === 20000 ? '+' : ''}
                    </button>
                  ))}
                </div>`,
`                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                  {[5000, 8000, 10000, 25000].map(val => (
                    <button 
                      key={val}
                      type="button" 
                      onClick={() => setLiters(val)}
                      className={\`text-xs font-semibold px-3 py-1.5 sm:py-1 rounded-full transition \${liters === val ? 'border border-sky-500 bg-sky-50 text-sky-700 shadow-sm' : 'border border-slate-200 hover:border-sky-400 hover:bg-sky-50 text-slate-600 bg-white'}\`}
                    >
                      {val === 25000 ? '+20.000 L' : \`\${formatNumber(val)} L\`}
                    </button>
                  ))}
                </div>`
);

c = c.replace(
`                      <label className="relative flex items-center p-3 rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-sky-500 transition group has-[:checked]:border-sky-600 has-[:checked]:bg-sky-50/50">
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
                      </label>`,
`                      <label className="relative flex items-center p-3 rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-sky-500 transition group has-[:checked]:border-sky-600 has-[:checked]:bg-sky-50/50">
                        <input 
                          type="radio" 
                          name="truckOption" 
                          value="50" 
                          checked={truckCapacity === "50"}
                          onChange={(e) => setTruckCapacity(e.target.value)}
                          className="w-4 h-4 text-sky-600 focus:ring-sky-500" 
                        />
                        <div className="ml-3">
                          <span className="block text-xs font-bold text-slate-900 group-hover:text-sky-700">Camión de 10.000 L</span>
                          <span className="block text-xs font-extrabold text-sky-600">+$50 USD</span>
                        </div>
                      </label>

                      <label className="relative flex items-center p-3 rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-sky-500 transition group has-[:checked]:border-sky-600 has-[:checked]:bg-sky-50/50">
                        <input 
                          type="radio" 
                          name="truckOption" 
                          value="150" 
                          checked={truckCapacity === "150"}
                          onChange={(e) => setTruckCapacity(e.target.value)}
                          className="w-4 h-4 text-sky-600 focus:ring-sky-500" 
                        />
                        <div className="ml-3">
                          <span className="block text-xs font-bold text-slate-900 group-hover:text-sky-700">Camión de 40.000 L</span>
                          <span className="block text-xs font-extrabold text-sky-600">+$150 USD</span>
                        </div>
                      </label>`
);

c = c.replace(
`                <div className="flex justify-between md:justify-start gap-4 text-xs text-slate-400">
                  <span>Limpieza Profunda:</span>
                  <span className="font-mono font-bold text-slate-200">\${cleaningPrice}</span>
                </div>
                {wantsTruck && (
                  <div className="flex justify-between md:justify-start gap-4 text-xs text-slate-400">
                    <span>Camión de Agua Dulce:</span>
                    <span className="font-mono font-bold text-slate-200">+\${truckPrice}</span>
                  </div>
                )}
                <div className="pt-4 mt-2 sm:pt-2 sm:mt-0 border-t border-slate-700 sm:border-slate-800 flex flex-col sm:flex-row items-center sm:items-baseline justify-between md:justify-start gap-1 sm:gap-4">
                  <span className="text-sm font-bold text-slate-300 uppercase tracking-wider">Total Estimado:</span>
                  <div className="text-4xl sm:text-3xl font-black font-mono text-cyan-400 mt-1 sm:mt-0">\${grandTotal} <span className="text-sm sm:text-xs font-sans text-slate-400 font-normal ml-1 sm:ml-0">USD</span></div>
                </div>`,
`                <div className="flex justify-between md:justify-start gap-4 text-xs text-slate-400">
                  <span>Limpieza Profunda:</span>
                  <span className="font-mono font-bold text-slate-200">{cleaningPrice === "Consultar" ? "Consultar" : \`$\${cleaningPrice}\`}</span>
                </div>
                {wantsTruck && (
                  <div className="flex justify-between md:justify-start gap-4 text-xs text-slate-400">
                    <span>Camión de Agua Dulce:</span>
                    <span className="font-mono font-bold text-slate-200">+\${truckPrice}</span>
                  </div>
                )}
                <div className="pt-4 mt-2 sm:pt-2 sm:mt-0 border-t border-slate-700 sm:border-slate-800 flex flex-col sm:flex-row items-center sm:items-baseline justify-between md:justify-start gap-1 sm:gap-4">
                  <span className="text-sm font-bold text-slate-300 uppercase tracking-wider">Total Estimado:</span>
                  <div className="text-4xl sm:text-3xl font-black font-mono text-cyan-400 mt-1 sm:mt-0">{grandTotal === "Consultar" ? "Consultar" : \`$\${grandTotal}\`} {grandTotal !== "Consultar" && <span className="text-sm sm:text-xs font-sans text-slate-400 font-normal ml-1 sm:ml-0">USD</span>}</div>
                </div>`
);

fs.writeFileSync('src/pages/LandingLimpieza.jsx', c);
