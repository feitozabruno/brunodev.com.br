import { LinkInline } from './link-inline'

interface ProjectItemProps {
  title: string
  description: string
  url: string
}

const projects: ProjectItemProps[] = [
  {
    title: 'brunodev.com.br',
    description: 'Meu site pessoal construído com Next.js e Tailwindcss',
    url: '/'
  },
  {
    title: 'tabnews.com.br',
    description: 'Clone do projeto opensource TabNews feito no curso.dev',
    url: '/'
  },
  {
    title: 'hubcamp.com.br',
    description: 'Plataforma para um sistema de gerenciamento de aprendizagem',
    url: '/'
  }
]

export function ProjectList() {
  return (
    <div>
      <header>
        <h2 className='text-xl font-bold md:text-2xl'>
          Meus trabalhos recentes
        </h2>
        <p className='mt-2 text-sm md:text-base'>
          Recentemente trabalhei nos projetos:{' '}
          <LinkInline url='/' title='Meu site pessoal' />,{' '}
          <LinkInline url='/' title='TabNews' /> e{' '}
          <LinkInline url='/' title='HubCamp' />.
        </p>
      </header>

      <ul className='mt-6 flex flex-col gap-4'>
        {projects.map((project) => {
          return (
            <li
              key={project.title}
              className='flex flex-col gap-2 rounded-xl border border-gray-300
                p-4 px-6'
            >
              <h3 className='text-base font-medium md:text-lg'>
                {project.title}
              </h3>
              <p className='text-sm md:text-base'>{project.description}</p>
              <LinkInline url={project.url} title='Ver projeto' />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
