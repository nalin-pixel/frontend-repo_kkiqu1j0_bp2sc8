import { Map, LineChart, BellRing } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: <Map className="w-6 h-6 text-emerald-400" />,
      title: 'Map Overlays',
      desc: 'Layer forecasts, radar, and observations. Pan, zoom, and query values.'
    },
    {
      icon: <LineChart className="w-6 h-6 text-emerald-400" />,
      title: 'Meteograms',
      desc: 'Detailed time-series for any point with interactive brushing and tooltips.'
    },
    {
      icon: <BellRing className="w-6 h-6 text-emerald-400" />,
      title: 'Region Alerts',
      desc: 'Define polygons and thresholds to trigger notifications.'
    }
  ]
  return (
    <section className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/30 transition">
            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-3">
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="text-slate-300 mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
