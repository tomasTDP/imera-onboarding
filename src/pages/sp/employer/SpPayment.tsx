import { Link } from 'react-router-dom'
import { CreditCard, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import SinglePageLayout from '@/components/SinglePageLayout'
import PageTransition from '@/components/PageTransition'

export default function SpPayment() {
  return (
    <PageTransition>
      <SinglePageLayout backTo="/sp/employer/setup">
        <div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-midnight-black">
              Payment details
            </h1>
            <p className="text-sm text-wisdom-grey">
              You won't be charged until your trial ends.
            </p>
          </div>

          {/* Order summary */}
          <div className="mt-7 rounded-xl bg-grey-100 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-midnight-black">Growth Plan</span>
              <span className="text-sm font-semibold text-midnight-black">Per seat/mo</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-wisdom-grey">Billing</span>
              <span className="text-xs text-wisdom-grey">Annual</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-midnight-black">Total</span>
              <span className="text-sm font-bold text-midnight-black">Per seat/mo</span>
            </div>
          </div>

          <div className="mt-7 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  placeholder="1234 1234 1234 1234"
                  className="h-12 rounded-lg pl-11 text-sm"
                />
                <CreditCard className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-wisdom-grey" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry</Label>
                <Input id="expiry" placeholder="MM/YY" className="h-12 rounded-lg text-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" className="h-12 rounded-lg text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="billing">Billing Address</Label>
              <Input
                id="billing"
                placeholder="123 Main St, City, State"
                className="h-12 rounded-lg text-sm"
              />
            </div>
          </div>

          <Button
            asChild
            className="mt-7 h-12 w-full rounded-[10px] text-[15px] font-semibold"
          >
            <Link to="/sp/employer/invite">Start Plan</Link>
          </Button>

          <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-wisdom-grey">
            <Lock className="h-3.5 w-3.5" />
            Secure payment powered by Stripe. Cancel anytime.
          </p>
        </div>
      </SinglePageLayout>
    </PageTransition>
  )
}
