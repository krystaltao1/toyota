import type { FC, ReactNode } from 'react'
import Chip from '../Chip'
import DotGrid from '../DotGrid'
import Button from '../Button'

interface Props {
  image: string
  alt: string
  title: string
  slogan: string
  children: ReactNode
  range: string
  rangeSup: string
  rangeAccent?: string
  boot: string
  power: string
  powerSup?: string
  powerAccent?: string
  eyebrow: string
  price: string
  eligible: string
  eligibleSup: string
  badge?: string
}

const ModelCard: FC<Props> = ({
  image,
  alt,
  title,
  slogan,
  children,
  range,
  rangeSup,
  rangeAccent = undefined,
  boot,
  power,
  powerSup = undefined,
  powerAccent = undefined,
  eyebrow,
  price,
  eligible,
  eligibleSup,
  badge = undefined,
}) => {
  return (
    <article className="relative h-174 border border-[#E6E6E6]">
      <div className="absolute -top-1.25 left-116">
        <DotGrid />
      </div>
      <img src={image} alt={alt} className="relative top-2.5 left-20 w-110" />

      <div className="relative p-8 pt-0">
        <h3 className="flex items-center gap-2.5">
          <span className="text-2xl font-semibold">{title}</span>
          {badge && <Chip>{badge}</Chip>}
        </h3>
        <p className="pt-1 pb-3.5 text-[15px]">{slogan}</p>
        <div className="flex flex-col gap-2.5">
          {children}

          <hr className="w-134 text-[#EEEEEE]" />
          <p className="text-[12.5px]">
            <span>{range}</span>
            <sup>{rangeSup}</sup>
            <span>{rangeAccent}</span>
          </p>
          <hr className="w-134 text-[#EEEEEE]" />
          <p className="text-[12.5px]">{boot}</p>
          <hr className="w-134 text-[#EEEEEE]" />
          <p className="text-[12.5px]">
            <span>{power}</span>
            <sup>{powerSup}</sup>
            <span>{powerAccent}</span>
          </p>
          <hr className="w-134 text-[#EEEEEE]" />
        </div>

        <p className="pt-4 pb-0.5 text-[10px] tracking-[0.18em] text-[#6E6E6E] uppercase">
          {eyebrow}
        </p>
        <p className="text-2xl font-semibold">{price}</p>
        <p className="py-4 text-[12.5px] text-[#2468FF]">
          {eligible}
          <sup>{eligibleSup}</sup>
        </p>

        <Button color="outline">personalise</Button>
      </div>
    </article>
  )
}

export default ModelCard
