import vinylCartoonCharacter from '../../assets/For Artists/21cfb683-2a30-4f51-8fea-3fa2acb9d637_Frame451.png'
import stackedVinylsCartoonCharacter from '../../assets/For Artists/d405f120-87ed-4136-aea5-3b0c903a5a45_Frame440.png'
import tradeMarkLogos from '../../assets/For Artists/c74b590c-930c-4716-aa08-093a83b437cf_Frame45128129.png'
import plane from "../../assets/For Artists/ac75030a-a53a-45aa-8276-4114e57a7df4_Frame45128229.png"
import cassetteShapedMoneyImage from '../../assets/For Artists/5c3ad6ee-a6da-4d6e-a3da-8dcf49254043_Frame45128329.png'

export interface ArticleType {
  heading: string
  content: string
}


export type ContentType = string | ArticleType 

class ArticleContent implements ArticleType {
  heading: string
  content: string

  constructor(heading: string, content: string){
    this.heading = heading
    this.content = content
  }
}

export interface ForArtistDetailsType {
  heading: string
  articles: ContentType[]
}

class ForArtistDetails implements ForArtistDetailsType {
  heading: string
  articles: ContentType[] 
  

  constructor(heading: string, articles: ContentType[]){
    this.heading = heading
    this.articles = articles
  }
}

const QratesStudio = new ArticleContent("Qrates studio", "Your product details should match the details of your music. Tweak and customize your vinyl, sleeve, jacket, and more.")
const upfrontOrCrowdFunding = new ArticleContent("Pay up front? Crowdfunding?", "Pay for the production of your product in advance and start production immediately, or choose the crowdfunding option and press as many copies you like with pledges you collect from your fans")
const QratesPageAndArtistPage = new ArticleContent("Qrates page and Artist page", "The Qrates page is your storefront on Qrates to sell your music. The Artist page is your profile page. Upload your images to the template provided and fill in the form to set it up.")

export const artistDetailsYouSectionContent = [
  new ForArtistDetails("Express your work on Qrates", [QratesStudio]),
  new ForArtistDetails("Start a Qrates page,confirm and pay for production costs.", [upfrontOrCrowdFunding, QratesPageAndArtistPage, vinylCartoonCharacter]),
  new ForArtistDetails("Collect orders from fans", ["Share your Qrates page and collect orders from your fans. A variety of tools are also available to promote your music."]),
  new ForArtistDetails("Upload your product assets and start production", ["Prepare your audio and print files required for production."]),
  new ForArtistDetails("", [stackedVinylsCartoonCharacter]),
  new ForArtistDetails("", [""]),
  new ForArtistDetails("Receive Revenue", ["Make a request to receive your revenue. We can deposit your funds to your pre-registered bank account or Paypal account.",cassetteShapedMoneyImage])
]

const smallProductionsMinimums = new ArticleContent("Small production minimums", "Vinyl records can be made from 100 copies, and cassette tapes from 50 copies.")
const selectThePaymentOption = new ArticleContent("Select the payment option", "You can pay for the production of your product in advance and begin the production process immediately. We also have a pre-order function, which allows you to take orders during production until completion, and the crowdfunding method, which allows you to collect orders in advance and then begin the manufacturing process. If you don't want to pay for the production costs upfront, or if you want to collect orders from your fans before deciding on the final number of pieces to be produced, try crowdfunding. No risk, no waste.")
const easilyCustomizeYourQratesAndArtistPage = new ArticleContent("Easily customize your Qrates page and artist page", "Qrates provides easy-to-setup templates for the Qrates page and the artist profile page. The Qrates page for selling your music can be set up to include audio samples, embedded videos, and comments from fans, making it a great promotional tool.")
const sellWholesaleDirectlyToRecordStores = new ArticleContent("You can sell wholesale directly to record stores worldwide", "Simply start selling on your Qrates page and receive orders from over 150 record stores and distributors worldwide that we partner with.")
const audioMasteringService = new ArticleContent("Audio mastering service", "Qrates offers a audio mastering service with a partner professional audio engineer to support optimal sound creation")
const artworkSupport = new ArticleContent("Artwork support", "We help ensure that your artwork conforms to printing standards and that your product is as beautiful as possible.")
const trustedProductionPatners = new ArticleContent("Trusted production partners", "We partner with factories that have a long history of manufacturing vinyl records and cassette tapes with proven technical capabilities and produce world-class quality products.")
const speedyDeliveryTime = new ArticleContent("Speedy delivery time", "Vinyl records are shipped from our factory within an average of 16 weeks after ordering. Cassette tapes can be shipped from the factory in an average of 8 weeks or less.")
const freeWarehousing = new ArticleContent("Free warehousing", "When you sell records or cassettes on Qrates, you can store your products for free in one of our three worldwide distribution centers (USA, UK, Japan).")
const shipping = new ArticleContent("Shipping", "When a product is purchased from a customer, Qrates carefully packages the product and ships it worldwide. We can also ship products to any designated location.")
const sellingOnQrates = new ArticleContent("Selling on Qrates", "By storing your inventory in the Qrates warehouse, you can continue to sell your work on Qrates. You can manufacture the exact number of copies as your project collected at the end of the crowdfunding campaign, or you can make more copies and continue to sell them on Qrates.")
const repress = new ArticleContent("Repress", "Repressing records is always easy. Master stampers can be stored at the factory for 18 months at no charge, so there is no need to make new stampers within that time frame. Use the repress requests from fans as a signal on when to repress more records.")

export const artistDetailsQratesSectionContent = [
  new ForArtistDetails("Over 120,000 customization possibilities 3D Visualizer", ["Choose from vinyl or cassette, each with a wide range of options including colors, packaging, obi strips, download cards, etc. There are over 120,000 variations of colors and specs for vinyl and cassette that can be customized in the Qrates Studio."]),
  new ForArtistDetails("We support a wide range of artists' needs", [smallProductionsMinimums, selectThePaymentOption, easilyCustomizeYourQratesAndArtistPage]),
  new ForArtistDetails("Wholesale distribution network", [sellWholesaleDirectlyToRecordStores, tradeMarkLogos]),
  new ForArtistDetails("Professional audio mastering and artwork support.", [audioMasteringService, artworkSupport]),
  new ForArtistDetails("Pressing records and making cassette tapes", [ trustedProductionPatners, speedyDeliveryTime, "learn more"]),
  new ForArtistDetails("Warehousing and Distribution", [ freeWarehousing, shipping, "learn more", plane]),
  new ForArtistDetails("Continue selling on Qrates", [ sellingOnQrates, repress, "learn more", "button"])
]
