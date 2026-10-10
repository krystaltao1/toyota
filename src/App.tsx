import { type FC } from 'react'
import Button from './components/Button'

const App: FC = () => {
  return (
    <div className="bg-green-700">
      <h1 className="text-center text-2xl font-bold">Hello Toyota!</h1>
      <Button color="ink">
        get a quote on <span className="normal-case">bZ4x</span> touring
      </Button>
    </div>
  )
}

export default App
