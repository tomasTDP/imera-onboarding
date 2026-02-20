import { Link } from 'react-router-dom'
import { CircleCheckBig, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageTransition from '@/components/PageTransition'
import Logo from '@/components/Logo'

export default function LinkedToCompany() {
  return (
    <PageTransition>
      <div className="flex min-h-svh items-center justify-center bg-grey-100">
        <div className="w-full max-w-md space-y-8 text-center p-8">
          <Logo className="mx-auto" />

          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint-energy/20">
              <CircleCheckBig className="h-8 w-8 text-mint-energy" />
            </div>
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
          <div className="mx-auto max-w-xs rounded-xl border border-grey-200 bg-white p-5">
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
            asChild
            className="h-12 w-full rounded-[10px] text-[15px] font-semibold"
          >
            <Link to="/employee/home">Go to Home</Link>
          </Button>
        </div>
      </div>
    </PageTransition>
  )
}
