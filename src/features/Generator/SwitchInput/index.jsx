import { Switch } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function SwitchInput(props) {
  const { id, checked } = props;
  const dispatch = useDispatch();
  const onChange = (checked) => {
    switch (id) {
      case 'additionCarrying':
        dispatch({ type: 'additionConfig/setCarrying', payload: checked });
        break;
      case 'subtractionBorrowing':
        dispatch({ type: 'subtractionConfig/setBorrowing', payload: checked });
        break;
      default:
        break;
    }
  };

  return (
    <Switch size="small" onChange={onChange} checked={checked} />
  )
}
