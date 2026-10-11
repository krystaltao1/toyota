import type { FC } from 'react'
import Chip from '../Chip'
import Button from '../Button'

const Hero: FC = () => (
  <div className="bg-ink relative">
    <div className="relative aspect-1440/970">
      <img src="/hero.jpg" alt="Hero Image" className="h-full object-cover" />
      <div className="from-ink/80 to-ink/0 absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t" />
    </div>

    <div className="space-y-5 px-4 py-5 text-center md:absolute md:inset-x-0 md:bottom-20 md:space-y-7.5">
      <Chip shape="square">TOYOTA FINANCE OFFER · ENDS 30 SEPTEMBER 2026</Chip>
      <h1 className="text-[24px] leading-[1.15] font-semibold text-white md:text-[44px] md:leading-[1.1]">
        Get a &#36;5&#44;000 Deposit Bonus
        <sup>&#91;F30&#93;</sup>
        <br className="hidden md:inline" />
        on the All-Electric bZ4X
      </h1>
      <p className="font-semibold text-white md:text-[24px]">
        The Toyota feeling&#44; electrified.
      </p>

      <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-center">
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
