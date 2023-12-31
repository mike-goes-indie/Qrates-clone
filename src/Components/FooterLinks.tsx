import { ReactElement } from 'react'
import { Link } from '../data/footerLinks'


interface FooterLinksProps {
  links: Link[]
  heading: string
}

const FooterLinks = ({ links, heading}:  FooterLinksProps): ReactElement => {
  return (
    <div className='text-left text-lg mb-[62px] lg:mb-0'>
      <ul>
        <h4 className=' uppercase font-bold leading-[24px] mb-[14px] tracking-[-0.3px] '>{heading}</h4>
        {
          links.map((el, index) => ( 
            <li key={index}><a href={el.url ?? "/"} className='capitalize leading-[24px] lg:leading-[36px]'>{el.link}</a></li>
          ))
        }
      </ul>
    </div>
  )
}

export default FooterLinks