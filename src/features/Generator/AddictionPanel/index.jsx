import React from 'react'
import SliderInput from '../SliderInput';
import SwitchInput from '../SwitchInput';
import { useSelector } from 'react-redux'

export default function AdditionPanel() {
  const { x: [xMin, xMax], y: [yMin, yMax], carrying } = useSelector(state => state.additionConfig)
  return (
    <>
      <h4>First Number</h4>
      <span>from {xMin} to {xMax}</span>
      <SliderInput id="additionX" />
      <h4>Second Number</h4>
      <span>from {yMin} to {yMax}</span>
      <SliderInput id="additionY" />
      <h4>Carrying</h4>
      <SwitchInput id="additionCarrying" checked={carrying} />
    </>
  )
}
