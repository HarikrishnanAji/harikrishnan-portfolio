import { useEffect, useRef, useState } from 'react'
import { facts } from '../data/portfolioData'

function useCountUp(target, start) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let frame
    const duration = 1400
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, target])

  return value
}

function Counter({ fact }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const value = useCountUp(fact.value, inView)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="col-6 col-md-3" ref={ref}>
      <div className="counter-item">
        <i className={`bi ${fact.icon}`}></i>
        <strong>{value}{fact.suffix}</strong>
        <p>{fact.label}</p>
      </div>
    </div>
  )
}

export default function Facts() {
  return (
    <section className="facts-section">
      <div className="container">
        <div className="row g-4">
          {facts.map((f) => <Counter fact={f} key={f.label} />)}
        </div>
      </div>
    </section>
  )
}
