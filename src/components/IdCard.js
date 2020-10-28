import React from 'react'

function IdCard(props) {

return (

  <div className = "box">
  
    <div>
      <img src={props.picture} alt="p"></img>
    </div>
    <div>
    <br></br><strong>First name</strong>:{props.firstName}
      <br></br><strong>Last name</strong>:{props.lastName}
      <br></br><strong>Gender</strong>:{props.gender}
      <br></br><strong>Height</strong>:{props.height}
      <br></br><strong>Birth</strong>:{props.birth}
    </div>
  </div>
)
}

export default IdCard;