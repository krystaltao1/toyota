import type { FC } from 'react'
import Logo from '../Logo'
import Drawer from './components/Drawer'

const Footer: FC = () => (
  <footer className="relative">
    <div className="bg-[#111111] px-4 py-8 sm:px-27 sm:py-10">
      <div className="pb-5 text-center sm:hidden">
        <Logo />
      </div>
      <p className="pb-6 leading-[1.65] text-[#9A9A9A]">
        Toyota Australia acknowledges the Traditional Owners and Custodians of
        lands throughout Australia. We pay our respects to Elders past and
        present&#44; and the continuation of cultural&#44; spiritual and
        educational practices of Aboriginal and Torres Strait Islander peoples.
      </p>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3.5">
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
        <div className="hidden sm:block">
          <Logo />
        </div>
      </div>
    </div>
    <Drawer />
  </footer>
)

export default Footer
