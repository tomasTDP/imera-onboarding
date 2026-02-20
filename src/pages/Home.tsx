import { Link } from 'react-router-dom'
import { Building2, UserRound } from 'lucide-react'
import Logo from '@/components/Logo'
import PageTransition from '@/components/PageTransition'

const flows = [
  {
    section: 'Option 2 — Split Screen',
    cards: [
      {
        title: 'Employer Flow',
        screens: 8,
        icon: Building2,
        path: '/signup',
        color: 'bg-burnt-papaya/10 text-burnt-papaya',
      },
      {
        title: 'Employee Flow',
        screens: 4,
        icon: UserRound,
        path: '/employee',
        color: 'bg-dusk-blue/30 text-dusk-blue',
      },
    ],
  },
  {
    section: 'Option 3 — Single Page',
    cards: [
      {
        title: 'Employer Flow',
        screens: 7,
        icon: Building2,
        path: '/sp/employer',
        color: 'bg-mint-energy/20 text-mint-energy',
      },
      {
        title: 'Employee Flow',
        screens: 3,
        icon: UserRound,
        path: '/sp/employee',
        color: 'bg-echo-yellow/30 text-echo-yellow',
      },
    ],
  },
]

export default function Home() {
  return (
    <PageTransition>
      <div className="flex min-h-svh items-center justify-center bg-storyteller-sand">
        <div className="w-full max-w-2xl space-y-10 p-8">
          <div className="space-y-3 text-center">
            <Logo className="mx-auto" />
            <h1 className="text-3xl font-bold tracking-tight text-midnight-black">
              Onboarding Prototypes
            </h1>
          </div>

          <div className="space-y-8">
            {flows.map((flow) => (
              <div key={flow.section} className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-wisdom-grey">
                  {flow.section}
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {flow.cards.map((card) => (
                    <Link
                      key={`${flow.section}-${card.title}`}
                      to={card.path}
                      className="group flex flex-col gap-4 rounded-2xl border border-grey-200 bg-white p-6 transition-all hover:border-burnt-papaya hover:shadow-md"
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
                      >
                        <card.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-midnight-black">
                          {card.title}
                        </h3>
                        <p className="text-sm text-wisdom-grey">
                          {card.screens} screens
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
