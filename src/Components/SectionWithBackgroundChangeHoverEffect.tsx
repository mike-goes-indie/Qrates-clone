import { ReactElement } from 'react'
import HeadingEnclosedInABox from './HeadingEnclosedInABox'
import LinkWithUnderlineHoverEffect from './LinkWithUnderlineHoverEffect'


interface SectionProps {
  heading: string
  navLinks: {label: string, styles: string}[]
  latest: string
  defaultImage: string
}


const SectionWithBackgroundChangeHoverEffect = ({ heading, navLinks, latest, defaultImage}: SectionProps): ReactElement => {
  
  return (
    <section className={`relative default-image ${defaultImage} after:-z-[10] flex flex-col justify-end  lg:h-[700px]  w-full min-h-fit  bg-no-repeat px-[15px] lg:px-[30px] pt-[30px] lg:pt-[50px] pb-[25px] lg:pb-[50px] h-[520px] `} > 
      <HeadingEnclosedInABox label={heading} styles='mb-[22px] border-white text-white' />
      <nav className="my-auto flex-grow flex items-center lg:items-start">
        <ul className={`w-fit h-fit mt-5 `} >
          {
            navLinks.map((el, index) => {
              return <LinkWithUnderlineHoverEffect key={index} link={el.label} styles={el.styles} />}             
            )
          }
        </ul>
      </nav>
      <p className='text-white text-lg'>The latest from the {latest} →</p>
    </section>
  )
}

export default SectionWithBackgroundChangeHoverEffect