import type { FC, ComponentProps, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const chip = tv({
  base: 'inline-flex items-center justify-center bg-blue uppercase text-white text-[9px]',
  variants: {
    shape: {
      pill: 'rounded-xs md:py-[6px] py-[3px] px-2 tracking-[0.1em] font-semibold',
      square:
        'tracking-[0.18em] p-1.25 md:p-[10px] md:tracking-[0.22em] md:text-[12px]',
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
