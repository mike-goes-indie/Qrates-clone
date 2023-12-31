import TopArtistSectionArticle from './TopArtistSectionArticle'
import TopArtistSectionImage from './TopArtistSectionImage'

const TopArtistSectionDesktop = () => {
  return (
    <div className='hidden lg:grid py-[50px] px-5 md:px-8 grid-cols-2 items-center'>
      <TopArtistSectionArticle />
      <TopArtistSectionImage/>
    </div>
  )
}

export default TopArtistSectionDesktop