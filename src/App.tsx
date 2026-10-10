import { type FC } from 'react'
import Button from './components/Button'
import Chip from './components/Chip'
import ColorButton from './components/ColorButton'
import ColorList from './components/ColorList'
import DotGrid from './components/DotGrid'

const App: FC = () => {
  return (
    <>
      <Button color="ink">
        get a quote on <span className="normal-case">bZ4X</span> touring
      </Button>
      <Chip shape="square">TOYOTA FINANCE OFFER · ENDS 30 SEPTEMBER 2026</Chip>
      <ColorList label="Available in:">
        <ColorButton color="black" />
        <ColorButton color="white" />
        <ColorButton color="lightGray" />
        <ColorButton color="gray" />
        <ColorButton color="darkGray" />
        <ColorButton color="darkBlue" />
      </ColorList>

      <ColorList label="Available in:">
        <ColorButton color="black" />
        <ColorButton color="white" />
        <ColorButton color="charcoal" />
        <ColorButton color="red" />
        <ColorButton color="deepBlue" />
      </ColorList>

      <DotGrid />
    </>
  )
}

export default App
