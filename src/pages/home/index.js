import React, { Component } from 'react'

import Navbar from './../../organisms/navbar/';
import Slider from './../../organisms/slider';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
      </div>
    )
  }
}
