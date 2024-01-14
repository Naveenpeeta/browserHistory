import './index.css'

const HistoryItem = props => {
  const {browserDetails, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-container">
      <div className="browser-container">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="details-container">
          <img src={logoUrl} alt="domain logo" className="history-image" />
          <p className="title">{title}</p>
          <p className="url-cont">{domainUrl}</p>
        </div>
      </div>
      <div className="browser-end">
        <button
          type="button"
          onClick={onDelete}
          className="delete-icon"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
