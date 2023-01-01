import './index.css'
import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {optionValue: countryAndCapitalsList[0].id}

  onchangeOption = event => {
    this.setState({
      optionValue: event.target.value,
    })
  }

  getCountry = () => {
    const {optionValue} = this.state
    const countryName = countryAndCapitalsList.find(
      Each => Each.id === optionValue,
    )
    return countryName.country
  }

  render() {
    const {optionValue} = this.state
    const countryName = this.getCountry(optionValue)
    return (
      <div className="bg-container">
        <div className="country-container">
          <h1>Countries and Capitals</h1>
          <select className="drop-down" onChange={this.onchangeOption}>
            {countryAndCapitalsList.map(each => (
              <option key={each.id} value={each.capitalDisplayText}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <span>is capital of which country?</span>

          <p className="para">{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
