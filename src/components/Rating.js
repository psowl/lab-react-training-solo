import React from 'react';

function Rating (props) {
const number = Math.round(props.children)
const stars = {
  0 : "☆☆☆☆☆",
  1 : "★☆☆☆☆", 
  2 : "★★☆☆☆",
  3 : "★★★☆☆",
  4 : "★★★★☆",
  5 : "★★★★★"
}
  return(
    <div className ="rating">

      {stars[number]} 
      
    </div>
  )
}

export default Rating;