import React from 'react'
import Propsreceivearray from './Propsreceivearray'

export default function PropsPassArray() {
    const propsarray = ["welcome", "good morning", "thank you"];
  return (
    <div>
        <h2>Props pass array</h2>
         <Propsreceivearray propsarray={propsarray} />
    </div>
  )
}
