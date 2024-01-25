import { ReactElement, ReactNode } from 'react'

interface FormatInfoProps {
  heading: string
  children: ReactNode
  image: string
  border: string
}

const FormatInfo = ({ heading, children, image, border }: FormatInfoProps): ReactElement => {
  return (
    <article className={`${ border } text-center w-1/2 border-t-2 border-t-black px-[15px] lg:px-[6%] pt-[30px] lg:pt-[50px] lg:pb-[70px] pb-[60px] `}>
      <h3 className='text-2xl capitalize w-full leading-[40px] tracking-[-1px] font-bold text-center mb-[30px]'>{heading}</h3>
      <p className='mb-[38px] text-lg leading-[24px] lg:leading-[28px] lg:tracking-[-.27px] max-w-[520px] mx-auto  '>
        { children }
      </p>
      <div className='p-6 lg:p-10 flex justify-center items-center'>
        <img src={image} alt={heading} className='w-full max-w-[550px] aspect-[16/9]'/>
      </div>
    </article>
  )
}

export default FormatInfo