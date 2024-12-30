import React from 'react'
import PropsDemo1 from './PropsDemo1'

export default function Welcome() {
  return (
    <div>
      <h1>Passing props to another component</h1>
      <PropsDemo1 msg="Passing properties, welcome to react props" />

    </div>
  )
}
