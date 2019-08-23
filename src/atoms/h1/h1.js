import React from 'react'

export const H1 = (props) => {
  const style = props.textColor !== undefined ? props.textColor : "#fff" ;
  return (
    <h1 
      style={{color: style }}
    >{props.text}</h1>
  )
};