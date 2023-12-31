export class Link {
  link: string 
  url?: string 

  constructor(link:string, url?:string){
    this.link = link
    this.url = url
  }
}

class LinksCategory {
  heading: string
  links: Link[]

  constructor(heading: string, links: Link[]){
    this.heading = heading
    this.links = links
  }
}

const forArtistsLinks = [
  new Link("for artists", "/forArtists"),
  new Link("how it works", "/how-it-works"),
  new Link("artist toolkit" ),
  new Link("referral program"),
]

const forFansLinks = [
  new Link("for fans", "/forFans"),
  new Link("Records"),
  new Link("cassettes"),
  new Link("stories"),
  new Link("qrates curated"),
]

const ourCompanyLinks = [
  new Link("about qrates", "/about"),
  new Link("careers"),
  new Link("patners"),
]

const helpLinks = [
  new Link("support center"),
  new Link("contact us"),
  new Link("returns"),
  new Link("shipping"),
]

export const footerLinks = [
  new LinksCategory("for artists", forArtistsLinks),
  new LinksCategory("for fans", forFansLinks),
  new LinksCategory("our company", ourCompanyLinks),
  new LinksCategory("help", helpLinks)
]