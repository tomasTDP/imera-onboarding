import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SplitLayout from '@/components/SplitLayout'
import Logo from '@/components/Logo'
import BackButton from '@/components/BackButton'
import PageTransition from '@/components/PageTransition'
import IllustrationPlaceholder from '@/components/IllustrationPlaceholder'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <PageTransition>
      <SplitLayout
        left={
          <div>
            <BackButton to="/" />
            <Logo className="mt-4" />

            <h1 className="mt-10 text-3xl font-bold tracking-tight text-midnight-black">
              Welcome back
            </h1>
            <p className="mt-3 text-[15px] text-wisdom-grey">
              Log in to your Imera account.
            </p>

            <div className="mt-10 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="h-12 rounded-lg text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="h-12 rounded-lg pr-11 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-wisdom-grey hover:text-midnight-black"
                  >
                    {showPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="mt-8 h-12 w-full rounded-[10px] text-[15px] font-semibold"
            >
              <Link to="/onboarding">Log In</Link>
            </Button>

            <p className="mt-6 text-center text-sm text-wisdom-grey">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="font-medium text-burnt-papaya hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        }
        right={
          <div className="flex flex-col items-center gap-6 text-center">
            <IllustrationPlaceholder />
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-midnight-black">
                Simplify immigration.
                <br />
                Empower your team.
              </h2>
              <span className="inline-block text-3xl text-burnt-papaya">
                ✦
              </span>
            </div>
          </div>
        }
      />
    </PageTransition>
  )
}
