import { poppins } from '@/styles/fonts'
import Image from 'next/image'
import * as Icon from 'lucide-react'

import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { NavMenu } from '@/components/ui/nav-menu'
import { IconButton } from '@/components/ui/icon-button'
import { LinkButton } from '@/components/ui/link-button'
import { InfoBadge } from '@/components/ui/info-badge'
import { ProjectItem } from '@/components/ui/project-item'

export default function Home() {
  return (
    <>
      <header className="relative mx-auto w-full md:max-w-screen-lg">
        <DropdownMenu />
        <NavMenu />
      </header>

      <main
        className={`${poppins.className} mx-auto mt-14 w-full p-4 antialiased md:max-w-screen-lg`}
      >
        <section className="flex gap-5 md:flex-row">
          <div>
            <Image
              src="https://github.com/feitozabruno.png"
              alt=""
              width={96}
              height={96}
              quality={100}
            />
          </div>

          <div>
            <span className="text-sm md:text-base">Oi👋, eu sou</span>
            <h1 className="text-4xl font-semibold tracking-tighter md:text-5xl">
              Bruno Feitoza
            </h1>
            <h3 className="font-medium italic text-emerald-700 md:text-lg">
              Desenvolvedor Web
            </h3>

            <ul className="mt-2 flex gap-3 md:gap-4">
              <li>
                <IconButton link="/" icon={Icon.Github} />
              </li>

              <li>
                <IconButton link="/" icon={Icon.Linkedin} />
              </li>

              <li>
                <IconButton link="/" icon={Icon.Mail} />
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-8 text-sm">
          <p className="text-justify leading-loose md:text-base">
            👨🏾‍💻Especialista em criar experiências online que combinam
            criatividade, usabilidade e desempenho. Minha paixão pela tecnologia
            e busca constante por aprendizado, me capacitam a fornecer soluções
            digitais de alta qualidade. Estou comprometido em entregar
            excelentes resultados para ajudá-lo(a) a alcançar seus objetivos e
            impulsionar o sucesso do seu negócio online📈.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <InfoBadge Icon={Icon.Rocket} title="13 projetos" />
            <InfoBadge Icon={Icon.GitCommit} title="700 contribuições" />
            <InfoBadge Icon={Icon.PencilLine} title="2000 linhas" />
          </div>
        </div>

        <hr className="my-5 rounded border border-gray-200 md:my-10" />

        <div>
          <header>
            <h2 className="text-xl font-bold md:text-2xl">
              Meus trabalhos recentes
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Recentemente trabalhei nos projetos:{' '}
              <LinkButton url="/" title="Meu site pessoal" />,{' '}
              <LinkButton url="/" title="TabNews" /> e{' '}
              <LinkButton url="/" title="HubCamp" />.
            </p>
          </header>

          <ul className="mt-6 flex flex-col gap-4">
            <ProjectItem
              title="brunodev.com.br"
              description="Meu site pessoal construído com Next.js e Tailwindcss"
              url="/"
            />

            <ProjectItem
              title="tabnews.com.br"
              description="Clone do projeto opensource TabNews feito no curso.dev"
              url="/"
            />

            <ProjectItem
              title="hubcamp.com.br"
              description="Plataforma para um sistema de gerenciamento de aprendizagem"
              url="/"
            />
          </ul>
        </div>

        <footer className="pb-6 pt-12 text-center text-xs text-gray-400 md:text-sm">
          <p>© 2024 brunodev.com.br</p>
        </footer>
      </main>
    </>
  )
}
