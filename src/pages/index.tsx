import { Intro } from '@/components/ui/intro'
import { InfoBadges } from '@/components/ui/info-badge'
import { ProjectList } from '@/components/ui/projects'
import { Footer } from '@/components/ui/footer'
import { Divisor } from '@/components/ui/divisor'
import { NavMenu } from '@/components/ui/nav-menu'
import { Container } from '@/components/ui/container'

export default function Home() {
  return (
    <>
      <NavMenu />

      <Container>
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

        <Divisor />

        <ProjectList />

        <Footer />
      </Container>
    </>
  )
}
