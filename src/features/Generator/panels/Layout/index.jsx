import React from 'react'
import Switch from '../../inputs/Switch'
import { useSelector } from 'react-redux'

export default function Layout() {
  const { vertical } = useSelector(state => state.displayConfig)
  return (
    <>
      <h4>Show as Vertical</h4>
      <Switch id="displayVertical" checked={vertical} />
    </>
  )
}
