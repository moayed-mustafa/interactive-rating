import React from "react";
import styled from "styled-components"
import PillButton from "../styles/buttons/pill-tag.tsx";
import Button from "../styles/buttons/button-tag.tsx";
import Card from "../styles/surfaces/card.tsx";
import { Colors } from "../themes/colors.ts";
import StarIcon from "../resources/icon-star.svg"
import { H2, P } from "../styles/typography/typography.ts"
import { strings } from "../utility/strings";
const RatingForm = ({ rating, handleSubmit, handleRatingChange, error }: {
  handleSubmit: (arg0: any) => any,
  handleRatingChange: (arg0: any) => any,
  rating: number,
  error?: string
}) => {
  const pillsData: number[] = [1, 2, 3, 4, 5];
  return (
    <Card color={Colors.darkBlue()
    } >
      <RatingCardLayout>
        <IconContainer>
          <IconImage src={StarIcon} />
        </IconContainer>
        <H2> {strings.header}</H2>
        <P secondary>{strings.paragraph}</P>
        <PillsContainer>
          {pillsData.map((item, idx) => (
            <PillButton
              text={item}
              key={item}
              active={rating === idx + 1}
              onClick={handleRatingChange} />
          ))}
        </PillsContainer>
        <Button text={strings.submit} onClick={handleSubmit}></Button>
        {error &&
          <ErrorContainer >
            <P tertiary>{error}</P>
          </ErrorContainer >}
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
  background: Colors.veryDarkBlue(),
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
const ErrorContainer = styled.div({
  background: Colors.darkBlue(),
  width: "100%",
  borderRadius: "10px",
  textAlign: "center",
  padding: "12px 0 0 0",
})

export default RatingForm;
