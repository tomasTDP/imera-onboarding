import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Imera Onboarding</h1>
        <p className="text-muted-foreground">Hi-fi prototype screens</p>
        <nav className="pt-4">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground transition-colors">
                Home (you are here)
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
