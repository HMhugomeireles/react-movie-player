import React, { Component } from 'react'

import { HeaderNavBar } from './styled'
import Logo from '../../molecules/logo'
import SearchForm from '../../molecules/searchfrom';

export default class Navbar extends Component {
  render() {
    return (
      <HeaderNavBar>
        <Logo 
          text={"Movie"}
          textColor={"Player"}
          textColorStyle={"#0478FF"}
        />
        <SearchForm 
          text={"Search"}
        />
      </HeaderNavBar>
    )
  }
}
