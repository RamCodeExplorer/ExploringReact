import React from "react";

export default function PropsReceiveObject({ data }) {
  console.log(data);
  return (
    <div>
      <h2>PropsReceiveObject </h2>

      <div>
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <p>Name: {value.name}</p>
            <p>Age: {value.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
