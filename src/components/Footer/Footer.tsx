import type { FC } from 'react'
import Logo from '../Logo'
import Drawer from './components/Drawer'

const Footer: FC = () => (
  <footer className="relative">
    <div className="bg-[#111111] px-4 py-8 sm:px-27 sm:py-10">
      <div className="grid gap-y-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-y-6">
        <div className="sm:col-start-2 sm:row-start-2">
          <Logo />
        </div>
        <p className="leading-[1.65] text-[#9A9A9A] sm:col-span-2 sm:row-start-1">
          Toyota Australia acknowledges the Traditional Owners and Custodians of
          lands throughout Australia. We pay our respects to Elders past and
          present&#44; and the continuation of cultural&#44; spiritual and
          educational practices of Aboriginal and Torres Strait Islander
          peoples.
        </p>

        <div className="sm:rom-start-2 flex flex-wrap items-center gap-5 sm:col-start-1">
          <a href="/privacy" className="text-xs text-[#CCCCCC] underline">
            Privacy
          </a>
          <a href="/conditions" className="text-xs text-[#CCCCCC] underline">
            Conditions of use
          </a>
          <span className="w-full text-[10px] text-[#777777] sm:w-auto">
            Copyright 2026 Toyota Australia. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
    <Drawer />
  </footer>
)

export default Footer
