import Link from 'next/link'

export function NavMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex justify-end gap-8 p-4 font-medium text-gray-700">
        <li>
          <Link
            href="/"
            className="border-b-4 border-emerald-700 border-opacity-100 px-1 text-black transition-all hover:border-opacity-100 hover:text-black"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="border-b-4 border-emerald-700 border-opacity-0 px-1 transition-all hover:border-opacity-100 hover:text-black"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="border-b-4 border-emerald-700 border-opacity-0 px-1 transition-all hover:border-opacity-100 hover:text-black"
          >
            My work
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="border-b-4 border-emerald-700 border-opacity-0 px-1 transition-all hover:border-opacity-100 hover:text-black"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
