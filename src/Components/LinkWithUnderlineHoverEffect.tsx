import { ReactElement } from 'react'


interface linkWithUnderlineHoverProps {
  link: string
  styles: string
}

const LinkWithUnderlineHoverEffect = ({ link, styles }: linkWithUnderlineHoverProps): ReactElement => {
  return (
    <li  className={`${styles}  background-on-hover cursor-pointer w-fit`} > 
       <a className='text-2xl  relative lg:text-3xl capitalize leading-[44px] lg:leading-[68px] tracking-[0.2px] text-white link font-bold  '>{link}</a>         
    </li>
  )
}

export default LinkWithUnderlineHoverEffect
