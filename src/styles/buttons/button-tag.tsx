import React from "react"
import styled from 'styled-components'
import { Colors } from "../../themes/colors.ts";

const Button = ({ text, onClick }: {
  text: string,
  onClick: () => any
}) => {
  const onClickHandler = async (e: any) => {
    e.preventDefault();
    await onClick();
  }

  return (
    <ButtonTag onClick={onClickHandler}>
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
  padding: "8px",
  cursor: "pointer",
  transition: "all 0.75s ease-in-out",
  "&:hover": {
    background: Colors.white(),
    color: Colors.orange(),
  }
});
