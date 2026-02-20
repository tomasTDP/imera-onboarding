import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    description: 'For small teams getting started',
    features: [
      'Up to 3 employees',
      'All core features',
      'Email support',
      'Basic reporting',
    ],
    highlight: false,
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '$12',
    period: '/seat/mo',
    description: 'For growing companies',
    features: [
      'Unlimited employees',
      'Priority support',
      'Advanced analytics',
      'Custom workflows',
      'API access',
    ],
    highlight: true,
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      'Custom onboarding setup',
      'SLA guarantee',
      'SSO / SAML',
      'Audit logs',
    ],
    highlight: false,
    cta: 'Schedule a Demo',
  },
]

export default function ComparePlansDialog({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[720px] overflow-y-auto max-h-[90vh] p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-midnight-black">
            Compare plans
          </DialogTitle>
          <p className="text-[13px] text-wisdom-grey">
            Choose the plan that best fits your team.
          </p>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-4 pt-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border-2 p-5 ${
                plan.highlight
                  ? 'border-burnt-papaya bg-burnt-papaya/[0.03]'
                  : 'border-grey-200 bg-white'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="rounded-full bg-burnt-papaya px-3 py-0.5 text-[11px] font-semibold text-white">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-[18px] font-bold leading-tight text-midnight-black">
                  {plan.name}
                </h3>
                <div className="mt-1.5 flex items-baseline gap-0.5">
                  <span className="text-[28px] font-bold leading-none text-midnight-black">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[13px] text-wisdom-grey">{plan.period}</span>
                  )}
                </div>
                <p className="mt-1.5 text-[13px] leading-snug text-wisdom-grey">
                  {plan.description}
                </p>
              </div>

              <div className="mb-4 h-px bg-grey-200" />

              <ul className="mb-5 flex-1 space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[13px] leading-snug text-midnight-black"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-burnt-papaya" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? 'default' : 'outline'}
                className="h-10 w-full rounded-lg text-[13px] font-semibold"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
