import FormatInfo from './FormatInfo'
import vinyl from '../../assets/vinyl-loop-animation-images/sample_bombay-668a0fa8.png'
import cassette from '../../assets/For Artists/e6f25c1e-b82f-4279-8881-7cdff3f3708b_qrates-studio-screenshot281329.png'

const FormatInfoSection = () => {

  return (
    <div className='bg-lightGray'>
      <div className='mx-auto text-center w-[75%] lg:w-full py-[40px] lg:py-[90px]  '>
        <h2 className='text-2xl w-full leading-[40px] lg:leading-[42px] tracking-[-1px] lg:tracking-[-0.5px] font-bold'>Choose from two formats with promised quality</h2>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <FormatInfo heading='vinyl' image={ vinyl } border='lg:border-r-[.5px]' >
          We know how special pressed records are to you. Our products are built for fans, by fans. We make it easy for artists to press vinyl, so the music you love can keep reaching ears in the most beautiful way.
        </FormatInfo >
        <FormatInfo heading='cassette' image={ cassette } border='lg:border-l-[.5px]' >
          Cassettes have always been special to music fans and artists. Whether you are saving a recording of a great concert, or preserving an early demo, there’s no better way to keep that music close than on cassette tapes.
        </FormatInfo>
      </div>
    </div>
  )
}

export default FormatInfoSection