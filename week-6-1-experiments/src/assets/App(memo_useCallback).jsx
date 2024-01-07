import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0)


  // this function call react does not know difference hene even with memo added react will rereder the 
  // whole page so we modify the function call as useCallBack so where is no prop change no need to rerender
  // function inputFunction() {
  //   console.log("Hi ")
  // }
  // useCallback will give function 
  // useMemo will give back Number or string
  const inputFunction = useCallback(() => {
    console.log("Hi ")
  }, [])
  return <div>
    <ButtonCompoenent inputFunction={inputFunction} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const ButtonCompoenent = memo((inputFunction) => {
  console.log("child render")

  return <div>
    <button>Button clicked</button>
  </div>
})

export default App;