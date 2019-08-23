import React, { Component } from 'react'

import { H1 } from './../../atoms/h1/h1';

import { SearchDiv } from './styled'

export default class SearchFrom extends Component {
  render() {
    return (
      <SearchDiv>
        <H1 text={this.props.text} />
      </SearchDiv>
    )
  }
}
