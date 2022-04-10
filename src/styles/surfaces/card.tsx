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
  borderRadius: "20px",
  ...(color ? {
    backgroundColor: color,
  } :
    {
      backgroundColor: Colors.darkBlue(),
    }),
  ...(mediaQuery ? {
    width: "300px",
    height: "400px",
  } :
    {
      width: "375px",
      height: "400px",

    }),

}))
export default Card;
