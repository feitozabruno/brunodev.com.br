import Link from 'next/link'

export function Desktop() {
  return (
    <nav className='hidden md:block'>
      <ul className='flex justify-end gap-8 p-4 font-medium text-gray-700'>
        <li>
          <Link
            href='/'
            className='border-b-4 border-emerald-700 border-opacity-100 px-1
              text-black transition-all hover:border-opacity-100
              hover:text-black'
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            href='/'
            className='border-b-4 border-emerald-700 border-opacity-0 px-1
              transition-all hover:border-opacity-100 hover:text-black'
          >
            Meus trabalhos
          </Link>
        </li>
        <li>
          <Link
            href='/'
            className='border-b-4 border-emerald-700 border-opacity-0 px-1
              transition-all hover:border-opacity-100 hover:text-black'
          >
            Sobre mim
          </Link>
        </li>
        <li>
          <Link
            href='/'
            className='border-b-4 border-emerald-700 border-opacity-0 px-1
              transition-all hover:border-opacity-100 hover:text-black'
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  )
}
