import React, { Component } from 'react'
// import Setting from './components/Setting'
import Worksheet from './components/Worksheet'
import Settings from './components/Settings'
import css from './App.module.css'

export default class App extends Component {
    render() {
        return (
            <div className={css.container}>
                <Settings />
                <div style={{ height: "50%", width: "100%" }}><Worksheet /></div>
                <div style={{ height: "50%", width: "100%" }}><Worksheet /></div>
            </div>
        )
    }
}