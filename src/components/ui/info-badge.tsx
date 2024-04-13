import React from 'react'

interface InfoBadgeProps extends React.ComponentPropsWithoutRef<'svg'> {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
}

export function InfoBadge({ Icon, title }: InfoBadgeProps) {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-emerald-700">
      <Icon className="h-4 w-4 md:h-5 md:w-5" />
      <span className="text-sm md:text-base">{title}</span>
    </div>
  )
}
