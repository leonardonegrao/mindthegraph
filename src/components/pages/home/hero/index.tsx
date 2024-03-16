import Button from '@/components/shared/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id='hero' className='flex w-full flex-col justify-center gap-10 bg-hero-pattern px-6 pb-20 pt-[140px] md:flex-row md:items-center md:gap-[148px] lg:px-0 lg:pb-0'>
      <div className='w-4/5 space-y-[34px] md:max-w-[312px]'>
        <h1 className='text-2xl font-black text-white lg:text-[34px] lg:leading-[41px]'>
          Discover all possibilities of using this powerfull tool and create science figures, posters and infographics.
        </h1>

        <Button btnType='primary'>
          Start creating now
        </Button>
      </div>

      <div className='mx-auto w-[280px] md:mx-0 md:h-[284px] md:w-[433px] lg:relative lg:h-[427px] lg:w-[650px]'>
        <div className='top-5 lg:absolute'>
          <Image
            src='/hero-app-preview.png'
            alt='Example of application running'
            width={650}
            height={427}
          />
        </div>
      </div>
    </section>
  )
}