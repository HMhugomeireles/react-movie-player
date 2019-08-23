import React, { Component } from 'react'

import { H1 } from '../../atoms/h1/h1';

import { LogoDiv } from './styled';

export default class Logo extends Component {
  render() {
    return (
      <LogoDiv>
        <H1 
          text={this.props.text} 
        />
        <H1 
          textColor={this.props.textColorStyle}
          text={this.props.textColor} 
        />
      </LogoDiv>
    )
  }
}
