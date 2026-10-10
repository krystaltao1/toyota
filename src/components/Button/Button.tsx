import type { ComponentProps, ReactNode, FC } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'cursor-pointer rounded-3xl text-[13px] uppercase font-semibold tracking-[0.16em] px-[38px] h-12 border transition-all disabled:cursor-not-allowed disabled:opacity-60',
  variants: {
    color: {
      primary: 'bg-white text-black border-white',
      ink: 'bg-black text-white border-black',
      outline: 'border-black text-black',
    },
    isFullWidth: { true: 'w-full' },
  },
  defaultVariants: { color: 'primary' },
})

interface Props
  extends
    VariantProps<typeof button>,
    Omit<ComponentProps<'button'>, 'color' | 'children'> {
  children: ReactNode
}

const Button: FC<Props> = ({
  color,
  children,
  isFullWidth,
  className,
  ...rest
}) => (
  <button className={button({ color, isFullWidth, className })} {...rest}>
    {children}
  </button>
)

export default Button
