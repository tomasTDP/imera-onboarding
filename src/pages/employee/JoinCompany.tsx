import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SplitLayout from '@/components/SplitLayout'
import Logo from '@/components/Logo'
import BackButton from '@/components/BackButton'
import PageTransition from '@/components/PageTransition'
import SocialAuthButtons from '@/components/SocialAuthButtons'

export default function JoinCompany() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <PageTransition>
      <SplitLayout
        left={
          <div>
            <BackButton to="/" />
            <Logo className="mt-4" />

            {/* Company invite badge */}
            <div className="mt-6 rounded-xl border border-grey-200 bg-storyteller-sand px-4 py-3">
              <p className="text-xs text-wisdom-grey">You've been invited to</p>
              <div className="mt-1 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-burnt-papaya/10">
                  <Building2 className="h-4 w-4 text-burnt-papaya" />
                </div>
                <span className="text-sm font-semibold text-midnight-black">
                  Acme Healthcare
                </span>
              </div>
            </div>

            <h1 className="mt-8 text-2xl font-bold tracking-tight text-midnight-black">
              Join Acme Healthcare
            </h1>
            <p className="mt-3 text-sm text-wisdom-grey">
              Create your account to get started.
            </p>

            <div className="mt-10">
              <SocialAuthButtons navigateTo="/employee/linked" />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-[0.5px] flex-1 bg-grey-200" />
              <span className="text-xs text-wisdom-grey">or</span>
              <div className="h-[0.5px] flex-1 bg-grey-200" />
            </div>

            <div className="mt-8 space-y-6">
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
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value="jane@acmehealthcare.com"
                  disabled
                  className="h-12 rounded-lg text-sm bg-grey-100"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    className="h-12 rounded-lg pr-11 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-wisdom-grey hover:text-midnight-black"
                  >
                    {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                  </button>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="mt-8 h-12 w-full rounded-[10px] text-[15px] font-semibold"
            >
              <Link to="/employee/verify">Create Account</Link>
            </Button>

            <p className="mt-6 text-center text-sm text-wisdom-grey">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-burnt-papaya hover:underline">
                Log in
              </Link>
            </p>
          </div>
        }
        right={
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/60">
              <Building2 className="h-10 w-10 text-wisdom-grey" />
            </div>
            <h2 className="text-lg font-bold text-midnight-black">
              Join your team on Imera
            </h2>
          </div>
        }
      />
    </PageTransition>
  )
}
