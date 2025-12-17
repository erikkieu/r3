import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 flex w-full items-center justify-between bg-[#101010] p-6 md:absolute md:bg-transparent'>
      <Image
        src='/house-logo.png'
        alt='House Logo'
        width={80}
        height={30}
        className='object-contain'
      />
      <button className='flex flex-col gap-1 p-2 hover:cursor-pointer focus:ring-2 focus:ring-white/80 focus:outline-none'>
        <div className='h-[2px] w-4 rounded-sm bg-white' />
        <div className='h-[2px] w-4 rounded-sm bg-white' />
        <div className='h-[2px] w-4 rounded-sm bg-white' />
      </button>
    </nav>
  )
}

export default Navbar
