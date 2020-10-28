import React from 'react'

function Greetings (props) {
  
  const object = {
    de:"Hallo",
    en: "Hello",
    es: "Hola",
    fr: 'Bonjour'
}

return (
  <div className = "greetings box">
  {object[props.lang]} 
  {props.children}
  </div>
)
}

export default Greetings;