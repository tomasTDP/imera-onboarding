import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, X, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import SplitLayout from '@/components/SplitLayout'
import Logo from '@/components/Logo'
import BackButton from '@/components/BackButton'
import PageTransition from '@/components/PageTransition'
import IllustrationPlaceholder from '@/components/IllustrationPlaceholder'

export default function Invite() {
  const [emails, setEmails] = useState(['jane@acme.com', 'john@acme.com'])
  const [emailInput, setEmailInput] = useState('')
  const [copied, setCopied] = useState(false)
  const inviteLink = 'imera.com/join/acme-healthcare'

  const addEmail = () => {
    const trimmed = emailInput.trim()
    if (trimmed && !emails.includes(trimmed)) {
      setEmails([...emails, trimmed])
      setEmailInput('')
    }
  }

  const removeEmail = (email: string) => {
    setEmails(emails.filter((e) => e !== email))
  }

  const copyLink = () => {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <PageTransition>
      <SplitLayout
        left={
          <div>
            <BackButton />
            <Logo className="mt-4" />

            <div className="mt-8 flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-burnt-papaya/10">
                <Users className="h-8 w-8 text-burnt-papaya" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-midnight-black">
                Invite your team
              </h1>
              <p className="text-[15px] text-wisdom-grey">
                Add employees to start managing their immigration journey.
              </p>
            </div>

            {/* Email input */}
            <div className="mt-8 flex gap-2">
              <Input
                type="email"
                placeholder="colleague@company.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addEmail()}
                className="h-12 flex-1 rounded-lg text-sm"
              />
              <Button
                onClick={addEmail}
                className="h-12 rounded-[10px] px-6 text-[15px] font-semibold"
              >
                Add
              </Button>
            </div>

            {/* Added emails list */}
            {emails.length > 0 && (
              <div className="mt-4 space-y-2">
                {emails.map((email) => (
                  <div
                    key={email}
                    className="flex items-center justify-between rounded-lg bg-storyteller-sand px-4 py-2.5"
                  >
                    <span className="text-sm text-midnight-black">{email}</span>
                    <button
                      onClick={() => removeEmail(email)}
                      className="text-wisdom-grey hover:text-midnight-black"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Divider */}
            <div className="mt-6 flex items-center gap-4">
              <Separator className="flex-1" />
              <span className="text-sm text-wisdom-grey">or</span>
              <Separator className="flex-1" />
            </div>

            {/* Share invite link */}
            <div className="mt-6 space-y-2">
              <p className="text-sm font-medium text-midnight-black">
                Share invite link
              </p>
              <div className="flex gap-2">
                <Input
                  readOnly
                  value={inviteLink}
                  className="h-12 flex-1 rounded-lg bg-grey-100 text-sm text-wisdom-grey"
                />
                <Button
                  variant="outline"
                  onClick={copyLink}
                  className="h-12 rounded-[10px] px-4"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-mint-energy" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Button
              asChild
              className="mt-8 h-12 w-full rounded-[10px] text-[15px] font-semibold"
            >
              <Link to="/welcome">Continue</Link>
            </Button>

            <p className="mt-4 text-center">
              <Link
                to="/welcome"
                className="text-sm text-wisdom-grey hover:text-midnight-black"
              >
                Skip for now →
              </Link>
            </p>
          </div>
        }
        right={
          <div className="flex flex-col items-center gap-6 text-center">
            <IllustrationPlaceholder />
            <h2 className="text-2xl font-bold text-midnight-black">
              Your team is waiting
            </h2>
          </div>
        }
      />
    </PageTransition>
  )
}
