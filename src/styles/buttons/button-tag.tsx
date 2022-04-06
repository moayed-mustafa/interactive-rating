import React from "react"
import styled from 'styled-components'
import { Colors } from "../../themes/colors.ts";

const Button = ({ text }: string) => {
  return (
    <ButtonTag>
      {text}
    </ButtonTag>
  )
}

export default Button;

const ButtonTag = styled.button({
  backgroundColor: Colors.orange(),
  color: Colors.white(),
  borderRadius: "50px",
  width: "100%",
  height: "50%",
  border: "transparent",
  padding: "8px"
});
