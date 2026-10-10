import { type FC } from 'react'
import ModelCard from './components/ModelCard'
import ColorButton from './components/ColorButton'
import ColorList from './components/ColorList'

const App: FC = () => {
  return (
    <div className="flex items-center gap-6">
      <ModelCard
        image="/greyTouring.png"
        alt="Grey Model"
        title="bZ4X Touring"
        slogan="Your greatest escape."
        range="Up to 488km range"
        rangeSup="&#91;G69&#93;"
        boot="280kW AWD · 603L boot"
        power="1&#44;500kg braked towing"
        powerSup="&#91;G6&#93;"
        powerAccent="· V2L power"
        eyebrow="from"
        price="&#36;69&#44;990&#42;"
        eligible="Eligible for &#36;5&#44;000 Deposit Bonus"
        eligibleSup="&#91;F30&#93;"
        badge="new"
      >
        <ColorList label="Available in:">
          <ColorButton color="black" />
          <ColorButton color="white" />
          <ColorButton color="lightGray" />
          <ColorButton color="gray" />
          <ColorButton color="darkGray" />
          <ColorButton color="darkBlue" />
        </ColorList>
      </ModelCard>
      <ModelCard
        image="/charcoalModel.png"
        alt="Charcoal Model"
        title="bZ4X"
        slogan="The Toyota feeling, electrified."
        range="Up to 591km range"
        rangeSup="&#91;G66&#93;"
        rangeAccent="&#40;2WD&#41;"
        boot="167kW 2WD or 255kW AWD"
        power="422L boot"
        eyebrow="from"
        price="&#36;55&#44;990&#42;"
        eligible="Eligible for &#36;5&#44;000 Deposit Bonus"
        eligibleSup="&#91;F30&#93;"
      >
        <ColorList label="Available in:">
          <ColorButton color="black" />
          <ColorButton color="white" />
          <ColorButton color="charcoal" />
          <ColorButton color="red" />
          <ColorButton color="deepBlue" />
        </ColorList>
      </ModelCard>
    </div>
  )
}

export default App
