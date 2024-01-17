import { useEffect, useState } from 'react'
import QratesLogo from '../assets/For Fans/qrates-logo-6b1bd403.svg'
import menuIcon from '../assets/Home Page/mobile-menu.svg'
import NavBar from './NavBar'
import MobileMenu from './MobileMenu'
import searchIcon from '../assets/Home Page/search-icon.svg'
import cartIcon from '../assets/Home Page/cart-icon.svg'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false)

  useEffect(() => {
    if(isMobileMenuActive){
      document.body.style.overflowY = "hidden"
      document.body.style.overflowX = "hidden"
    }
    else {
      document.body.style.overflowY = "scroll"
      document.body.style.overflowX = "hidden"
    }
  }, [ isMobileMenuActive ])
  return (
    <header className='flex px-5 bg-white z-10 overflow-y-hidden lg:px-8  items-center w-screen h-[65px] lg:h-[100px]'>
      <Link to={"/"}>
        <img src={QratesLogo} alt="Qrates logo" className='w-[30px] lg:w-[40px]' />
      </Link>
      <NavBar visibility='hidden lg:flex'/>
      <div className="flex ml-auto items-center lg:ml-[20px]">
        <img src={searchIcon} alt="search"  className='w-[35px] mr-[20px] lg:w-[22px]'/>
        <img src={cartIcon} alt="cart"  className="w-[30px] lg:w-[22px] mr-[25px]"/>
        <button onClick={ () => setIsMobileMenuActive(!isMobileMenuActive) } className='lg:hidden'>
          <img src={menuIcon} alt="menu" height={40} width={42} className="ml-[20px]"/>
        </button>
      </div>

      <div className=' hidden lg:flex ml-auto gap-[22px] '>
        <Button label='Make your own' styles='order-2 hidden px-8 lg:flex lg:bg-black opacity-[30%] text-white mb-2'/>
        <Button label='Log in' styles='hidden lg:flex  text-black  '/>
      </div>

      { isMobileMenuActive && <MobileMenu/> }
    </header>
  )
}

export default Header