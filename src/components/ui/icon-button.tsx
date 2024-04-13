import Link from 'next/link'
import React from 'react'

interface IconButtonProps {
  link: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  children?: React.ReactNode
}

export function IconButton({
  link,
  icon: IconComponent,
  children
}: IconButtonProps) {
  return (
    <Link
      href={link}
      className="inline-block rounded-lg border border-gray-300 p-2"
    >
      <IconComponent className="h-4 w-4 transition-all hover:scale-110 hover:transition-all md:h-5 md:w-5" />
      {children}
    </Link>
  )
}
