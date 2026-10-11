import type { FC } from 'react'
import ModelCard from '../ModelCard'
import ColorButton from '../ColorButton'
import ColorList from '../ColorList'

const ModelField: FC = () => (
  <div className="mx-auto max-w-[1440px] px-4 pb-16 md:px-27 md:pb-24">
    <h2 className="pb-7.5 text-center text-[24px] leading-[1.18] md:pb-10 md:text-[44px] md:leading-[1.14]">
      Which <span className="text-blue">bZ4X</span> <br className="md:hidden" />
      is right for you&#63;
    </h2>
    <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-6">
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
    <p className="text-grey pt-4 text-left text-[11px] leading-normal md:text-[12px]">
      &#42;Prices based on Sydney City Toyota&#44; Waterloo&#44; NSW 2017.
      Driveaway pricing varies by location. Enter your postcode in Build and
      Price to see yours.
    </p>
  </div>
)

export default ModelField
