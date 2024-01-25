import Button from '../Button'
import { ReactNode } from 'react'


interface SupportDetailsSectionProps {
  image: string
  children: ReactNode
}
const SupportDetailsSection = ({ image, children }: SupportDetailsSectionProps) => {
  return (
    <div className={`lg:w-1/2  min-h-[672px] lg:min-h-[758px] max-w-[770px] lg:p-[60px]  flex flex-col justify-around lg:justify-between items-center pt-[40px] pb-[20px] px-[15px] lg:w-1/2 `}>
      <img src={image} alt="" />
      {children}
      <Button label='learn more' styles='bg-black text-white'/>
    </div>
  )
}

export default SupportDetailsSection