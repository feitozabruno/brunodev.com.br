import { poppins } from '@/styles/fonts'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { NavMenu } from '@/components/ui/nav-menu'

import Image from 'next/image'
import * as Icon from 'lucide-react'
import { IconButton } from '@/components/ui/icon-button'
import { LinkButton } from '@/components/ui/link-button'
import { InfoBadge } from '@/components/ui/info-badge'

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
                <IconButton Icon={Icon.Github} link="/" />
              </li>
              <li>
                <IconButton Icon={Icon.Linkedin} link="/" />
              </li>
              <li>
                <IconButton Icon={Icon.Mail} link="/" />
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-8 text-sm">
          <p className="text-justify leading-loose md:text-base">
            👨🏾‍💻Especialista em criar experiências online que combinam
            criatividade, usabilidade e desempenho, estou comprometido em
            entregar resultados📊. Minha paixão pela tecnologia❤️ e busca
            constante por aprendizado📕 me permitem oferecer soluções digitais
            de ponta que se destacam para ajudá-lo a alcançar seus objetivos
            digitais e impulsionar o sucesso do seu negócio online📈.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <InfoBadge Icon={Icon.Rocket}>13 projects</InfoBadge>
            <InfoBadge Icon={Icon.GitCommit}>700 commits</InfoBadge>
            <InfoBadge Icon={Icon.PencilLine}>2000 lines</InfoBadge>
          </div>
        </div>

        <hr className="my-10 rounded border border-gray-200" />

        <div>
          <header>
            <h2 className="text-2xl font-bold">My recent work</h2>
            <p className="mt-2">
              I recently worked on <LinkButton url="/">engreux102</LinkButton>,{' '}
              <LinkButton url="/">my personal portfolio</LinkButton> and{' '}
              <LinkButton url="/">playmobilize</LinkButton>.
            </p>
          </header>

          <ul className="mt-6 flex flex-col gap-4">
            <li className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 px-6">
              <h3 className="text-lg font-medium">Project | Engreux102</h3>
              <p>
                A converting website about Link vacation home and booking
                options.
              </p>
              <LinkButton url="/">View project</LinkButton>
            </li>

            <li className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 px-6">
              <h3 className="text-lg font-medium">Project | Engreux102</h3>
              <p>
                A converting website about Link vacation home and booking
                options.
              </p>
              <LinkButton url="/">View project</LinkButton>
            </li>

            <li className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 px-6">
              <h3 className="text-lg font-medium">Project | Engreux102</h3>
              <p>
                A converting website about Link vacation home and booking
                options.
              </p>
              <LinkButton url="/">View project</LinkButton>
            </li>
          </ul>
        </div>

        <footer className="pb-6 pt-12 text-center text-sm text-gray-400">
          <p>© 2024 brunodev.com.br</p>
        </footer>
      </main>
    </>
  )
}
