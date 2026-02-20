import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SinglePageLayout from '@/components/SinglePageLayout'
import ComparePlansDialog from '@/components/ComparePlansDialog'
import ScheduleDemoDialog from '@/components/ScheduleDemoDialog'
import PageTransition from '@/components/PageTransition'

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

export default function SpSetup() {
  const [selected, setSelected] = useState<TeamSize>('1-3')
  const isEnterprise = selected === '20+'
  const plan = !isEnterprise ? planMap[selected] : null

  return (
    <PageTransition>
      <SinglePageLayout backTo="/sp/employer" wide>
        <div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-midnight-black">
              Set up your workspace
            </h1>
            <p className="text-sm text-wisdom-grey">
              Tell us about you and your company. This takes about 2 minutes.
            </p>
          </div>

          {/* About you */}
          <div className="mt-7 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-wisdom-grey">
              About you
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Jane" className="h-12 rounded-lg text-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" className="h-12 rounded-lg text-sm" />
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="mt-7 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-wisdom-grey">
              Company
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Acme Healthcare"
                  className="h-12 rounded-lg text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="domain">Email Domain</Label>
                <Input
                  id="domain"
                  placeholder="yourcompany.com"
                  className="h-12 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>

          {/* Team size */}
          <div className="mt-7 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-wisdom-grey">
              Team Size
            </h2>
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
                      selected === size.value ? 'text-burnt-papaya' : 'text-midnight-black'
                    }`}
                  >
                    {size.label}
                  </span>
                  <span className="text-xs text-wisdom-grey">{size.subtitle}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Plan */}
          <div className="mt-7 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-wisdom-grey">
              Recommended for you
            </h2>

            {isEnterprise ? (
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
                          For teams of 20+ employees, we offer custom setup with
                          dedicated support.
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
              <div className="overflow-hidden rounded-xl border border-grey-200 transition-all hover:shadow-md">
                <div className="flex">
                  <div className="w-1 shrink-0 bg-burnt-papaya" />
                  <div className="flex-1 p-5 space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-midnight-black">{plan!.name}</h3>
                      <p className="text-sm text-wisdom-grey">{plan!.price}</p>
                      <p className="mt-1 text-xs italic text-wisdom-grey">
                        Based on your team size
                      </p>
                    </div>
                    <p className="text-sm text-wisdom-grey">{plan!.features}</p>
                  </div>
                </div>
              </div>
            )}

            <p className="text-center text-sm">
              <ComparePlansDialog>
                <button className="font-medium text-burnt-papaya hover:underline">
                  Compare plans
                </button>
              </ComparePlansDialog>
            </p>
          </div>

          {!isEnterprise && (
            <Button
              asChild
              className="mt-7 h-12 w-full rounded-[10px] text-[15px] font-semibold"
            >
              <Link to={plan!.isPaid ? '/sp/employer/payment' : '/sp/employer/invite'}>
                Create Workspace
              </Link>
            </Button>
          )}
        </div>
      </SinglePageLayout>
    </PageTransition>
  )
}
