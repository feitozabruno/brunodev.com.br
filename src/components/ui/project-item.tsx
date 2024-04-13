import { LinkButton } from './link-button'

interface ProjectItemProps {
  title: string
  description: string
  url: string
}

export function ProjectItem({ title, description, url }: ProjectItemProps) {
  return (
    <li className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 px-6">
      <h3 className="text-base font-medium md:text-lg">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
      <LinkButton url={url} title="Ver projeto" />
    </li>
  )
}
