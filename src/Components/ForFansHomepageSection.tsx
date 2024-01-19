import SectionWithBackgroundChangeHoverEffect from './SectionWithBackgroundChangeHoverEffect'

const ForFansHomepageSection = () => {
  const links = [
    {
      label: "Records",
      styles: " hover:after:bg-[url('/background-hover-images/record-store.jpg')]"
    },
    {
      label: "Cassettes",
      styles: "hover:after:bg-[url('/background-hover-images/cassetes.jpg')]"
    },
    {
      label: "Stories",
      styles: "hover:after:bg-[url('/background-hover-images/guy-with-his-eyes-closed.jpg')]"
    },
    {
      label: "Qrates curated",
      styles: "hover:after:bg-[url('/background-hover-images/artist-in-studio.jpg')]"
    },
  ]
  const defaultImage = `after:bg-[url('/background-hover-images/recordsPileUp.jpg')]`
  
  return (
    <SectionWithBackgroundChangeHoverEffect heading='for fans' navLinks={links} latest='Qrates Community' defaultImage={defaultImage} />
  )
}

export default ForFansHomepageSection