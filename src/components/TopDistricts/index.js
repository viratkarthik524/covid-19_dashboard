import './index.css'

const TopDistricts = props => {
  const {topDistrictsNumber, topDistrictsName} = props
  return (
    <li className="topDistricts-list">
      <div className="align">
        <p className="topDistricts-paragraph">{topDistrictsNumber}</p>
      </div>
      <div className="align">
        <p className="topDistricts-name">{topDistrictsName}</p>
      </div>
    </li>
  )
}

export default TopDistricts
