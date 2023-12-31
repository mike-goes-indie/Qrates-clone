import artistImage from '../assets/Home Page/539d6e5d-f59b-41c6-b2f2-30aac553065e_image000262.jpeg'
import vinylIcon from '../assets/Home Page/fast-f0613562.png'
import Button from './Button'
import HeadingEnclosedInABox from './HeadingEnclosedInABox'

const ForArtistsSection = () => {
  return (
    <section className='w-full py-[32px] lg:py-[45px] h-fit px-[15px] lg:px-[30px]  bg-yellow lg:grid grid-cols-2 '>
      <div className='w-fit mx-auto relative pt-[20px] pb-[50px] px-4 lg:px-12 max-w-[455px] lg:max-w-[510px] max-h-[75vh]'>
        <img src={artistImage} alt="artist image"  className=' border-2 border-black align-top w-[calc(100%-30px)] lg:w-[calc(100%-60px)] mx-auto h-auto rotate-[-10deg]'/>
        <img src={vinylIcon} alt="spinning vinyl" className='absolute w-[35%] top-[37.5%] right-[67.5%] '/>
      </div>
      <div className='text-left'>
        <HeadingEnclosedInABox label='for artists' styles='text-black border-black bg-white'/>
        <h3 className='text-2xl leading-[40px] font-bold mb-[25px] lg:mb-[31px] w-full'>Your music on vinyl and casettes direct to your fans.</h3>
        <p className='font-normal text-xl w-full pb-[20px] lg:pb-[40px] leading-[22px] lg:leading-[34px]'>Qrates is a one-stop platform for your vinyl record and cassette production, logistics, sales and distribution. We take away the burden of hassle, cost, and risk, and return more time and revenue to the artist.</p>
        <Button label="for artists" styles="bg-black text-white lg:w-[50%] mb-[40px]"/>
      </div>
    </section>
  )
}

export default ForArtistsSection