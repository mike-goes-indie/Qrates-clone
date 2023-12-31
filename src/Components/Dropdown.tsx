import { ReactElement, ReactNode, useState } from 'react'
import dropdownIcon from '../assets/Home Page/dropdown-arrow.svg'
import dropdownIconWhite from '../assets/Home Page/dropdown-arrow-white.svg'

interface DropdownProps {
  dropdownLabel: string
  styles: string
  children: ReactNode
  dropDownIconColor?: string
}

const Dropdown = ({ dropdownLabel, styles, children, dropDownIconColor }: DropdownProps): ReactElement => {
  const [isDropDownMenuActive, setIsDropDownMenuActive] = useState<boolean>(false)

  return (
    <div className='mb-[20px] relative lg:mb-0'>
      <button className={`${styles} flex uppercase`} onClick={() => setIsDropDownMenuActive(!isDropDownMenuActive)}>
      {dropdownLabel}
      <img src={dropDownIconColor == "white"? dropdownIconWhite: dropdownIcon} alt="icon"  />
      </button>
    {isDropDownMenuActive && children}
    </div>
  )
}

export default Dropdown