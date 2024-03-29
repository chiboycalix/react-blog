import React from 'react';
import './Button.scss';

export default function Button(props) {
  return (
      <button
        className={props.className}
        onClick={props.onClick}
        value={props.value}
        disabled={props.disabled}
        style={props.style}
      >
      {props.children}
      </button>
  )
}
