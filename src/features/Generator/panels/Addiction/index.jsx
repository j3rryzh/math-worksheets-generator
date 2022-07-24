import React, { useState } from 'react'
import Slider from '../../inputs/Slider';
import Switch from '../../inputs/Switch';
import { useSelector } from 'react-redux'

export default function AdditionPanel() {
  const [numbers, setNumbers] = useState({ x: [0, 9], y: [0, 9] });
  const { x: [xMin, xMax], y: [yMin, yMax] } = numbers;
  const { carrying } = useSelector(state => state.additionConfig)
  const updateImmediately = (value, id) => {
    switch (id) {
      case 'additionX':
        setNumbers({ ...numbers, x: value })
        break;
      case 'additionY':
        setNumbers({ ...numbers, y: value })
        break;
      default:
        break;
    }
  }
  return (
    <>
      <h4>First Number</h4>
      <span>from {xMin} to {xMax}</span>
      <Slider id="additionX" updateImmediately={updateImmediately} max={carrying ? 99 : 100 - yMax} />
      <h4>Second Number</h4>
      <span>from {yMin} to {yMax}</span>
      <Slider id="additionY" updateImmediately={updateImmediately} max={carrying ? 99 : 100 - xMax} />
      <h4>Carrying</h4>
      <Switch id="additionCarrying" checked={carrying} />
    </>
  )
}
