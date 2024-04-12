import { poppins } from '@/styles/fonts'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { NavMenu } from '@/components/ui/nav-menu'

import Image from 'next/image'
import * as Icon from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
        <DropdownMenu />
        <NavMenu />
      </header>

      <main
        className={`${poppins.className} mx-auto w-full max-w-screen-lg p-4 antialiased`}
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
              <li className="rounded-lg border border-gray-300 p-2">
                <Link href="/">
                  <Icon.Github className="h-4 w-4 transition-all hover:scale-110 hover:transition-all md:h-5 md:w-5" />
                </Link>
              </li>

              <li className="rounded-lg border border-gray-300 p-2">
                <Link href="/">
                  <Icon.Linkedin className="h-4 w-4 transition-all hover:scale-110 hover:transition-all md:h-5 md:w-5" />
                </Link>
              </li>

              <li className="rounded-lg border border-gray-300 p-2">
                <Link href="/">
                  <Icon.Mail className="h-4 w-4 transition-all hover:scale-110 hover:transition-all md:h-5 md:w-5" />
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-8 text-sm">
          <p className="text-justify leading-loose md:text-left md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur inventore, ullam suscipit odit ea, recusandae corrupti
            eligendi, voluptatem culpa quisquam incidunt. Ullam enim sequi
            consequatur voluptate, laboriosam nesciunt ad numquam.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-emerald-700">
              <Icon.Rocket className="h-5 w-5" />
              13 projects
            </div>

            <div className="flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-emerald-700">
              <Icon.GitCommit className="h-5 w-5" />
              700 commits
            </div>

            <div className="flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-emerald-700">
              <Icon.PencilLine className="h-5 w-5" />
              2000 lines
            </div>
          </div>
        </div>

        <hr className="my-10 rounded border border-gray-200" />

        <div>
          <header>
            <h2 className="text-2xl font-bold">My recent work</h2>
            <p className="mt-2">
              I recently worked on{' '}
              <Link href="/" className="font-bold text-emerald-700 underline">
                engreux102
              </Link>
              ,{' '}
              <Link href="/" className="font-bold text-emerald-700 underline">
                my personal portfolio
              </Link>{' '}
              and{' '}
              <Link href="/" className="font-bold text-emerald-700 underline">
                playmobilize
              </Link>
              .
            </p>
          </header>

          <ul className="mt-6 flex flex-col gap-4">
            <li className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 px-6">
              <h3 className="text-lg font-medium">Project | Engreux102</h3>
              <p>
                A converting website about Link vacation home and booking
                options.
              </p>
              <Link href="" className="font-bold text-emerald-700 underline">
                View project
              </Link>
            </li>

            <li className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 px-6">
              <h3 className="text-lg font-medium">Project | Engreux102</h3>
              <p>
                A converting website about Link vacation home and booking
                options.
              </p>
              <Link href="" className="font-bold text-emerald-700 underline">
                View project
              </Link>
            </li>

            <li className="flex flex-col gap-2 rounded-xl border border-gray-300 p-4 px-6">
              <h3 className="text-lg font-medium">Project | Engreux102</h3>
              <p>
                A converting website about Link vacation home and booking
                options.
              </p>
              <Link href="" className="font-bold text-emerald-700 underline">
                View project
              </Link>
            </li>
          </ul>
        </div>

        <footer className="pb-6 pt-12 text-center text-sm text-gray-400">
          <p>© 2024 brunofeitoza.dev</p>
        </footer>
      </main>
    </>
  )
}
