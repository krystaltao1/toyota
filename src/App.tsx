import { type FC } from 'react'
import Hero from './components/Hero'
import Explanation from './components/Explanation'
import ModelField from './components/ModelField'

const App: FC = () => {
  return (
    <>
      <Hero />
      <Explanation />
      <ModelField />
    </>
  )
}

export default App
