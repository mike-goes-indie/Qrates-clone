import topArtistImage from '../assets/Home Page/539d6e5d-f59b-41c6-b2f2-30aac553065e_image00026.jpeg'
import handIcon from '../assets/Home Page/ok-56835833.png'

const TopArtistSectionImage = () => {
  return (
    <div className='mx-auto relative  max-w-[512px] max-h-[75vh] mt-6 lg:mt-0 px-10'>
      <img src={topArtistImage} alt="Mayaewk" className='border-2 border-black rotate-[10deg] w-full max-w-[512px] max-h-[75vh] ' />
      <img src={handIcon} alt="" className='max-w-[130px] absolute w-[20%] top-[34%] left-0' /> 
      <span className='uppercase rotate-90 whitespace-nowrap top-[60%] text-sm font-semibold right-[-75px] absolute'>
        <span className='underline'>Mayaewk </span>
         is on qrates
      </span>
    </div>
  )
}

export default TopArtistSectionImage