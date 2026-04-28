import { motion } from 'motion/react'
import { useInView } from './useInView'

export default function About() {
  const [ref, inView] = useInView(0.2)

  return (
    <section id="about" ref={ref} style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        About
      </motion.h2>
      <div style={styles.content}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={styles.imageWrap}
        >
          <img src="/images/profile.jpg" alt="Furita" style={styles.profileImg} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={styles.textWrap}
        >
          <p style={styles.catchcopy}>
            「死ぬ時に後悔しない人生を」
          </p>
          <p style={styles.text}>
            現在は「デジタルインフラ・ソリューションセールス」として最前線で実績を出し続ける傍ら、一人ひとりの人生やキャリアに向き合う1on1セッションを精力的に行い、これまでに<strong>400名以上</strong>との対話を重ねてきました。
          </p>
          <p style={styles.text}>
            ここに至るまでの道のりは、決して平坦なものではありませんでした。過去にはコミュニケーションの壁に深く悩み、3度のうつ病を経験。2024年には大人の発達障害（ADHD）の診断を受けました。人生のどん底で自分の限界を感じていた時、心の中から湧き上がってきたのは「死ぬ時に、絶対に後悔したくない」という強烈な思いでした。
          </p>
          <p style={styles.text}>
            その思いを胸に、バックパッカーとして世界へ飛び出しました。2025年には1ヶ月間で22カ国を巡る過酷な旅を敢行し、これまでに合計<strong>32カ国</strong>を踏破。多様な価値観と触れ合い、未知の環境をサバイブした経験が、私の人生のOSを根本から書き換えました。
          </p>
          <p style={styles.text}>
            自身の挫折と、世界を歩き抜いた原体験があるからこそ、現状に悩み、変わりたいと願う人の痛みが痛いほどわかります。現在はコミュニティや1on1を通じて、過去の自分のように「自信がない」「やりたいことがわからない」と立ち止まっている大人たちが、自立して次の一歩を踏み出すためのサポートを行っています。
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '120px 24px',
    maxWidth: 1000,
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.2rem',
    fontWeight: 800,
    marginBottom: 56,
    color: '#1a1a2e',
    letterSpacing: 1,
  },
  content: {
    display: 'flex',
    gap: 48,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageWrap: {
    flex: '0 0 auto',
  },
  profileImg: {
    width: 280,
    height: 280,
    objectFit: 'cover',
    borderRadius: 20,
    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
  },
  textWrap: {
    flex: '1 1 360px',
    maxWidth: 520,
  },
  catchcopy: {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#1a1a2e',
    marginBottom: 20,
    letterSpacing: 1,
  },
  text: {
    fontSize: '0.98rem',
    color: '#444',
    lineHeight: 2,
    marginBottom: 14,
  },
}
