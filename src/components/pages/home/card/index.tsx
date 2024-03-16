import Button from '@/components/shared/button'
import Image from 'next/image'

const benefits = [
  {
    id: 'drag-and-drop',
    icon: {
      src: 'ico_drag.png',
      width: 77,
      height: 84,
    },
    title: 'Drag and Drop',
    description: 'Easily select and manage illustrations, text and templates',
  },
  {
    id: 'pre-made-resources',
    icon: {
      src: 'ico_premade.png',
      width: 86,
      height: 84,
    },
    title: 'Pre-Made Resources',
    description: 'Don’t waste time! Use our templates and just customize colours, text etc',
  },
  {
    id: 'online-platform',
    icon: {
      src: 'ico_platform.png',
      width: 88,
      height: 84,
    },
    title: 'Online Platform',
    description: 'Access your creations at any time and from anywhere',
  },
  {
    id: 'on-demand-illustrations',
    icon: {
      src: 'ico_odemand.png',
      width: 72,
      height: 88,
    },
    title: 'On-demand Illustrations',
    description: 'Don’t find exactly what you need? We will design it for you!',
  },
  {
    id: 'multiple-sizing-options',
    icon: {
      src: 'ico_multiple.png',
      width: 82,
      height: 84,
    },
    title: 'Multiple Sizing Options',
    description: 'Ready-to-go templates in all popular sizes',
  },
  {
    id: 'share-creations',
    icon: {
      src: 'ico_share.png',
      width: 84,
      height: 84,
    },
    title: 'Share creations',
    description: 'Share your creations with your team or other users',
  },
]

export default function Card() {
  return (
    <section id='benefits' className='flex max-w-[90%] flex-col items-center rounded-3xl bg-primary p-6 md:p-20 xl:max-w-[1054px]'>
      <h2 className='mb-8 text-center text-2xl font-[700] text-white md:mb-14 md:text-[34px]'>
        Create effective science figures in minutes
      </h2>

      <p className='mb-24 text-center text-lg leading-[34px] text-white md:text-xl'>
        We built Mind the Graph for simplicity. The platform is easy to use and just about anybody can use it to create great infographics and presentations - from beginners to professionals, individuals to groups and small labs to large organisations
      </p>

      <ul className='mb-20 grid gap-20 md:grid-cols-2 lg:grid-cols-3'>
        {benefits.map(benefit => (
          <li key={benefit.id} className='flex max-w-[234px] flex-col items-center gap-3'>
            <Image
              src={`/card/${benefit.icon.src}`}
              alt=''
              width={benefit.icon.width}
              height={benefit.icon.height}
            />
            <h3 className='text-center text-2xl font-[700] text-white'>
              {benefit.title}
            </h3>
            <p className='text-center text-white'>
              {benefit.description}
            </p>
          </li>
        ))}
      </ul>

      <Button btnType='bordered'>
        <span className='uppercase'>
          Explore Mind the Graph
        </span>
      </Button>
    </section>
  )
}