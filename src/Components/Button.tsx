import { ReactElement } from 'react'

interface ButtonProps {
  label: string
  styles: string
}

const Button = ({ label, styles}: ButtonProps): ReactElement => {

  return (
    <button className={`${styles} w-full  text-center items-center h-[50px] text-[12px] lg:text-[1rem] uppercase rounded-full whitespace-nowrap  lg:min-w-[180px] lg:max-w-[250px] `}>
      {label}
    </button>
  )
}

export default Button