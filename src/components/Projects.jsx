import { useMemo, useState } from 'react'
import { projects as items } from '../data/portfolioData'
import { handleSpotlight } from '../utils/spotlight'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'dotnet', label: '.NET Core & Azure' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'research', label: 'Research' },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(
    () => (filter === 'all' ? items : items.filter((p) => p.category === filter)),
    [items, filter]
  )

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="sec-title" data-aos="fade-up">
          <h2>Projects &amp; Work</h2>
          <div className="sec-divider"></div>
        </div>
        <p className="sec-subtitle">
          A selection of enterprise and personal projects built with Clean Architecture in mind.
        </p>

        <div className="work-filter" data-aos="fade-up">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={filter === f.key ? 'active' : ''}
              onClick={() => setFilter(f.key)}
              type="button"
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="row">
          {filtered.map((p, idx) => (
            <div className="col-md-6 col-lg-4" key={p.id} data-aos="fade-up" data-aos-delay={(idx % 3) * 100}>
              <div className="work-item" onMouseMove={handleSpotlight}>
                <div className="work-thumb">
                  <i className="bi bi-code-square"></i>
                </div>
                <div className="work-body">
                  <span className="tag">{p.categoryLabel}</span>
                  <h4>{p.title}</h4>
                  <p className="small mb-2">{p.description}</p>
                  <div className="mb-3">
                    {p.tech.map((t) => (
                      <span className="tech-pill" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="work-links">
                    {p.links?.demo && p.links.demo !== '#' && (
                      <a href={p.links.demo} target="_blank" rel="noreferrer">Live Demo</a>
                    )}
                    {p.links?.repo && p.links.repo !== '#' && (
                      <a href={p.links.repo} target="_blank" rel="noreferrer">Source Code</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
