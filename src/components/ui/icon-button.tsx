import Link from 'next/link'
import React from 'react'

interface IconButtonProps extends React.ComponentPropsWithoutRef<'svg'> {
  link: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export function IconButton({ Icon, link, ...props }: IconButtonProps) {
  return (
    <Link
      href={link}
      className="inline-block rounded-lg border border-gray-300 p-2"
    >
      <Icon
        className="h-4 w-4 transition-all hover:scale-110 hover:transition-all md:h-5 md:w-5"
        {...props}
      />
    </Link>
  )
}
