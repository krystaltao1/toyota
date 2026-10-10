import type { FC, ComponentProps, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const chip = tv({
  base: 'inline-flex items-center justify-center bg-[#2468FF] uppercase text-white',
  variants: {
    shape: {
      pill: 'rounded-xs py-[6px] px-2 tracking-[0.1em] font-semibold text-[9px]',
      square: 'p-[10px] tracking-[0.22em] text-xs',
    },
  },
  defaultVariants: { shape: 'pill' },
})

interface Props
  extends VariantProps<typeof chip>, Omit<ComponentProps<'span'>, 'children'> {
  children: ReactNode
}

const Chip: FC<Props> = ({ shape, children, className, ...rest }) => (
  <span className={chip({ shape, className })} {...rest}>
    {children}
  </span>
)

export default Chip
