import { useLayoutEffect, useRef, useState } from 'react'
import Button from './Button'
import HeadingEnclosedInABox from './HeadingEnclosedInABox'
import dollarSign from '../assets/vinyl-loop-animation-images/dollar_white-94a2da47.png'
import sparkles from '../assets/Home Page/sparkle_white-15aaeb14.png'
import vinylImage1 from '../assets/vinyl-loop-animation-images/sample_all_india-36327a32.png'
import vinylImage2 from '../assets/vinyl-loop-animation-images/sample_4dilla-d886be83.png'
import vinylImage3 from '../assets/vinyl-loop-animation-images/sample_bombay-668a0fa8.png'
import vinylImage4 from '../assets/vinyl-loop-animation-images/sample_blarney-469831b2.png'
import vinylImage5 from '../assets/vinyl-loop-animation-images/sample_female-a4d2352d.png'
import vinylImage6 from '../assets/vinyl-loop-animation-images/sample_black_country_disco-233bbc85.png'

const TryItNowSection = () => {
  const vinylSampleImages = [
    {img: vinylImage1, translateValue: "-translate-x-0"},
    {img: vinylImage2, translateValue: "-translate-x-[100%]"},
    {img: vinylImage3, translateValue: "-translate-x-[200%]"},
    {img: vinylImage4, translateValue: "-translate-x-[300%]"},
    {img: vinylImage5, translateValue: "-translate-x-[400%]"},
    {img: vinylImage6, translateValue: "-translate-x-[500%]"},
  ]
  const vinylShowcaseLoop = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDollarSignVisible, setIsDollarSignVisible] = useState(true)
  const [isSparkleVisible, setIsSparkleVisible] = useState(false)

  useLayoutEffect(() => {
    
  setTimeout(() => {
    if( currentIndex < (vinylSampleImages.length - 1)){
      setCurrentIndex(currentIndex + 1)
    }else if (currentIndex >= (vinylSampleImages.length - 1)){
      setCurrentIndex(prev => prev - prev)
      setIsDollarSignVisible(!isDollarSignVisible)
      setIsSparkleVisible(!isSparkleVisible)
    }
  }, 1000)
    
  }, [currentIndex])
  
  return (
    <section className='bg-black relative px-[15px] pt-[40px] pb-[50px] w-full h-fit flex flex-col items-center '>
      <HeadingEnclosedInABox label='try it now' styles='border-white text-white bg-transparent' />
      <div className='text-white text-center w-full'>
        <h3 className='text-2xl tracking-[-1px] leading-[40px] mb-[20px] font-bold '>Make it real with Qrates Studio</h3>
        <p className='tracking-[-0.3px] text-lg text-center leading-[24px] mb-[71px] lg:mb-[80px] lg:max-w-[720px] lg:w-[55%] mx-auto '>Design the look and feel of your vinyl and cassette and use the profit calculator to immediately see how your project will cost, and how much you'll earn.</p>
      </div>
      <div className='w-full relative mb-[80px] h-fit'>
        <div ref={vinylShowcaseLoop} className="max-w-[340px] flex w-full  relative  h-auto  mx-auto"> 
          {
            vinylSampleImages.map((image, index)=> { 
              return (
                <div className={`relative w-[100%] sm:w-[350px] ${image.translateValue} ${currentIndex === index? "opacity-1": "opacity-0"} h-auto flex-shrink-0`} key={index}>
                  <img src={image.img} alt="vinyl"  className='w-full relative block h-auto '/>
                </div>
              )
            })
            
          }
        </div>
        {  <img src={dollarSign} alt="dollar sign" className={`w-[15%] lg:w-[10%] top-[-25%] lg:top-[-30%] left-[-2%] lg:left-[80%] absolute z-[1000] ${isDollarSignVisible? "visible": "invisible"}`}/> }
        { <img src={sparkles} alt="sparkles" className={` w-[15%] lg:w-[12%] right-[0] lg:right-[80%] bottom-[-20%] absolute z-[1000] ${isSparkleVisible? "visible": "invisible"}`}/>}
      </div>
      <Button label='try it now' styles='bg-yellow'/>
    </section>
  )
}

export default TryItNowSection