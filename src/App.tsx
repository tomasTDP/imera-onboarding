import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Home + auth
import Home from '@/pages/Home'
import Login from '@/pages/Login'

// Option 2 — Split Screen: Employer
import Signup from '@/pages/Signup'
import Verify from '@/pages/Verify'
import OnboardingInfo from '@/pages/OnboardingInfo'
import OnboardingPlan from '@/pages/OnboardingPlan'
import Payment from '@/pages/Payment'
import Invite from '@/pages/Invite'
import Welcome from '@/pages/Welcome'
import Dashboard from '@/pages/Dashboard'

// Option 2 — Split Screen: Employee
import JoinCompany from '@/pages/employee/JoinCompany'
import EmployeeVerify from '@/pages/employee/EmployeeVerify'
import LinkedToCompany from '@/pages/employee/LinkedToCompany'
import EmployeeHome from '@/pages/employee/EmployeeHome'

// Option 3 — Single Page: Employer
import SpSignup from '@/pages/sp/employer/SpSignup'
import SpVerify from '@/pages/sp/employer/SpVerify'
import SpSetup from '@/pages/sp/employer/SpSetup'
import SpPayment from '@/pages/sp/employer/SpPayment'
import SpInvite from '@/pages/sp/employer/SpInvite'
import SpWelcome from '@/pages/sp/employer/SpWelcome'
import SpDashboard from '@/pages/sp/employer/SpDashboard'

// Option 3 — Single Page: Employee
import SpJoinCompany from '@/pages/sp/employee/SpJoinCompany'
import SpEmployeeVerify from '@/pages/sp/employee/SpEmployeeVerify'
import SpEmployeeWelcome from '@/pages/sp/employee/SpEmployeeWelcome'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Option 2 — Split Screen: Employer */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/onboarding" element={<OnboardingInfo />} />
        <Route path="/onboarding/plan" element={<OnboardingPlan />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/onboarding/invite" element={<Invite />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Option 2 — Split Screen: Employee */}
        <Route path="/employee" element={<JoinCompany />} />
        <Route path="/employee/verify" element={<EmployeeVerify />} />
        <Route path="/employee/linked" element={<LinkedToCompany />} />
        <Route path="/employee/home" element={<EmployeeHome />} />

        {/* Option 3 — Single Page: Employer */}
        <Route path="/sp/employer" element={<SpSignup />} />
        <Route path="/sp/employer/verify" element={<SpVerify />} />
        <Route path="/sp/employer/setup" element={<SpSetup />} />
        <Route path="/sp/employer/payment" element={<SpPayment />} />
        <Route path="/sp/employer/invite" element={<SpInvite />} />
        <Route path="/sp/employer/welcome" element={<SpWelcome />} />
        <Route path="/sp/employer/dashboard" element={<SpDashboard />} />

        {/* Option 3 — Single Page: Employee */}
        <Route path="/sp/employee" element={<SpJoinCompany />} />
        <Route path="/sp/employee/verify" element={<SpEmployeeVerify />} />
        <Route path="/sp/employee/welcome" element={<SpEmployeeWelcome />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
