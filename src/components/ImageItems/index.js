import './index.css'

const ImageItems = props => {
  const {imagesListDetails, currentImgId} = props

  const getImg = () => imagesListDetails.find(each => each.id === currentImgId)

  const {imageUrl} = getImg()
  return (
    <div>
      <img src={imageUrl} alt="match" className="top-img" />
    </div>
  )
}

export default ImageItems
