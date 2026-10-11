import type { FC, ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const colorButton = tv({
  base: 'rounded-full border w-4 h-4 cursor-pointer',
  variants: {
    color: {
      black: 'border-black bg-black',
      white: 'border-line-strong bg-white',
      lightGray: 'border-line-strong bg-line-strong',
      gray: 'border-[#757171] bg-[#757171] ',
      darkGray: 'border-[#5C5856] bg-[#5C5856]',
      darkBlue: 'border-[#002060] bg-[#002060]',
      charcoal: 'border-[#373D4D] bg-[#373D4D]',
      red: 'border-[#9E2D2C] bg-[#9E2D2C]',
      deepBlue: 'border-[#123265] bg-[#123265]',
    },
  },
  defaultVariants: { color: 'black' },
})

type Props = VariantProps<typeof colorButton> &
  Omit<ComponentProps<'button'>, 'color' | 'children'>

const ColorButton: FC<Props> = ({ color, className, ...rest }) => (
  <button className={colorButton({ color, className })} {...rest} />
)

export default ColorButton
