import React from 'react';

function CreditCard (props) {
  let cardType;
  if (props.type === "Visa") {
      cardType = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/524px-Old_Visa_Logo.png"
  } else {
      cardType = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.png"
  }

  let cardNumber = ".... .... .... " + props.number.substr(-4)
  
  let expirationMonth;
  if (props.expirationMonth < 10) {
      expirationMonth = "0" + props.expirationMonth;
  } else {
      expirationMonth = props.expirationMonth
  }

  let expirationYear = props.expirationYear.toString().substr(2);

  return (
    <div className = "box creditCardBox" style={{backgroundColor:`${props.bgColor}`, color:`${props.color}`}}>
      <div className = "creditType">
      <img src ={cardType} style = {{"width":"30px"}} alt = "creditcardimg"/>
      </div>
      <div className ="cardNumber">
      {cardNumber}
      </div>
      <div className="cardDate">
      <p>Expire {expirationMonth}/{expirationYear} {props.bank} </p>
      </div>
      <div className ="cardOwner">
      <p> {props.owner}</p>
      </div>

    </div>
  )
}

export default CreditCard;