import React, { useState } from "react";
import RatingForm from "./rating.tsx";
import Thankyou from "./thankyou.tsx";
const RatingComponentContainer = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRatingChange = (e: any) => {
    setRating(Number(e.target.innerText));
  }

  const handlesubmit = () => {
    setFormSubmitted(true);
  }

  return (
    !formSubmitted ?
      <RatingForm handleSubmit={handlesubmit} rating={rating} handleRatingChange={handleRatingChange} />
      : <Thankyou rating={rating} />
  )
}

export default RatingComponentContainer;
