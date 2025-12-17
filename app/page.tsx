import React from 'react'
import Hero from '@/components/Hero'
import TextContent from '@/components/TextContent'
import Footer from '@/components/Footer'
import FeatureCard from '@/components/FeatureCard'

const HouseLanding = () => {
  return (
    <div className='min-h-screen overflow-x-hidden bg-[#1c1c1c] font-sans text-white selection:bg-orange-500 selection:text-white'>
      <Hero />
      <TextContent />

      <section className='flex w-full flex-col md:flex-row'>
        <FeatureCard
          title='Våra hus'
          buttonText='VÅRA HUS'
          imageSrc='/house-chimney.png'
        />
        <FeatureCard
          title='Tillval'
          buttonText='LÄS MER'
          imageSrc='/house-solar-panel.png'
        />
      </section>

      <Footer />
    </div>
  )
}

export default HouseLanding
