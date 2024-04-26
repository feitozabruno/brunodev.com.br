import Link from 'next/link'

interface LinkButtonProps {
  url: string
  title: string
}

export function LinkInline({ url, title }: LinkButtonProps) {
  return (
    <Link
      href={url}
      className='text-sm font-bold text-emerald-700 underline transition-all
        hover:brightness-125 md:text-base'
    >
      {title}
    </Link>
  )
}
