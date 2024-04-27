import { Mobile } from './mobile'
import { Desktop } from './desktop'

export function NavMenu() {
  return (
    <header className='relative mx-auto w-full md:max-w-screen-lg'>
      <Mobile />
      <Desktop />
    </header>
  )
}
