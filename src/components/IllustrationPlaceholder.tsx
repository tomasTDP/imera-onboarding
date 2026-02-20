interface IllustrationPlaceholderProps {
  width?: number
  height?: number
}

export default function IllustrationPlaceholder({
  width = 280,
  height = 200,
}: IllustrationPlaceholderProps) {
  return (
    <div
      className="rounded-2xl bg-gradient-to-br from-burnt-papaya/10 via-echo-yellow/10 to-dusk-blue/20"
      style={{ width, height }}
    />
  )
}
