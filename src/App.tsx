import { type FC } from 'react'
import Button from './components/Button'
import Chip from './components/Chip'
import ColorButton from './components/ColorButton'

const App: FC = () => {
  return (
    <>
      <Button color="ink">
        get a quote on <span className="normal-case">bZ4X</span> touring
      </Button>
      <Chip shape="square">TOYOTA FINANCE OFFER · ENDS 30 SEPTEMBER 2026</Chip>
      <ColorButton color="deepBlue" />
    </>
  )
}

export default App
