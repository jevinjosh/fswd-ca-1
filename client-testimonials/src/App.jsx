import React from "react";
import TestimonialsCard from "./components/TestimonialCard";

function App(){
  return(
    <div>
      <h1>Client Testimonials</h1>
      <TestimonialsCard customerName="abishek" reviewText="This service was amazing! Higly recomended"/>
      <TestimonialsCard customerName="sharon" reviewText="Very helpfull to acheive"/>
    </div>
  )
}
export default App;