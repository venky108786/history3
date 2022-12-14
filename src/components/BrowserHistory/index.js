import {Component} from 'react'
import './index.css'
import List from '../List'

class BrowserHistory extends Component {
  state = {searchInput: ''}

  searchingHistory = event => {
    this.setState({searchInput: event.target.value})
  }

  // change = id => {
  // const {HistoryDetails} = this.state
  // const afterDeleteHistoryList = HistoryDetails.filter(each => each.id !== id)
  // this.setState({HistoryDetails: afterDeleteHistoryList})
  // }

  render() {
    // const {initialHistoryDetails} = this.props
    const {searchInput} = this.state
    const {initialHistoryList} = this.props

    const searchResult = initialHistoryList.filter(eachList =>
      eachList.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg">
        <div className="searchRow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="History-Img"
          />

          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="searchImg"
            />
            <input
              type="search"
              placeholder="search"
              className="input"
              value={searchInput}
              onChange={this.searchingHistory}
            />
          </div>
        </div>

        <div className="history-container">
          <ul className="ul-container">
            {searchResult.map(each => (
              <List
                initialHistoryDetails={each}
                key={each.id}
                change={this.onchange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default BrowserHistory
