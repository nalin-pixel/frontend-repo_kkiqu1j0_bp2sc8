import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Meteogram from './components/Meteogram'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="pt-14">
        <Hero />
        <div id="meteogram" className="scroll-mt-20"><Meteogram /></div>
        <div id="features" className="scroll-mt-20"><Features /></div>
      </main>
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-between">
          <p className="text-center sm:text-left">Built for WRF workflows • xarray • PostGIS/Timescale-ready</p>
          <a href="/test" className="text-emerald-400 hover:text-emerald-300 text-center sm:text-right">Backend status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
