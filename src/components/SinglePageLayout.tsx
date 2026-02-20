import type { ReactNode } from 'react'
import Logo from '@/components/Logo'
import BackButton from '@/components/BackButton'

interface SinglePageLayoutProps {
  children: ReactNode
  backTo?: string
  showLogo?: boolean
  wide?: boolean
}

export default function SinglePageLayout({
  children,
  backTo,
  showLogo = true,
  wide = false,
}: SinglePageLayoutProps) {
  return (
    <div className="min-h-svh bg-grey-100">
      {/* Top bar */}
      <div className="flex h-16 items-center gap-3 px-6 sm:px-10">
        {backTo && <BackButton to={backTo} />}
        {showLogo && <Logo />}
      </div>

      {/* Centered card */}
      <div className="flex justify-center px-4 pb-16 pt-4">
        <div
          className={`w-full rounded-2xl border border-grey-200 bg-white p-6 shadow-sm sm:px-14 sm:py-12 ${
            wide ? 'max-w-[640px]' : 'max-w-[560px]'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
