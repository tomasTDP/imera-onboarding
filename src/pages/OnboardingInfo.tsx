import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SplitLayout from '@/components/SplitLayout'
import DotStepper from '@/components/DotStepper'
import Logo from '@/components/Logo'
import BackButton from '@/components/BackButton'
import PageTransition from '@/components/PageTransition'
import IllustrationPlaceholder from '@/components/IllustrationPlaceholder'

export default function OnboardingInfo() {
  return (
    <PageTransition>
      <SplitLayout
        left={
          <div>
            <BackButton to="/signup" />
            <Logo className="mt-4" />
            <DotStepper total={3} current={1} className="mt-4" />

            <h1 className="mt-10 text-3xl font-bold tracking-tight text-midnight-black">
              About you &amp; your company
            </h1>
            <p className="mt-3 text-[15px] text-wisdom-grey">
              We'll personalize your experience.
            </p>

            <div className="mt-10 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Jane"
                    className="h-12 rounded-lg text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="h-12 rounded-lg text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Acme Healthcare"
                  className="h-12 rounded-lg text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="domain">Company Email Domain</Label>
                <Input
                  id="domain"
                  placeholder="yourcompany.com"
                  className="h-12 rounded-lg text-sm"
                />
              </div>
            </div>

            <Button
              asChild
              className="mt-8 h-12 w-full rounded-[10px] text-[15px] font-semibold"
            >
              <Link to="/onboarding/plan">Continue</Link>
            </Button>
          </div>
        }
        right={
          <div className="flex flex-col items-center gap-6 text-center">
            <IllustrationPlaceholder />
            <h2 className="text-2xl font-bold text-midnight-black">
              Your workspace is almost ready
            </h2>
          </div>
        }
      />
    </PageTransition>
  )
}
