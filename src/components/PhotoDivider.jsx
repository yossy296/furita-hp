import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export default function PhotoDivider({ src, alt }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  return (
    <div ref={ref} style={styles.wrapper}>
      <motion.div style={{ ...styles.imageWrap, y }}>
        <img src={src} alt={alt} style={styles.image} />
      </motion.div>
      <div style={styles.overlay} />
    </div>
  )
}

const styles = {
  wrapper: {
    position: 'relative',
    height: 400,
    overflow: 'hidden',
  },
  imageWrap: {
    position: 'absolute',
    top: '-20%',
    left: 0,
    width: '100%',
    height: '140%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.15) 100%)',
  },
}
