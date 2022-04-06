import React from "react";
import styled from 'styled-components'
import { Colors } from "../../themes/colors.ts";
import useMediaQuery from "../../hooks/useMediaQuery.tsx";

interface IStyledCard {
  color?: string,
  mediaQuery?: boolean,
}
interface ICard {
  children: JSX.Element,
  color?: string
}
const Card = ({ color, children }: ICard) => {
  const matches = useMediaQuery('(max-width: 425px)');

  return (
    <StyledCard color={color} mediaQuery={matches}>
      {children}
    </StyledCard >
  )
}

const StyledCard = styled.div<IStyledCard>(({ color, mediaQuery }) => ({
  boxShadow: `5px 4px 5px 0px  ${Colors.white()}`,
  borderRadius: "15px",
  ...(color ? {
    backgroundColor: color,
  } :
    {
      backgroundColor: Colors.darkBlue(),
    }),
  ...(mediaQuery ? {
    width: "320px",
    height: "420px",
  } :
    {
      width: "375px",
      height: "420px",
    }),

}))
export default Card;
