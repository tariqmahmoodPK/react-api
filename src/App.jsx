// remote data request - delay
// async programming (await, async)

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    // 4 steps: api call - await to get data - transform data - set in state
    const res = await fetch("https://jsonplaceholder.typicode.com/todos"); // connect
    const data = await res.json(); // download
    setTodos(data);
  };

  const getUsers = () => {
    // 4 steps: api call - await to get data - transform data - set in state
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setTodos(data))
  };

  const getPosts = () => {
    // 4 steps: api call - await to get data - transform data - set in state
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setTodos(data))
  };

  const getComments = () => {
    // 4 steps: api call - await to get data - transform data - set in state
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data => setTodos(data))
  };

  const getAlbums = () => {
    // 4 steps: api call - await to get data - transform data - set in state
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => setTodos(data))
  };

  return (
    <div className="container mt-5">
      <h2>Todos List</h2>
      <button className="btn btn-primary" onClick={loadTodos}>
        Load Todos
      </button>
      <button className="btn btn-primary" onClick={getUsers}>
        Get Users
      </button>
      <button className="btn btn-primary" onClick={getPosts}>
        Get Posts
      </button>
      <button className="btn btn-primary" onClick={getComments}>
        Get Comments
      </button>
      <button className="btn btn-primary" onClick={getAlbums}>
        Get Albums
      </button>
      <br/>
      {todos.length > 0 ? (
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}> {todo.title} </li>
          ))}
        </ol>
      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default App;




// import todos from './data/todos.json';

// function App(){
//   console.log(todos);

//   return(
//     <div className='container mt-5'>
//     <h2>Todos List</h2>
//     <ol>
//     {todos.map(todo => <li key={todo.id}> {todo.title} </li>)}
//     </ol>
//     </div>
//   )
// }

// export default App;

// // https://github.com/public-apis/public-apis
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
