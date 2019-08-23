import React, { useState } from 'react'

import { SliderDiv, ListUl } from './styled'

import {CategoriesMock} from './../../service/servicemock/categories'

export default function Slider() { 
  const [categories, setCategories] = useState(CategoriesMock);
  const listItems = categories.category.map((item) => <li>{item.name}</li>);

  return (
    <SliderDiv>
      <ListUl>
        {listItems}
      </ListUl>
    </SliderDiv>
  )
}
