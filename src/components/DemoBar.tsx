import { useLocation, useNavigate } from 'react-router-dom'
import { RotateCcw } from 'lucide-react'

const employerFlow = [
  { path: '/signup', label: 'Create Account' },
  { path: '/verify', label: 'Email Verification' },
  { path: '/onboarding', label: 'Personal Info' },
  { path: '/onboarding/plan', label: 'Team & Plan' },
  { path: '/payment', label: 'Payment' },
  { path: '/onboarding/invite', label: 'Invite Team' },
  { path: '/welcome', label: 'Welcome' },
  { path: '/dashboard', label: 'Dashboard' },
]

const employeeFlow = [
  { path: '/employee', label: 'Join Company' },
  { path: '/employee/verify', label: 'Email Verification' },
  { path: '/employee/linked', label: 'Linked' },
  { path: '/employee/home', label: 'Home' },
]

export default function DemoBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname

  // Don't show on home page
  if (path === '/' || path === '/login') return null

  const isEmployee = path.startsWith('/employee')
  const flow = isEmployee ? employeeFlow : employerFlow
  const flowLabel = isEmployee ? 'Employee Flow' : 'Employer Flow'
  const currentIndex = flow.findIndex((s) => s.path === path)
  const screenNum = currentIndex >= 0 ? currentIndex + 1 : null
  const resetPath = isEmployee ? '/employee' : '/signup'

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex h-10 items-center justify-between bg-midnight-black px-4 text-xs">
      <div className="flex items-center gap-3">
        <span className="font-heading font-bold text-white">
          Imera Prototype
        </span>
        <span className="h-4 w-px bg-white/20" />

        {/* Flow toggle */}
        <div className="flex rounded-md bg-white/10">
          <button
            onClick={() => navigate('/signup')}
            className={`rounded-md px-2.5 py-1 font-medium transition-colors ${
              !isEmployee
                ? 'bg-burnt-papaya text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Employer
          </button>
          <button
            onClick={() => navigate('/employee')}
            className={`rounded-md px-2.5 py-1 font-medium transition-colors ${
              isEmployee
                ? 'bg-burnt-papaya text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Employee
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {screenNum && (
          <span className="text-white/60">
            {flowLabel} — Screen {screenNum} of {flow.length}
          </span>
        )}
        <button
          onClick={() => navigate(resetPath)}
          className="flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
        >
          <RotateCcw className="h-3 w-3" />
          Reset
        </button>
      </div>
    </div>
  )
}
