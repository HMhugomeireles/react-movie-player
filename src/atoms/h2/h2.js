import React from 'react'

export const H2 = (props) => {
  const style = props.textColor !== undefined ? props.textColor : "#fff" ;
  return (
    <h2 
      style={{color: style }}
    >{props.text}</h2>
  )
};