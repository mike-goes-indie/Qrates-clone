import { ReactElement, ReactNode } from 'react'
import HeadingEnclosedInABox from '../HeadingEnclosedInABox'

interface DetailsIntroProps{
  label: string
  heading: string
  children: ReactNode
  image?: string
  styles?: string
}

const DetailsIntro = ({ label, heading, children, image, styles }: DetailsIntroProps): ReactElement => {
  return (
    <div className={`flex justify-center items-center text-center flex-col  lg:pt-0 pb-[15px] ${styles}`}>
      <HeadingEnclosedInABox label={label} styles='bg-white' />
      <h1 className='text-2xl leading-[40px] tracking-[-1px] lg:-tracking-[-0.5px] font-bold mb-3 w-full'>{heading}</h1>
      <p className='text-lg leading-[24px] text-center tracking-[-.3px] mb-[10px] font-[500] '>
        { children }
      </p> 
      {image && <img src={image} alt={heading} />}
    </div>
  )
}

export default DetailsIntro