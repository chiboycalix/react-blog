import React from 'react';
import './Input.scss';

export default function Input(props) {
  return (
    <input 
      onChange={props.onChange}
      type={props.type}
      value={props.value}
    />
  )
}
