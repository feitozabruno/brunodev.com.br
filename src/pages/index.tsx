import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { NavMenu } from '@/components/ui/nav-menu'
import { Intro } from '@/components/ui/intro'
import { InfoBadges } from '@/components/ui/info-badge'
import { ProjectList } from '@/components/ui/projects'
import { Footer } from '@/components/ui/footer'

export default function Home() {
  return (
    <>
      <header className='relative mx-auto w-full md:max-w-screen-lg'>
        <DropdownMenu />
        <NavMenu />
      </header>

      <div
        className='mx-auto mt-14 w-full p-4 antialiased md:mt-7
          md:max-w-screen-lg'
      >
        <Intro />

        <div className='mt-8 text-sm'>
          <p className='text-justify leading-loose md:text-base'>
            👨🏾‍💻Especialista em criar experiências online que combinam
            criatividade, usabilidade e desempenho. Minha paixão pela tecnologia
            e busca constante por aprendizado, me capacitam a fornecer soluções
            digitais de alta qualidade. Estou comprometido em entregar
            excelentes resultados para ajudá-lo(a) a alcançar seus objetivos e
            impulsionar o sucesso do seu negócio online📈.
          </p>

          <InfoBadges />
        </div>

        <hr className='my-5 rounded border border-gray-200 md:my-10' />

        <ProjectList />

        <Footer />
      </div>
    </>
  )
}
