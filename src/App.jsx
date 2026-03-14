import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Users from './Users'



const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

// Than use ES6 Async
// const fetchUsers = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

function App() {
  // Then ES6 Use
  // const usersPromise = fetchUsers();


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


      {/* Then ES6 Use
      <Suspense fallback={<h5>Loading ..........</h5>}>
        <Users usersPromise={usersPromise}></Users>
      </Suspense> */}

    </>
  )
}

export default App
