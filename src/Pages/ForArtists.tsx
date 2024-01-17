import TryItNowSection from '../Components/TryItNowSection'
import ForArtistsDetailsSectionDesktop from '../Components/forArtists/ForArtistsDetailsSectionDesktop'
import ForArtistsDetailsSectionMobile from '../Components/forArtists/ForArtistsDetailsSectionMobile'
import FormatInfoSection from '../Components/forArtists/FormatInfoSection'
import IntroSectionTop from '../Components/forArtists/IntroSectionTop'
import Marketing from '../Components/forArtists/Marketing'
import StartANewProject from '../Components/forArtists/StartANewProject'
import SupportDetailsSection from '../Components/forArtists/SupportDetailsSection'
import DetailsIntro from '../Components/forArtists/DetailsIntro'
import artistPlayingKeyboard from '../assets/For Artists/a1f42f14-b65d-419d-85f0-ef0a5462c4b2_artist_toolkit.png'
import personPuttingOnVinylRecord from '../assets/For Artists/bb2f7ed2-8eaa-45a4-993b-4d07ed4e4296_customersupport.png'
import CommunityDetailsSection from '../Components/forArtists/CommunityDetailsSection'
import ArtistsOnQratesSection from '../Components/forArtists/ArtistsOnQratesSection'

const ForArtists = () => {
  
  return (
    <>
      <IntroSectionTop />
      <FormatInfoSection />
      <Marketing />
      <ForArtistsDetailsSectionMobile />
      <ForArtistsDetailsSectionDesktop />
      <StartANewProject />
      <section className='lg:flex '>
        <SupportDetailsSection image={artistPlayingKeyboard} background='bg-gray bg-' >
          <DetailsIntro label='artist toolkit' heading='take you and your works to the next level' >
            We have a lot of informations and tips about music production, physical format and music business for you.
          </DetailsIntro>
        </SupportDetailsSection>
        <SupportDetailsSection image={personPuttingOnVinylRecord} background='bg-pink'>
          <DetailsIntro label='customer support' heading="Here to help, whenever you need it." >
            Whether you’re an artist in the middle of product, or a fan with questions about your order; our team is here to help.
          </DetailsIntro>
        </SupportDetailsSection>
      </section>
      <CommunityDetailsSection />
      <ArtistsOnQratesSection />
      <TryItNowSection />
    </>
  )
}

export default ForArtists