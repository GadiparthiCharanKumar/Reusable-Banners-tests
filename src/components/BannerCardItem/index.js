import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className={`container ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="buttons">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
