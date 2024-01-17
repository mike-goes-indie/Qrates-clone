import { ReactElement } from 'react'

interface ForArtistsDetailsArrowProps {
  number?: number
  styles?: string
}

const ForArtistsDetailsArrow = ({ number, styles }: ForArtistsDetailsArrowProps): ReactElement=> {
  return (
    <div className={`${styles} h-full w-full relative col-start-1 col-end-2 flex items-center flex-col`}>
      <div className='text-2xl lg:text-3xl font-bold bg-white text-center items-center justify-center flex rounded-full border-[3px] lg:border-[4px] border-black  w-[1.35em] h-[1.35em] '>
        <span>{ number }</span>
      </div>
      { number !==7 && <i className='h-full w-0 border-l-[3px] lg:border-l-[4px]  border-black'/>}
      { number !==7 && <i className='border-t-[3px] lg:border-t-[4px] mt-[-10px] border-r-[3px] lg:border-r-[4px] border-black rotate-[135deg] w-[12px] h-[13.5px] '  /> }
    </div>
  )
}

export default ForArtistsDetailsArrow