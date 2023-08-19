const ThumbnailItem = props => {
  const {thumbnailImageList, getUpdatedImageList, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailImageList
  console.log(isActive)
  const activeClass = isActive ? '' : 'in-active'

  const onClickThumbnail = () => {
    getUpdatedImageList(id)
  }
  return (
    <>
      <li>
        <button onClick={onClickThumbnail} type="button">
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            width="50px"
            className={activeClass}
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
