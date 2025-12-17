const TextContent = () => {
  return (
    <section className='flex items-center justify-center bg-[#2B2B2B] px-4 py-8 md:px-20 2xl:py-20'>
      <div className='max-w-xl space-y-6 xl:max-w-4xl 2xl:max-w-7xl'>
        <h2 className='mb-2 2xl:text-5xl'>Lorem ipsum dolor</h2>

        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10'>
          <div className='space-y-2'>
            <p className='font-light 2xl:text-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              erat tempor, fringilla nunc vitae, laoreet velit. Suspendisse eu
              odio.
            </p>
            <p className='font-light 2xl:text-xl'>
              dapibus molestie nec quis ipsum. Pellentesque pretium finibus
              vulputate. Praesent et urna ultricies, varius ipsum eget, iaculis
              ante. Pellentesque quis mi tempus elit lobortis cursus. Etiam vel
              sollicitudin elit, nec fringilla nibh. Aenean convallis enim
              justo, nec lobortis velit molestie vitae. Integer ac erat iaculis,
              blandit orci fermentum, ullamcorper augue. Suspendisse vel massa
              sollicitudin, varius lectus eu, rhoncus nisi. Fusce ullamcorper
              diam at lectus cursus efficitur.
            </p>
          </div>
          <p className='font-light'>
            Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam
            rhoncus quam metus, id bibendum justo ultricies et. Integer nec nisl
            turpis. Nunc eget pulvinar urna. Duis mattis porttitor semper. Nam
            sollicitudin odio et urna consectetur, dignissim tempor eros
            dapibus. Duis a tortor et mauris egestas interdum. Vivamus sed
            tortor ultricies, efficitur diam et, pulvinar ligula. Ut ac rhoncus
            erat, eget rhoncus neque. Fusce eu fermentum est. Nam fermentum
            tincidunt est, eget tempus ex convallis nec. Ut felis nulla,
            consequat ac lorem quis, dapibus cursus magna.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TextContent
