import React, { useState } from "react";

function Example() {
  // decalres a state called email and corresponding function setEmail to set this state.
  const [email, setEmail] = useState("");

  return (
    <>
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>Hello {email}</p>
    </>
  );
}
export default Example;
