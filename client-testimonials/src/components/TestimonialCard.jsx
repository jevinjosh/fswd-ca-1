import React from "react";

const TestimonialsCard=({customerName,reviewText})=>{
    return(
        <div style={{border:"10px solid #ddd",padding:"10px",borderRadius:"8px",margin:"10px"}}>
       <h1>{customerName}</h1>
       <p>{reviewText}</p>
        </div>
    )
}

export default TestimonialsCard;