import type { FC } from 'react'
import Chip from '../Chip'
import Button from '../Button'

const Hero: FC = () => (
  <div className="relative h-242.5">
    <img
      src="/hero.jpg"
      alt="Hero Image"
      className="absolute h-full w-full object-cover"
    />
    <div className="absolute inset-x-0 bottom-0 h-87.25 bg-linear-to-t from-[#1a1a1a]/80 to-[#1a1a1a]/0" />
    <div className="absolute inset-0 flex flex-col items-center justify-end pb-20">
      <div className="mb-4.5">
        <Chip shape="square">
          TOYOTA FINANCE OFFER · ENDS 30 SEPTEMBER 2026
        </Chip>
      </div>

      <div className="space-y-7.5 text-center">
        <h1 className="max-w-200 text-[44px] leading-[1.1] font-semibold text-white">
          Get a &#36;5&#44;000&#42; Deposit Bonus<sup>&#91;F30&#93;</sup>
          <br />
          on the All-Electric bZ4X
        </h1>
        <p className="text-2xl font-semibold text-white">
          The Toyota feeling&#44; electrified.
        </p>

        <div className="flex gap-5">
          <Button>
            GET A QUOTE ON <span className="normal-case">bZ4X</span> TOURING
          </Button>
          <Button>
            GET A QUOTE ON <span className="normal-case">bZ4X</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
