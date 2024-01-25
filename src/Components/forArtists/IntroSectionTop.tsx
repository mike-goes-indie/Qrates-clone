import HeadingEnclosedInABox from '../HeadingEnclosedInABox'
import topSectionImage1 from '../../assets/For Artists/00bc2c69-9625-4bd3-a662-b9451150fe05_top_section_image_1.png'
import topSectionImage2 from '../../assets/For Artists/8b532562-a28c-4e07-b2ab-1ddf0e2eaa91_top_section_image_2.png'
import coinSlotIcon from '../../assets/For Artists/paid-42cd4b49.svg'

const IntroSectionTop = () => {
 
  return (
    <section className='text-white overflow-hidden bg-black pb-[15%]  lg:pb-[10%] lg:mx-auto'>
      <div className='flex flex-col justify-between items-center lg:flex-row w-full lg:max-w-[1440px] lg:mx-auto items-center py-[34px] lg:px-[10px] lg:py-[80px]'>
        <div className='p-[3%] lg:pr-[4%] lg:pl-[30px] relative self-start lg:pb-[20%] lg:pt-0 lg:w-[50%]'>
          <HeadingEnclosedInABox label='for artists' styles='mb-[34px]'/>
          <h1 className='text-3xl leading-[44px] lg:leading-[66px] font-bold tracking-[-1.38px] lg:tracking-[2px] pb-[24px] lg:pb-[48px]' >
            Music in your hands. Without the barriers.
          </h1>
          <p className='text-xl leading-[22px] lg:leading-[34px]'>
            Full Service Production, a global retail network, customer support - and you keep up to  85% of profits. 
            <span className='block lg:inline-block lg:pl-2'>↓</span>
          </p>
        </div>
        <div className='mr-[-23%] w-[70%]  lg:w-[50%] z-[2] max-h-[740px] object-cover  px-[4%] lg:px-[3%]  lg:mr-[113px]'>
          <div className='rotate-[10deg] max-w-[75%] lg:max-w-[600px] pt-[7%] ml-auto '>
            <img src={ topSectionImage1 } alt="artist holding vinyl" className='border-2 border-black block' />
          </div>
        </div>
      </div>
      <div className=' -mt-[40%] lg:-mt-[18%] p-0 lg:pl-[13%] lg:max-w-[1440px] mx-auto flex justify-start lg:justify-between items-center min-h-full'>
        <div className='w-[70%] lg:w-[50%] object-cover pl-[10%] pr-[12%] lg:pl-0 lg:pr-0 z-[1] relative lg:mt-2 flex-shrink-0  max-h-[740px]  '>
          <div className='rotate-[-15deg]  max-w-[600px] '>
            <img src={ topSectionImage2 } alt="cassettes and radio" className='w-full align-top'  />
          </div>
        </div>
        <div className='flex-shrink-0 z-20 absolute pt-[19%] top-[unset] lg:top-[4.3%] w-[66%] lg:w-[41%] left-[30.5%] lg:left-[58.5%] '>
          <img src={coinSlotIcon} alt="over 2 million paid to artists" className='w-[42%] lg:w-[70%] relative lg:absolute top-[unset] lg:mt-[50px] lg:top-[350px]  left-[39%] lg:left-[unset] pt-[6%] align-top pr-[6%] max-w-[410px] z-[2] align-top'/>
        </div>
      </div>
    </section>
  )
}

export default IntroSectionTop