import React, { useState } from "react"
import styled from 'styled-components'
import { Colors } from "../../themes/colors.ts";

const PillButton = ({ text,
  onClick,
  active }:
  {
    text: string,
    active: boolean,
    onClick?: (event: any) => any
  }) => {

  const onClickHandler = async (e: any) => {
    e.preventDefault();
    await onClick(e);
  }
  return (
    <PillButtonTag active={active} onClick={onClickHandler} >
      {text}
    </PillButtonTag>
  )
}

export default PillButton;

const PillButtonTag = styled.button<{ active: boolean }>(({ active }) => ({
  ...(active ? {
    background: Colors.lightGrey(),
    color: Colors.white(),
  } : {
    backgroundColor: Colors.darkBlue(),
    color: Colors.lightGrey(),
  }),
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  border: "transparent",
  cursor: "pointer",
  transition: "all 0.75s ease-in-out",
  "&:hover": {
    backgroundColor: Colors.orange(),
    color: Colors.white(),
  }
}));
