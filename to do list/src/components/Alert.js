import React from 'react'

export default function Alert(props) {
  const capital=(word)=>{
    let l=word.toLowerCase()
    return l.charAt(0).toUpperCase()+l.slice(1)
  }
  return (
      props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
  <b>{capital(props.alert.type)}</b> : {props.alert.msg} 
</div>
  )
}
