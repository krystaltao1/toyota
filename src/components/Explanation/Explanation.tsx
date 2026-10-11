import type { FC } from 'react'
import Button from '../Button'

const Explanation: FC = () => (
  <article className="mx-auto max-w-200 px-4 py-16 text-center md:px-27 md:py-24">
    <p className="text-grey pb-4.5 text-[10px] tracking-[0.18em] uppercase">
      toyota finance
    </p>

    <h2 className="pb-6.5 text-[29px] leading-[1.18] md:pb-7 md:text-[44px] md:leading-[1.14]">
      Jump start your deposit
    </h2>
    <p className="pb-4.5 text-[15px] leading-[1.6] md:pb-7.5 md:text-[17px]">
      Get a &#36;5&#44;000 Deposit Bonus<sup>&#91;F30&#93;</sup>on new and
      demonstrator bZ4X 2WD&#44; AWD &#40;October 2025 build onwards&#41;&#44;
      and bZ4X Touring with Toyota Finance. Max finance term 72 months.
      <br />
      Excludes lease products. Offer ends 30&#47;09&#47;2026.
    </p>
    <p className="pb-6.5 text-[17px] leading-[1.6] md:pb-7.5">
      Calculate your Toyota Personalised Repayments in around 3 minutes. Your
      interest rate is tailored to you&#44; and won&#39;t impact your credit
      score.
    </p>

    <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-center">
      <Button color="ink">
        GET A QUOTE ON <span className="normal-case">bZ4X</span> TOURING
      </Button>
      <Button color="ink">
        GET A QUOTE ON <span className="normal-case">bZ4X</span>
      </Button>
    </div>
  </article>
)

export default Explanation
