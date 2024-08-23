import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice'

function App() {

  const {counter} = useSelector( state => state.counter) //Toma el valor que esta en el store state.counter.{counter: 10}
  const dispatch = useDispatch() //Ya sabe las acciones que tiene 
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}> 
          {/* //Se despacha la funcion que quiere que se haga */}
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}> 
          {/* //Se despacha la funcion que quiere que se haga */}
          Decrement
        </button>
        <button onClick={() => dispatch(incrementBy(2))}> 
          {/* //Se despacha la funcion que quiere que se haga */}
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App
