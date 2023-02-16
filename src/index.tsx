import React from 'react'
import * as ReactDOM from 'react-dom/client'
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'

export const sum = (a: number, b: number): number => a + b

export const App = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a sample React app using TypeScript. This was built with help of ChatGPT!</p>
      <p>The sum of 2 and 3 is {sum(2, 3)}</p>
    </div>
  )
}

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.createRoot(root).render(<App />)
}