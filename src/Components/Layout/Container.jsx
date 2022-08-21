import React from 'react'

function Container({ children }) {
  return (
    <div className='container'>
      <h1>Weather Forecast</h1>
      {children}</div>
  )
}

export default Container;