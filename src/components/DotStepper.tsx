import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'

interface DotStepperProps {
  total?: number
  current: number // 1-indexed
  routes?: string[]
  labels?: string[]
  className?: string
}

const defaultRoutes = ['/onboarding', '/onboarding/plan', '/payment']
const defaultLabels = ['Your info', 'Team & plan', 'Payment']

export default function DotStepper({
  current,
  routes = defaultRoutes,
  labels = defaultLabels,
  className = '',
}: DotStepperProps) {
  const navigate = useNavigate()
  const total = labels.length

  return (
    <div className={`w-full ${className}`}>
      {/* Bar segments */}
      <div className="flex items-center gap-1">
        {Array.from({ length: total }, (_, i) => {
          const step = i + 1
          const isCompleted = step < current
          const isActive = step === current
          const isClickable = isCompleted

          return (
            <button
              key={step}
              type="button"
              disabled={!isClickable}
              onClick={() => isClickable && navigate(routes[i])}
              className={`relative h-1.5 flex-1 rounded-full transition-all duration-500 ease-out ${
                isCompleted || isActive ? 'bg-burnt-papaya' : 'bg-grey-200'
              } ${isClickable ? 'cursor-pointer hover:brightness-110' : 'cursor-default'}`}
            />
          )
        })}
      </div>

      {/* Labels */}
      <div className="mt-2.5 flex">
        {Array.from({ length: total }, (_, i) => {
          const step = i + 1
          const isCompleted = step < current
          const isActive = step === current

          return (
            <div key={step} className="flex flex-1 items-center gap-1 first:justify-start last:justify-end [&:nth-child(2)]:justify-center">
              {isCompleted && (
                <Check className="h-3 w-3 text-burnt-papaya" />
              )}
              <span
                className={`text-[11px] font-medium leading-none ${
                  isCompleted || isActive
                    ? 'text-midnight-black'
                    : 'text-grey-400'
                }`}
              >
                {labels[i]}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
