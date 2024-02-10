import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}
// react-hookforms = > formik
function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
    <EvenCountRenderer2 />
  </div>
}



function EvenCountRenderer() {
  const count = useRecoilValue(countAtom); // pick and choose what is needed for the compoenent
  // not optimal use selector
  return <div>
    {(count % 2 == 0) ? "1- It is EVEN" : "1- Its is ODD"}
  </div>
}


function EvenCountRenderer2() {
  const isEven = useRecoilValue(evenSelector); // pick and choose what is needed for the compoenent

  return <div>
    {isEven ? "2- It is EVEN" : "2- Its is ODD"}
  </div>
}

function Buttons() {
  // const [ count,setCount] = useRecoilState(countAtom); this will rerender the whole button not req
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App