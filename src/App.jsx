import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Users from './Users'



const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
        </div>
      </section>


      <Suspense fallback={<h5>Loading ..........</h5>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
    </>
  )
}

export default App
