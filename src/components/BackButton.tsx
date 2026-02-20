import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface BackButtonProps {
  to?: string
}

export default function BackButton({ to }: BackButtonProps) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => (to ? navigate(to) : navigate(-1))}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-grey-200 text-wisdom-grey transition-colors hover:border-grey-300 hover:text-midnight-black"
    >
      <ArrowLeft className="h-4 w-4" />
    </button>
  )
}
