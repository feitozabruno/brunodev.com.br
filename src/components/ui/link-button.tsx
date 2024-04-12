import Link from 'next/link'
import React from 'react'

interface LinkButtonProps {
  url: string
  children: React.ReactNode
}

export function LinkButton({ url, children }: LinkButtonProps) {
  return (
    <Link href={url} className="font-bold text-emerald-700 underline">
      {children}
    </Link>
  )
}
