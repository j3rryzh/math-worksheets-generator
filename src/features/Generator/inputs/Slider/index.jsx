import { Slider } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux'
import { updateX as addUpdateX, updateY as addUpdateY } from '../../slices/additionSlice'
import { updateX as subUpdateX, updateY as subUpdateY } from '../../slices/subtractionSlice'


export default function SliderInput(props) {
  const { id, updateImmediately, max } = props;
  const dispatch = useDispatch()

  const onChange = (value) => {
    updateImmediately(value, id)
  }
  const onAfterChange = (value) => {
    switch (id) {
      case 'additionX':
        dispatch(addUpdateX(value))
        break;
      case 'additionY':
        dispatch(addUpdateY(value))
        break;
      case 'subtractionX':
        dispatch(subUpdateX(value))
        break;
      case 'subtractionY':
        dispatch(subUpdateY(value))
        break;
      default:
        break;
    }
  }
  return (
    <>
      <Slider
        range
        step={1}
        max={max}
        defaultValue={[0, 9]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </>
  )
}

