import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SinglePageLayout from '@/components/SinglePageLayout'
import PageTransition from '@/components/PageTransition'

export default function SpEmployeeVerify() {
  return (
    <PageTransition>
      <SinglePageLayout backTo="/sp/employee">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-burnt-papaya/10">
            <Mail className="h-8 w-8 text-burnt-papaya" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-midnight-black">
              Check your email
            </h1>
            <p className="text-sm text-wisdom-grey">
              We sent a verification link to{' '}
              <span className="font-medium text-midnight-black">
                jane@acmehealthcare.com
              </span>
            </p>
          </div>

          <Button
            variant="outline"
            className="h-12 rounded-[10px] px-8 text-[15px] font-medium"
          >
            Resend email
          </Button>

          <p className="text-sm text-wisdom-grey">
            Didn't receive it? Check your spam folder.
          </p>

          <div className="rounded-lg bg-storyteller-sand px-4 py-3">
            <p className="text-xs text-wisdom-grey">
              Only for manual sign-up. SSO skips this step.
            </p>
          </div>

          <Button
            asChild
            className="h-12 w-full rounded-[10px] text-[15px] font-semibold"
          >
            <Link to="/sp/employee/welcome">Continue</Link>
          </Button>
        </div>
      </SinglePageLayout>
    </PageTransition>
  )
}
