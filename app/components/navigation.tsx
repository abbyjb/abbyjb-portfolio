import Link from 'next/link'
 
export function Navigation() {
  return (
    <nav className="flex items-center justify-center space-x-4">
      <Link className={"font-bold text-2xl hover:transition-colors ease-in-out px-4 py-3 hover:border-b-2"} href="/">
        Home
      </Link>
 
      <Link className={"font-bold text-2xl hover:transition_colors ease-in-out px-4 py-3 hover:border-b-2"} href="/about">
        About
      </Link>
    </nav>
  )
}