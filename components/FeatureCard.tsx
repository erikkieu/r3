import Image from 'next/image'
import Button from './Button'

interface FeatureCardProps {
  title: string
  imageSrc: string
  buttonText: string
}

const FeatureCard = ({ title, imageSrc, buttonText }: FeatureCardProps) => {
  return (
    <div className='relative aspect-video w-full md:w-1/2'>
      <Image
        src={imageSrc}
        alt={title}
        fill
        className='object-cover'
        sizes='(max-width: 768px) 100vw, 50vw'
      />

      <div className='absolute inset-0 z-10 flex flex-col justify-between p-8'>
        <h2 className=''>{title}</h2>

        <div className='absolute right-8 bottom-8'>
          <Button variant='secondary'>{buttonText}</Button>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
