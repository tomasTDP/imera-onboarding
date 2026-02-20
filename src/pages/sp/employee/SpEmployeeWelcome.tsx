import { CircleCheckBig, Building2, Shield, FileText, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SinglePageLayout from '@/components/SinglePageLayout'
import PageTransition from '@/components/PageTransition'
import Logo from '@/components/Logo'
import { useState } from 'react'

const cards = [
  {
    title: 'Immigration Status',
    description: 'Visa application in progress',
    icon: Shield,
    bg: 'bg-burnt-papaya/10',
    iconColor: 'text-burnt-papaya',
  },
  {
    title: 'Documents',
    description: '2 documents pending',
    icon: FileText,
    bg: 'bg-dusk-blue/30',
    iconColor: 'text-dusk-blue',
  },
  {
    title: 'Resources',
    description: 'Guides & FAQs',
    icon: BookOpen,
    bg: 'bg-echo-yellow/20',
    iconColor: 'text-echo-yellow',
  },
]

export default function SpEmployeeWelcome() {
  const [showHome, setShowHome] = useState(false)

  if (showHome) {
    return (
      <PageTransition>
        <div className="min-h-svh bg-grey-100">
          <header className="flex h-16 items-center justify-between border-b border-grey-200 bg-white px-8">
            <Logo />
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-dusk-blue text-sm font-semibold text-midnight-black">
              JD
            </div>
          </header>

          <main className="mx-auto max-w-5xl px-8 py-12">
            <h1 className="mb-8 text-3xl font-bold text-midnight-black">
              Welcome, Jane!
            </h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-grey-200 bg-white p-6 space-y-4 transition-shadow hover:shadow-md"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.bg}`}
                  >
                    <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-midnight-black">
                      {card.title}
                    </h3>
                    <p className="text-sm text-wisdom-grey">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <SinglePageLayout showLogo>
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint-energy/20">
            <CircleCheckBig className="h-8 w-8 text-mint-energy" />
          </div>

          <div className="space-y-2">
            <h1 className="text-[28px] font-bold tracking-tight text-midnight-black">
              You're all set!
            </h1>
            <p className="text-sm text-wisdom-grey">
              You've been linked to Acme Healthcare.
            </p>
          </div>

          {/* Company card */}
          <div className="rounded-xl border border-grey-200 bg-white px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-burnt-papaya/10">
                <Building2 className="h-5 w-5 text-burnt-papaya" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-midnight-black">
                  Acme Healthcare
                </p>
                <p className="text-xs text-wisdom-grey">Employee</p>
              </div>
            </div>
          </div>

          <Button
            onClick={() => setShowHome(true)}
            className="h-12 w-full rounded-[10px] text-[15px] font-semibold"
          >
            Go to Home
          </Button>
        </div>
      </SinglePageLayout>
    </PageTransition>
  )
}
