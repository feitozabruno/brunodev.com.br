import { Intro } from '@/components/ui/intro'
import { ProjectList } from '@/components/ui/projects'
import { Footer } from '@/components/ui/footer'
import { Divisor } from '@/components/ui/divisor'
import { NavMenu } from '@/components/ui/nav-menu'
import { Container } from '@/components/ui/container'
import { Resume } from '@/components/ui/resume'

export default function Home() {
  return (
    <>
      <NavMenu />

      <Container>
        <Intro />
        <Resume />

        <Divisor />

        <ProjectList />

        <Footer />
      </Container>
    </>
  )
}
