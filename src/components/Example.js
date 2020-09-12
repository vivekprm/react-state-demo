import React, { useState, useEffect } from "react";

/**
 * Rules of Hooks:
 * 1. Only can be called from React Functional Components or from our own Custom Hook.
 * 2. Hooks must be declared at top level. That means, don’t wrap in if statements, loop,
 *    functions. Instead put the condition or loop inside the hook.
 * 3. React tracks hook call order. This is how react is able to maintain state over time.
 */
function Example() {
  // decalres a state called email and corresponding function setEmail to set this state.
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);

  /**
   * It’s important to pass second parameter to useEffect e.g. in this case count is called
   * dependency array. The effect reruns when any value listed in the dependency array change.
   */
  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  }, [count]);

  return (
    <>
      <input
        class="form-control mr-sm-2"
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>Hello {email}</p>
      <p>You clicked {count} times.</p>
      <button
        class="btn btn-outline-success my-2 my-sm-0"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
    </>
  );
}
export default Example;
