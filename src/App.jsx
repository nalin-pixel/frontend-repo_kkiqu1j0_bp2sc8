import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Meteogram from './components/Meteogram'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main>
        <Hero />
        <div id="meteogram"><Meteogram /></div>
        <div id="features"><Features /></div>
      </main>
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <p>Built for WRF workflows • xarray • PostGIS/Timescale-ready</p>
          <a href="/test" className="text-emerald-400 hover:text-emerald-300">Backend status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
