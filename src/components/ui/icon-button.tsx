import Link from 'next/link'
import React from 'react'

interface IconButtonProps {
  url: string
  children: React.ReactNode
}

export function IconButton({ url, children }: IconButtonProps) {
  return <Link href={url}>{children}</Link>
}
