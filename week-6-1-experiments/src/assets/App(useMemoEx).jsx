import { useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  // when we click on counter button the whole expensive operation reruns again for no reason
  // so we do not want to use it like this 
  // we can get around by adding useEffect with dependancy on inputvalue but there is a problem of rerendering
  // but we can wrap around with useMemo 
  // let count = 0;
  // for (let i = 1; i <= inputValue; i++) {
  //   count = count + i;
  // }
  // useMemo will make it not rerender whole application 

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    console.log("inside useMemo") // this wont print when we click on counter button
    return finalCount;
  }, [inputValue])

  return <div>
    <input onChange={function (e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

export default App;