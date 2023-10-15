import {Link} from 'react-router-dom'
import {BiChevronRightSquare} from 'react-icons/bi'

import './index.css'

const SearchState = props => {
  const {stateName, stateCode, id} = props
  return (
    <li>
      <Link to={`state/${id}`} className="link-search">
        <div className="search-result">
          <h1 className="search-heading">{stateName}</h1>
          <button className="button-text" type="button">
            {stateCode}
            <BiChevronRightSquare alt="line icon" className="icon-right" />
          </button>
        </div>
      </Link>
    </li>
  )
}

export default SearchState
