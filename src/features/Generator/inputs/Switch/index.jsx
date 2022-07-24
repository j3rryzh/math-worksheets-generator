import { Switch } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { updateCarrying } from '../../slices/additionSlice'
import { updateBorrowing } from '../../slices/subtractionSlice'
import { vertical } from '../../slices/displaySlice'

export default function SwitchInput(props) {
  const { id, checked } = props
  const dispatch = useDispatch()
  const onChange = (checked) => {
    switch (id) {
      case 'additionCarrying':
        dispatch(updateCarrying(checked))
        break
      case 'subtractionBorrowing':
        dispatch(updateBorrowing(checked))
        break
      case 'displayVertical':
        dispatch(vertical(checked))
        break
      default:
        break
    }
  }

  return (
    <Switch size="small" onChange={onChange} checked={checked} />
  )
}
