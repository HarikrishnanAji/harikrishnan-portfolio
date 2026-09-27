import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9" data-aos="fade-up">
            <span className="badge-role">Full Stack Developer</span>
            <h1>
              Hi, I'm <span>{profile.name}</span>
            </h1>
            <h3>{profile.tagline}</h3>
            <p className="lead-text">{profile.summary}</p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#projects" className="btn-teal" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                View My Work
              </a>
              <a href={profile.resumeUrl} className="btn-outline-teal" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
