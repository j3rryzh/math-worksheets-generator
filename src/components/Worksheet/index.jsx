import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import Tr from '../Tr'
import './index.css'

export default class Worksheet extends Component {
  render() {
    return (
      // Create a table with 4 rows of addition and 6 rows of subtraction
      <table>
        <tbody>
          {[...Array(4).keys()].map(i => <Tr key={nanoid()} operation='addiction' />)}
        </tbody>
        <tbody>
          {[...Array(6).keys()].map(i => <Tr key={nanoid()} operation='subtraction' />)}
        </tbody>
      </table>
    )
  }
}
