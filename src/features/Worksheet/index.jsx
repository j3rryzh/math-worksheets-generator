import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import Row from './Row'
import './index.css'

export default class Worksheet extends Component {
  render() {
    return (
      // Create a table with 5 rows of addition and 5 rows of subtraction
      <table>
        <tbody>
          {[...Array(5).keys()].map(i => <Row key={nanoid()} operation='addiction' />)}
        </tbody>
        <tbody>
          {[...Array(5).keys()].map(i => <Row key={nanoid()} operation='subtraction' />)}
        </tbody>
      </table>
    )
  }
}
