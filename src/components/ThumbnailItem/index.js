// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, activeImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText} = imageDetails
  function onClickThumbnail() {
    activeImage(imageDetails)
  }
  const activeClassName = isActive ? 'active-thumbnail' : ''
  console.log(activeClassName)

  return (
    <li>
      <button type="button" className="button" onClick={onClickThumbnail}>
        <img
          alt={thumbnailAltText}
          src={thumbnailUrl}
          className={`img ${activeClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
