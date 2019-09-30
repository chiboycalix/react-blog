import React from 'react'

 const Icon = (props) => {
  return (
    <i className={"ion-"+props.name} style={props.style}></i>
  )
}
export default Icon;