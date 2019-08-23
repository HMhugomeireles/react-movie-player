import React, { useState } from 'react'

import { SliderDiv, ListUl } from './styled'

import {CategoriesMock} from './../../service/servicemock/categories'
import Card from './../../molecules/card'

export default function Slider() { 
  const [categories, setCategories] = useState(CategoriesMock);
  const listItems = categories.category.map((item) => <Card key={item.id + item.name}  name={item.name} img={item.img} />);

  return (
    <SliderDiv>
      <ListUl>
        {listItems}
      </ListUl>
    </SliderDiv>
  )
}
