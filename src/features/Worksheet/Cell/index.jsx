import React from 'react'
import { addiction, subtraction } from '../../../common/math_operations'
import './index.css'
import { useSelector } from 'react-redux'


export default function Cell(props) {
  const { operation } = props
  const additionConfig = useSelector(state => state.additionConfig)
  const subtractionConfig = useSelector(state => state.subtractionConfig)

  if (operation === 'addiction') {
    const { x, y } = addiction(additionConfig);
    return (
      <td>{x} + {y} =</td>
    )
  }
  if (operation === 'subtraction') {
    const { x, y } = subtraction(subtractionConfig);
    return (
      <td>{x} - {y} =</td>
    )
  }
}

