import { type FC } from 'react'
import Hero from './components/Hero'
import Explanation from './components/Explanation'
import ModelField from './components/ModelField'
import Footer from './components/Footer'

const App: FC = () => {
  return (
    <>
      <Hero />
      <Explanation />
      <ModelField />
      <Footer />
    </>
  )
}

export default App
