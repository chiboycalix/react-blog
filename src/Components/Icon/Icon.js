import React from 'react'

 const Icon = (props) => {
  return (
    <i className={"ion-md-"+props.name} size={props.size}></i>
  )
}
export default Icon;