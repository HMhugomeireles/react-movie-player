import React, { Component } from 'react'

import {CardItem} from './styled'


export default class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <li>
        <CardItem>
          <div>
            <img src={this.props.img} alt="" />
          </div>
          <div>
            {this.props.name}
          </div>
        </CardItem>
      </li>
    )
  }
}
