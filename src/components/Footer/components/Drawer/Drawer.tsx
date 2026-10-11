import type { FC } from 'react'
import Button from '../../../Button'

const Drawer: FC = () => (
  <div className="bg-white px-3 py-5 sm:hidden">
    <p className="pb-2 text-[9px] font-bold tracking-widest text-[#8A8A8A] uppercase">
      sticky bottom bar · MOBILE ONLY
    </p>
    <div className="border border-[#D9D9D9] px-4 py-3 text-center shadow-[0_6px_18px_0_rgba(0,0,0,0.12)]">
      <Button color="ink" isFullWidth>
        book a test drive
      </Button>
    </div>
  </div>
)

export default Drawer
