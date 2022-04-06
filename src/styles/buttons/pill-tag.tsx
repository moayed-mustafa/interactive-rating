import React from "react"
import styled from 'styled-components'
import { Colors } from "../../themes/colors.ts";

const PillButton = ({ text }: string) => {
  return (
    <PillButtonTag>
      {text}
    </PillButtonTag>
  )
}

export default PillButton;

const PillButtonTag = styled.button({
  background: Colors.darkBlue(),
  color: Colors.lightGrey(),
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  border: "transparent"
});
