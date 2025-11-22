import { useEffect, useState } from 'react'

function Meteogram() {
  const [lat, setLat] = useState(40.71)
  const [lon, setLon] = useState(-74.0)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchMeteogram()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMeteogram = async () => {
    try {
      setLoading(true)
      setError('')
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/meteogram`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lat: Number(lat), lon: Number(lon), variable: 't2m' })
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const json = await res.json()
      setData(json)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-10 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Interactive Meteogram</h2>
            <p className="text-slate-300 mt-2">Enter a location and generate a forecast time‑series.</p>
          </div>
          <div className="flex gap-3">
            <input value={lat} onChange={(e)=>setLat(e.target.value)} className="bg-slate-800 border border-slate-700 rounded px-3 py-2 w-28" placeholder="Lat" />
            <input value={lon} onChange={(e)=>setLon(e.target.value)} className="bg-slate-800 border border-slate-700 rounded px-3 py-2 w-28" placeholder="Lon" />
            <button onClick={fetchMeteogram} className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-4 rounded">
              Generate
            </button>
          </div>
        </div>

        <div className="mt-8 bg-slate-800/60 border border-slate-700 rounded-xl p-4 min-h-[260px]">
          {loading && <p className="text-slate-300">Loading...</p>}
          {error && <p className="text-red-400">{error}</p>}
          {data && (
            <div>
              <div className="flex items-center justify-between">
                <p className="text-slate-200">{data.variable.toUpperCase()} at {data.lat.toFixed(2)}, {data.lon.toFixed(2)} • {data.units}</p>
              </div>
              <div className="mt-4 grid grid-cols-12 gap-1 h-40">
                {data.values.slice(0, 48).map((v, i) => {
                  const max = Math.max(...data.values)
                  const min = Math.min(...data.values)
                  const norm = (v - min) / (max - min + 1e-6)
                  const height = Math.max(4, Math.round(norm * 150))
                  return (
                    <div key={i} className="relative bg-gradient-to-t from-emerald-600 to-emerald-300 rounded-sm" style={{ height }} title={`${data.times[i]}: ${v} ${data.units}`}></div>
                  )
                })}
              </div>
              <div className="mt-2 flex justify-between text-xs text-slate-400">
                <span>Now</span>
                <span>+24h</span>
                <span>+48h</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Meteogram
