import { ReactElement, ReactNode, useLayoutEffect, useRef, useState } from 'react'
import dropdownIcon from '../assets/Home Page/dropdown-arrow.svg'
import dropdownIconWhite from '../assets/Home Page/dropdown-arrow-white.svg'
import { gsap } from 'gsap'

interface DropdownProps {
  dropdownLabel: string
  styles: string
  children: ReactNode
  dropDownIconColor?: string
}

const Dropdown = ({ dropdownLabel, styles, children, dropDownIconColor }: DropdownProps): ReactElement => {
  const [isDropDownMenuActive, setIsDropDownMenuActive] = useState<boolean>(false)
  const dropdownIconRef = useRef(null)

  useLayoutEffect(() => {
  const rotateDropdownIcon = gsap.timeline()
  isDropDownMenuActive
  ? rotateDropdownIcon.to(dropdownIconRef.current, {
    rotate: -180,
    duration: .2
  })
  : rotateDropdownIcon.to(dropdownIconRef.current, {
    rotate: 0,
    duration: .2
  })
    
  }, [isDropDownMenuActive])

  return (
    <div className='mb-[20px] relative lg:mb-0'>
      <button className={`${styles} flex uppercase`} onClick={() => setIsDropDownMenuActive(!isDropDownMenuActive)}>
      {dropdownLabel}
      <img src={dropDownIconColor == "white"? dropdownIconWhite: dropdownIcon} alt="icon" ref={dropdownIconRef} />
      </button>
      {isDropDownMenuActive && children}
    </div>
  )
}

export default Dropdown