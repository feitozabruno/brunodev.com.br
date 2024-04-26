import * as Icon from 'lucide-react'
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
    icon: <Icon.Github />
  },
  {
    name: 'linkedin',
    url: '/',
    icon: <Icon.Linkedin />
  },
  {
    name: 'email',
    url: '/',
    icon: <Icon.Mail />
  }
]

export function SocialLinks() {
  return (
    <ul className='mt-2 flex gap-3 md:gap-4'>
      {socialLinks.map((link) => {
        return (
          <li
            key={link.name}
            className='flex'
          >
            <Link
              href={link.url}
              className='inline-block rounded-lg border border-gray-300 p-2'
            >
              {link.icon}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
