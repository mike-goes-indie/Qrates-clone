import artist7 from '../assets/Home Page/3a7638a7ec_Snapinsta.app_1080_270220963_631586554551891_269808778014237197_n.jpg'
import artist6 from '../assets/Home Page/3f7975b5-89dd-4088-82ad-66632dac02e6_P1133530-Edit.jpg'
import artist1 from '../assets/Home Page/41a354e8-c43e-416c-9972-3c290b196306_2023_03_21_AdamBronstein_QRates.png'
import artist2 from '../assets/Home Page/4256bada-72c1-4fc2-b09a-86d401088e21_Knobs-Option1splash.PNG.jpg'
import artist8 from '../assets/Home Page/c5ebfe34-c1b9-4310-b295-f7289dc7f3e2_HC_Vinyl_Pat_A.JPG.jpg'
import artist4 from '../assets/Home Page/88610884-3509-4baa-aeb0-a49ed0c8300b_artist_sol.jpg'
import artist3 from '../assets/Home Page/b4192f01-7f23-4f72-99e3-a65cff908576_LofiToons2.jpg'
import artist5 from '../assets/Home Page/b8233c51-3e87-4e97-a87b-841031f4c456_0900150_0900150-R1-E014.jpg'


const ArtistsImageGrid = () => {
  const artistImages = [
    artist1,
    artist2,
    artist3,
    artist4,
    artist5,
    artist6,
    artist7,
    artist8
  ]

  return (
    <section className='w-full h-auto grid grid-cols-2'>
      {
        artistImages.map((image, index) => (
          <img src={image} alt="image of artist holding vinyl" key={index} className='border-[1px] border-black relative grid__item'/>
        ))
      }
    </section>
  )
}

export default ArtistsImageGrid