import HeadingEnclosedInABox from '../HeadingEnclosedInABox'
import { ArtistTestimonialType } from '../../data/ForArtists/artistsOnQrates'
import { useLayoutEffect, useRef } from 'react'
import { gsap  } from 'gsap/gsap-core'

interface ArtistsOnQratesProps { 
  artist: ArtistTestimonialType
  numberOfArtists: number
  index: number
  currentArtistOnDisplay: number
  setCurrentArtistOnDisplay: React.Dispatch<React.SetStateAction<number>>
}

const ArtistOnQrates = ({ artist, numberOfArtists, index, currentArtistOnDisplay, setCurrentArtistOnDisplay }: ArtistsOnQratesProps) => {

  const artistOnQratesContainer = useRef(null)


  useLayoutEffect(() => {
  const artistOnQratesTransition = gsap.timeline()

  artistOnQratesTransition.play()
    
  }, [currentArtistOnDisplay])

  console.log(currentArtistOnDisplay)

  return (
    <div className={`${index == 0? "bg-yellow": "bg-orange -translate-x-full"} ${currentArtistOnDisplay == index? "z-[1] opacity-1": "z-[-1] opacity-0"}  flex flex-col relative lg:flex-row w-full shrink-0 justify-start duration-[600ms] items-stretch min-h-[100%]`} ref={artistOnQratesContainer}>
      <a className='w-full align-baseline relative lg:order-2 max-w-[710px] lg:border-l-2 lg:border-l-black grow shrink basis-1/2 ' > 
        <img src={artist.image} alt={artist.artist} className='mt-[30px] lg:mt-0 mx-auto w-[92%] lg:w-[100%] h-[535px] z-10 relative lg:h-[875px] border-2 border-black lg:border-none ' />
      </a>
      <div className='mt-[30px] relative mx-[15px] mb-[42px] basis-[50%] shrink grow flex flex-col justify-between max-w-[710px] lg:pt-[40px] lg:pr-[50px] lg:pb-[42px] lg:pl-[31px] ' >
        <HeadingEnclosedInABox label="artists on Qrates" styles='mb-[24px] bg-white leading-[14px]'/>
        <p className='text-xl leading-[24px] lg:leading-[34px] w-full align-top -tracking-[0.37px] lg:-tracking-[0.3px] text-left pr-[10%] '>
          "{
            artist.testimonial
          }"
        </p>
        <div className="pt-[30px] w-full  pb-[102px]">
          <p className='inline font-bold text-lg leading-[24px] -tracking-[.3px] '>— {artist.artist}</p>
        </div>
        <div className="flex gap-2">
          {
            [...Array(numberOfArtists)].map((element, i) => (
              <button className={`${index == i? "bg-black text-white": "bg-transparent border-2 border-black text-black"} w-[40px] aspect-square rounded-full `} key={element} onClick={() => setCurrentArtistOnDisplay(i)}>{i  + 1}</button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ArtistOnQrates