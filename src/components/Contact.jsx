import { profile } from '../data/portfolioData'

export default function Contact() {
  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry')}`

  return (
    <section id="contact" className="section section-light">
      <div className="container">
        <div className="sec-title" data-aos="fade-up">
          <h2>Let's Connect</h2>
          <div className="sec-divider"></div>
        </div>
        <p className="sec-subtitle">
          Have a role, a project, or just want to talk architecture? My inbox is open.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="say-hello" data-aos="zoom-in">
              <a href={mailtoHref} className="btn-teal say-hello-btn">
                Say Hello <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
