import React from "react";
import PropsReceiveObject from "./PropsReceiveObject";

const myObject = {
    item1: { name: "John", age: 30 },
    item2: { name: "Jane", id: 101, age: 25 },
    item3: { name: "Alice", age: 22 },
  };
export default function PropsPassObject() {
    const filteredObject = Object.entries(myObject)
    .filter(([key, value]) => !value.id) // Exclude properties with `id`
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
    
  return (
    <div>
      <h3>PropsPassObject</h3>
      <PropsReceiveObject data={filteredObject} />;

    </div>
  );
}
