import React from 'react'

interface InfoBadgeProps extends React.ComponentPropsWithoutRef<'svg'> {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  children: React.ReactNode
}

export function InfoBadge({ Icon, children }: InfoBadgeProps) {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-emerald-700">
      <Icon className="h-5 w-5" />
      {children}
    </div>
  )
}
