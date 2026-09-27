import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`back-top ${show ? 'show' : ''}`}
      onClick={scroll}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  )
}
