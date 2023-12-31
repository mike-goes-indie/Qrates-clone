import { ReactElement } from 'react'
import { socials } from '../data/socials'
import SocialMediaIcon from './SocialMediaIcon'

interface FooterSocialLinksProps {
  hidden: string
  styles?: string
}

const FooterSocialLinks = ({ hidden, styles }: FooterSocialLinksProps): ReactElement => {
  return (
    <div className={`flex gap-2 w-full lg:w-auto ${hidden} justify-center pt-[18px] ${styles} `}>
      {
        socials.map((el, index) => (
          <SocialMediaIcon icon={el.iconBlack} url={el.url} bgColor='bg-white' key={index}/>
        ))
      }
    </div>
  )
}

export default FooterSocialLinks