import React from 'react'
import { addiction, subtraction } from '../../../common/math_operations'
import './index.css'
import { useSelector } from 'react-redux'

export default function Cell(props) {
  const { operation } = props
  const additionConfig = useSelector(state => state.additionConfig)
  const subtractionConfig = useSelector(state => state.subtractionConfig)
  const { vertical } = useSelector(state => state.displayConfig)

  if (operation === 'addiction') {
    const { x, y } = addiction(additionConfig)
    if (!vertical) return (
      <td>{x} + {y} =</td>
    )
    return (
      <td style={{ textAlign: 'right' }}>
        {x}<br />
        +&nbsp;&nbsp;&nbsp;{y}
        <hr />
      </td>
    )
  }
  if (operation === 'subtraction') {
    const { x, y } = subtraction(subtractionConfig)
    if (!vertical) return (
      <td>{x} - {y} =</td>
    )
    return (
      <td style={{ textAlign: 'right' }}>
        {x}<br />
        -&nbsp;&nbsp;&nbsp;{y}
        <hr />
      </td>
    )
  }
}

