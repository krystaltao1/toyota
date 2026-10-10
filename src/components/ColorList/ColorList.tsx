import type { FC, ReactNode } from 'react'

interface Props {
  label: string
  children: ReactNode
}

const ColorList: FC<Props> = ({ label, children }) => (
  <div className="flex items-center gap-2">
    <span className="text-[12.5px]">{label}</span>
    {children}
  </div>
)

export default ColorList
