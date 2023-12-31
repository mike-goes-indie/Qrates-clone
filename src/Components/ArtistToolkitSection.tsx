import SectionWithBackgroundChangeHoverEffect from './SectionWithBackgroundChangeHoverEffect'

const ArtistToolkitSection = () => {
  const links = [
    {
      label: "vinyl knowledge",
      styles: " hover:after:bg-[url('src/assets/background-hover-images/vinyl-knowledge.jpg')]"
    },
    {
      label: "Distribution & promotion",
      styles: "hover:after:bg-[url('src/assets/background-hover-images/distribution-and-promotion.jpg')]"
    },
    {
      label: "mixing & mastering",
      styles: "hover:after:bg-[url('src/assets/background-hover-images/mixing-and-mastering.jpg')]"
    },
    {
      label: "inspiration",
      styles: "hover:after:bg-[url('src/assets/background-hover-images/inspiration.jpg')]"
    },
    {
      label: "qrates tips",
      styles: "hover:after:bg-[url('src/assets/background-hover-images/qrates-tips.jpg')]"
    },
  ]
  return (
    <SectionWithBackgroundChangeHoverEffect heading="for artists" defaultImage="after:bg-[url('src/assets/background-hover-images/artist-toolkit.jpg')] " latest="Artist Toolkit" navLinks={links} />
  )
}

export default ArtistToolkitSection