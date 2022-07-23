import React from 'react'
import Generator from './features/Generator'
import Worksheet from './features/Worksheet'
import css from './App.module.css'


export default function App() {
  return (
    <div className={css.appContainer}>
      <Generator />
      <div className={css.worksheetContent}>
        <Worksheet />
        <Worksheet />
      </div>
    </div>
  )
}
