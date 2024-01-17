import Button from '../Button'
import DetailsIntro from './DetailsIntro'

const CommunityDetailsSection = () => {
  return (
    <div className='pt-[40px] px-[15px] pb-[60px] flex flex-col items-center max-w-[800px] mx-auto lg:py-[80px] lg:px-[30px] '>
      <DetailsIntro label='community' heading='Join a growing community.'>
        We're building a home for the next generation vinyl lovers and cassette junkies. Get in front of fans, connect with artists, labels and stores.
      </DetailsIntro>
      <Button label='read more stories' styles='text-black border-2 border-black font-bold text-md' />
    </div>
  )
}

export default CommunityDetailsSection