import { useState } from 'react'
import { Menu, Cloud, GitBranch, FlaskConical } from 'lucide-react'

function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-emerald-500/10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Cloud className="w-5 h-5 text-emerald-400" />
          <span className="font-semibold">WRF Platform</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a href="#meteogram" className="hover:text-white">Meteogram</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="/test" className="inline-flex items-center gap-1 hover:text-white"><FlaskConical className="w-4 h-4"/> Test</a>
          <a href="#runs" className="inline-flex items-center gap-1 hover:text-white"><GitBranch className="w-4 h-4"/> Runs</a>
        </nav>
        <button className="md:hidden text-white" onClick={()=>setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/80 text-slate-200 px-4 pb-4 space-y-2">
          <a href="#meteogram" className="block">Meteogram</a>
          <a href="#features" className="block">Features</a>
          <a href="/test" className="block">Test</a>
          <a href="#runs" className="block">Runs</a>
        </div>
      )}
    </header>
  )
}

export default NavBar
