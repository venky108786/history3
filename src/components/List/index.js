import './index.css'

const List = props => {
  const {initialHistoryDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl} = initialHistoryDetails
  return (
    <li className="List-container">
      <div className="list-fist-part">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt={title} className="img" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div className="delete-button">
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-button"
          />
        </button>
      </div>
    </li>
  )
}
export default List
