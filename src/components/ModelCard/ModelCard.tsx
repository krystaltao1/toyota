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
    <div className="border-line relative overflow-hidden border">
      <div className="relative px-4 md:flex md:px-12">
        <div className="absolute -top-4 right-0 origin-top-right scale-60 md:-top-15 md:right-1 md:scale-100">
          <DotGrid />
        </div>
        <img src={image} alt={alt} className="relative object-cover" />
      </div>

      <article className="relative p-7 md:p-8">
        <h3 className="flex items-center gap-2.5">
          <span className="text-[22px] font-semibold md:text-[24px]">
            {title}
          </span>
          {badge && <Chip>{badge}</Chip>}
        </h3>
        <p className="pt-1 pb-3.5 text-[14px] md:text-[15px]">{slogan}</p>
        <div className="flex flex-col gap-2.5">
          {children}

          <hr className="text-line-subtle" />
          <p className="text-[12.5px]">
            <span>{range}</span>
            <sup>{rangeSup}</sup>
            <span>{rangeAccent}</span>
          </p>
          <hr className="text-line-subtle" />
          <p className="text-[12.5px]">{boot}</p>
          <hr className="text-line-subtle" />
          <p className="text-[12.5px]">
            <span>{power}</span>
            <sup>{powerSup}</sup>
            <span>{powerAccent}</span>
          </p>
          <hr className="text-line-subtle" />
        </div>

        <p className="text-grey pt-4 pb-0.5 text-[10px] tracking-[0.18em] uppercase">
          {eyebrow}
        </p>
        <p className="text-[24px] font-semibold">{price}</p>
        <p className="text-blue py-4 text-[12.5px]">
          {eligible}
          <sup>{eligibleSup}</sup>
        </p>
        <Button color="outline" className="w-full md:w-auto">
          personalise
        </Button>
      </article>
    </div>
  )
}

export default ModelCard
