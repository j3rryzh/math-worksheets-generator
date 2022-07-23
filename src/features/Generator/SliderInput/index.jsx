import { Slider } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux'

export default function SliderInput(props) {
  const { id } = props;
  const dispatch = useDispatch()

  const onChange = (value) => {
    console.log('onChange: ', value, '@', id)
    switch (id) {
      case 'additionX':
        dispatch({ type: 'additionConfig/setX', payload: value })
        break;
      case 'additionY':
        dispatch({ type: 'additionConfig/setY', payload: value })
        break;
      case 'subtractionX':
        dispatch({ type: 'subtractionConfig/setX', payload: value })
        break;
      case 'subtractionY':
        dispatch({ type: 'subtractionConfig/setY', payload: value })
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
        max={99}
        defaultValue={[0, 9]}
        onChange={onChange}
      />
    </>
  )
}

