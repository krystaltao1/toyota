import type { FC } from 'react'
import Chip from '../Chip'
import Button from '../Button'

const Hero: FC = () => (
  <div className="relative bg-[#1a1a1a]">
    <div className="relative aspect-1440/970">
      <img src="/hero.jpg" alt="Hero Image" className="h-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#1a1a1a]/80 to-[#1a1a1a]/0" />
    </div>

    <div className="space-y-5 px-4 py-5 text-center sm:absolute sm:inset-x-0 sm:bottom-20 sm:space-y-7.5">
      <Chip shape="square">TOYOTA FINANCE OFFER · ENDS 30 SEPTEMBER 2026</Chip>
      <h1 className="text-2xl leading-[1.15] font-semibold text-white sm:text-[44px] sm:leading-[1.1]">
        Get a &#36;5&#44;000&#42; Deposit Bonus
        <sup>&#91;F30&#93;</sup>
        <br className="hidden sm:inline" />
        on the All-Electric bZ4X
      </h1>
      <p className="font-semibold text-white sm:text-2xl">
        The Toyota feeling&#44; electrified.
      </p>

      <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-center">
        <Button>
          GET A QUOTE ON <span className="normal-case">bZ4X</span> TOURING
        </Button>
        <Button>
          GET A QUOTE ON <span className="normal-case">bZ4X</span>
        </Button>
      </div>
    </div>
  </div>
)

export default Hero
