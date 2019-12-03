import React, { useState } from "react";

export default function FizzForm() {
  const [number, setNumber] = useState('');
  return (
    <div>
      <h1>FizzBuzz!!</h1>
      <input type="number" id="fizzBuzz" name="fizzBuzz" />
    </div>
  );
}

