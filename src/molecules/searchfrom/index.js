import React, { Component } from 'react'

import { H1 } from './../../atoms/h1/h1';

import { SearchDiv } from './styled'

export default class SearchFrom extends Component {
  render() {
    return (
      <SearchDiv>
        <form>
          <input type="text" placeholder="Search movies"/>
          <button type="submit" >Search</button>
        </form>
      </SearchDiv>
    )
  }
}
