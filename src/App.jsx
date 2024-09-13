import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {



  return (
    <>
      <h1 className='text-3xl font-bold'>Manage Your Todos</h1>
      <AddTodo />
      <div className="flex flex-wrap gap-y-3">
        <div
          className='w-full'>
          <Todos />
        </div>

      </div>
    </>
  )
}

export default App
