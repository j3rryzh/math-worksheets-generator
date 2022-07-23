import React from 'react'
import SliderInput from '../SliderInput';
import SwitchInput from '../SwitchInput';
import { useSelector } from 'react-redux'

export default function SubtractionPanel() {
  const { x: [xMin, xMax], y: [yMin, yMax], borrowing } = useSelector(state => state.subtractionConfig)
  return (
    <>
      <h4>First Number</h4>
      <span>from {xMin} to {xMax}</span>
      <SliderInput id="subtractionX" />
      <h4>Second Number</h4>
      <span>from {yMin} to {yMax}</span>
      <SliderInput id="subtractionY" />
      <h4>Borrowing</h4>
      <SwitchInput id="subtractionBorrowing" checked={borrowing} />
    </>
  )
}
