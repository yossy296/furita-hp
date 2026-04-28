import { motion } from 'motion/react'
import { useInView } from './useInView'

const works = [
  {
    title: 'CabinZero',
    role: 'collaboration',
    desc: '英国トラベルバッグブランドとのコラボレーション',
    url: 'https://jp.cabinzero.com/en',
    image: '/images/cappadocia.jpg',
  },
  {
    title: 'e-simシム',
    role: 'ambassador',
    desc: '海外通信サービス公式アンバサダー',
    url: 'https://www.instagram.com/esimsim_official/',
    image: '/images/europe.jpg',
  },
  {
    title: 'ミエンミクリニック',
    role: 'influencer',
    desc: '韓国美容クリニック公式インフルエンサー',
    url: 'https://jp.branch.mimimi.co.kr/index.php',
    image: '/images/istanbul.jpg',
  },
  {
    title: '地球旅豆本',
    role: 'writer',
    desc: '旅行誌への記事・エッセイ掲載',
    url: 'https://mamebook.base.shop/items/135836656',
    image: '/images/egypt.jpg',
  },
]

function BrowserCard({ work, index, inView }) {
  return (
    <motion.a
      href={work.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index }}
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
      style={styles.card}
    >
      {/* Browser chrome */}
      <div style={styles.browserBar}>
        <div style={styles.dots}>
          <span style={{ ...styles.dot, background: '#ff5f57' }} />
          <span style={{ ...styles.dot, background: '#febc2e' }} />
          <span style={{ ...styles.dot, background: '#28c840' }} />
        </div>
        <div style={styles.titleBar}>
          {work.title} - {work.role}
        </div>
      </div>
      {/* Screenshot area */}
      <div style={styles.screenshotWrap}>
        <img src={work.image} alt={work.title} style={styles.screenshot} />
        <div style={styles.screenshotOverlay}>
          <div style={styles.overlayContent}>
            <span style={styles.overlayTitle}>{work.title}</span>
            <span style={styles.overlayDesc}>{work.desc}</span>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export default function Works() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="works" ref={ref} style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        Works & Partners
      </motion.h2>
      <div style={styles.grid}>
        {works.map((work, i) => (
          <BrowserCard key={work.title} work={work} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '120px 24px',
    background: '#f6f8fb',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.2rem',
    fontWeight: 800,
    marginBottom: 56,
    color: '#1a1a2e',
  },
  grid: {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 32,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    background: '#fff',
    border: '1px solid #e0e4ea',
    transition: 'box-shadow 0.3s',
    textDecoration: 'none',
    display: 'block',
  },
  browserBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '12px 16px',
    background: '#f5f5f5',
    borderBottom: '1px solid #e0e4ea',
  },
  dots: {
    display: 'flex',
    gap: 6,
    flexShrink: 0,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    display: 'inline-block',
  },
  titleBar: {
    flex: 1,
    textAlign: 'center',
    fontSize: '0.82rem',
    color: '#666',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    background: '#fff',
    borderRadius: 6,
    padding: '6px 12px',
    border: '1px solid #e8e8e8',
  },
  screenshotWrap: {
    position: 'relative',
    height: 240,
    overflow: 'hidden',
  },
  screenshot: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s',
  },
  screenshotOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
  },
  overlayContent: {
    textAlign: 'center',
    padding: '0 20px',
  },
  overlayTitle: {
    display: 'block',
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: 8,
  },
  overlayDesc: {
    display: 'block',
    color: 'rgba(255,255,255,0.85)',
    fontSize: '0.9rem',
  },
}

const hoverCSS = document.createElement('style')
hoverCSS.textContent = `
  #works a:hover img {
    transform: scale(1.05);
  }
  #works a:hover [style*="opacity: 0"] {
    opacity: 1 !important;
  }
`
document.head.appendChild(hoverCSS)
