import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SplitLayout from '@/components/SplitLayout'
import BackButton from '@/components/BackButton'
import PageTransition from '@/components/PageTransition'

export default function Verify() {
  return (
    <PageTransition>
      <SplitLayout
        rightBg="bg-midnight-black"
        centered
        left={
          <div className="space-y-6">
            <BackButton to="/signup" />

            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-burnt-papaya/10">
                <Mail className="h-8 w-8 text-burnt-papaya" />
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-midnight-black">
                  Check your email
                </h1>
                <p className="text-[15px] text-wisdom-grey">
                  We sent a verification link to{' '}
                  <span className="font-medium text-midnight-black">
                    name@company.com
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
                  Only for email sign-up. Google/Microsoft skips this step.
                </p>
              </div>

              <Button
                asChild
                className="h-12 w-full rounded-[10px] text-[15px] font-semibold"
              >
                <Link to="/onboarding">Continue</Link>
              </Button>
            </div>
          </div>
        }
        right={
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-white/10">
              <Mail className="h-16 w-16 text-white/80" />
            </div>
            <h2 className="text-2xl font-bold text-white">Almost there!</h2>
          </div>
        }
      />
    </PageTransition>
  )
}
