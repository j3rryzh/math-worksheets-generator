import React from 'react'
import Settings from './components/Settings'
import Worksheet from './components/Worksheet'
import css from './App.module.css'


export default function App() {
  return (
    <div className={css.app_container}>
      <Settings />
      <div className={css.worksheet_content}>
        <Worksheet />
        <Worksheet />
      </div>
    </div>
  )
}
