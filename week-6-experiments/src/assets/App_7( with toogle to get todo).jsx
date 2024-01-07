
// life cycle functions useEffect will be the first life cycle event
// when life cycle event mounts ( first time it get rendered run only once )
// in functional app it is useeffect in class based also there is similar watch kirat video week 6
// in main .jsc if react.strict mode is on then in developpment the render happens twise and that does not happen in build
import { useEffect, useState } from "react"

function App() {

  const [todos, setTodos] = useState([]);
  const [b_click, setB_click] = useState(false)


  // use Effect will mount the first time and gets all todo from the server once every refresh will do a fetch
  // hook on to backend connection event


  function updateTodo() {
    setB_click((prevBclick) => !prevBclick); // Logical Not Operation
  }

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => { // it has to be async functions
        const json = await res.json();
        setTodos(json.todos);
      })
  }, [b_click]) // useEffect end

  return <div>
    <CardWrapper_old innerComponent={<TextComponent_1 />} />
    <CardWrapper>
      <TextComponent />
    </CardWrapper>
    <CardWrapper>
      <CardWrapper>
        <div>Hello inside wrapper of a wrapper</div>
      </CardWrapper>
    </CardWrapper>
    <CardWrapper>
      <button onClick={updateTodo}>Click me to get todo</button>
    </CardWrapper>
    <CardWrapper>
      {todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </CardWrapper>


  </div>
}



// 1 ------------------------
function CardWrapper_old({ innerComponent }) {
  // create div which has a border and inside div render the prop
  return <div style={{ border: "2px solid grey", padding: 20, margin: 10 }}>
    {innerComponent}
  </ div>
}
function TextComponent_1() {
  return <div> Hi there this is bad type of using props for wrapper</div>
}
//2 send the children 
function CardWrapper({ children }) {
  // create div which has a border and inside div render the prop
  return <div style={{ border: "2px solid purple", padding: 20, margin: 10 }}>
    {children}
  </ div>
}

function TextComponent() {
  return <div> This is good way to wrap using children sending down </div>
}
//3 todo app from server
function Todo({ title, description }) {
  return <div>
    <h2>{title}</h2>
    <h5>{description}</h5>
  </div>
}

export default App