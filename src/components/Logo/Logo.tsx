import type { FC } from 'react'

const Logo: FC = () => (
  <div className="relative flex items-center justify-center">
    <img
      src="/logo.png"
      alt="Toyota Logo"
      className="h-9 w-55 border border-[#3A3A3A] object-cover"
    />
    <p className="absolute text-[8.5px] text-[#909090]">
      LOGO&#58; OWAF lockup&#44; sets red
    </p>
  </div>
)

export default Logo
