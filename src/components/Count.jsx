import React, {useState} from 'react'

const Count = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  }

  const countDown = () => {
    setCount(count - 1);
  }
  return (
    <>
      <h1>カウントの機能</h1>
      <p>現在のカウント：{count}</p>
      <button onClick={() => countUp()}>+</button>
      <button onClick={() => countDown()}>-</button>
    </>
  )
}

export default Count
