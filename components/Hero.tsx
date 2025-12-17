import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <header className='relative aspect-square w-full md:aspect-auto md:h-[50vw]'>
      <div className='absolute inset-0 md:-top-[20%] md:-left-[26%] md:w-[135%]'>
        <Image
          src='/hero-image.png'
          alt='Modern house in natural landscape'
          fill
          className='object-cover md:object-fill'
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80' />

      <div className='absolute inset-0 z-10 flex flex-col justify-end p-6 md:grid md:grid-cols-3 md:items-center md:pb-0'>
        <div className='w-full md:col-start-3 md:w-auto'>
          <h1 className='mb-4'>
            Unika hus i <br />
            en unik miljö
          </h1>
          <p className='mb-4 hidden max-w-[75%] font-light sm:block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            erat tempor, fringilla nunc vitae, laoreet velit. Suspendisse eu
            tortor eu odio dapibus molestie nec quis ipsum.
          </p>
          <Button>Läs mer</Button>
        </div>
      </div>
    </header>
  )
}

export default Hero
