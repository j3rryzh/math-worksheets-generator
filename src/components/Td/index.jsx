import React from 'react'
import { addiction, subtraction } from './math_operations'
import './index.css'

// class Td extends React.Component {
//     render() {
//         const { operation } = this.props
//         const addictionSettings = {
//             x: { min: 0, max: 10 },
//             y: { min: 0, max: 10 },
//             carrying: false
//         }
//         const subtractionSettings = {
//             x: { min: 0, max: 10 },
//             y: { min: 0, max: 10 },
//             borrowing: false
//         }
//         if (operation === 'addiction') {
//             const { x, y } = addiction(addictionSettings);
//             return (
//                 <td>{x} + {y} =</td>
//             )
//         }
//         if (operation === 'subtraction') {
//             const { x, y } = subtraction();
//             return (
//                 <td>{x} - {y} =</td>
//             )
//         }
//     }
// }

export default function Td(props) {
  const { operation } = props
  const addictionSettings = {
    x: { min: 1, max: 9999 },
    y: { min: 20, max: 199 },
    carrying: false
  }
  const subtractionSettings = {
    x: { min: 0, max: 199 },
    y: { min: 0, max: 199 },
    borrowing: false
  }
  if (operation === 'addiction') {
    const { x, y } = addiction(addictionSettings);
    return (
      <td>{x} + {y} =</td>
    )
  }
  if (operation === 'subtraction') {
    const { x, y } = subtraction(subtractionSettings);
    return (
      <td>{x} - {y} =</td>
    )
  }
}

