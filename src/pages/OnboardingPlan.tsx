import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SplitLayout from '@/components/SplitLayout'
import DotStepper from '@/components/DotStepper'
import Logo from '@/components/Logo'
import BackButton from '@/components/BackButton'
import PageTransition from '@/components/PageTransition'
import ComparePlansDialog from '@/components/ComparePlansDialog'
import ScheduleDemoDialog from '@/components/ScheduleDemoDialog'
import IllustrationPlaceholder from '@/components/IllustrationPlaceholder'

type TeamSize = '1-3' | '3-20' | '20+'

interface PlanInfo {
  name: string
  price: string
  features: string
  isPaid: boolean
}

const planMap: Record<'1-3' | '3-20', PlanInfo> = {
  '1-3': {
    name: 'Free Plan',
    price: '$0/mo',
    features: 'Up to 3 employees · All core features',
    isPaid: false,
  },
  '3-20': {
    name: 'Growth Plan',
    price: 'Per seat pricing (annual)',
    features: 'Priority support · Advanced analytics',
    isPaid: true,
  },
}

const teamSizes: { value: TeamSize; label: string; subtitle: string }[] = [
  { value: '1-3', label: '1–3', subtitle: 'employees' },
  { value: '3-20', label: '3–20', subtitle: 'employees' },
  { value: '20+', label: '20+', subtitle: 'employees' },
]

export default function OnboardingPlan() {
  const [selected, setSelected] = useState<TeamSize>('1-3')
  const isEnterprise = selected === '20+'
  const plan = !isEnterprise ? planMap[selected] : null

  return (
    <PageTransition>
      <SplitLayout
        left={
          <div>
            <BackButton to="/onboarding" />
            <Logo className="mt-4" />
            <DotStepper total={3} current={2} className="mt-4" />

            <h1 className="mt-10 text-3xl font-bold tracking-tight text-midnight-black">
              Your team &amp; plan
            </h1>
            <p className="mt-3 text-[15px] text-wisdom-grey">
              Select your team size and we'll recommend the best plan.
            </p>

            {/* Team size chips */}
            <div className="mt-10 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-wisdom-grey">
                Team Size
              </p>
              <div className="flex gap-3">
                {teamSizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setSelected(size.value)}
                    className={`flex flex-1 flex-col items-center gap-0.5 rounded-xl border-2 px-4 py-3 transition-all ${
                      selected === size.value
                        ? 'border-burnt-papaya bg-burnt-papaya/5'
                        : 'border-grey-200 bg-white hover:border-grey-300'
                    }`}
                  >
                    <span
                      className={`text-lg font-bold ${
                        selected === size.value
                          ? 'text-burnt-papaya'
                          : 'text-midnight-black'
                      }`}
                    >
                      {size.label}
                    </span>
                    <span className="text-xs text-wisdom-grey">
                      {size.subtitle}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Plan section */}
            <div className="mt-8 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-wisdom-grey">
                Recommended for you
              </p>

              {isEnterprise ? (
                /* Enterprise — schedule a demo */
                <div className="overflow-hidden rounded-xl border border-grey-200 transition-all hover:shadow-md">
                  <div className="flex">
                    <div className="w-1 shrink-0 bg-midnight-black" />
                    <div className="flex-1 p-5 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-midnight-black/5">
                          <Phone className="h-5 w-5 text-midnight-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-midnight-black">
                            Enterprise
                          </h3>
                          <p className="mt-1 text-sm text-wisdom-grey">
                            For teams of 20+ employees, we offer custom setup
                            with dedicated support.
                          </p>
                        </div>
                      </div>

                      <ScheduleDemoDialog>
                        <Button className="h-11 w-full rounded-[10px] text-[15px] font-semibold">
                          Schedule a Demo
                        </Button>
                      </ScheduleDemoDialog>

                      <p className="text-center text-sm">
                        <button
                          onClick={() => setSelected('3-20')}
                          className="text-burnt-papaya hover:underline font-medium"
                        >
                          Or continue with Growth plan instead
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Free / Growth — normal plan card */
                <div className="overflow-hidden rounded-xl border border-grey-200 transition-all hover:shadow-md">
                  <div className="flex">
                    <div className="w-1 shrink-0 bg-burnt-papaya" />
                    <div className="flex-1 p-5 space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-midnight-black">
                          {plan!.name}
                        </h3>
                        <p className="text-sm text-wisdom-grey">
                          {plan!.price}
                        </p>
                        <p className="mt-1 text-xs italic text-wisdom-grey">
                          Based on your team size
                        </p>
                      </div>
                      <p className="text-sm text-wisdom-grey">
                        {plan!.features}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {!isEnterprise && (
              <Button
                asChild
                className="mt-8 h-12 w-full rounded-[10px] text-[15px] font-semibold"
              >
                <Link to={plan!.isPaid ? '/payment' : '/onboarding/invite'}>
                  Continue
                </Link>
              </Button>
            )}

            <p className="mt-6 text-center text-sm">
              <ComparePlansDialog>
                <button className="font-medium text-burnt-papaya hover:underline">
                  Want a different plan? Compare plans
                </button>
              </ComparePlansDialog>
            </p>
          </div>
        }
        right={
          <div className="flex flex-col items-center gap-6 text-center">
            <IllustrationPlaceholder />
            <h2 className="text-2xl font-bold text-midnight-black">
              The right plan for your team
            </h2>
          </div>
        }
      />
    </PageTransition>
  )
}
