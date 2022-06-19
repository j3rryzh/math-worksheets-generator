import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import Td from '../Td'

export default class Tr extends Component {
    render() {
        const { operation } = this.props
        return (
            // Create a row with 5 data cells
            <tr>
                {[...Array(5).keys()].map(i => {
                    return <Td  key={nanoid()} operation={operation} />
                })}
            </tr>
        )
    }
}