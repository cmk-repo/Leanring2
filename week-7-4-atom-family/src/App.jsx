
import './App.css'
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react'

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={4} />

    <UpdaterTest />
  </RecoilRoot>
}

function UpdaterTest() {
  const updateTodo = useSetRecoilState(todosAtomFamily(2));
  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: "2",
        title: "newTodo",
        description: "Hello 2"
      })
    }, 5000)
  }, [])
  return <div> will update 2nd in 5 sec</div>
}
function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
