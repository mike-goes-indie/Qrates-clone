import { memo } from 'react'
import SectionWithBackgroundChangeHoverEffect from './SectionWithBackgroundChangeHoverEffect'

const ForFansHomepageSection = memo(() => {
  const links = [
    {
      label: "Records",
      styles: " hover:after:bg-[url('src/assets/background-hover-images/record-store.jpg')]"
    },
    {
      label: "Cassettes",
      styles: "hover:after:bg-[url('src/assets/background-hover-images/cassetes.jpg')]"
    },
    {
      label: "Stories",
      styles: "hover:after:bg-[url('src/assets/background-hover-images/guy-with-his-eyes-closed.jpg')]"
    },
    {
      label: "Qrates curated",
      styles: "hover:after:bg-[url('src/assets/background-hover-images/artist-in-studio.jpg')]"
    },
  ]

  return (
    <SectionWithBackgroundChangeHoverEffect heading='for fans' defaultImage="after:bg-[url('src/assets/background-hover-images/recordsPileUp.jpg')]" navLinks={links} latest='Qrates community' />
  )
})

export default ForFansHomepageSection