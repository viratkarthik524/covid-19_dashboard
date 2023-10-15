import {Component} from 'react'

import './index.css'

class StateCards extends Component {
  state = {
    confirmedCard: {},
    recoveredCard: {},
    deceasedCard: {},
    activeCard: {},
  }

  componentDidMount() {
    this.totalDistricts()
  }

  totalDistricts = () => {
    const {totalStateCards} = this.props
    const districtConfirmed = totalStateCards.confirmed
    const districtRecovered = totalStateCards.recovered
    const districtDeceased = totalStateCards.deceased
    const districtActive =
      districtConfirmed - (districtRecovered + districtDeceased)

    const confirmedCard = {
      name: 'Confirmed',
      logo:
        'https://res.cloudinary.com/dfaxacnyf/image/upload/v1692069854/check-mark_1_xc56lx.png',
      value: districtConfirmed,
    }
    const activeCard = {
      name: 'Active',
      logo:
        'https://res.cloudinary.com/dfaxacnyf/image/upload/v1692069854/protection_2_lw4ehl.png',
      value: districtActive,
    }
    const recoveredCard = {
      name: 'Recovered',
      logo:
        'https://res.cloudinary.com/dfaxacnyf/image/upload/v1692069854/recovered_1_mugyb8.png',
      value: districtRecovered,
    }
    const deceasedCard = {
      name: 'Deceased',
      logo:
        'https://res.cloudinary.com/dfaxacnyf/image/upload/v1692069854/breathing_1_d04wui.png',
      value: districtDeceased,
    }
    console.log(`districtDeceased = ${districtDeceased}`)
    this.setState({
      confirmedCard,
      activeCard,
      recoveredCard,
      deceasedCard,
    })
  }

  cardClick = value => {
    const {stateListCards} = this.props
    stateListCards(value)
  }

  render() {
    const {confirmedCard, recoveredCard, activeCard, deceasedCard} = this.state
    // const {isStateCard} = this.props
    // const isDistrictCard = isStateCard ? 'background-color' : ''
    return (
      <div className="stateCards-container">
        <button
          type="button"
          className={`stateCard-background  ${confirmedCard.name}`}
          value={confirmedCard.name}
          onClick={() => this.cardClick(confirmedCard.name)}
        >
          <p className="home-paragraph-heading red">{confirmedCard.name}</p>
          <img
            src={confirmedCard.logo}
            alt="state specific confirmed cases pic"
            className="home-cards-logo"
          />
          <p className="paragraph-heading red">{confirmedCard.value}</p>
        </button>

        <button
          type="button"
          className={`stateCard-background  ${activeCard.name}`}
          value={activeCard.name}
          tabIndex="-1"
          onClick={() => this.cardClick(activeCard.name)}
        >
          <p className="home-paragraph-heading blue">{activeCard.name}</p>
          <img
            src={activeCard.logo}
            alt="state specific active cases pic"
            className="home-cards-logo"
          />
          <p className="paragraph-heading blue">{activeCard.value}</p>
        </button>

        <button
          type="button"
          className={`stateCard-background  ${recoveredCard.name}`}
          value={recoveredCard.name}
          tabIndex="-1"
          onClick={() => this.cardClick(recoveredCard.name)}
        >
          <p className="home-paragraph-heading green">{recoveredCard.name}</p>
          <img
            src={recoveredCard.logo}
            alt="state specific recovered cases pic"
            className="home-cards-logo"
          />
          <p className="paragraph-heading green">{recoveredCard.value}</p>
        </button>

        <button
          type="button"
          className={`stateCard-background  ${deceasedCard.name}`}
          value={deceasedCard.name}
          tabIndex="-1"
          onClick={() => this.cardClick(deceasedCard.name)}
        >
          <p className="home-paragraph-heading grey">{deceasedCard.name}</p>
          <img
            src={deceasedCard.logo}
            alt="state specific deceased cases pic"
            className="home-cards-logo"
          />
          <p className="paragraph-heading grey">{deceasedCard.value}</p>
        </button>
      </div>
    )
  }
}

export default StateCards
