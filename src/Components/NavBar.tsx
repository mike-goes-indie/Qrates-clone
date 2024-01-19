import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { socials } from '../data/socials'
import SocialMediaIcon from './SocialMediaIcon'
import Button from './Button'


interface NavBarProps {
  visibility?: string
}

const NavBar = ({ visibility }: NavBarProps): ReactElement => {

  return (
    <nav className={`${visibility} flex flex-col lg:flex-row  w-full lg:w-auto h-fit lg:h-auto text-[30px] lg:text-md font-[700] lg:font-[600] pb-[35px] px-5 pt-6 lg:px-0 lg:pt-0 lg:pb-0 lg:ml-[3.2%]`}>
      <Dropdown dropdownLabel="discover music" styles='items-center gap-1 lg:gap-0 lg:mr-[15px] ' >
        <div className='pl-5 flex flex-col text-xl font- bold lg:bg-black lg:absolute lg:text-white lg:p-[20px] '>
          <a className='capitalize'>records</a>
          <a className='capitalize'>cassettes</a>
          <a className='capitalize'>stories</a>
          <a className='capitalize'>qurates curated</a>
        </div>
      </Dropdown>
      <Link to={"/for-artists"} className='uppercase mb-[20px] lg:mb-0 lg:mr-[15px]' >for artists</Link>
      <Link to={"/for-fans"} className='uppercase '>for fans</Link>
      <div className='flex mt-[40px] gap-[1.25rem] lg:hidden'>
        {
          socials.map(el => (
            <SocialMediaIcon key={el.name} bgColor='bg-black' name={el.name} url={el.url} icon={el.iconWhite} />
          ))
        }
      </div>
      <div className='mt-[40px] lg:hidden'>
        <Button label='Make a record' styles='lg:hidden bg-black text-white mb-2 '/>
        <Button label='Login' styles='lg:hidden bg-white text-black border-2 border-black '/>
      </div>
    </nav>
  )
}

export default NavBar