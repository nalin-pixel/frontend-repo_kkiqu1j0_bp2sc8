import { useState, useEffect } from 'react'
import { Menu, X, Cloud, GitBranch, FlaskConical } from 'lucide-react'

function NavBar() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when mobile menu is open to prevent background scroll/overlap
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-emerald-500/10">
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
        <button aria-label="Toggle menu" className="md:hidden text-white" onClick={()=>setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu as a slide-down panel */}
      <div className={`md:hidden transition-[max-height] duration-300 overflow-hidden bg-black/90 text-slate-200 ${open ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-4 pb-4 space-y-2">
          <a href="#meteogram" onClick={()=>setOpen(false)} className="block py-2">Meteogram</a>
          <a href="#features" onClick={()=>setOpen(false)} className="block py-2">Features</a>
          <a href="/test" onClick={()=>setOpen(false)} className="block py-2">Test</a>
          <a href="#runs" onClick={()=>setOpen(false)} className="block py-2">Runs</a>
        </div>
      </div>
    </header>
  )
}

export default NavBar
