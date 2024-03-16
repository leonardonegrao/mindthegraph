import Card from '@/components/pages/home/card'
import Hero from '@/components/pages/home/hero'
import UseCases from '@/components/pages/home/use-cases'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-grey pb-[120px]'>
     <Hero />
     <UseCases />
     <Card />
    </main>
  )
}
