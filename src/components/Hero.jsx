import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'
import { motion } from 'motion/react'

function ImagePlane() {
  const meshRef = useRef()
  const texture = useLoader(TextureLoader, '/hero.jpg')

  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter

  const imgAspect = 9 / 16
  const planeWidth = 8
  const planeHeight = planeWidth / imgAspect

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(planeWidth, planeHeight, 64, 64)
  }, [planeWidth, planeHeight])

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return
    const time = clock.getElapsedTime()
    const positions = meshRef.current.geometry.attributes.position
    const original = new THREE.PlaneGeometry(planeWidth, planeHeight, 64, 64)
    const origPositions = original.attributes.position

    for (let i = 0; i < positions.count; i++) {
      const x = origPositions.getX(i)
      const y = origPositions.getY(i)
      const wave = Math.sin(x * 0.5 + time * 0.6) * 0.15 +
                   Math.cos(y * 0.4 + time * 0.4) * 0.1
      positions.setZ(i, wave)
    }
    positions.needsUpdate = true

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      pointer.x * 0.08,
      0.05
    )
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -pointer.y * 0.05,
      0.05
    )
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        map={texture}
        side={THREE.DoubleSide}
        roughness={0.3}
        metalness={0.0}
        toneMapped={false}
      />
    </mesh>
  )
}

function FloatingParticles() {
  const ref = useRef()
  const count = 80

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const time = clock.getElapsedTime()
    const pos = ref.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(time * 0.3 + i) * 0.003
      pos[i * 3] += Math.cos(time * 0.2 + i * 0.5) * 0.002
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.canvasWrap}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          style={{ background: 'linear-gradient(180deg, #3a8fd8 0%, #87CEEB 40%, #c9e8f7 100%)' }}
        >
          <ambientLight intensity={2.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <directionalLight position={[-3, 2, 4]} intensity={1.0} />
          <directionalLight position={[0, 0, 5]} intensity={0.8} />
          <ImagePlane />
          <FloatingParticles />
        </Canvas>
      </div>

      <div style={styles.overlay}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={styles.sub}
        >
          32 Countries & Counting
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={styles.title}
        >
          Furita
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={styles.desc}
        >
          死ぬ時に後悔しない人生を
        </motion.p>
        <motion.a
          href="#about"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={styles.btn}
        >
          Explore
        </motion.a>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={styles.scrollIndicator}
      >
        <div style={styles.scrollArrow} />
      </motion.div>
    </section>
  )
}

const styles = {
  hero: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  canvasWrap: {
    position: 'absolute',
    inset: 0,
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    textAlign: 'center',
    zIndex: 10,
  },
  sub: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '1.1rem',
    fontWeight: 400,
    letterSpacing: 3,
    marginBottom: 8,
    textShadow: '0 2px 12px rgba(0,0,0,0.3)',
  },
  title: {
    color: '#fff',
    fontSize: 'clamp(3rem, 8vw, 5.5rem)',
    fontWeight: 900,
    letterSpacing: 3,
    marginBottom: 12,
    textShadow: '0 4px 24px rgba(0,0,0,0.35)',
  },
  desc: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: '1.4rem',
    fontWeight: 500,
    marginBottom: 36,
    textShadow: '0 2px 12px rgba(0,0,0,0.3)',
    letterSpacing: 2,
  },
  btn: {
    pointerEvents: 'auto',
    padding: '14px 42px',
    border: '2px solid rgba(255,255,255,0.8)',
    borderRadius: 40,
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(8px)',
    cursor: 'pointer',
    display: 'inline-block',
    textShadow: '0 1px 6px rgba(0,0,0,0.2)',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: 32,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
  },
  scrollArrow: {
    width: 24,
    height: 24,
    borderRight: '2px solid rgba(255,255,255,0.7)',
    borderBottom: '2px solid rgba(255,255,255,0.7)',
    transform: 'rotate(45deg)',
  },
}
