import { type FC } from 'react'
import Button from './components/Button'
import Chip from './components/Chip'
import ColorButton from './components/ColorButton'
import ColorList from './components/ColorList'
import DotGrid from './components/DotGrid/DotGrid'

const App: FC = () => {
  return (
    <>
      <Button color="ink">
        get a quote on <span className="normal-case">bZ4X</span> touring
      </Button>
      <Chip shape="square">TOYOTA FINANCE OFFER · ENDS 30 SEPTEMBER 2026</Chip>
      <ColorList label="Available in:">
        <ColorButton color="black" aria-label="black" />
        <ColorButton color="white" aria-label="white" />
        <ColorButton color="lightGray" aria-label="light gray" />
        <ColorButton color="gray" aria-label="gray" />
        <ColorButton color="darkGray" aria-label="dark gray" />
        <ColorButton color="darkBlue" aria-label="dark blue" />
      </ColorList>

      <ColorList label="Available in:">
        <ColorButton color="black" aria-label="black" />
        <ColorButton color="white" aria-label="white" />
        <ColorButton color="charcoal" aria-label="charcoal" />
        <ColorButton color="red" aria-label="red" />
        <ColorButton color="deepBlue" aria-label="deep blue" />
      </ColorList>

      <DotGrid />
    </>
  )
}

export default App
