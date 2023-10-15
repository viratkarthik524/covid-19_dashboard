import {Link} from 'react-router-dom'

import './index.css'

const ListOfState = props => {
  const {stateList} = props
  const {
    stateCode,
    stateName,
    listOfConfirmed,
    listOfRecovered,

    listOfDeceased,
    listOfPopulation,
  } = stateList
  const active = listOfConfirmed - listOfRecovered - listOfDeceased
  console.log(`${listOfDeceased}= listOFDeceased`)
  console.log(`${listOfRecovered}=listOfRecovered`)
  console.log(`${active}=active`)

  return (
    <li className="list-state-class">
      <div className="states-container-home">
        <Link to={`/state/${stateCode}`} className="link-class">
          <p className="state-name-class">{stateName}</p>
        </Link>
      </div>
      <div className="stats-container">
        <p className="state-confirmed">{listOfConfirmed}</p>
      </div>
      <div className="stats-container">
        <p className="state-active">{active}</p>
      </div>
      <div className="stats-container">
        <p className="state-recovered">{listOfRecovered}</p>
      </div>
      <div className="stats-container">
        <p className="state-decreased">{listOfDeceased}</p>
      </div>
      <div className="stats-container">
        <p className="state-population">{listOfPopulation}</p>
      </div>
    </li>
  )
}

export default ListOfState
