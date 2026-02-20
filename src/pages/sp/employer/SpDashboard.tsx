import { LayoutDashboard, Users, FileText } from 'lucide-react'
import Logo from '@/components/Logo'
import PageTransition from '@/components/PageTransition'

const cards = [
  {
    title: 'Team Overview',
    description: '3 employees onboarded',
    icon: Users,
    bg: 'bg-mint-energy/20',
    iconColor: 'text-mint-energy',
  },
  {
    title: 'Immigration Cases',
    description: '0 active cases',
    icon: LayoutDashboard,
    bg: 'bg-dusk-blue/30',
    iconColor: 'text-dusk-blue',
  },
  {
    title: 'Documents',
    description: '0 pending reviews',
    icon: FileText,
    bg: 'bg-echo-yellow/20',
    iconColor: 'text-echo-yellow',
  },
]

export default function SpDashboard() {
  return (
    <PageTransition>
      <div className="min-h-svh bg-grey-100">
        <header className="flex h-16 items-center justify-between border-b border-grey-200 bg-white px-8">
          <Logo />
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-burnt-papaya text-sm font-semibold text-white">
            JD
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-8 py-12">
          <h1 className="mb-8 text-3xl font-bold text-midnight-black">
            Welcome back, Jane!
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
