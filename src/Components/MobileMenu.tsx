import NavBar from './NavBar'

const MobileMenu = () => {


  return (
    <div className="absolute w-screen h-[calc(100vh-65px)] z-[100] overflow-hidden lg:hidden top-[65px] bg-white left-0">
      <NavBar/> 
    </div>
  )
}

export default MobileMenu