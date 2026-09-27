import { education, certifications } from '../data/portfolioData'
import { handleSpotlight } from '../utils/spotlight'

export default function EducationCertifications() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <h3 className="mb-4"><i className="bi bi-mortarboard text-teal me-2"></i>Education</h3>
            <div className="row g-3">
              {education.map((e) => (
                <div className="col-12" key={e.id}>
                  <div className="info-card" onMouseMove={handleSpotlight}>
                    <span className="sub">{e.period}</span>
                    <h4>{e.degree}</h4>
                    <p className="mb-0 small">{e.institute}{e.detail ? ` · ${e.detail}` : ''}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <h3 className="mb-4"><i className="bi bi-patch-check text-teal me-2"></i>Certifications &amp; Awards</h3>
            <div className="row g-3">
              {certifications.map((c) => (
                <div className="col-12" key={c.id}>
                  <div className="info-card" onMouseMove={handleSpotlight}>
                    <span className="sub">{c.date}</span>
                    <h4>{c.title}</h4>
                    <p className="mb-0 small">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
