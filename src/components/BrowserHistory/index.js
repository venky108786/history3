import {Component} from 'react'
import './index.css'
import List from '../List'

class BrowserHistory extends Component {
  // state = {searchInput: 0}

  render() {
    // const {searchInput} = this.state
    const {initialHistoryList} = this.props

    return (
      <div className="bg">
        <div className="searchRow">
          <h1 className="heading">History</h1>
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="domain logo"
              className="searchImg"
            />
            <input type="search" placeholder="search" className="input" />
          </div>
        </div>

        <div className="history-container">
          <ul className="ul-container">
            {initialHistoryList.map(each => (
              <List initialHistoryDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default BrowserHistory
