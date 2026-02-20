import { Link } from 'react-router-dom'
import { PartyPopper } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SplitLayout from '@/components/SplitLayout'
import BackButton from '@/components/BackButton'
import PageTransition from '@/components/PageTransition'

export default function Welcome() {
  return (
    <PageTransition>
      <SplitLayout
        rightBg="bg-midnight-black"
        centered
        left={
          <div className="space-y-8">
            <BackButton to="/onboarding/invite" />

            <div className="flex flex-col items-center text-center space-y-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-echo-yellow/20">
                <PartyPopper className="h-10 w-10 text-burnt-papaya" />
              </div>

              <div className="space-y-2">
                <h1 className="text-[28px] font-bold tracking-tight text-midnight-black">
                  Welcome to Imera!
                </h1>
                <p className="text-[15px] text-wisdom-grey">
                  Your account is ready. Let's configure your company profile.
                </p>
              </div>

              <Button
                asChild
                className="h-12 w-full rounded-[10px] text-[15px] font-semibold"
              >
                <Link to="/dashboard">Configure Company Profile</Link>
              </Button>

              <Link
                to="/dashboard"
                className="text-sm text-wisdom-grey hover:text-midnight-black"
              >
                Skip for now → Go to Dashboard
              </Link>
            </div>
          </div>
        }
        right={
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="h-[240px] w-[340px] rounded-2xl bg-white/10 shadow-lg" />
            <h2 className="text-2xl font-bold text-white">
              Here's what's waiting for
              <br />
              you inside
            </h2>
          </div>
        }
      />
    </PageTransition>
  )
}
