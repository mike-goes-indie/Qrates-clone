import TopArtistSectionMobile from '../Components/TopArtistSectionMobile'
import TopArtistSectionDesktop from '../Components/TopArtistSectionDesktop'
import ForFansHomepageSection from '../Components/ForFansHomepageSection'
import ForArtistsSection from '../Components/ForArtistsSection'
import ArtistToolkitSection from '../Components/ArtistToolkitSection'
import TryItNowSection from '../Components/TryItNowSection'
import ArtistsImageGrid from '../Components/ArtistsImageGrid'

const HomePage = () => {
  return (
    <div className=''>
      <TopArtistSectionMobile />
      <TopArtistSectionDesktop />
      <ForFansHomepageSection />
      <ForArtistsSection />
      <ArtistToolkitSection />
      <TryItNowSection />
      <ArtistsImageGrid />
    </div>
  )
}

export default HomePage