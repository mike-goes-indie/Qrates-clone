import downArrow from '../../assets/For Artists/bx-down-arrow-alt.svg'
import rightArrow from '../../assets/For Artists/bx-right-arrow-alt.svg'
import Button from '../Button'

const StartANewProject = () => {
  return (
    <div className='text-center lg:flex items-center justify-between bg-black text-white py-[40px] lg:py-0 px-[15px] lg:px-[60px] min-h-[225px] lg:min-h-[180px] lg:h-[180px] '>
      <div className='flex flex-col lg:flex-row justify-center mb-2 items-center'>
        <h3 className='text-2xl font-bold -tracking-[1px] leading-[40px] '>Start a new project</h3>
        <img width={40} src={downArrow} alt="" className='lg:hidden' />
        <img width={40} src={rightArrow} alt="" className='hidden lg:block' />
      </div>
      <Button label='make your own' styles='border-white border-2 text-white leading-[48px] font-bold' />
    </div>
  )
}

export default StartANewProject