import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, X, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SinglePageLayout from '@/components/SinglePageLayout'
import PageTransition from '@/components/PageTransition'

export default function SpInvite() {
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
      <SinglePageLayout backTo="/sp/employer/setup">
        <div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-burnt-papaya/10">
              <Users className="h-7 w-7 text-burnt-papaya" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-midnight-black">
              Invite your team
            </h1>
            <p className="text-sm text-wisdom-grey">
              Add employees to start managing their immigration journey.
            </p>
          </div>

          <div className="mt-10 flex gap-2">
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

          {emails.length > 0 && (
            <div className="mt-4 space-y-2">
              {emails.map((email) => (
                <div
                  key={email}
                  className="flex items-center justify-between rounded-lg bg-grey-100 px-4 py-2.5"
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

          <div className="mt-8 flex items-center gap-4">
            <div className="h-[0.5px] flex-1 bg-grey-200" />
            <span className="text-xs text-wisdom-grey">or</span>
            <div className="h-[0.5px] flex-1 bg-grey-200" />
          </div>

          <div className="mt-8 space-y-2">
            <p className="text-sm font-medium text-midnight-black">Share invite link</p>
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
            <Link to="/sp/employer/welcome">Continue</Link>
          </Button>

          <p className="mt-4 text-center">
            <Link
              to="/sp/employer/welcome"
              className="text-sm text-wisdom-grey hover:text-midnight-black"
            >
              Skip for now →
            </Link>
          </p>
        </div>
      </SinglePageLayout>
    </PageTransition>
  )
}
