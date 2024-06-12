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
          <p className='text-left leading-loose md:text-base'>
            👨🏾‍💻Especialista em projetar, desenvolver e manter aplicações web.
            Escrevo código limpo, padronizado, testado e bem documentado.
            Utilizo boas práticas de desempenho e segurança, além de garantir a
            otimização (SEO) para motores de busca e a compatibilidade com
            diferentes navegadores.
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
