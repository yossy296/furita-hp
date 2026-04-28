import { motion } from 'motion/react'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={styles.footer}
    >
      <p>&copy; 2026 Furita. All rights reserved.</p>
    </motion.footer>
  )
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '32px 24px',
    fontSize: '0.85rem',
    color: '#999',
    background: '#f8faff',
    borderTop: '1px solid #eef2f9',
  },
}
