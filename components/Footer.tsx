import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-4 bg-[#0f0f0f]'>
      <div className='grid grid-cols-2 p-4 md:p-20'>
        <div className='space-y-2'>
          <a
            href='#'
            className='block text-white transition-colors hover:text-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          >
            Våra hus
          </a>
          <a
            href='#'
            className='block text-white transition-colors hover:text-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          >
            Tillval
          </a>
          <a
            href='#'
            className='block text-white transition-colors hover:text-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          >
            Hållbarhet
          </a>
        </div>

        <div className='max-w-sm justify-self-end text-right text-zinc-500'>
          <p>
            Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam
            rhoncus quam metus, id bibendum justo ultricies et. Integer nec nisl
            turpis. Nunc eget pulvinar urna.
          </p>
        </div>
      </div>

      <div className='w-full px-2 md:px-4'>
        <Image
          src='/footer-logo.png'
          alt='House Logo'
          width={1920}
          height={400}
          className='h-auto w-full'
        />
      </div>
    </footer>
  )
}

export default Footer
