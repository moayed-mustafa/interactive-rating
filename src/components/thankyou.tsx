import React from "react";
import { H2, P } from "../styles/typography/typography.ts"
import styled from "styled-components"
import Card from "../styles/surfaces/card.tsx";
import ThankYouImg from "../resources/illustration-thank-you.svg"
import { Colors } from "../themes/colors.ts";
import { strings } from "../utility/strings";

const ThankYou = ({ rating }) => {
  return (
    <Card color={Colors.darkBlue()}>
      <ThankYouCardLayout>
        <img src={ThankYouImg}></img>
        <ThankYouContainer>
          <P tertiary>{`You selected ${rating} out of 5`}</P>
        </ThankYouContainer>
        <H2> {strings.thankyou}</H2>
        <P secondary>{strings.thankYouParagraph}</P>
      </ThankYouCardLayout>
    </Card>
  )
}

const ThankYouCardLayout = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr",
  padding: "16px",
  gridTemplateRows: "repeat(4,1fr)",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  boxSizing: "border-box",
  height: "100%",
  position: "relative",
});
const ThankYouContainer = styled.div({
  background: Colors.mediumGrey(),
  width: "55%",
  borderRadius: "50px",
  padding: "12px 8px 0 8px",
  opacity: "0.8",

})
export default ThankYou;
