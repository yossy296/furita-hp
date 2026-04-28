import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s',
      }}
    >
      <nav style={styles.nav}>
        <motion.div
          style={{
            ...styles.logo,
            color: scrolled ? '#1a1a2e' : '#fff',
          }}
          whileHover={{ scale: 1.05 }}
        >
          Furita
        </motion.div>

        {/* Desktop links */}
        <ul style={styles.links}>
          {links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              style={{ listStyle: 'none' }}
            >
              <a
                href={link.href}
                style={{
                  ...styles.link,
                  color: scrolled ? '#555' : 'rgba(255,255,255,0.9)',
                }}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            ...styles.hamburger,
            color: scrolled ? '#1a1a2e' : '#fff',
          }}
        >
          {menuOpen ? '\u2715' : '\u2630'}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={styles.mobileMenu}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

const styles = {
  nav: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '18px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 800,
    letterSpacing: '1px',
  },
  links: {
    display: 'flex',
    gap: 32,
    listStyle: 'none',
    '@media (max-width: 768px)': { display: 'none' },
  },
  link: {
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    transition: 'color 0.2s',
  },
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  mobileMenu: {
    background: 'rgba(255,255,255,0.97)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    flexDirection: 'column',
    padding: '12px 24px 24px',
    overflow: 'hidden',
  },
  mobileLink: {
    textDecoration: 'none',
    color: '#1a1a2e',
    fontSize: '1.1rem',
    padding: '12px 0',
    borderBottom: '1px solid #eee',
    fontWeight: 500,
  },
}

// Inject responsive CSS
const styleSheet = document.createElement('style')
styleSheet.textContent = `
  @media (max-width: 768px) {
    nav ul { display: none !important; }
    nav button { display: block !important; }
  }
`
document.head.appendChild(styleSheet)
