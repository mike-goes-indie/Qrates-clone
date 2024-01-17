import NavBar from './NavBar'

const MobileMenu = () => {


  return (
    <div className="fixed w-screen h-screen z-[100] overflow-hidden lg:hidden top-[65px] bg-white left-0">
      <NavBar/> 
    </div>
  )
}

export default MobileMenu