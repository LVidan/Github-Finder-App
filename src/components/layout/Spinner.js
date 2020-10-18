import React, { Fragment } from 'react'
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading..." style={spinnerImg} />
    </Fragment>
  )
}

const spinnerImg = {
  width: '100%',
  margin: 'auto',
  display: 'block'
}

export default Spinner