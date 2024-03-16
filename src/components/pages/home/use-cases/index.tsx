import ChevronRight from '@/components/shared/icons/chevron-right'
import Image from 'next/image'
import Link from 'next/link'

const useCases = [
  {
    id: 'graphical-abstracts-and-infographics',
    illustration: {
      src: 'graphical-abstracts-and-infographics.png',
      width: 209,
      height: 202,
    },
    title: 'Graphical abstracts and infographics',
    description: 'Improve your papers’ impact and visibility through quality visual communication',
  },
  {
    id: 'scientific-poster-in-a-few-clicks',
    illustration: {
      src: 'scientific-poster-in-a-few-clicks.png',
      width: 214,
      height: 202,
    },
    title: 'Scientific poster in a few clicks',
    description: 'Add visual impact to your posters with scientific illustrations and graphics',
  },
  {
    id: 'make-better-slide-presentation',
    illustration: {
      src: 'make-better-slide-presentation.png',
      width: 223,
      height: 202,
    },
    title: 'Make better slide presentation',
    description: 'Transform your lectures, meetings and classes into high-impact visual experiences',
  },
]

export default function UseCases() {
  return (
    <section id='use-cases' className='w-full max-w-[90%] pb-[73px] pt-[98px] xl:max-w-[1054px]'>
      <h2 className='mb-20 text-center text-2xl font-[700] text-primary md:text-[34px]'>
        Visualize what Mind the Graph can do for you
      </h2>

      <ul className='grid w-full grid-cols-1 items-stretch justify-between justify-items-center gap-7 lg:grid-cols-3 lg:gap-0'>
        {useCases.map(useCase => (
          <li key={useCase.id} className='flex flex-col items-center justify-between lg:max-w-[220px]'>
            <div className='flex items-center lg:block'>
              <Image
                src={`/use-cases/${useCase.illustration.src}`}
                alt=''
                width={useCase.illustration.width}
                height={useCase.illustration.height}
                className='mb-3 mr-5 lg:mr-0'
              />

              <div>
                <h3 className='mb-3 font-[700] text-primary lg:text-center'>
                  {useCase.title}
                </h3>

                <p className='mb-3 text-dark lg:mb-16 lg:text-center'>
                  {useCase.description}
                </p>

                <Link href='#' className='flex font-[900] uppercase text-primary lg:hidden'>
                  <ChevronRight size={24} />
                  Learn more
                </Link>
              </div>
            </div>

            <Link href='#' className='hidden font-[900] uppercase text-primary lg:flex'>
              <ChevronRight size={24} />
              Learn more
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}