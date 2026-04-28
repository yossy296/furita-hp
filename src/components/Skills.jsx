import { motion } from 'motion/react'
import { useInView } from './useInView'

const stats = [
  { number: '32', label: 'Countries', desc: '踏破した国の数' },
  { number: '400+', label: 'Sessions', desc: '1on1セッション対話数' },
  { number: '22', label: 'in 1 Month', desc: '1ヶ月で巡った国数' },
]

const activities = [
  {
    title: 'Digital Infrastructure Sales',
    desc: 'デジタルインフラ・ソリューションセールスとして最前線で実績を出し続けています。',
    icon: '\u{1F4BC}',
  },
  {
    title: '1on1 Life Coaching',
    desc: '一人ひとりの人生やキャリアに向き合い、次の一歩を踏み出すサポートを行っています。',
    icon: '\u{1F91D}',
  },
  {
    title: 'World Backpacker',
    desc: '32カ国を踏破。多様な価値観と触れ合い、未知の環境をサバイブしてきました。',
    icon: '\u{1F30D}',
  },
]

export default function Skills() {
  const [ref, inView] = useInView(0.15)

  return (
    <section id="skills" ref={ref} style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        What I Do
      </motion.h2>

      {/* Stats */}
      <div style={styles.statsRow}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            style={styles.stat}
          >
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
            <div style={styles.statDesc}>{stat.desc}</div>
          </motion.div>
        ))}
      </div>

      {/* Activities */}
      <div style={styles.grid}>
        {activities.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 * i + 0.3 }}
            whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(58,143,216,0.18)' }}
            style={styles.card}
          >
            <div style={styles.icon}>{item.icon}</div>
            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.desc}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '120px 24px',
    background: 'linear-gradient(180deg, #f0f7ff 0%, #fff 100%)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.2rem',
    fontWeight: 800,
    marginBottom: 56,
    color: '#1a1a2e',
  },
  statsRow: {
    maxWidth: 800,
    margin: '0 auto 56px',
    display: 'flex',
    justifyContent: 'center',
    gap: 48,
    flexWrap: 'wrap',
  },
  stat: {
    textAlign: 'center',
    minWidth: 160,
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: 900,
    color: '#3a8fd8',
    lineHeight: 1.1,
  },
  statLabel: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#1a1a2e',
    marginTop: 4,
  },
  statDesc: {
    fontSize: '0.8rem',
    color: '#888',
    marginTop: 4,
  },
  grid: {
    maxWidth: 960,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 24,
  },
  card: {
    background: '#fff',
    borderRadius: 16,
    padding: '36px 28px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    cursor: 'default',
    transition: 'box-shadow 0.3s',
  },
  icon: {
    fontSize: '2.4rem',
    marginBottom: 16,
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: 8,
    color: '#1a1a2e',
  },
  desc: {
    fontSize: '0.9rem',
    color: '#777',
    lineHeight: 1.7,
  },
}
