import React, { Component } from 'react'
import { addiction, subtraction } from './math_operations'
import './index.css'

export default class Td extends Component {
    render() {
        const { operation } = this.props
        if (operation === 'addiction') {
            const [a, b] = addiction();
            return (
                <td>{a} + {b} =</td>
            )
        }
        const [a, b] = subtraction();
        return (
            <td>{a} - {b} =</td>
        )
    }
}
