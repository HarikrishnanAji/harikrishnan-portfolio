import { features, profile } from '../data/portfolioData'
import { handleSpotlight } from '../utils/spotlight'

export default function Features() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="sec-title" data-aos="fade-up">
          <h2>About Me</h2>
          <div className="sec-divider"></div>
        </div>
        <p className="sec-subtitle">{profile.summary}</p>

        <div className="row g-4">
          {features.map((f, idx) => (
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={idx * 100} key={f.title}>
              <div className="feature-card" onMouseMove={handleSpotlight}>
                <div className="feature-icon">
                  <i className={`bi ${f.icon}`}></i>
                </div>
                <h4>{f.title}</h4>
                <p className="mb-0">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
