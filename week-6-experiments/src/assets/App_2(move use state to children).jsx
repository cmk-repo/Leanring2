
import React from "react";
import { useState } from "react";

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="A"></Header>
      <Header title="B"></Header>
      <Header title="C"></Header>
      <Header title="D"></Header>
      <Header title="E"></Header>
    </div>
  )
}

function HeaderWithButton() {
  // we can push the state variable downwards 
  const [title, setTitle] = useState("Alphabet")
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  return <>
    <button onClick={updateTitle}> update the 1st title only</button>
    <Header title={title}></Header>
  </>
}

function Header({ title }) {
  return <div>
    {title}
  </div>
}
// function Header(props) {
//   return <div>
//     {props.title}
//   </div>
// }


export default App
