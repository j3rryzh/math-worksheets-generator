import React from 'react'
import { nanoid } from 'nanoid'
import Cell from '../Cell'

export default function Tr(props) {
  const { operation } = props
  return (
    // Create a row with 5 data cells
    <tr>
      {[...Array(5).keys()].map(i => {
        return <Cell key={nanoid()} operation={operation} />
      })}
    </tr>
  )
}
