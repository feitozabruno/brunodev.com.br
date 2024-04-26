import { X, Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export function DropdownMenu() {
  const [open, setOpen] = useState(false)

  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  function toggleMenu() {
    setOpen(!open)
  }

  return (
    <nav className='fixed inset-x-0 top-0 bg-gray-100 md:hidden'>
      <div className='relative z-50 flex justify-end bg-gray-100 p-4'>
        <button onClick={toggleMenu}>{open ? <X /> : <Menu />}</button>
      </div>

      <ul
        ref={menuRef}
        className={`${open ? '-translate-y-0' : '-translate-y-48 border-none'}
        absolute top-14 w-full border bg-gray-100 text-center text-sm
        font-medium transition-all`}
      >
        <Link href='/'>
          <li className='w-full py-2 text-center transition-all hover:bg-gray-200'>
            Home
          </li>
        </Link>

        <Link href='/'>
          <li className='w-full py-2 text-center transition-all hover:bg-gray-200'>
            About me
          </li>
        </Link>

        <Link href='/'>
          <li className='w-full py-2 text-center transition-all hover:bg-gray-200'>
            My works
          </li>
        </Link>

        <Link href='/'>
          <li className='w-full py-2 text-center transition-all hover:bg-gray-200'>
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  )
}
