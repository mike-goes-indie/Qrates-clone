import { ReactElement} from 'react'
import ForArtistsDetailsArrow from './ForArtistsDetailsArrow'
import { ArticleType } from '../../data/ForArtists/forArtistsDetailsArticles'
import { Link } from 'react-router-dom'
import Button from '../Button'




export interface ForArtistsDetailsArticleProps {
  number?: number
  heading: string
  articles: ArticleType[] | string
  image?: string
  styles?: string
}

const ForArtistsDetailsArticle = ({ number, heading, articles, styles}: ForArtistsDetailsArticleProps): ReactElement => {
  return (
    <div className={`grid min-h-[275px] p-[15px] lg:flex lg:flex-col lg:px-[90px] ${styles} lg:w-full`}>
      <ForArtistsDetailsArrow number={number} styles='lg:hidden' />
      <div className='col-start-2 pl-[2.5%] col-end-5 flex flex-col w-full'>
        { heading && <h4 className='text-xl font-bold leading-[24px] lg:leading-[34px] mb-[10px] tracking-[0.37px] w-full' >{ heading }</h4>}
        {
          articles?.map((article) => {
            if(article.heading) return (
              <>
                <h5 className='text-lg font-bold leading-[24px] lg:leading-[34px] '>{ article.heading }</h5>
                <p className='text-lg leading-[24px] -tracking-[0.37px] lg:-tracking-[0.27px] mb-[10px] lg:my-[10px] font-normal '> { article.content } </p>
              </>
            )
            else if (article.match("src")) return (
              <img src={article} alt="" /> 
            )
            else if (article.match("learn more")) return (
              <Link to="/" className='uppercase font-bold underline'>{article}</Link>
            )
            else if (article.match("button")) return (
              <Button label="how it works" styles='bg-black text-white w-[60%] mx-auto my-4'/>
            )
            else return (
              <p className='text-lg leading-[24px] tracking-[-.37px] mb-[10px]  font-normal  lg:my-[10px] '>{ article }</p>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default ForArtistsDetailsArticle