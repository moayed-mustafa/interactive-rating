import React from "react";
import { H2 } from "../styles/typography/typography.ts"

// just create the styles for this :)
const ThankYou = ({ rating }) => {
  console.log(rating)
  return (
    <H2 >{`You chose ${rating} out of 5`}</H2>
  )
}

export default ThankYou;
