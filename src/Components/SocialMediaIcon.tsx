import { ReactElement } from 'react'

interface SocialMediaIconProps {
  icon: string
  name?: string 
  url: string 
  bgColor: string
}

const SocialMediaIcon = ({ icon, name, url, bgColor }: SocialMediaIconProps): ReactElement => {
  return (
      <a href={url}  className={`p-[1px]  ${bgColor} items-center justify-center flex rounded-full`}>
        <img src={icon} alt={name} width={36} />
      </a>
  )
}

export default SocialMediaIcon
