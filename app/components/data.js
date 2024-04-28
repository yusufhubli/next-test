import React from 'react'
import { getData } from '../product/page'

const data = () => {
    const data = getData()
  return (
    <div>
      {data}
    </div>
  )
}

export default data
