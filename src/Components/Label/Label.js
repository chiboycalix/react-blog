import React from 'react';
import './Label.scss';

export default function Label(props) {
  return (
    <label
      style={props.style}
    >
      {props.children}
    </label>
  )
}
