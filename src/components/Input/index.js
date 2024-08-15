import React from "react";
import { InputContainer } from './styles'

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} placeholder="e.g: github/repository"/>
    </InputContainer>
  );
}

export default Input;
