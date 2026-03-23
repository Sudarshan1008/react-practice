import { useState } from 'react'

import Counter from './01-useState/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter />
    </>
  );
}
export default App
