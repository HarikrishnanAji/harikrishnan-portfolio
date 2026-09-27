import { profile } from '../data/portfolioData'

export default function SocialSidebar() {
  return (
    <div className="social-sidebar" aria-label="Social links">
      <ul className="list-unstyled">
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <i className="bi bi-envelope"></i>
          </a>
        </li>
      </ul>
      <div className="social-sidebar-line"></div>
    </div>
  )
}
