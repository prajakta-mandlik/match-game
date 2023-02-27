import './index.css'

const ThumbNail = props => {
  const {thumbnailDetails} = props
  const {thumbnailUrl} = thumbnailDetails

  return (
    <li className="list-container">
      <img src={thumbnailUrl} alt="img" className="images" />
    </li>
  )
}

export default ThumbNail
