import { Link } from 'react-router-dom'
import { PartyPopper } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SinglePageLayout from '@/components/SinglePageLayout'
import PageTransition from '@/components/PageTransition'

export default function SpWelcome() {
  return (
    <PageTransition>
      <SinglePageLayout showLogo>
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-echo-yellow/20">
            <PartyPopper className="h-8 w-8 text-burnt-papaya" />
          </div>

          <div className="space-y-2">
            <h1 className="text-[28px] font-bold tracking-tight text-midnight-black">
              Welcome to Imera!
            </h1>
            <p className="text-sm text-wisdom-grey">
              Your account is ready. Let's configure your company profile.
            </p>
          </div>

          <Button
            asChild
            className="h-12 w-full rounded-[10px] text-[15px] font-semibold"
          >
            <Link to="/sp/employer/dashboard">Configure Company Profile</Link>
          </Button>

          <Link
            to="/sp/employer/dashboard"
            className="text-sm text-wisdom-grey hover:text-midnight-black"
          >
            Skip for now → Go to Dashboard
          </Link>
        </div>
      </SinglePageLayout>
    </PageTransition>
  )
}
