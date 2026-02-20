import type { ReactNode } from 'react'

interface SplitLayoutProps {
  left: ReactNode
  right: ReactNode
  rightBg?: string
  centered?: boolean
}

export default function SplitLayout({
  left,
  right,
  rightBg = 'bg-storyteller-sand',
  centered = false,
}: SplitLayoutProps) {
  return (
    <div className="flex min-h-svh">
      {/* Left panel */}
      <div className={`flex w-full flex-col px-6 py-10 sm:px-12 lg:w-[55%] lg:px-16 lg:py-12 ${centered ? 'justify-center' : ''}`}>
        <div className="mx-auto w-full max-w-[480px]">{left}</div>
      </div>

      {/* Right panel */}
      <div
        className={`hidden w-[45%] flex-col items-center justify-center px-12 py-12 lg:flex ${rightBg}`}
      >
        {right}
      </div>
    </div>
  )
}
