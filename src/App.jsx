import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PhotoDivider from './components/PhotoDivider'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PhotoDivider src="/images/venice.jpg" alt="Venice" />
      <Skills />
      <PhotoDivider src="/images/budapest.jpg" alt="Budapest" />
      <Works />
      <PhotoDivider src="/images/istanbul.jpg" alt="Istanbul" />
      <Contact />
      <Footer />
    </>
  )
}
