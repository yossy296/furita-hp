import { motion } from 'motion/react'
import { useInView } from './useInView'
import { FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa6'

const socials = [
  { label: 'YouTube', icon: FaYoutube, color: '#ff0000', url: 'https://youtube.com/@adhdbackpacker_furi315?si=YBxUBy101JPQhvOK' },
  { label: 'TikTok', icon: FaTiktok, color: '#000000', url: 'https://www.tiktok.com/@adhdbackpacker_furi315' },
  { label: 'Instagram', icon: FaInstagram, color: '#e4405f', url: 'https://www.instagram.com/adhdbackpacker_furi315' },
]

export default function Contact() {
  const [ref, inView] = useInView(0.2)

  return (
    <section id="contact" ref={ref} style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        Contact & SNS
      </motion.h2>

      {/* SNS Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={styles.socialRow}
      >
        {socials.map((s) => (
          <motion.a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{ ...styles.socialBtn, background: s.color }}
          >
            <s.icon size={24} />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={styles.form}
        onSubmit={(e) => e.preventDefault()}
      >
        <input style={styles.input} type="text" placeholder="Name" required />
        <input style={styles.input} type="email" placeholder="Email" required />
        <textarea style={{ ...styles.input, ...styles.textarea }} placeholder="Message" rows={5} required />
        <motion.button
          type="submit"
          style={styles.btn}
          whileHover={{ scale: 1.05, background: '#2a7fd8' }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  )
}

const styles = {
  section: {
    padding: '120px 24px',
    background: 'linear-gradient(180deg, #fff 0%, #f0f7ff 100%)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.2rem',
    fontWeight: 800,
    marginBottom: 48,
    color: '#1a1a2e',
  },
  socialRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 48,
    flexWrap: 'wrap',
  },
  socialBtn: {
    padding: 16,
    borderRadius: '50%',
    background: '#1a1a2e',
    width: 56,
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    letterSpacing: 0.5,
    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
    display: 'inline-block',
  },
  form: {
    maxWidth: 520,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
  },
  input: {
    padding: '16px 20px',
    border: '1px solid #dde4ee',
    borderRadius: 12,
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    background: '#fff',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  textarea: {
    resize: 'vertical',
    minHeight: 120,
  },
  btn: {
    padding: '16px 40px',
    background: '#3a8fd8',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    alignSelf: 'flex-start',
    transition: 'background 0.3s',
  },
}

const focusStyle = document.createElement('style')
focusStyle.textContent = `
  #contact input:focus, #contact textarea:focus {
    border-color: #3a8fd8;
    box-shadow: 0 0 0 3px rgba(58,143,216,0.12);
  }
`
document.head.appendChild(focusStyle)
