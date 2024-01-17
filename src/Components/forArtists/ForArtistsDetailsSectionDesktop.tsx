import { artistDetailsQratesSectionContent, artistDetailsYouSectionContent } from '../../data/ForArtists/forArtistsDetailsArticles'
import ForArtistsDetailsDesktopArticle from './ForArtistsDetailsDesktopArticle'
import DetailsIntro from './DetailsIntro'

const ForArtistsDetailsSectionDesktop = () => {
  return (
    <div className='gray-yellow-bg hidden lg:block w-screen'>
      <div className='flex py-6'>
        <DetailsIntro label='you' heading='Focus on making music' styles=' px-[15px] lg:px-[90px] ' >
          You can focus on your music production with peace of mind: the Artist Toolkit has lots of information about music production, knowledge about vinyl records and cassettes, and tips on how to sell your music. Artist Toolkit
        </DetailsIntro>
        <DetailsIntro label='qrates' heading="We'll take care of the hassle" styles=' px-[15px] lg:px-[90px] ' >
          Qrates supports a wide range of artists while eliminating the hassles, costs and risks associated with pressing records, giving artists more time and income back in their hands.
        </DetailsIntro>
      </div>
      <div className='w-full'>
        {
          artistDetailsYouSectionContent?.map((article, index) => {
            const number = index + 1
            return (
              <ForArtistsDetailsDesktopArticle number={number} youArticle={article} qratesArticle={artistDetailsQratesSectionContent[index]} />
            )
          })
        }
      </div>
    </div>
  )
}

export default ForArtistsDetailsSectionDesktop