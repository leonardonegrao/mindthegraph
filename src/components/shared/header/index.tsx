import Image from 'next/image'
import Link from 'next/link'
import Button from '../button'

const headerNav = [
  {
    id: 'templates',
    label: 'Templates',
  },
  {
    id: 'pricing',
    label: 'Pricing',
  },
  {
    id: 'blog',
    label: 'Blog',
  },
  {
    id: 'jobs',
    label: 'Jobs',
  },
]

const headerActions = [
  {
    id: 'login',
    label: 'Login',
    type: 'bordered',
  },
  {
    id: 'signup',
    label: 'Sign up free',
    type: 'primary',
  },
]

export default function Header() {
  return (
    <header className='absolute z-10 flex w-full items-center justify-between bg-transparent px-[43px] py-[37px] backdrop-blur-sm'>
      <Image
        src='/logo_mindthegraph.svg'
        alt='Mind The Graph'
        width={134.68}
        height={44.83}
      />

      <div className='hidden items-center space-x-10 md:flex'>
        <nav>
          <ul className='flex space-x-10'>
            {headerNav.map(navItem => (
              <li key={navItem.id}>
                <Link href={`/${navItem.id}`} className='font-[600] text-white'>
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='hidden lg:block' >
          <ul className='flex space-x-6'>
            {headerActions.map(action => (
              <li key={action.id}>
                <Button href={`/${action.id}`} btnType={action.type as 'bordered' | 'primary'}>
                  {action.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}