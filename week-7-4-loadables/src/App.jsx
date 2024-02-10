
import './App.css'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={0} />
  </RecoilRoot>
}

function Todo({ id }) {
  // googole suspense error boundy api 
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  if (todo.state === "loading") { // wait for the state of the request resolve 
    return <div>loading.....cam show MUI skeleton</div>
  } else if (todo.state === "hasValue") {
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )
  }
  else if (todo.state === "hasError") {
    return (
      <>Error
        {todo.state}
      </>

    )
  }
}

export default App
