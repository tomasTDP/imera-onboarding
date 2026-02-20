export default function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/logo-imera.png"
      alt="Imera"
      className={`h-9 w-auto ${className}`}
    />
  )
}
