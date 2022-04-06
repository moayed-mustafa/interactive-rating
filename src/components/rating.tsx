import React from "react";
import styled from "styled-components"
import PillButton from "../styles/buttons/pill-tag.tsx";
import Button from "../styles/buttons/button-tag.tsx";
import Card from "../styles/surfaces/card.tsx";
import { Colors } from "../themes/colors.ts";
import StarIcon from "../resources/icon-star.svg"
import { H2, P } from "../styles/typography/typography.ts"
const RatingComponent = () => {

  const pillsData: number[] = [1, 2, 3, 4, 5]
  return (
    <Card color={Colors.veryDarkBlue()}>
      <RatingCardLayout>
        <IconContainer>
          <IconImage src={StarIcon} />
        </IconContainer>
        <H2>
          How Did We do?
        </H2>
        <P secondary>
          Please let us know how we did
          with your support request.
          All feedback is appreciated to
          help us improve our offering!
        </P>
        <PillsContainer>
          {pillsData.map((item, idx) => (
            <PillButton text={item} key={idx} ></PillButton>
          ))}
        </PillsContainer>
        <Button text="SUBMIT"></Button>
      </RatingCardLayout>
    </Card >
  )
}

const RatingCardLayout = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr",
  padding: "16px",
  gridTemplateRows: "repeat(5,1fr)",
  alignItems: "center",
  justifyContent: "start",
  boxSizing: "border-box",
  height: "100%",
  position: "relative"

});

const IconContainer = styled.div({
  background: Colors.darkBlue(),
  borderRadius: "50px",
  zIndex: 1,
  width: "50px",
  height: "50px",
})
const IconImage = styled.img({
  margin: "33%"
})
const PillsContainer = styled.div({
  display: "flex",
  alignItems: "space-between",
  justifyContent: "space-between",
  flexWrap: "nowrap",
})

export default RatingComponent;
