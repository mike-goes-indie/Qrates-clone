import facebookLogo from '../assets/Home Page/facebook-logo.svg'
import facebookLogoBlack from '../assets/Home Page/facebook-logo-black.svg'
import twitterLogo from '../assets/Home Page/twitter-logo.svg'
import twitterLogoBlack from '../assets/Home Page/twitter-logo-black.svg'
import instagramLogo from '../assets/Home Page/instagram-logo.svg'
import instagramLogoBlack from '../assets/Home Page/instagram-logo-black.svg'

interface SocialMediaInfo {
  name: string
  iconBlack: string
  iconWhite: string
  url: string
}

export const socials: SocialMediaInfo[] = [
  {
    name: "facebook",
    iconBlack: facebookLogoBlack,
    iconWhite: facebookLogo,
    url: "https://www.facebook.com/qratesinfo"
  },
  {
    name: "instagram",
    iconBlack: instagramLogoBlack,
    iconWhite: instagramLogo,
    url: "https://www.instagram.com/qrates/",
  },
  {
    name: "twitter",
    iconBlack: twitterLogoBlack,
    iconWhite: twitterLogo,
    url: "https://twitter.com/qrates_com",
  },
]