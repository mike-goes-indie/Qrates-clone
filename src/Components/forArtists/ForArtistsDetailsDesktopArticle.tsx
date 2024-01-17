import { ForArtistDetailsType } from '../../data/ForArtists/forArtistsDetailsArticles'
import ForArtistsDetailsArrow from './ForArtistsDetailsArrow'
import ForArtistsDetailsArticle from './ForArtistsDetailsArticle'

interface ForArtistsDetailsDesktopArticleProps {
  number: number
  youArticle: ForArtistDetailsType & {number: number}
  qratesArticle: ForArtistDetailsType
}

const ForArtistsDetailsDesktopArticle = ({ number, youArticle, qratesArticle }: ForArtistsDetailsDesktopArticleProps) => {
  const { heading: headingYou, articles: articlesYou } = youArticle
  const { heading: headingQrates, articles: articlesQrates } = qratesArticle

  return (
    <div className='grid artists-details-articles-grid grid-rows-1 h-fit relative px-[20px] pb-[20px] pt-[40px]'>
      <ForArtistsDetailsArticle heading={headingYou} articles={articlesYou} styles='col-start-1 col-span-2 text-right row-start-1 row-end-2 max-w-[770px]' />
      <ForArtistsDetailsArrow number={number} styles='  col-start-2 col-end-4 row-start-1 row-end-2' />
      <ForArtistsDetailsArticle heading={headingQrates} articles={articlesQrates} styles='col-start-3 col-span-4 text-left row-start-1 row-end-2 max-w-[770px]' />
    </div>
  )
}

export default ForArtistsDetailsDesktopArticle