import TopArtistSectionArticle from './TopArtistSectionArticle'
import TopArtistSectionImage from './TopArtistSectionImage'

const TopArtistSectionMobile = () => {
  return (
    <section className='lg:hidden pt-8 px-5 md:px-8 pb-[50px] text-center'>
      <TopArtistSectionArticle >
        <TopArtistSectionImage />
      </TopArtistSectionArticle>
    </section>
  )
}

export default TopArtistSectionMobile