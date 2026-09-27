import { experience as items } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section section-light">
      <div className="container">
        <div className="sec-title" data-aos="fade-up">
          <h2>Experience</h2>
          <div className="sec-divider"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="timeline">
              {items.map((exp, idx) => (
                <div className="timeline-item" key={exp.id} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <h4 className="role">{exp.role}</h4>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period} · {exp.location}</span>
                  <ul>
                    {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
