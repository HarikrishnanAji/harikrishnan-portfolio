import { skillCategories as categories } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section section-light">
      <div className="container">
        <div className="sec-title" data-aos="fade-up">
          <h2>Skills &amp; Expertise</h2>
          <div className="sec-divider"></div>
        </div>
        <p className="sec-subtitle">
          Technologies and practices I rely on to design maintainable, testable, cloud-ready applications.
        </p>

        <div className="row g-4">
          {categories.map((cat, ci) => (
            <div className="col-md-6" key={cat.id || cat.title} data-aos="fade-up" data-aos-delay={ci * 100}>
              <div className="feature-card text-start h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="feature-icon me-3 mb-0" style={{ width: 52, height: 52, fontSize: 22 }}>
                    <i className={`bi ${cat.icon || 'bi-cpu'}`}></i>
                  </div>
                  <h4 className="mb-0">{cat.title}</h4>
                </div>
                <div className="skill-tags">
                  {cat.skills.map((s) => (
                    <span className="skill-tag" key={s.name}>{s.name}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
