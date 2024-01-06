
import React, { Fragment } from "react";
import { useState } from "react";
function App() {

  const [title, setTitle] = useState("Chandan")


  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}> update the 1st title only</button>
      <Header title={title}></Header>
      <Header title="Chandan2"></Header>
      <Header title="Chandan3"></Header>
      <Header title="Chandan4"></Header>
      <Header title="Chandan4"></Header>
      <Header title="Chandan5"></Header>
    </div>
  )
}
function HeaderWithButton() {
  s
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
