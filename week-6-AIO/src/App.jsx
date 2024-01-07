import React, { memo, useCallback, useEffect, useState } from "react";
import axios from "axios";

// 1 ------------------------
function CardWrapper_old({ innerComponent }) {
  // create div which has a border and inside div render the prop
  return <div style={{ border: "2px solid grey", padding: 20, margin: 10 }}>{innerComponent}</div>;
}

function TextComponent_1() {
  return <div> Hi there this is bad type of using props for the wrapper</div>;
}

//2 send the children 
function CardWrapper({ children }) {
  // create div which has a border and inside div render the prop
  return <div style={{ border: "2px solid purple", padding: 20, margin: 10 }}>{children}</div>;
}

function TextComponent() {
  return <div> This is a good way to wrap by sending children as prop </div>;
}

//3 todo app from server
function Todo({ title, description }) {
  return (
    <div>
      <h5>title:- {title}, desc:- {description}</h5>
    </div>
  );
}

// Custom Hook
function useChandanHook({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((response) => {
      setTodo(response.data.todo);
    });
  }, [id]);

  return todo;
}

function SingleTodo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(response => {
        setTodo(response.data.todo);
      })
  }, [id]);

  return (
    <div>
      <h5> Selected Todo ID: {id} </h5>
      <h5>{todo.title}</h5>
      <h5>{todo.description}</h5>
    </div>
  );
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("child re-rendered");
  return (
    <div>
      <h5>Component with memo. Check in the console if this prints when you get todo.</h5>
    </div>
  );
});

const ButtonComponent2 = ({ inputFunction2 }) => {
  console.log("child re-render not using memo");
  return (
    <div>
      <h5>Component without memo</h5>
    </div>
  );
};

function SingleTodo1({ id }) {
  const chandanTodo = useChandanHook({ id });

  return (
    <div>
      <h5> Selected Todo ID: {chandanTodo.id} </h5>
      <h5>{chandanTodo.title}</h5>
      <h5>{chandanTodo.description}</h5>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [b_click, setB_click] = useState(false);
  const [selectedID, setSelectedId] = useState(1);
  const [selectedID_1, setSelectedId_1] = useState(1);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, [b_click]);

  const updateTodo = useCallback(() => {
    setB_click((prevBclick) => !prevBclick);
  }, []);

  const inputFunction = useCallback(() => {
    console.log("Hi ");
  }, []);

  const inputFunction2 = useCallback(() => {
    console.log("Hi ");
  }, []);

  return (
    <div>
      <CardWrapper_old innerComponent={<TextComponent_1 />} />
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
      <CardWrapper>
        <ButtonComponent2 inputFunction2={inputFunction2} />
      </CardWrapper>
      <CardWrapper>
        <ButtonComponent inputFunction={inputFunction} />
      </CardWrapper>
      <CardWrapper>
        <div>Hello inside wrapper of a wrapper</div>
      </CardWrapper>
      <CardWrapper>
        {[1, 2, 3].map((value) => (
          <button key={value} onClick={() => setSelectedId(value)}>
            {value}
          </button>
        ))}
        <CardWrapper>
          <SingleTodo id={selectedID} />
        </CardWrapper>
      </CardWrapper>

      <CardWrapper>
        {[4, 5, 6].map((value) => (
          <button key={value} onClick={() => setSelectedId_1(value)}>
            {value}
          </button>
        ))}
        <CardWrapper>
          <SingleTodo1 id={selectedID_1}>using custom hook method</SingleTodo1>
        </CardWrapper>
      </CardWrapper>

      <CardWrapper>
        <button onClick={updateTodo}>Click me to get todo</button>
      </CardWrapper>

      <CardWrapper>
        {todos.map((todo) => (
          <Todo key={todo.id} title={todo.title} description={todo.description} />
        ))}
      </CardWrapper>
    </div>
  );
}

export default App;
