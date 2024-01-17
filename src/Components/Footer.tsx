import { footerLinks } from '../data/footerLinks'
import FooterLinks from './FooterLinks'
import FooterSocialLinks from './FooterSocialLinks'
import qratesLogoFooter from '../assets/Home Page/qrates-logo-footer-498fa5b7.svg'
import Dropdown from './Dropdown'

const Footer = () => {

  return (
    <footer className='bg-black w-full px-[4%] pt-[26px] lg:pt-[78px] lg:pr-[60px] lg:pb-[84px] lg:pl-[64px] pb-[32px] text-white'>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        {
          footerLinks.map((el, index) => (
            <FooterLinks key={index} heading={el.heading} links={el.links} />
          ))
        }
      </div>
      <FooterSocialLinks hidden="lg:hidden" styles='pb-[131px]' />
      <div className='w-full lg:mt-[292px] lg:flex items-end'>
        <div className='w-[95%] mb-[66px] lg:mb-0'>
          <div className=''>
            <a href="/">
              <img src={qratesLogoFooter} alt="qrates logo" />
            </a>
          </div>
        </div>
        <div className='lg:flex flex-col items-end'>
          <Dropdown styles='w-full lg:w-[155px] relative justify-between h-[50px] text-center border-2  border-white items-center capitalize min-w-[100px] px-[20px]   whitespace-nowrap text-ellipsis ' dropdownLabel='English' dropDownIconColor='white' >
            <div className='absolute w-full lg:w-[155px] z-[10] border-2 border-b-[1px]  border-white h-[50px] flex items-center px-[20px] -top-[50px]'>
              <span>日本語</span>
            </div>
          </Dropdown>
          <FooterSocialLinks hidden='hidden lg:flex' styles='mb-[20px]'/>
          <div className='lg:flex items-center gap-[20px]'>
            <ul className='flex flex-grow text-sm w-full justify-between lg:gap-7'>
              <li><a className='whitespace-nowrap capitalize font-bold'>privacy policy</a></li>
              <li><a className='whitespace-nowrap capitalize font-bold'>Terms of Service</a></li>
              <li><a className='whitespace-nowrap capitalize font-bold'>legal information</a></li>
            </ul>
            <small className='mt-[8px] lg:mt-0 flex justify-center lg:flex-row lg'>&copy; <span className='uppercase'>tdms</span>Inc.</small>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer