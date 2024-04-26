import Image from 'next/image'
import { SocialLinks } from './social-links'

export function Intro() {
  return (
    <section className='flex gap-5 md:flex-row'>
      <div>
        <Image
          src='https://github.com/feitozabruno.png'
          alt=''
          width={96}
          height={96}
          quality={100}
        />
      </div>

      <div>
        <span className='text-sm md:text-base'>Oi👋, eu sou</span>
        <h1 className='text-4xl font-semibold tracking-tighter md:text-5xl'>
          Bruno Feitoza
        </h1>
        <h3 className='font-medium italic text-emerald-700 md:text-lg'>
          Desenvolvedor Web
        </h3>

        <SocialLinks />
      </div>
    </section>
  )
}
