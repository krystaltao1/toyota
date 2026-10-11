import type { FC } from 'react'
import Logo from '../Logo'
import Drawer from './components/Drawer'

const Footer: FC = () => (
  <footer className="relative">
    <div className="bg-ink-deep px-4 py-8 md:px-27 md:py-10">
      <div className="grid gap-y-5 md:grid-cols-[1fr_auto] md:items-center md:gap-y-6">
        <div className="md:col-start-2 md:row-start-2">
          <Logo />
        </div>
        <p className="text-grey-dark-muted text-[11.5px] leading-[1.65] md:col-span-2 md:row-start-1 md:text-[12px]">
          Toyota Australia acknowledges the Traditional Owners and Custodians of
          lands throughout Australia. We pay our respects to Elders past and
          present&#44; and the continuation of cultural&#44; spiritual and
          educational practices of Aboriginal and Torres Strait Islander
          peoples.
        </p>

        <div className="flex flex-wrap items-center gap-5 md:col-start-1 md:row-start-2">
          <a href="/privacy" className="text-grey-dark text-[12px] underline">
            Privacy
          </a>
          <a
            href="/conditions"
            className="text-grey-dark text-[12px] underline"
          >
            Conditions of use
          </a>
          <span className="text-grey-dark-faint w-full text-[10px] md:w-auto">
            Copyright 2026 Toyota Australia. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
    <Drawer />
  </footer>
)

export default Footer
