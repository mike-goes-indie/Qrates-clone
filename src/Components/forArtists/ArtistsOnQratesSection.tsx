import { useState } from 'react'
import { artistsOnQrates } from '../../data/ForArtists/artistsOnQrates'
import ArtistOnQrates from './ArtistOnQrates'

const ArtistsOnQratesSection = () => {

  const [currentArtistOnDisplay, setCurrentArtistOnDisplay] = useState(0)

  return (
    <div className={`h-fit relative w-full flex  border-t-2 border-t-black`}>
      {
        artistsOnQrates.map((artist, index) => (
          <ArtistOnQrates artist={artist} numberOfArtists={artistsOnQrates.length} index={index} setCurrentArtistOnDisplay={setCurrentArtistOnDisplay} currentArtistOnDisplay={currentArtistOnDisplay}  key={index} />
        ))
      }
    </div>
  )
}

export default ArtistsOnQratesSection