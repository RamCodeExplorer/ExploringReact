import React from 'react'

export default function PropsDemo1(props) {
    const {msg} = props;
    console.log(props);
    console.log(msg);
  return (
    <div>

    <h1>Welcome to react props demo1</h1>
       <p>{msg}</p>
    </div>
  )
}
