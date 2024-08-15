import React from 'react'
import { ButtonContainer } from './styles'

function ButtonSearch({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
      Search
    </ButtonContainer>
  )
}

export default ButtonSearch;
