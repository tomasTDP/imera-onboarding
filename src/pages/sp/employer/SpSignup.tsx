import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import SinglePageLayout from '@/components/SinglePageLayout'
import SocialAuthButtons from '@/components/SocialAuthButtons'
import PageTransition from '@/components/PageTransition'

export default function SpSignup() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <PageTransition>
      <SinglePageLayout backTo="/">
        <div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-midnight-black">
              Get started with Imera
            </h1>
            <p className="text-sm text-wisdom-grey">
              Create your account to manage your workforce.
            </p>
          </div>

          <div className="mt-7">
            <SocialAuthButtons navigateTo="/sp/employer/setup" />
          </div>

          <div className="mt-5 flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-sm text-wisdom-grey">or</span>
            <Separator className="flex-1" />
          </div>

          <div className="mt-5 space-y-4">
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
            className="mt-7 h-12 w-full rounded-[10px] text-[15px] font-semibold"
          >
            <Link to="/sp/employer/verify">Create Account</Link>
          </Button>

          <p className="mt-5 text-center text-sm text-wisdom-grey">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-burnt-papaya hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </SinglePageLayout>
    </PageTransition>
  )
}
