import React, { useState } from "react";
import RatingForm from "./rating.tsx";
import Thankyou from "./thankyou.tsx";
const RatingComponentContainer = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [errorMsg, setErrorMsg] = useState("")

  const handleRatingChange = (e: any) => {
    setRating(Number(e.target.innerText));
  }

  const handlesubmit = () => {
    if (rating !== 0) {
      setFormSubmitted(true);
    } else {
      setErrorMsg("Please rate us first :)")
    }
  }

  return (
    !formSubmitted ?
      <RatingForm handleSubmit={handlesubmit} rating={rating} error={errorMsg} handleRatingChange={handleRatingChange} />
      : <Thankyou rating={rating} />
  )
}

export default RatingComponentContainer;
