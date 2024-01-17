import { artistDetailsQratesSectionContent, artistDetailsYouSectionContent } from '../../data/ForArtists/forArtistsDetailsArticles'
import ForArtistsDetailsArticle from './ForArtistsDetailsArticle'
import DetailsIntro from './DetailsIntro'
import cassetteShapedMoneyImage from '../../assets/For Artists/5c3ad6ee-a6da-4d6e-a3da-8dcf49254043_Frame45128329.png'



const ForArtistsDetailsSectionMobile = () => {
  let i = 0
  return (
    <div className='bg-lightGray lg:hidden'>
      <DetailsIntro label='you' heading='Focus on making music' styles='pt-[40px]  px-[15px] lg:px-[90px] '>
        You can focus on your music production with peace of mind: the Artist Toolkit has lots of information about music production, knowledge about vinyl records and cassettes, and tips on how to sell your music. Artist Toolkit
      </DetailsIntro>
      {
        artistDetailsYouSectionContent.slice(0,2).map((article, index) => {
          i++
          return (
            <ForArtistsDetailsArticle key={index} number={i} heading={article.heading} articles={article.articles}  />
          )
        })
      }
      <div className='bg-yellow border-[2px] border-black m-[15px]'>
      <DetailsIntro label="Qrates" heading="We'll take care of the hassle" styles='pt-[40px]  px-[15px] lg:px-[90px] ' >
        Qrates supports a wide range of artists while eliminating the hassles, costs and risks associated with pressing records, giving artists more time and income back in their hands.
      </DetailsIntro>
        {
          artistDetailsQratesSectionContent.slice(2).map((article, index) => {
            i++
            return (
              <ForArtistsDetailsArticle key={index} number={i} heading={article.heading} articles={article.articles}  />
            )
          })
        }
      </div>
      <DetailsIntro label='you' heading='Receive revenue' image={cassetteShapedMoneyImage} styles='pt-[10px]'>
        Make a request to receive your revenue. We can deposit your funds to your pre-registered bank account or Paypal account.
      </DetailsIntro>
    </div>
  )
}

export default ForArtistsDetailsSectionMobile