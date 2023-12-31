import { ReactElement, ReactNode } from 'react'
import Button from './Button'

interface TopArtistSectionArticleProps {
  children?: ReactNode
}

const TopArtistSectionArticle = ({ children }: TopArtistSectionArticleProps): ReactElement => {
  return (
    <article className='lg:mr-[40px]'>
      <h1 className='text-4xl flex flex-col text-center lg:text-left font-[700] tracking-[-0.45px] leading-[48px] lg:leading-[70px] lg:pb-[40px] uppercase'>
        Qrates
        <span className='stroke text-transparent md:whitespace-nowrap'>Music in</span>
        <span className='stroke text-transparent md:whitespace-nowrap'>your Hands</span>
      </h1>
      {children}
      <p className='mt-[60px] mb-[20px] lg:m-0 font-[500] text-xl'>
      We make it easy for artists to make vinyl and cassettes, so fans can keep pieces of the music they love 
      <span className='block lg:inline'> ↓</span>
      </p>
      <div className='w-full gap-5 lg:pt-[45px] lg:pb-[35px] lg:flex items-center'>
        <Button label='for fans' styles='border-2  lg:px-[30px] lg:min-w-[180px] lg:max-w-[250px] text-black' />
        <Button label='for artists' styles='font-bold lg:px-[25px] lg:min-w-[180px] lg:max-w-[250px]  text-white bg-black my-[10px]'  />
      </div>
    </article>
  )
}

export default TopArtistSectionArticle