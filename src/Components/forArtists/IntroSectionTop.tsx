import HeadingEnclosedInABox from '../HeadingEnclosedInABox'
import topSectionImage1Mobile from '../../assets/For Artists/00bc2c69-9625-4bd3-a662-b9451150fe05_top_section_image_1.png'
import topSectionImage1Desktop from '../../assets/For Artists/00bc2c69-9625-4bd3-a662-b9451150fe05_top_section_image_12.png'
import topSectionImage2Mobile from '../../assets/For Artists/8b532562-a28c-4e07-b2ab-1ddf0e2eaa91_top_section_image_2.png'
import topSectionImage2Desktop from '../../assets/For Artists/8b532562-a28c-4e07-b2ab-1ddf0e2eaa91_top_section_image_22.png'
import coinSlotIcon from '../../assets/For Artists/paid-42cd4b49.svg'
import { useEffect, useState } from 'react'

const IntroSectionTop = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setWindowSize(window.innerWidth)
      })
    }
  }, [])
  
  return (
    <section className='text-white overflow-hidden lg:overflow-auto bg-black py-[34px] lg:pb-[10%] lg:pt-[80px]'>
      <div className='flex flex-col lg:flex-row w-full '>
        <div className='p-[3%] lg:pr-[4%] lg:pl-[30px] lg:pt-0 lg:w-[50%]'>
          <HeadingEnclosedInABox label='for artists' styles='mb-[34px]'/>
          <h1 className='text-3xl leading-[44px] lg:leading-[68px] font-bold tracking-[-1.38px] mb-[24px] lg:mb-[48px]' >Music in your hands. Without the barriers.</h1>
          <p className='text-xl leading-[22px] lg:leading-[34px]'>Full Service Production, a global retail network, customer support - and you keep up to  85% of profits. <span className='block'>↓</span></p>
        </div>
        <div className='w-[70%] lg:w-[50%] z-10 relative flex-shrink-0 max-h-[740px] ml-[40%] lg:ml-[-4%] p-[5%] lg:px-[3%] pt-[7%] lg:mr-[100px]'>
          <div className='rotate-[10deg] max-w-[75%]  lg:max-w-[600px]'>
            <img src={windowSize >  720? topSectionImage1Desktop: topSectionImage1Mobile} alt="artist holding vinyl" className='border-2 border-black block' />
          </div>
        </div>
      </div>
      <div className='relative -mt-[40%] lg:-mt-[20%]  h-fit w-full'>
        <div className='w-[70%] lg:w-[50%] max-w-[600px] ml-[4%] lg:ml-[8%] pt-[7%] lg:mt-2 flex-shrink-0  max-h-[740px] p-[5%] lg:px-[3%]  '>
          <div className='rotate-[-15deg] max-w-[75%] lg:max-w-[600px]'>
            <img src={windowSize >  720? topSectionImage2Desktop: topSectionImage2Mobile} alt="cassettes and radio" className='block' />
          </div>
        </div>
        <div className='flex-shrink-0 z-20 absolute top-[45%] w-[25%] lg:w-[28%] right-[20%] lg:top-[25%] lg:right-[15%] '>
          <img src={coinSlotIcon} alt="" className='block'/>
        </div>
      </div>
    </section>
  )
}

export default IntroSectionTop