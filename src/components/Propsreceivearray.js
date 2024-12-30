import React from 'react'

export default function Propsreceivearray(props) {
    console.log(props);
    const {propsarray} = props;
  return (
    <div>Propsreceivearray

     <p> {propsarray} </p>


    </div>
  )
}
