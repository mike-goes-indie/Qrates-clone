import sol from '../../assets/For Artists/88610884-3509-4baa-aeb0-a49ed0c8300b_artist_sol.jpg'
import masonLieberman from '../../assets/For Artists/86e9c6a8-3732-41a8-82e3-c63d3f97b45f_artist_mason.jpg'

export interface ArtistTestimonialType {
  artist: string
  testimonial: string
  image: string
}

class ArtistTestimonial implements ArtistTestimonialType {
  artist: string
  testimonial: string
  image: string

  constructor(artist: string, testimonial: string, image: string){
    this.artist = artist
    this.testimonial = testimonial
    this.image = image
  }
}

const MasonLiebermanTestimonial = "We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies."
const SOLTestimonial = "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."
export const artistsOnQrates = [
  new ArtistTestimonial("SOL", SOLTestimonial, sol),
  new ArtistTestimonial("Mason Lieberman (The Real Folk Blues, 2020)", MasonLiebermanTestimonial, masonLieberman)
]