import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

interface socialLinksProps {
  name: string
  url: string
  icon: React.ReactNode
}

const socialLinks: socialLinksProps[] = [
  {
    name: 'github',
    url: '/',
    icon: <Github />
  },
  {
    name: 'linkedin',
    url: '/',
    icon: <Linkedin />
  },
  {
    name: 'email',
    url: '/',
    icon: <Mail />
  }
]

export function SocialLinks() {
  return (
    <ul className='mt-2 flex gap-3 md:gap-4'>
      {socialLinks.map((link) => {
        return (
          <li key={link.name} className='flex'>
            <Link
              href={link.url}
              className='inline-block rounded-lg border border-gray-300 bg-white p-2'
            >
              {link.icon}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
