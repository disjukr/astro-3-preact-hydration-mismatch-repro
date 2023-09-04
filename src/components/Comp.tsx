import { useState } from "preact/hooks";

const isClient = typeof window !== "undefined";

export default function () {
  const [flip, setFlip] = useState(true);
  return (
    <div>
      <span class={isClient && flip ? "client" : "server"}>a</span>
      <button onClick={() => setFlip(!flip)}>flip</button>
    </div>
  );
}
