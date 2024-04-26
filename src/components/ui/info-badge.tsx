import { Rocket, GitCommit, PencilLine } from 'lucide-react'

interface InfoBadgeProps {
  title: string
  icon: React.ReactNode
}

const badges: InfoBadgeProps[] = [
  {
    title: '13 projetos',
    icon: <Rocket className='h-4 w-4 md:h-5 md:w-5' />
  },
  {
    title: '700 contribuições',
    icon: <GitCommit className='h-4 w-4 md:h-5 md:w-5' />
  },
  {
    title: '2000 linhas',
    icon: <PencilLine className='h-4 w-4 md:h-5 md:w-5' />
  }
]

export function InfoBadges() {
  return (
    <div className='mt-4 flex flex-wrap gap-4'>
      {badges.map((badge) => {
        return (
          <div
            key={badge.title}
            className='flex items-center gap-1 rounded-lg border border-gray-300
              px-4 py-2 text-emerald-700'
          >
            {badge.icon}
            <span className='text-sm md:text-base'>{badge.title}</span>
          </div>
        )
      })}
    </div>
  )
}
