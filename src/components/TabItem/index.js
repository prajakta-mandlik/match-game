import './index.css'

const TabItem = props => {
  const {tabListDetails, isActive, changedActiveId} = props
  console.log(tabListDetails)
  console.log(isActive)

  const onClickId = () => {
    changedActiveId('ANIMAL')
  }

  return (
    <li>
      <button type="button" className="" onClick={onClickId}>
        hello
      </button>
    </li>
  )
}

export default TabItem
