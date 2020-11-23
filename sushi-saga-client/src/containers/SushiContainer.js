import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const nextSushi = props.api.slice(props.lastPlateIndex, props.lastPlateIndex + 4)
  
  const sushiPlates = nextSushi.map((sushi, idx) => <Sushi key={idx}sushi={sushi} handleSushiEat={props.handleSushiEat} platesEaten={props.platesEaten} />)
  
  return (
    <Fragment>
      <div className="belt">
        {sushiPlates}
        <MoreButton handleMore={props.handleMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer