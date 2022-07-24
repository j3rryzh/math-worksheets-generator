import React, { useState } from 'react'
import SliderInput from '../../inputs/Slider';
import SwitchInput from '../../inputs/Switch';
import { useSelector } from 'react-redux'

export default function SubtractionPanel() {
  const [numbers, setNumbers] = useState({ x: [0, 9], y: [0, 9] });
  const { x: [xMin, xMax], y: [yMin, yMax] } = numbers;

  const { borrowing } = useSelector(state => state.subtractionConfig)
  const updateImmediately = (value, id) => {
    switch (id) {
      case 'subtractionX':
        setNumbers({ ...numbers, x: value })
        break;
      case 'subtractionY':
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
      <SliderInput id="subtractionX" updateImmediately={updateImmediately} />
      <h4>Second Number</h4>
      <span>from {yMin} to {yMax}</span>
      <SliderInput id="subtractionY" updateImmediately={updateImmediately} max={xMax} />
      <h4>Borrowing</h4>
      <SwitchInput id="subtractionBorrowing" checked={borrowing} />
    </>
  )
}
