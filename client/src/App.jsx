import React from 'react'
import { io } from 'socket.io-client'
const socket = io.connect("http://localhost:3000")//  creates a socket connection to the server running at the specified link

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Hello</h1>
    </div>
  )
}

export default App