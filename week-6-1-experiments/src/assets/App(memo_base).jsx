import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0)


  return <div>
    <ButtonCompoenent />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const ButtonCompoenent = memo(() => {
  console.log("child render")

  return <div>
    <button>Button clicked</button>
  </div>
})

export default App;