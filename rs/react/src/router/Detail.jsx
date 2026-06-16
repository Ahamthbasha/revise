import React from 'react'
import {Outlet} from 'react-router-dom'

const Detail = () => {
  return (
    <div>
      This is detail page
      <Outlet/>
    </div>
  )
}

export default Detail
