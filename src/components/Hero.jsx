import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(16,185,129,0.35)]">
            Geo-temporal Weather Forecast Platform
          </h1>
          <p className="mt-4 text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto">
            Run forecasts, visualize meteograms, explore map overlays, compare history, and manage region-based alerts.
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
    </section>
  )
}

export default Hero
